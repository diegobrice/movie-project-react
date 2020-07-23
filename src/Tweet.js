import React from "react";

function Tweet(props) {
  return (
    <div className="row my-3">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Card title by <span className="text-muted">{props.name}</span>
            </h5>
            <p className="card-text">{props.message}</p>
            <a href="#" className="btn btn-primary text-white">
              {props.likes}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
