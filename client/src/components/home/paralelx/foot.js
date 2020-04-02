import React from 'react';
import {Link} from 'react-router-dom'
import "./foot.css"
function LabdorWork() {
  return (
    <div className="lbwork-container">
      <div className="lbwork-container2">

        <p className="lbwork-heading">HOW LABDOOR WORKS</p>
        <h2 className="lbwork-h2">
          More science, less marketing.
       </h2>
        <div className="lbwork-p">
        While both are common terms in the fashion industry, a fashion line refers exclusively to all of the clothing a fashion designer produces for a specific category within her fashion company, while a collection refers to a seasonal 
        production of different styles within a line for that same company.
       </div>
        <span className="lbwork-learn-more">
          <Link to="/details">Learn more</Link>
       </span>
      </div>
    </div>
  );
}

export default LabdorWork;
