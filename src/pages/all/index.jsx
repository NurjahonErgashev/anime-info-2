import React from "react";
import styles from "../../styles/all.module.scss";
import { Pagination } from "@nextui-org/react";
function All({ data }) {
  // console.log(data);
  return <div>All page</div>;
}

export let getServerSideProps = async () => {
  let res = await fetch("https://api.jikan.moe/v4/anime?limit=10000");
  let data = await res.json();

  return {
    props: { data },
  };
};

export default All;
