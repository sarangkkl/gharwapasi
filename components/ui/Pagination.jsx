import React from "react";
import { PaginationContainer,PaginationItem } from './ComponentStyle';
import { Pagination,Stack } from '../../assets'
const PaginationWrapper = ({total}) => {
  return (
    <Stack>
      <Pagination count={10} color="secondary" />
    </Stack>
  );
};

export default PaginationWrapper;
