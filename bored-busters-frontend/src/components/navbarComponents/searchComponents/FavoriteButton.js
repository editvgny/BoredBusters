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
                    axios.get("http://127.0.0.1:8000/api/favorite/1")
                        .then((response) => {
                            props.setFavorites(response.data)
                        })
                    }
                )
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