/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Search = ({
  className,
  overlapGroupClassName,
  frameClassName,
  unionClassName,
  union = "/img/union.svg",
}) => {
  return (
    <div className={`search ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className={`frame ${frameClassName}`}>
          <div className="text-wrapper">search...</div>
        </div>
        <img className={`union ${unionClassName}`} alt="Union" src={union} />
      </div>
    </div>
  );
};

Search.propTypes = {
  union: PropTypes.string,
};
