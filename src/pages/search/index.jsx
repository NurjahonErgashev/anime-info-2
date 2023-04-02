import { Button, Card, Input, Text } from "@nextui-org/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import styles from "./index.module.scss";
import { api } from "../api/allapi";

function Search({ defData }) {
  let input = useRef();
  let [data, setData] = useState(api?.data.slice(0, 50));

  function handleSubmit(e) {
    e.preventDefault();
    let myData = api.data.filter((anime) =>
      anime.title.toLowerCase().includes(input.current.value.toLowerCase())
    );
    console.log(api.data);
    setData(myData);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-x-4">
        <Input
          shadow
          ref={input}
          type="text"
          name="serachText"
          status="error"
        />
        <Button
          color={"success"}
          size={"xs"}
          css={{
            padding: "20px",
            fontSize: "16px",
          }}
          type="submit"
        >
          Submit
        </Button>
      </form>
      <br />
      <div className={styles.animes}>
        {data?.map((anime) => (
          <Link href={`/all/${anime.mal_id}`}>
            <Card
              title={anime.title}
              css={{
                height: "100%",
                padding: "0px",
              }}
            >
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#ffffffAA"
                >
                  {anime.year}
                </Text>
              </Card.Header>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  width="100%"
                  height="100%"
                  src={anime.images.jpg.image_url}
                  objectFit="cover"
                />
              </Card.Body>
              <Card.Footer
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <h3>{anime.title}</h3>
              </Card.Footer>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let res = await fetch("https://api.jikan.moe/v4/anime?page=1");
  let data = await res.json();
  return {
    props: {
      defData: data,
    },
  };
}
export default Search;
