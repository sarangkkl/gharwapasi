import React from 'react';
import { MainConatainer,CustomButton } from '../../../components/styledComponents/basicui';
import { BlogCard } from '../../../components';
import { FlexBox,GridContainer } from '../../../styles/containers';
import { Pagination } from '../../../assets'
import { PaginationWrapper } from './BlogListingStyle';
import Link from 'next/link';

const BlogListing = ({FilterComp,items,type}) => {
  return (
    <MainConatainer>
        <FlexBox>
            <FilterComp/>
            <div>
                <FlexBox>
                    <h5>{items.length}  {type} found</h5>
                    {type==="Case" ? <Link href="add-new-case"><CustomButton>Report New Case</CustomButton></Link>:""} 
                </FlexBox>
                <GridContainer>
                    {items.map((item,index)=>(
                        <BlogCard key={index} blog={item}/>
                    ))} 
                </GridContainer>
            </div>
        </FlexBox>
        <PaginationWrapper>
            <Pagination count={10} color="secondary" />
        </PaginationWrapper>
    </MainConatainer>
  )
}

export default BlogListing