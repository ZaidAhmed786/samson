import Link from "next/link";
import { LuPhoneCall } from "react-icons/lu";

const HeaderTopInfo = function () {
  return (
    <>
      <div className="ltn__top-bar-menu">
        <ul>
          <li>
            <Link href="tel:+1(225)-523-2569">
              <LuPhoneCall />
              <i></i> +1(225)-523-2569
            </Link>
          </li>
         
        </ul>
      </div>
    </>
  );
};

export default HeaderTopInfo;
