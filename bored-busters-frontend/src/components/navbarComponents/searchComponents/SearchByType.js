import React, { useState } from "react";
import axios from "axios";
import StyledGetButton from "../../styledComponents/StyledGetButton";
import StyledActivityContainer from "../../styledComponents/StyledActivityContainer";
import StyledSelectContainer from "../../styledComponents/StyledSelectContainer";
import ActivityCardDetails from "../../ActivityCardDetails";
import FavoriteButton from "./FavoriteButton"



export default function SearchByType() {
  const types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

  const [activityByType, setActivityByType] = useState([]);
  const [activityType, setType] = useState("");

  const getActivityByType = () => {
    axios
      .get(`http://www.boredapi.com/api/activity?type=${activityType}`)
      .then((response) => setActivityByType(response.data));
  };


  return (
    <StyledActivityContainer>
      <StyledSelectContainer>Activity types:
          <select className="option" onChange={e => setType(e.target.value)}>
          <option value="">all</option>
          {types.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </StyledSelectContainer>

      <StyledGetButton style={{ marginRight: "auto", marginLeft: "auto", minHeight: "50px" }} onClick={getActivityByType}>
        Give me an activity!
      </StyledGetButton>

      {activityByType.length !== 0 && (
        activityByType.activity ? (
          <React.Fragment>
            <FavoriteButton activity={activityByType} setActivity={setActivityByType}/>
            <ActivityCardDetails activity={activityByType} />
          </React.Fragment>
        ) : (<div>No activity was found!</div>)
      )}

    </StyledActivityContainer>
  );
}
