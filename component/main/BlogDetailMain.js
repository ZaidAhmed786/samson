import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import BlogDetailSection from '../blog/BlogDetailSection'

const BlogDetailMain = () => {
  return (
    <main>
        <BreadcrumbSection title={"Blog Details"}/>
        <BlogDetailSection/>
    </main>
  )
}

export default BlogDetailMain