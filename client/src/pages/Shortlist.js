import React from "react";
import "./Shortlist.css"; 

const Shortlist = () => {
  return (
    <div className="shortlist-container">
      <h1>Shortlisting Process</h1>
      <h3>Instructions</h3>
      <ul>
        <li>Ensure that the criteria you are using exist; if not, add them.</li>
        <li>Review the shortlisted students before clicking "Save." Once saved, changes cannot be made.</li>
      </ul>
    </div>
  );
};

export default Shortlist;
