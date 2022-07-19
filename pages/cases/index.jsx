import React,{useContext} from "react";
import CaseFilter from "./CaseFilter";
import { getBlogs } from '../../appollo/blog/blog';
import { BlogListing } from '../../templates';
import { BlogContext } from '../../context'
const Cases = ({blogs}) => {

  const a = useContext(BlogContext);
  console.log(a);

  return (
      <BlogListing FilterComp={CaseFilter} items={blogs} type="Case"/>
  );
};

export default Cases;


export const getServerSideProps = async () => {
  const blogs = await getBlogs(2);
  return {
    props: {
      blogs
    }
  }
}