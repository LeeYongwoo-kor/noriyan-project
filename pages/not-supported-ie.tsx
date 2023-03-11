import { faInternetExplorer } from "@fortawesome/free-brands-svg-icons/faInternetExplorer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NotSupportedIE() {
  return (
    <div className="flex items-center justify-center w-full h-screen font-poppins">
      <div className="flex flex-col items-center justify-center w-full text-left sm:w-2/3">
        <div className="mb-7 text-main">
          <FontAwesomeIcon size="9x" icon={faInternetExplorer} />
        </div>
        <h1 className="mb-5 text-2xl font-semibold sm:text-4xl">
          I&apos;m Sorry...
        </h1>
        <div className="space-y-2 font-medium font-murecho">
          <h2>
            当サイトは「Internet Explorer」でのご閲覧をサポートしておりません。
          </h2>
          <h3>
            ご閲覧の際は、以下いずれかのブラウザをご利用いただけますよう、お願いいたします。
          </h3>
          <ul className="pt-3 indent-2">
            <li>- Google Chrome</li>
            <li>- Mozilla Firefox</li>
            <li>- Microsoft Edge</li>
            <li>- Opera</li>
            <li>- Brave</li>
            <li>- Apple Safari</li>
            <li>- Mobile for Andorid</li>
            <li>- Mobild for IOS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
