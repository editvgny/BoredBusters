import React from 'react';
import StyledFavButton from "../../styledComponents/StyledFavButton";
import {FaCheck} from 'react-icons/fa';
import axios from 'axios';


function CompletedButton(props) {

    const updateCompleted = () => {
        const newValue = props.activity.completed === 1 ? 0 : 1;
        props.activity.completed = newValue
        const complete = {
            activityId: props.activity.id,
            value: newValue,
        }
        // console.log(props.activity)
        axios.put('http://127.0.0.1:8000/api/complete', complete)
            .then((response) => {
                // props.setFavorites([]);
                // console.log(props.activity.completed)
                props.setCompleted(props.activity.id, props.activity.completed)
            })
    }
    console.log(props.activity.completed)

    return (
        <StyledFavButton style={{marginRight: "auto", marginLeft: "auto", minHeight: "50px"}} onClick={updateCompleted}>
            {(props.activity.completed === 1) ?
                <div id="thumbs-up" style={{color: "red"}}><FaCheck style={{height: "40px", width: "40px"}}/></div>
                : <div><FaCheck style={{height: "40px", width: "40px"}}/></div>}
        </StyledFavButton>
    );
}

export default CompletedButton;