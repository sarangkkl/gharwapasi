import React from "react";
import Link from "next/link";

const BlogCard = ({blog}) => {
  return (
    
    <div className="">
      
      {blog.attributes.image.data ? <img
        src={`http://localhost:1337${blog.attributes.image.data.attributes.url}`}
        className="card-img-top"
        alt={blog.title}
        style={{ height: "300px" }}
      />:""}
      
      <div className="card-body">
        <h5 className="card-title">{blog.attributes.title}</h5>
        <p className="card-text">
          {(blog.attributes.description).substring(0, 200)}
        </p>
        <Link href="/article/this-is-the" className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
