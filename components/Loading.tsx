import { faCircleNotch } from "@fortawesome/free-solid-svg-icons/faCircleNotch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center text-main">
      <FontAwesomeIcon className="fas fa-spin" size="3x" icon={faCircleNotch} />
      <span className="ml-2 font-medium">Loading...</span>
    </div>
  );
}

export default React.memo(Loading);
