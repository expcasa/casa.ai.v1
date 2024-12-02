import React, { useState } from "react";
import { CriteriaNavbar } from "../Components/CriteriaNavbar";
import { ButtonGroupVariants } from "../Components/CriteriaIcons";
import CriteriaMain from "../Components/CriteriaMain";

function Criteria() {
  const [searchText, setSearchText] = useState("");

 
  return (
    <>
      <CriteriaNavbar onSearchChange={setSearchText} />

      <div className="criteriaPage">
        <ButtonGroupVariants />
        <CriteriaMain searchText={searchText} />
      </div>
    </>
  );
}

export default Criteria;