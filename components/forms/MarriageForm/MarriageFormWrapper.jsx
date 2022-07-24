import React from 'react'
import { ApplyGharwapasiState } from '../../../context';
import MarriageForm  from './MarriageForm'
const MarriageFormWrapper = () => {
  return (
    <ApplyGharwapasiState>
        <MarriageForm/>
    </ApplyGharwapasiState>
  )
}

export default MarriageFormWrapper