import React from 'react'

const HeaderTop = () => {
  return (
    <div className="header-top">
        <div className="row justify-content-between">
            <div className="col-md-6">
                <span className="header-top-address">
                    <i className="fal fa-map-marker-alt"></i> 3060 E College Ave # 138, Ruskin, FL 33570
                </span>
            </div>

            <div className="col-md-6">
                <div className="header-top-contact">
                    <span className="header-top-conatact__phone">
                        <a href="tel:+1(888)636-0385"><i className="fal fa-phone-alt"></i> +1 (888) 636-0385</a>
                    </span>

                    <span className="header-top-conatact__email">
                        <a href="mailto:admin@zolara.live"><i className="fal fa-envelope"></i> admin@zolara.live</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop