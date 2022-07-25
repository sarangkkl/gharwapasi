import React from 'react';
import { BlogState } from '../../context';

import BlogListingOuter from './BlogListingOuter';


const BlogWrapper = () => {

  return (
    <BlogState>
        <BlogListingOuter/>
    </BlogState>
  )
}

export default BlogWrapper