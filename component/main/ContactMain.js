import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ContactAreaSection from '../contact/ContactAreaSection'

const ContactMain = () => {
  return (
    <main>
        <BreadcrumbSection title={"Contact Us"}/>
        <ContactAreaSection/>
    </main>
  )
}

export default ContactMain