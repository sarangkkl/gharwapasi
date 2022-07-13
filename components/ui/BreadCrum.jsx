import React from "react";
import Link from "next/link";

const BreadCrum = (props) => {
  return (
    <div className="my-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {props.previosArray.map((item,index)=>(
                <li className="breadcrumb-item" key={index}>
                    <Link href={`/${item.path}`}>{item.label}</Link>
                </li>
            ))}
          <li className="breadcrumb-item active" aria-current="page">
            {props.activeLink}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrum;
