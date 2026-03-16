import React from "react";
import { Bookmark } from "lucide-react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <img src={props.logo} alt="" />
        <button>
          Save <Bookmark size={14} />
        </button>
      </div>
      <div className="center">
        <div className="compName">
          <h4>{props.company}</h4>
          <span>5 days ago</span>
        </div>
        <h3>{props.position}</h3>
        <div className="job-type">
          <span>{props.jobType}</span>
          <span>{props.jobPostLevel}</span>
        </div>
      </div>
      <hr className="horizontal-rule" />
      <div className="bottom">
        <span>{props.pay}</span>
        <button>Apply now</button>
      </div>
    </div>
  );
}

export default Card;
