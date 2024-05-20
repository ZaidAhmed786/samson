import React from 'react'
import AboutSection from '../about/AboutSection'
import PackageSection from '../package/PackageSection'
import TvShowSection from '../tv-show/TvShowSection'
import ContactSection from '../contact/ContactSection'
import StatisticSection from '../statistic/StatisticSection'
import TeamSection from '../team/TeamSection'
import MovieSeciton from '../movie/MovieSeciton'
import FaqSection from '../faq/FaqSection'
import NewsletterSection from '../newsletter/NewsletterSection'
import TestimonialSection from '../testimonial/TestimonialSection'
import BlogSection from '../blog/BlogSection'

const IndexMain = () => {
  return (
    <main>
      <TestimonialSection />
      <div>
        <PackageSection />
      </div>
      <ContactSection />
      <FaqSection />
    </main>
  )
}

export default IndexMain