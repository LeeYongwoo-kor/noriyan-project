import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
  return (
    <div className="flex items-center justify-center text-main">
      <FontAwesomeIcon className="fas fa-spin" size="3x" icon={faCircleNotch} />
      <span className="ml-2 font-medium">Loading...</span>
    </div>
  );
}
