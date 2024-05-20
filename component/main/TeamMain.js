import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import TeamAreaSection from '../team/TeamAreaSection'

const TeamMain = () => {
  return (
    <main>
        <BreadcrumbSection title={"Team"}/>
        <TeamAreaSection/>
    </main>
  )
}

export default TeamMain