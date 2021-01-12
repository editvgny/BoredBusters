import React, { useState, useContext } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./SlidebarElements";
import { SlideValueContext } from "../../contextComponents/SlideValueContext";

const SearchByCost = () => {
  const [contextValues, setContextValues] = useContext(SlideValueContext);
  const sliderStyle = {
    position: "relative",
    width: "65%",
  };

  const [domain] = useState([0, 10000]);
  const [values, setValues] = useState([0, 10000]);
  const reversed = false;

  const onChange = (values) => {
    setValues(values);
    setContextValues({ min: values[0], max: values[1] });
  };

  return (
    <div style={{ height: 50, width: "100%", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
      <Slider
        mode={2}
        step={1000}
        domain={domain}
        reversed={reversed}
        rootStyle={sliderStyle}
        onChange={onChange}
        values={values}
      >
        <Rail>
          {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map((handle) => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={domain}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        <Ticks count={10}>
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map((tick) => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </Slider>
    </div>
  );
};

export default SearchByCost;
