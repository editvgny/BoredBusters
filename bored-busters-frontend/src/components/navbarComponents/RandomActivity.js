import React, {useState} from "react";
import axios from "axios";
import StyledGetButton from "../styledComponents/StyledGetButton";
import StyledActivityContainer from "../styledComponents/StyledActivityContainer";
import ActivityCardDetails from "../ActivityCardDetails";
import FavoriteButton from "./searchComponents/FavoriteButton"


export default function RandomActivity() {
    const [randomActivity, setRandomActivity] = useState([]);

    const getRandomActivity = () => {
        axios.get("http://www.boredapi.com/api/activity/")
            .then((response) => setRandomActivity(response.data));
    }

    return randomActivity.length !== 0 ? (
        <StyledActivityContainer>
            <StyledGetButton style={{marginRight: "auto", marginLeft: "auto", minHeight: "50px"}}
                             onClick={getRandomActivity}>
                Give me a random activity!
            </StyledGetButton>
            <FavoriteButton activity={randomActivity} setActivity={setRandomActivity}/>
            <ActivityCardDetails activity={randomActivity}/>

        </StyledActivityContainer>
    ) : (
        <StyledActivityContainer>
            <StyledGetButton
                style={{marginRight: "auto", marginLeft: "auto", minHeight: "50px"}}
                onClick={getRandomActivity}>
                Give me a random activity!
            </StyledGetButton>
        </StyledActivityContainer>
    );
}