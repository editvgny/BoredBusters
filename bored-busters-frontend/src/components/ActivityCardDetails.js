import React from "react";
import { FaDollarSign } from "react-icons/fa";


export default function ActivityCardDetails(props) {
    const { activity, type, participants, price, link } = props.activity;

    const createPriceSign = (price) => {
        if (price <= 0.1) {
            return <React.Fragment>
                <FaDollarSign style={{color: 'red'}}/>
                <FaDollarSign/>
                <FaDollarSign/>
                    </React.Fragment>
        } else if (price > 0.1 && price <= 0.3) {
            return <React.Fragment>
                <FaDollarSign style={{color: 'red'}}/>
                <FaDollarSign style={{color: 'red'}}/>
                <FaDollarSign/>
            </React.Fragment>
        } else {
            return <React.Fragment>
                <FaDollarSign style={{color: 'red'}}/>
                <FaDollarSign style={{color: 'red'}}/>
                <FaDollarSign style={{color: 'red'}}/>
            </React.Fragment>
        }
    }

    return (
        <div className="details">

            <div style={{ fontSize: "35px", height: "100px", textAlign: "center" }}>{activity}</div>

            <div>Type: {type}</div>

            <div>Number of participants:{participants}</div>

            <div> Price: {createPriceSign(price)}</div>

            {link ? (
                <div>
                    <a href={link} target="_blank" rel="noopener noreferrer">Click here for more information</a>{" "}
                </div>
            ) : ("")}
        </div >
    )
}