import React, { createContext, useState } from "react";

export const SlideValueContext = createContext([]);

export function SlideValueContextProvider(props) {
  const [inputValues, setInputValues] = useState({ min: 0, max: 10000 });
  return (
    <SlideValueContext.Provider value={[inputValues, setInputValues]}>
      {props.children}
    </SlideValueContext.Provider>
  );
}
