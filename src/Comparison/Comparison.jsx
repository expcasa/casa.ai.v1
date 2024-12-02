import React, { useState } from 'react';
import { ComparisonNavbar } from '../Components/ComparisonNavbar';
import ComparisonTop from '../Components/ComparisonTop';
import ComparisonMain from '../Components/ComparisonMain';

function Comparison() {
  const [isTotalVisible, setIsTotalVisible] = useState(false);

  return (
    <>
      <ComparisonNavbar />
      <ComparisonTop isTotalVisible={isTotalVisible} setIsTotalVisible={setIsTotalVisible} />
      <ComparisonMain isTotalVisible={isTotalVisible} />
    </>
  );
}

export default Comparison;
