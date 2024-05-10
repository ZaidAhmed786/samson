import Link from "next/link";
import { IoArrowDownOutline } from "react-icons/io5";

const LanguageDropDown = function () {
  return (
    <>
      <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
        <ul>
          <li>
            <Link href="/" className="dropdown-toggle">
              <span className="active-currency">English</span>
              <span>
                <IoArrowDownOutline />
              </span>
            </Link>
            <ul>
              <li>
                <Link href="/">Arabic</Link>
              </li>

              <li>
                <Link href="/">Chinese</Link>
              </li>
              <li>
                <Link href="/">English</Link>
              </li>
              <li>
                <Link href="/">French</Link>
              </li>
              <li>
                <Link href="/">Hindi</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LanguageDropDown;
