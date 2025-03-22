import { createContext, useState } from "react"
import PropTypes from "prop-types";
export const myContext = createContext();

export default function MyContext({ children }) {
  const [user,setUser]=useState(null)
  const initialState={user,setUser}
  return (
    <myContext.Provider value={initialState}>{children}</myContext.Provider>
  )
}

MyContext.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is validated
};

// it is used to use states in any components