import React from 'react';
import { MainConatainer, } from '../components';
import { PreviewBox } from '../styles/containers'

const Error = () => {
  return (
    <MainConatainer>
        <PreviewBox>
            <h3>Some Error Occur or you IP IS NOT ACCEPTED FOR FORM SUBMISSION</h3>
        </PreviewBox>
    </MainConatainer>
  )
}

export default Error