import React, { createContext, useContext, useRef } from "react";
const PostContext = createContext();
function PostProvider({ children }) {
  const descript = useRef(null);
  const neonProduct = useRef(null);
  const howOrder = useRef(null);
  const questionBox = useRef(null);
  const info = useRef(null);
  return (
    <PostContext.Provider
      value={{ descript, neonProduct, howOrder, questionBox, info }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePost() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}
export {usePost , PostProvider}
