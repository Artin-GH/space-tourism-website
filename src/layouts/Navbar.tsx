import Link from "next/link";
import { useState } from "react";
import styles from "../styles/layouts/Navbar.module.css";
import { useRouter } from "next/router";
import { CSSTransition } from "react-transition-group";

const menuItems = [
  { name: "HOME", href: "/" },
  { name: "DESTINATION", href: "/destination" },
  { name: "CREW", href: "/crew" },
  { name: "TECHNOLOGY", href: "/technology" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeUrl = useRouter().pathname;

  return (
    <nav
      className={`text-white ${styles.navbar} flex justify-between items-center nav-font`}
    >
      <figure className={styles.logo}>
        <img src="/images/shared/logo.svg" />
      </figure>
      <hr
        className={`flex-grow ml-14 -mr-7 h-px border-white border-opacity-25
                        ${styles.line} z-20`}
      />
      <CSSTransition
        in={isOpen}
        timeout={{enter: 0, exit: 600}}
        classNames={{
          enter: styles.menuAnimEnter,
          enterDone: styles.menuAnimEnterDone,
          exit: styles.menuAnimExit,
          exitActive: styles.menuAnimExitActive,
        }}
      >
        <ul className={`${styles.menu} flex rounded-l-sm`}>
          {menuItems.map((item, i) => (
            <li className={styles.menuItem} key={i}>
              <Link href={item.href}>
                <a
                  className={`${styles.menuLink} ${
                    activeUrl === item.href ? "active" : ""
                  }`}
                >
                  <span className="number">{i}</span>
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </CSSTransition>
      <CSSTransition
        in={isOpen}
        timeout={0}
        classNames={{
          enter: styles.hamburgerAnimEnter,
          enterDone: styles.hamburgerAnimEnterDone,
          exit: styles.hamburgerAnimExit,
          exitDone: styles.hamburgerAnimExitDone,
        }}
      >
        <button
          type="button"
          className={`${styles.hamburger} z-20`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {[0, 1, 2].map((i) => (
            <div key={i} className={styles.hamburgerLine}></div>
          ))}
        </button>
      </CSSTransition>
    </nav>
  );
};

export default Navbar;
