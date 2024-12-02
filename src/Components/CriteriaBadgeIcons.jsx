import React from "react";

const CriteriaBadgeIcons = ({ priority }) => {
  const badgeColor = {
    Must: "red",
    Should: "yellow",
    Good: "blue",
  };

  return (
    <div className="flex space-x-2">
      {priority && (
        <span className={`badge bg-${badgeColor[priority]}-500`}>
          { `Priority ${priority} `}
        </span>
      )}
      {/* Other badges can be displayed here as needed */}
    </div>
  );
};

export default CriteriaBadgeIcons;
