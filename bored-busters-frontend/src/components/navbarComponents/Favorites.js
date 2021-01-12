import React, { useState, useContext } from 'react';
import { FavoriteContext } from '../../contextComponents/FavoriteContext';
import ActivityCardDetails from "../ActivityCardDetails";
import FavoriteButton from "./searchComponents/FavoriteButton"
import StyledActivityContainerForFavorites from "../styledComponents/StyledActivityContainerForFavorites"
import StyledSelectContainer from "../styledComponents/StyledSelectContainer";
import StyledInputContainer from "../styledComponents/StyledInputContainer";
import StyledGetButton from "../styledComponents/StyledGetButton";
import StyledFavoriteContainer from "../styledComponents/StyledFavoriteContainer";
import StyledFavoriteSearchContainer from "../styledComponents/StyledFavoriteSearchContainer";


import SliderBar from "../slidebarComponents/Sliderbar";
import { SlideValueContext } from "../../contextComponents/SlideValueContext";


export default function Favorites() {


  const [contextValues] = useContext(SlideValueContext);
  const [favorites, setFavorites] = useContext(FavoriteContext);

  const types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
  const [activityType, setType] = useState("");

  const [inputParticipants, setparticipants] = useState("");
  const clearFields = () => {
    setparticipants("");
  };

  const [searchedFavorites, setSearchedFavorites] = useState([]);
  const [postsPerPage] = useState(4);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageOriginals, setCurrentPageOriginals] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfLastPostOriginals = currentPageOriginals * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const indexOfFirstPostOriginals = indexOfLastPostOriginals - postsPerPage;

  const currentPost = searchedFavorites.slice(indexOfFirstPost, indexOfLastPost)
  const originalCurrentPost = favorites.slice(indexOfFirstPostOriginals, indexOfLastPostOriginals)

  const [isFiltered, setIfFiltered] = useState(false);

  const pageNumbers = [];
  const originalPageNumbers = [];

  for (let i = 1; i <= Math.ceil(searchedFavorites.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  for (let i = 1; i <= Math.ceil(favorites.length / postsPerPage); i++) {
    originalPageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const paginateOriginals = (pageNumber) => {
    setCurrentPageOriginals(pageNumber)
  }

  const filterActivities = () => {
    if (activityType !== "" && inputParticipants !== "") {
      setSearchedFavorites(favorites.filter(fav =>
      (fav.price >= contextValues.min / 10000 &&
        fav.price <= contextValues.max / 10000 &&
        fav.type === activityType &&
        String(fav.participants) === String(inputParticipants))
      )
      )
    } else if (inputParticipants !== "") {
      setSearchedFavorites(favorites.filter(fav =>
      (fav.price >= contextValues.min / 10000 &&
        fav.price <= contextValues.max / 10000 &&
        String(fav.participants) === String(inputParticipants))
      )
      )
    } else if (activityType !== "") {
      setSearchedFavorites(favorites.filter(fav =>
      (fav.price >= contextValues.min / 10000 &&
        fav.price <= contextValues.max / 10000 &&
        fav.type === activityType)
      )
      )
    } else {
      setSearchedFavorites(favorites.filter(fav =>
      (fav.price >= contextValues.min / 10000 &&
        fav.price <= contextValues.max / 10000)
      )
      )
    }
    setIfFiltered(true);
  }
  if (currentPost.length === 0 && currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }


  return favorites.length !== 0 ? (
    <StyledFavoriteContainer>
      <StyledFavoriteSearchContainer>
        <StyledSelectContainer>Activity types:
          <select className="option" onChange={e => setType(e.target.value)}>
            <option value="">all</option>
            {types.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </StyledSelectContainer>

        <StyledInputContainer>
          Number of participants:
          <input
            className="input"
            type="text"
            value={inputParticipants}
            placeholder={inputParticipants}
            onChange={(e) => setparticipants(e.target.value)}
            onFocus={clearFields}
          />
        </StyledInputContainer>

        <SliderBar className="slider" />

        <StyledGetButton style={{ margin: "5px auto" }} onClick={filterActivities}>
          Filter my favorites!
        </StyledGetButton>

        {searchedFavorites.length === 0 && isFiltered ? (<div className="no-result">No results were found</div>) : ("")};

      </StyledFavoriteSearchContainer>

      {currentPost.map((fav) => (
        <StyledActivityContainerForFavorites>
          <React.Fragment>
            <FavoriteButton activity={fav} setSearchedFavorites={setSearchedFavorites} />
            <ActivityCardDetails activity={fav} />
          </React.Fragment>
        </StyledActivityContainerForFavorites>)
      )}

      {searchedFavorites.length !== 0 ? (
        <div className="pagination-container">
          {pageNumbers.map(number => (
            <div key={number} onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </div>
          ))}
        </div >
      ) : ("")}

      {!isFiltered ? originalCurrentPost.map((fav) => (
        <StyledActivityContainerForFavorites key={fav.key}>
          <React.Fragment>
            <FavoriteButton activity={fav}
              setFavorites={setFavorites}
              setCurrentPageOriginals={setCurrentPageOriginals}
              currentPageOriginals={currentPageOriginals}
              originalCurrentPost={originalCurrentPost} />
            <ActivityCardDetails activity={fav} />
          </React.Fragment>
        </StyledActivityContainerForFavorites>)
      ) : ("")
      }

      {
        !isFiltered ? (
          <div className="pagination-container">
            {originalPageNumbers.map(number => (
              <div key={number} onClick={() => paginateOriginals(number)} href="#" className="page-link">
                {number}
              </div>
            ))}
          </div >
        ) : ("")
      }

    </StyledFavoriteContainer >
  ) : (
      <StyledActivityContainerForFavorites>
        <div style={{ margin: "auto" }}>There are no favorites yet! <br /><br />
          Start collecting activities...
        </div>
      </StyledActivityContainerForFavorites>)
}
