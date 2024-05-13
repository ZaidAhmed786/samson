import Link from "next/link";
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import { FaPlus, FaAngleDoubleRight } from "react-icons/fa";
import DropDown from "@/components/dropwdown/DropDown"
const MenuList = ({ addListing }) => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <li>
        {" "}
        <Link href="/blog">Blog</Link>{" "}
      </li>

      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact Us</Link>
      </li>
      <li>
       <div style={{marginTop: '20px', marginLeft: '-5vw'}}> <DropDown/></div>
       
      </li>
      {addListing ? (
        <li className="special-link" style={{textAlign: 'center'}}>
          <a href="tel:+12255232569">Call Us <br /> +1(225)-523-2569 </a>
        </li>
      ) : null}
    </ul>
  );
};

export default MenuList;
