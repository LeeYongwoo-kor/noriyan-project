import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinBeamSweat } from "@fortawesome/free-solid-svg-icons/faFaceGrinBeamSweat";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center w-full h-screen font-poppins">
      <div className="flex flex-col items-center justify-center w-full sm:w-2/3">
        <div className="mb-7 text-main">
          <FontAwesomeIcon size="9x" icon={faFaceGrinBeamSweat} />
        </div>
        <h1 className="mb-5 text-2xl font-semibold sm:text-4xl">
          Oops... Page not found.
        </h1>
        <div className="text-lg text-white sm:text-xl">
          <Link
            href="/"
            className="box-border flex items-center justify-center px-4 py-2 w-52 sm:w-60 rounded-xl bg-main hover:bg-highlight"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
