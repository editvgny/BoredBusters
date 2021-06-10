import React, {useState} from "react";
import axios from "axios";
import StyledGetButton from "../../styledComponents/StyledGetButton";
import StyledActivityContainer from "../../styledComponents/StyledActivityContainer";
import StyledInputContainer from "../../styledComponents/StyledInputContainer";
import ActivityCardDetails from "../../ActivityCardDetails";
import FavoriteButton from "./FavoriteButton"


export default function SearchByParticipants() {
    const [participantsActivity, setParticipantsActivity] = useState([]);
    const [inputParticipants, setParticipants] = useState([]);

    const getParticipantsActivity = () => {
        axios.get(
                `http://www.boredapi.com/api/activity?participants=${inputParticipants}`
            )
            .then((response) =>
                setParticipantsActivity(response.data)
            );
    };

    const clearFields = () => {
        setParticipants("");
    };

    return participantsActivity.length !== 0 ? (
        <StyledActivityContainer>
            <StyledInputContainer>
                Number of participants:
                <input
                    className="input"
                    type="text"
                    value={inputParticipants}
                    placeholder={inputParticipants}
                    onChange={(e) => setParticipants(e.target.value)}
                    onFocus={clearFields}
                />
            </StyledInputContainer>
            <StyledGetButton
                style={{marginRight: "auto", marginLeft: "auto", minHeight: "50px"}}
                onClick={getParticipantsActivity}
            >
                Give me the activity!
            </StyledGetButton>
            {participantsActivity.activity ? (
                <React.Fragment>
                    <FavoriteButton activity={participantsActivity} setActivity={setParticipantsActivity}/>
                    <ActivityCardDetails activity={participantsActivity}/>
                </React.Fragment>
            ) : (
                <div style={{margin: "20px auto"}}>No activity was found!</div>
            )}
        </StyledActivityContainer>
    ) : (
        <StyledActivityContainer>
            <StyledInputContainer>
                Number of participants:
                <input
                    className="input"
                    type="text"
                    value={inputParticipants}
                    placeholder={inputParticipants}
                    onChange={(e) => setParticipants(e.target.value)}
                    onFocus={clearFields}
                />
            </StyledInputContainer>
            <StyledGetButton
                style={{marginRight: "auto", marginLeft: "auto", minHeight: "50px"}}
                onClick={getParticipantsActivity}
            >
                Give me the activity!
            </StyledGetButton>
        </StyledActivityContainer>
    );
}