import React, { createContext, useState } from "react";
//import axios from 'axios';


export const FavoriteContext = createContext();

export const FavoriteProvider = (props) => {
    const [favorites, setFavorites] = useState([]);

      return (
        <FavoriteContext.Provider value={[favorites, setFavorites]}>
          {props.children}
        </FavoriteContext.Provider>
      );
    };