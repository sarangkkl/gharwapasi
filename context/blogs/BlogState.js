import BlogContext from "./blogContext";
import { useState } from 'react';

const BlogState = (props) => {
    const [blogs, setBlogs] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [blogPerPage, setBlogPerPage] = useState(6);
    return(
        <BlogContext.Provider value={{
            blogs,
            setBlogs,
            currentPage,
            setCurrentPage,
            totalPages,
            setTotalPages,
            blogPerPage,
            setBlogPerPage
        }}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState;