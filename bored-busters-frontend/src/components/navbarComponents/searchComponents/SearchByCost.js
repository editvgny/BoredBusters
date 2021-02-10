import React, { useContext, useState } from "react";
import axios from "axios";
import SliderBar from "../../slidebarComponents/Sliderbar";
import StyledGetButton from "../../styledComponents/StyledGetButton";
import StyledActivityContainer from "../../styledComponents/StyledActivityContainer";
import ActivityCardDetails from "../../ActivityCardDetails";
import FavoriteButton from "./FavoriteButton"
import { SlideValueContext } from "../../../contextComponents/SlideValueContext";
import StyledsearchCard from "../../styledComponents/StyledSearchCard";
import StyledSearcCard2 from "../../styledComponents/StyledSearcCard2";
import StyledSearchBox from "../../styledComponents/StyledSearchBox";
import StyledInstruction from "../../styledComponents/StyledInstruction";

export default function SearchByCost() {
  const [contextValues] = useContext(SlideValueContext);
  const [activityData, setActivityData] = useState([]);

  const getActivity = () => {
    const min = contextValues.min / 10000;
    const max = contextValues.max / 10000;
    axios
      .get(
        `http://www.boredapi.com/api/activity?minprice=${min}&maxprice=${max}`
      )
      .then((response) => setActivityData(response.data));
  };

  return activityData.length !== 0 ? (
      <React.Fragment>
      <StyledsearchCard>
          <StyledInstruction>
              Select your price range!
          </StyledInstruction>
          <StyledSearcCard2>
              <SliderBar />
          </StyledSearcCard2>
          <StyledSearchBox>
              <StyledGetButton onClick={getActivity}>
                  Give me an activity!
              </StyledGetButton>
          </StyledSearchBox>
          <StyledActivityContainer style={{ width: "800px" }}>
              {activityData.activity ? (
                  <React.Fragment>
                      <FavoriteButton activity={activityData} setActivity={setActivityData}/>
                      <ActivityCardDetails activity={activityData} />
                  </React.Fragment>
        ) : (
            <div style={{ margin: "0 auto", height: "60px" }} >No activity was found!</div>
          )}
          </StyledActivityContainer>
      </StyledsearchCard>
      </React.Fragment>
  ) : (
      <React.Fragment>
          <StyledsearchCard>
              <StyledInstruction>
                  Select your price range!
              </StyledInstruction>
              <StyledSearcCard2>
                  <SliderBar />
              </StyledSearcCard2>
              <StyledSearchBox>
                  <StyledGetButton onClick={getActivity}>
                      Give me an activity!
                  </StyledGetButton>
              </StyledSearchBox>
          </StyledsearchCard>
      </React.Fragment>

    );
}
