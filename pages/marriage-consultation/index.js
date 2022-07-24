import React from 'react';
import Link from 'next/link';
import { MainConatainer,CustomButton,NoticeBox,CenterDiv } from '../../components/styledComponents/basicui'
const MarriageApplication = () => {
  return (
    <MainConatainer>
        <NoticeBox color="#DC3545">
            Before Fiiling The Marriage Application Please Read The Notice Below
        </NoticeBox>
        <NoticeBox color="#3AB4F2">
            We Require the documents below before going to fill the application form please keep these things handy
            <ol>
              <li>Aadhar Card Front side photo</li>  
              <li>Hand Written Bio data kind of resume where you will write everything.This document will be readed by the girls
                it must be handwritten
              </li>
              <li>
                We will click your photo while filling the form
              </li>
              <li>
                Any Facebook Insagram Link or any other link to your profile if you have  
              </li>  
            </ol> 
        </NoticeBox>
        <CenterDiv>
          <Link href="/marriage-consultation/form">
            <CustomButton>Apply Now</CustomButton>
          </Link>

        </CenterDiv>
    </MainConatainer>
  )
}

export default MarriageApplication