import React,{useContext,useEffect} from 'react';
import CaseFilter from "./CaseFilter";
import { getBlogs } from '../../appollo/blog/blog';
import { BlogListing } from '../../templates';
import { BlogContext } from '../../context';
import { Loader } from '../../components'
const BlogListingOuter = ({blogs}) => {

  const a = useContext(BlogContext);
  const {loading} = a;
  useEffect(() => {
    getBlogs().then(res => {
      a.setBlogs(res);
      a.setLoading(false);
    })
  }, [a])
  return (
    <>
      {loading  ? <Loader /> : <BlogListing FilterComp={CaseFilter} items={a.blogs} type="Case"/>}
      
    </>
  )
}

export default BlogListingOuter
