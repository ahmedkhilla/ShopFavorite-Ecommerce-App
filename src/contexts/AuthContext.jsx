import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
  error: false,
  logoutDialog: false,
};

const FAKE_USER = {
  email: "ex@gmail.com",
  password: "12345678",
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: false,
      };
    case "logout":
      return { ...state, user: null, isAuthenticated: false, error: false };
    case "error":
      return { ...state, error: true };
    case "re-error":
      return { ...state, error: false };
    case "logout/open":
      return { ...state, logoutDialog: true };
    case "logout/close":
      return { ...state, logoutDialog: false };
    default:
      throw new Error("Unknown Error");
  }
}

function AuthProvider({ children }) {
  const [{ error, user, isAuthenticated, logoutDialog }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    } else {
      dispatch({ type: "error" });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  function logoutDialogOpen() {
    dispatch({ type: "logout/open" });
    console.log("opened");
  }

  function logoutDialogClose() {
    dispatch({ type: "logout/close" });
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        error,
        logoutDialog,
        logoutDialogOpen,
        logoutDialogClose,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside the AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
