import React from 'react';
import { MainConatainer } from '../../../components/styledComponents/basicui';
import { BlogCard,Pagination } from '../../../components';

const BlogListing = ({FilterComp,items}) => {
  return (
    <MainConatainer>
        <div className="row">
            <div className="col-md-2">
                <FilterComp/>

            </div>
            <div className="col md-10">
                Total Cases : {items.length}
                <div className="row">
                {items.map((item,index)=>(
                    <div className='col-md-4'>
                        <BlogCard key={index} blog={item}/>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <Pagination />
    </MainConatainer>
  )
}

export default BlogListing