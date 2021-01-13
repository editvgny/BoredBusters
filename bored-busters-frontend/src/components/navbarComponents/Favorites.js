import React, {useEffect, useState} from 'react';
import ActivityCardDetails from "../ActivityCardDetails";
import FavoriteButton from "./searchComponents/FavoriteButton"
import StyledActivityContainerForFavorites from "../styledComponents/StyledActivityContainerForFavorites"
import axios from "axios";
import FavoriteSearch from "./searchComponents/FavoriteSearch";
import CompletedButton from "./searchComponents/CompletedButton";


export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    const pageNumbers = [];
    const [actualPageNumber, setActualPageNumber] = useState(1);
    const postsPerPage = 4;
    const [visibleFavorites, setVisibleFavorites] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/favorite/1")
            .then((response) => {
                setFavorites(response.data)
            })
        setVisibleFavorites(favorites.slice(actualPageNumber * postsPerPage - postsPerPage, actualPageNumber * postsPerPage))
    }, [favorites.length, actualPageNumber])

    for (let i = 1; i <= Math.ceil(favorites.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const refreshVisibleFavorites = (pageNumber) => {
        setActualPageNumber(pageNumber);
        setVisibleFavorites(favorites.slice(actualPageNumber * postsPerPage - postsPerPage, actualPageNumber * postsPerPage))
    }

    const setCompleted = (activityId, newValue) => {
        favorites.filter((fav) => {
            if (fav.id === activityId) {
                fav.completed = newValue;
                // setFavorites([])
            }
        })
    }


    if (favorites.length === 0) {
        return (
            <StyledActivityContainerForFavorites>
                <div style={{margin: "auto"}}>There are no favorites yet! <br/><br/>
                    Start collecting activities...
                </div>
            </StyledActivityContainerForFavorites>
        )
    }

    return (
        <React.Fragment>
            {/* ********** */}
            {/* Search box */}
            <FavoriteSearch visibleFavorites={visibleFavorites}/>

            {/* ************ */}
            {/* Result cards */}
            {visibleFavorites.map((favorite, index) => (
                <StyledActivityContainerForFavorites key={index}>
                    <React.Fragment>
                        <div className="button-holder">
                            <FavoriteButton activity={favorite}
                                            favorites={favorites}
                                            setFavorites={setFavorites}
                                            visibleFavorites={visibleFavorites}
                                            refreshVisibleFavorites={refreshVisibleFavorites}
                                            actualPageNumber={actualPageNumber}/>
                            <CompletedButton activity={favorite} setCompleted={setCompleted}/>
                        </div>
                        <ActivityCardDetails activity={favorite}/>
                    </React.Fragment>
                </StyledActivityContainerForFavorites>)
            )}

            {/* ********** */}
            {/* Pagination */}
            {favorites.length !== 0 ? (
                <div className="pagination-container">
                    {pageNumbers.map(pageNumber => (
                        <div key={pageNumber} onClick={() => refreshVisibleFavorites(pageNumber)}
                             className="page-link">
                            {pageNumber}
                        </div>
                    ))}
                </div>
            ) : ("")}
        </React.Fragment>
    )
}
