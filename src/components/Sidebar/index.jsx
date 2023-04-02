import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.scss";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

function Sidebar() {
  let { route } = useRouter();
  let routes = [
    {
      name: "Main",
      path: "/",
    },
    {
      name: "Search",
      path: "/search",
    },
    {
      name: "All",
      path: "/all",
    },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={[styles.logo, "text-center"].join(" ")}>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className={styles.menu}>
        <ul>
          {routes.map((link) => (
            <Link href={link.path}>
              <li className={route == link.path && styles.activeLink}>
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
