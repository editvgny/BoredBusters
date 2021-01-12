import React, { useContext } from "react";
import { FavoriteContext } from '../../../contextComponents/FavoriteContext';
import { FaHeart } from 'react-icons/fa';
import StyledFavButton from '../../styledComponents/StyledFavButton';

export default function FavoriteButton(props) {
  const [favorites, setFavorites] = useContext(FavoriteContext);

  const isCollected = (array) =>
    array.map((item) => item.activity).includes(props.activity.activity);

  const removeItem = (array) =>
    array.filter((element) => element.key !== props.activity.key);

  const updateFavorites = () => {
    setFavorites((prevCollection) => {
      if (!isCollected(prevCollection)) {
        return [...prevCollection, props.activity];
      }
      if (props.setCurrentPageOriginals && props.currentPageOriginals > 1 && props.currentPageOriginals.length === 0) {
        props.setCurrentPageOriginals(props.currentPageOriginals - 1);
      }
      return removeItem(prevCollection);
    });

    if (props.setSearchedFavorites) {
      props.setSearchedFavorites((prevCollection) => {
        return removeItem(prevCollection);
      });
    };
  }

  return (
    <StyledFavButton style={{ marginRight: "auto", marginLeft: "auto", minHeight: "50px" }} onClick={updateFavorites}>
      {isCollected(favorites) ?
        <div style={{ color: "red" }}><FaHeart style={{ height: "40px", width: "40px" }} /></div>
        : <div><FaHeart style={{ height: "40px", width: "40px" }} /></div>}
    </StyledFavButton>
  )
}