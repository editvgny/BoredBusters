import React from "react";

export default function ActivityCardDetails(props) {
    const { activity, type, participants, price, link } = props.activity;

    return (
        <div className="details">

            <div style={{ fontSize: "35px", height: "100px", textAlign: "center" }}>{activity}</div>

            <div>Type: {type}</div>

            <div>Number of participants:{participants}</div>

            <div> Price: {price * 10000}</div>

            {link ? (
                <div>
                    <a href={link} target="_blank" rel="noopener noreferrer">Click here for more information</a>{" "}
                </div>
            ) : ("")}
        </div >
    )
}