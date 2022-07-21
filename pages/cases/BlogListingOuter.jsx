import React,{useContext,useState,useEffect} from 'react';
import CaseFilter from "./CaseFilter";
import { getBlogs } from '../../appollo/blog/blog';
import { BlogListing } from '../../templates';
import { BlogContext } from '../../context';
import { Loader } from '../../components'
const BlogListingOuter = () => {

  const a = useContext(BlogContext);
  useEffect(() => {
    getBlogs().then(res => {
      a.setBlogs(res);
      a.setLoading(false);
    })
  }, [a.blogs])
  return (
    <>
      {a.loading ? <Loader /> : <BlogListing FilterComp={CaseFilter} items={a.blogs} type="Case"/>}
    </>
  )
}

export default BlogListingOuter