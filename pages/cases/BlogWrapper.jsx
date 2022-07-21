import React,{useEffect,useState} from 'react';
import { BlogState } from '../../context';
import { BlogListing } from '../../templates';
import CaseFilter from "./CaseFilter";
import BlogListingOuter from './BlogListingOuter';
import { getBlogs } from '../../appollo/blog/blog';
import { Loader } from '../../components';
import Cases from '.';

const BlogWrapper = () => {
  
  

  return (
    <BlogState>
        <BlogListingOuter/>
    </BlogState>
  )
}

export default BlogWrapper