import React, {useState, useEffect} from "react";
import {FaHeart} from 'react-icons/fa';
import StyledFavButton from '../../styledComponents/StyledFavButton';
import axios from "axios";

export default function FavoriteButton(props) {
    const [activity, setActivity] = useState([]);

    useEffect(() => {
        if (props.activity) {
            setActivity(props.activity)
        } else {
            axios.get(`http://127.0.0.1:8000/api/get-activity/${props.activity.activity}`)
                .then((response) => {
                    setActivity(response.data)
                })
        }
    }, [props.activity])

    const updateFavorites = () => {

        if (activity.id) {
            axios.delete(`http://127.0.0.1:8000/api/favorite/${activity.id}`)
                .then((response) => {
                        setActivity([])

                    if (props.setActivity) {
                        props.setActivity([])
                    }
                    if (props.setFavorites) {
                        axios.get("http://127.0.0.1:8000/api/favorite/1")
                            .then((response) => {props.setFavorites(response.data)})
                    }

                    // This section checks if visibleFavorites is empty or not. And if it is it changes
                    // the actualPageNumber and the visibleFavorites too.
                    // -1 is because async calls. When visibleFavorites has one element and we get here it will surely
                    // delete it and it's length will be 0
                    if (props.visibleFavorites && props.visibleFavorites.length-1 === 0) {
                        props.refreshVisibleFavorites(props.actualPageNumber-1)
                    }
                })
        } else {
            axios.post('http://127.0.0.1:8000/api/favorite', activity)
                .then((response) => {
                    setActivity(response.data)
                })
        }
    }

    return (
        <StyledFavButton style={{marginRight: "auto", marginLeft: "auto", minHeight: "50px"}} onClick={updateFavorites}>
            {(activity.id) ?
                <div style={{color: "red"}}><FaHeart style={{height: "40px", width: "40px"}}/></div>
                : <div><FaHeart style={{height: "40px", width: "40px"}}/></div>}
        </StyledFavButton>
    )
}