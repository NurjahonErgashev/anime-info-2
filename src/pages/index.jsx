import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { api } from "./api/allapi";
function Home() {
  return (
    <div className="">
      <div className={styles.animes}>
        {api?.data?.map((anime,index) => index <= 25 && (
          <Link href={`/all/${anime.mal_id}`}>
            <Card css={{ w: "100%", h: "400px" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    {anime.year}
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={anime.images.jpg.large_image_url}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  alt="Card example background"
                />
              </Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
                  <Col>
                    <Text color="#000" size={14}>
                      {anime.title}
                    </Text>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Link>
        ))}
      </div>
      <Link href="/all" className={styles.btnLink}>
        <button>See More</button>
      </Link>
    </div>
  );
}

export let getServerSideProps = async () => {
  let res = await fetch("https://api.jikan.moe/v4/anime?limit=10000");
  let data = await res.json();

  return {
    props: { data },
  };
};
export default Home;
