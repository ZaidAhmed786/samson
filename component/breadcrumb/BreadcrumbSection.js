import Link from 'next/link'
import React from 'react'

const BreadcrumbSection = ({title}) => {
  return (
    <div className="ba-breadcrumb-area bg-default ba-breadcrumb-reverce-space has-breadcrumb-overlay breadcrumb-section-area">
        <div className="container style-2">
            <div className="ba-breadcrumb-inner-wrapper pl-40 pt-140 pb-115 pr-40 p-rel">
                <h1 className="ba-breadcrumb-title">{title}</h1>
                <div className="ba-breadcrumb-navs ba-breadcrumb-navs-has-pos">
                    <Link href="/">Home</Link>
                    <span className="current">{title}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BreadcrumbSection