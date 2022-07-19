import React from 'react'

import CaseFilter from "./CaseFilter";
import { getBlogs } from '../../appollo/blog/blog';
import { BlogListing } from '../../templates'
const BlogListingOuter = ({blogs}) => {
  return (
    <BlogListing FilterComp={CaseFilter} items={blogs} type="Case"/>
  )
}

export default BlogListingOuter