import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import BlogArea from '../blog/BlogArea'

const BlogMain = () => {
  return (
    <main>
        <BreadcrumbSection title={"Blog Standard"}/>
        <BlogArea/>
    </main>
  )
}

export default BlogMain