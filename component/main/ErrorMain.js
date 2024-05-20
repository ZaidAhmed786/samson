import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import Link from 'next/link'

const ErrorMain = () => {
  return (
    <main>
    <BreadcrumbSection title={"Error Page"}/>
    <div className="ba-error-area pt-120 pb-120">
        <div className="container">
            <div className="ba-error-inner text-center">
                <div className="ba-error-img pb-60">
                    <img src="assets/img/error/_404_page.png" alt=""/>
                </div>
                <div className="ba-error-link">
                    <Link href="/" className="ba-submit-btn">Go To Home</Link>
                </div>
            </div>
        </div>
    </div>
    </main>
  )
}

export default ErrorMain