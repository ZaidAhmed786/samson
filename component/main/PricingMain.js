import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import PriceSection from '../price/PriceSection'
import MovieSection2 from '../movie/MovieSection2'
import PackageSection2 from '../package/PackageSection2'

const PricingMain = () => {
  return (
    <main>
        <BreadcrumbSection title={"Pricing"}/>
        <PriceSection/>
        <MovieSection2/>
        <PackageSection2/>
    </main>
  )
}

export default PricingMain