import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import MonthlyTabPane from './MonthlyTabPane';
import YearlyTabPane from './YearlyTabPane';

const PriceSection = () => {
  return (
    <div className="pricing-area pt-110 pb-120">
      <div className="container">
        <div className="row pb-60">
          <div className="col-xxl-12">
            <div className="ba-section-title-wrapper text-center">
              <h3 className="ba-section-title ba-has-wrapped-br">
                Choose Your Internet<br /> Pack By Speed
              </h3>
            </div>
          </div>
        </div>
        <div className="row pb-70">
          <div className="col-xxl-12">
            <div className="text-center">
              <div className="d-inline-block">
                  <Tabs defaultActiveKey="monthly" id="nav-tab" className="ba-pricing-box-tab">
                    <Tab eventKey="monthly" title="Monthly">
                      <MonthlyTabPane />
                    </Tab>
                    <Tab eventKey="yearly" title="Yearly">
                      <YearlyTabPane />
                    </Tab>
                  </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
