import React, { useRef } from "react";
import styles from "./index.module.scss";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/router";

function Header() {
  let input = useRef();
  let router = useRouter();

  function handleSubmit() {
    router.push(`/search/${input.current.value}`);
  }

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <Input
          ref={input}
          type="search"
          placeholder="Enter anime name"
          className={styles.input}
        />
      </form>
      <div>
        <i class="fa-solid fa-gear"></i>
      </div>
    </div>
  );
}
export default Header;
