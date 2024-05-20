import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import PackageDetail from "./PackageDetail";

const PackageSection = () => {
  const packageSpeeds = [
    { speed: '400', title: '400 Mbps', image: 'assets/img/icons/package-icon-2.svg' },
    { speed: '500', title: '500 Mbps', image: 'assets/img/icons/package-icon-2.svg' },
    { speed: '600', title: '600 Mbps', image: 'assets/img/icons/package-icon-2.svg' },
    { speed: '700', title: '700 Mbps', image: 'assets/img/icons/package-icon-2.svg' },
    { speed: '800', title: '800 Mbps', image: 'assets/img/icons/package-icon-2.svg' },
    { speed: '900', title: '900 Mbps', image: 'assets/img/icons/package-icon-2.svg' }
  ];

  return (
    <section
      id="package-section"
      className="pt-120 pb-120 bg-default text-center home-package-section"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h2 className="ba-section-title section-title">
              Choose Your Internet <br />Pack By Speed
            </h2>
            <div className="package-section__btns">
              <a href="#" className="custom-btn">
                What speed do I need?
              </a>
              <a href="#" className="custom-btn">
                What is Internet speed?
              </a>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xxl-11">
            <Tabs defaultActiveKey="pills-400" id="pills-tab" className="nav-pills justify-content-center">
              {packageSpeeds.map(packageSpeed => (
                <Tab key={packageSpeed.speed} eventKey={`pills-${packageSpeed.speed}`} title={
                  <div>
                    <img
                      src={packageSpeed.image}
                      alt="network icon"
                      className="package-nav-btn__icon"
                    />
                    <span className="package-nav-btn__title">{packageSpeed.title}</span>
                  </div>
                }>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
