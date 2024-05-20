import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ServiceSection2 from '../service/ServiceSection2'
import ServiceSection3 from '../service/ServiceSection3'
import ServiceSection4 from '../service/ServiceSection4'

const ServiceMain = () => {
  return (
    <main>
        <BreadcrumbSection title={"Service"}/>
        <ServiceSection2/>
        <ServiceSection3/>
        <ServiceSection4/>
    </main>
  )
}

export default ServiceMain