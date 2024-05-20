import React from 'react'

const PackageDetail = ({speed}) => {
  return (
    <div className="package-details">
        <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-7">
            <h5 className="package-details__title">
                Manage Current Plan
            </h5>
            <p className="package-details__txt">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quidem fugit pariatur libero itaque, nisi minus
                doloremque sed iusto a earum?
            </p>

            <div className="package-details__features-container d-flex">
                <div className="single-pack-feature">
                <h6 className="single-pack-feature__title">
                    800 Mbps is good for
                </h6>
                <ul className="single-pack-feature-list">
                    <li>Up to 11 devices</li>
                    <li>Fast downloads</li>
                    <li>HD streaming</li>
                    <li>Multiplayer gaming</li>
                </ul>
                </div>

                <div className="single-pack-feature single-pack-feature--colored">
                <h6 className="single-pack-feature__title">
                    {speed} Mbps is good for
                </h6>
                <ul className="single-pack-feature-list">
                    <li>Up to 11 devices</li>
                    <li>Fast downloads</li>
                    <li>HD streaming</li>
                    <li>Multiplayer gaming</li>
                </ul>
                </div>
            </div>

            <div className="special-offer">
                <img
                src="assets/img/feature-list/feature-list-vertical-2.png"
                alt="xFi"
                className="special-offer__img"
                />
                <div className="special-offer__info">
                <span className="special-offer__title">
                    Add an xFi Gateway at checkout
                </span>
                <span className="special-offer__subtitle">
                    Enjoy a powerful, secure connection.
                </span>
                </div>

                <span className="special-offer__price">$18/mo</span>
            </div>
            </div>

            <div className="col-lg-5">
            <img
                src="assets/img/package/package.jpg"
                alt="people using phone"
                className="package-details__img"
            />
            </div>
        </div>
    </div>
  )
}

export default PackageDetail