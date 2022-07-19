import React from 'react';
import GharwapasiForm from './GharwapasiForm';

import { ApplyGharwapasiState,ApplyGharwapasiContext } from '../../../context'

const GharwapasiFormWrapper = () => {
    
  return (
    <ApplyGharwapasiState>
        <GharwapasiForm />
    </ApplyGharwapasiState>
  )
}

export default GharwapasiFormWrapper