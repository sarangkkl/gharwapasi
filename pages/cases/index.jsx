import React from "react";
import CaseFilter from "./CaseFilter";
import { getBlogs } from '../../appollo/blog/blog';
import { BlogListing } from '../../templates'
const Cases = ({blogs}) => {


  return (
      <BlogListing FilterComp={CaseFilter} items={blogs}/>
  );
};

export default Cases;


export const getServerSideProps = async () => {
  const blogs = await getBlogs();
  return {
    props: {
      blogs
    }
  }
}