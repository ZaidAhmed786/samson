import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import TeamDetailSection from '../team/TeamDetailSection'
import TeamSection from '../team/TeamSection'

const TeamDetailMain = () => {
  return (
    <main>
        <BreadcrumbSection title={"Team Details"}/>
        <TeamDetailSection/>
        <TeamSection/>
    </main>
  )
}

export default TeamDetailMain