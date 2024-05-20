import React from 'react'
import CountUp from 'react-countup'

const StatisticSection = () => {
  return (
    <section id="stats-section" className="bg-default pb-110 home-statistic-section">
        <div className="container">
            <div className="row justify-content-center justify-content-md-between gx-md-4 gx-2">
                <div className="col-md-3 col-sm-4 col-6">
                    <div className="single-stat">
                        <h5 className="single-stat__number"><span className="odometer" data-count="260"><CountUp end={260} duration={5}/></span>k</h5>
                        <span className="single-stat__label">Internet Package</span>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-6">
                    <div className="single-stat">
                        <h5 className="single-stat__number"><span className="odometer" data-count="101"><CountUp end={101} duration={5}/></span>k</h5>
                        <span className="single-stat__label">Satisfaction Clients</span>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-6">
                    <div className="single-stat">
                        <h5 className="single-stat__number"><span className="odometer" data-count="2145"><CountUp end={2145} duration={5}/></span></h5>
                        <span className="single-stat__label">Available Channels</span>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-6">
                    <div className="single-stat">
                        <h5 className="single-stat__number"><span className="odometer" data-count="1300"><CountUp end={1300} duration={5}/></span></h5>
                        <span className="single-stat__label">Projects Completed</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StatisticSection