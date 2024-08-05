import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
  error: false,
  logoutDialog: false,
  snackOpen: false,
  snackMessage: "",
  snackSeverity: "success",
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

    case "snackbar/open":
      return {
        ...state,
        snackOpen: true,
      };
    case "snackbar/close":
      return {
        ...state,
        snackOpen: false,
      };
    case "snackbar/severity":
      return {
        ...state,
        snackSeverity: action.payload,
      };
    case "snackbar/message":
      return {
        ...state,
        snackMessage: action.payload,
      };
    default:
      throw new Error("Unknown Error");
  }
}

function AuthProvider({ children }) {
  const [
    {
      error,
      user,
      isAuthenticated,
      logoutDialog,
      snackOpen,
      snackSeverity,
      snackMessage,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
      dispatch({ type: "snackbar/open" });
      dispatch({ type: "snackbar/severity", payload: "success" });
      dispatch({
        type: "snackbar/message",
        payload: "Your signed in successfuly",
      });
    } else {
      dispatch({ type: "error" });
      dispatch({ type: "snackbar/open" });
      dispatch({ type: "snackbar/severity", payload: "error" });
      dispatch({
        type: "snackbar/message",
        payload: "There is a problem in signing in, please try again later ",
      });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
    dispatch({ type: "snackbar/open" });
    dispatch({ type: "snackbar/severity", payload: "success" });
    dispatch({
      type: "snackbar/message",
      payload: "Your signed out successfuly",
    });
  }

  function logoutDialogOpen() {
    dispatch({ type: "logout/open" });
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
        snackOpen,
        snackSeverity,
        snackMessage,
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
