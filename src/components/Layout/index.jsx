import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import styles from "./index.module.scss";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
