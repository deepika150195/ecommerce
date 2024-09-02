// import { createContext, useReducer } from "react";

// export const UserContext = createContext("");

// export function UserProvider({ children }) {
//   const [user, userDispatch] = useReducer(userReducer, initialUser);

//   return (
//     <UserContext.Provider value={{ user, userDispatch }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// function userReducer(user, action) {
//   switch (action.type) {
//     case "dark":
//       theme = "dark";
//       return theme;

//     case "light":
//       theme = "light";
//       return theme;

//     default:
//       return;
//   }
// }

// export const initialUser = {
//     userId: "",
//     userName: "",

// };
