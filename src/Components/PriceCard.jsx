import React from "react";
import Header from "./Header";
import Cardbody from "./CardBody";

const Pricecard = ({ cardtype, price, list }) => {
    return (
        <>
            <div className="card">
                <Header cardtype={cardtype} price={price} />
                <Cardbody list={list} />
            </div>
        </>
    );
};

export default Pricecard;