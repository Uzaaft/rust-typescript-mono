import { Input } from '@mantine/core';
import React from 'react';

function Search() {
  return (
    <div>
      <Input type="search" placeholder="Search..." className="md:w-[100px] lg:w-[300px]" />
    </div>
  );
}

export default Search;
