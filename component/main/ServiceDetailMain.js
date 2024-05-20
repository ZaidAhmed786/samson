import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ServiceDetailContent from '../service/ServiceDetailContent'

const ServiceDetailMain = () => {
  return (
    <main>
        <BreadcrumbSection title={"Service Details"}/>
        <ServiceDetailContent/>
    </main>
  )
}

export default ServiceDetailMain