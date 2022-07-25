import React from "react";
import Link from "next/link";
import { BlogCardContainer,BlogCardDescription } from './BlogCardStyle'
const BlogCard = ({blog}) => {
  return (
    
    <BlogCardContainer>
      
      {blog.attributes.image.data ? <img
        src={`${blog.attributes.image.data.attributes.url}`}
        className="card-img-top"
        alt={blog.title}
        
      />:""}
      
      <BlogCardDescription >
        <h5>{blog.attributes.title}</h5>
        <p>
          {(blog.attributes.description).substring(0, 200)}
        </p>
        <Link href="/article/this-is-the">
          Read More
        </Link>
      </BlogCardDescription>
    </BlogCardContainer>
  );
};

export default BlogCard;
