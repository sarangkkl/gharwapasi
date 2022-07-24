import React,{useContext,useEffect} from 'react';
import CaseFilter from "./CaseFilter";
import { getBlogs } from '../../appollo/blog/blog';
import { BlogListing } from '../../templates';
import { BlogContext } from '../../context';
import { Loader } from '../../components'
const BlogListingOuter = ({blogs}) => {

  const a = useContext(BlogContext);

  useEffect(() => {
    getBlogs().then(res => {
      a.setBlogs(res);
      a.setLoading(false);
    })
  }, [a])
  console.log(blogs)
  return (
    <>
      {a.loading ? <Loader /> : <BlogListing FilterComp={CaseFilter} items={a.blogs} type="Case"/>}
    </>
  )
}

export default BlogListingOuter

// export const getServerSideProps = async () => {
//   const blogs = await getBlogs();
//   return {
//     props: {
//       blogs
//     }
//   }
// }