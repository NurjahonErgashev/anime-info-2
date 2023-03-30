import { useRouter } from "next/router";
import React from "react";

function SearchText() {
  let { query } = useRouter();

  let res = fetch(
    `https://api.jikan.moe/v4/anime?q=${
      query.searchText
    }&limit=10000`
  ).then((data) => data.json());
  let data = res;
  console.log(data);

  console.log(query);
  return <div></div>;
}

export default SearchText;
