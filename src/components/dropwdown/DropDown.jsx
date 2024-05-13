import Link from 'next/link';
import React, { useState } from 'react';
import styles from "./dropdown.module.css"

const Menu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [head, ...tail] = React.Children.toArray(children);

  return (
    <div
      className={styles.menu}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {head}
      {isOpen && <div className={styles.open}>{tail}</div>}
    </div>
  );
};

const Item = ({ children, onClick }) => {
  return (
    <div className={styles.item} onClick={onClick}>
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div id='root'>
      <Menu>
        <Item >Policies</Item>
        <Item > <Link href="/privacypolicy">Privacy-policy</Link> </Item>
        <Item ><Link href="/termsandCondition">Terms&Condition</Link></Item>
        <Item ><Link href="/disclaimer">Disclaimer</Link></Item>
      </Menu>
    </div>
  );
};

export default App;
