import React from "react";
import {BlogWrapper} from '../../components'
const Cases = () => {

  return (
      <>
        <BlogWrapper/>
      </>
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