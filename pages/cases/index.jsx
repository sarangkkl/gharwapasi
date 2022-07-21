import React,{useContext,useEffect,useState} from "react";
import { getBlogs } from '../../appollo/blog/blog';
import { BlogListing } from '../../templates';
import { BlogContext } from '../../context'
import { Loader } from '../../components';
import CaseFilter from './CaseFilter';
import BlogWrapper from './BlogWrapper'
const Cases = () => {
  

  return (
      <BlogWrapper/>
  );
};

export default Cases;


// export const getServerSideProps = async () => {
//   const blogs = await getBlogs(2);
//   return {
//     props: {
//       blogs
//     }
//   }
// }