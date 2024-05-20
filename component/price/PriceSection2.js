import React from "react";
import MonthlyTabPane from "./MonthlyTabPane";

const PriceSection2 = () => {
  return (
    <section className="pricing-area pb-120">
      <div className="container">
        <div className="row pb-60">
          <div className="col-xxl-12">
            <div className="ba-section-title-wrapper text-center  ba-has-wrapped-br">
              <h3 className="ba-section-title">
                Choose Your Internet
                <br /> Pack By Speed
              </h3>
            </div>
          </div>
        </div>
        <MonthlyTabPane />
      </div>
    </section>
  );
};

export default PriceSection2;
