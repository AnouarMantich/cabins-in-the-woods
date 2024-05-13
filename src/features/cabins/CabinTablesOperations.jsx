import React from "react";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
`;

const CabinTablesOperations = () => {
  return (
    <StyledContainer>
      <Filter
        filterField="filter"
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With discount" },
          { value: "no-discount", label: "No discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          {
            value: "regularPrice-asc",
            label: "Sort by regular Price high first",
          },
          {
            value: "regularPrice-desc",
            label: "Sort by regular Price low first",
          },

          {
            value: "maxCapacity-asc",
            label: "Sort by ma capacity high first",
          },
          {
            value: "regularPrice-desc",
            label: "Sort by max capacity low first",
          },
        ]}
      />
    </StyledContainer>
  );
};

export default CabinTablesOperations;
