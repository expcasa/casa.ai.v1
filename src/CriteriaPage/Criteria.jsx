import React, { useState } from "react";
import { CriteriaNavbar } from "../Components/CriteriaNavbar";
import { ButtonGroupVariants } from "../Components/CriteriaIcons";
import CriteriaMain from "../Components/CriteriaMain";

function Criteria() {
  const [searchText, setSearchText] = useState("");

 
  return (
    <>
      <CriteriaNavbar onSearchChange={setSearchText} />
      <ButtonGroupVariants />
      <CriteriaMain searchText={searchText} />
    </>
  );
}

export default Criteria;