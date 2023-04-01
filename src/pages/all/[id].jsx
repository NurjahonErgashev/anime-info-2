// 'use client'

import styles from "../../styles/datailed.module.scss";
import { useRouter } from "next/router";
import { Rating } from "@mui/material";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { api } from "../api/allapi";
export default function singleAnime() {
  const { query, push } = useRouter();
  const anime = api?.data?.find((item) => item.mal_id == query.id);
  // const animes = data?.data?.filter((item, index) =>
  //   anime?.themes?.filter((i) => i.mal_id == item.mal_id)
  // );
  let animes = [];
  let m = api?.data;
  let s = anime?.themes;
  for (let i = 0; i < m?.length; i++) {
    for (let j = 0; j < s?.length; j++) {
      if (m[i]?.mal_id == s[j]?.mal_id) {
        animes.push(m[i]);
      }
    }
  }
  console.log(animes);
  return (
    <div className={styles.Main}>
      
      <div className={styles.container}>
        <div className={styles.child1}>
          <div className={styles.item1}>
            <h1>
              {anime?.title}{" "}
              <Rating
                max={10}
                name="half-rating-read"
                defaultValue={anime?.score}
                precision={0.5}
                readOnly
              />
            </h1>
            <div className={styles.table}>
              <div>
                <p>relize date</p> <p>{anime?.aired.string}</p>
              </div>
              <div>
                <p>duration </p> <p>{anime?.duration}</p>
              </div>
              <div>
                <p>scored by </p> <p>{anime?.scored_by}</p>
              </div>
              <div>
                <p>favorites </p> <p>{anime?.favorites}</p>
              </div>
            </div>
            {/* <p>{anime?.synopsis}</p> */}
          </div>
          <div className={styles.item2}>
            <div>
              <img src={anime?.images?.jpg?.large_image_url}></img>
            </div>
          </div>
        </div>
        <div className={styles.child2}>
          <div className={styles.item1}>
            <p>{anime?.synopsis}</p>
          </div>
          <div className={styles.item2}>
            {anime?.trailer?.embed_url != null ? (
              <iframe
                width="100%"
                height="400px"
                style={{
                  margin: "0 auto",
                }}
                src={anime?.trailer?.embed_url}
              ></iframe>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.item3}>
            <h1
              style={{
                fontSize: "35px",
              }}
            >
              {animes.length ? "similar" : ""}
            </h1>

            <Grid.Container gap={2} justify="flex-start">
              {animes.map((item, index) => (
                <Grid
                  onClick={() => push(`./${item.mal_id}`)}
                  xs={6}
                  sm={3}
                  key={index}
                >
                  <Card isPressable>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image
                        src={item?.images?.jpg?.large_image_url}
                        objectFit="cover"
                        width="100%"
                        height={140}
                        alt={item.title}
                      />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                      <Row wrap="wrap" justify="space-between" align="center">
                        <Text b>{item.title}</Text>
                        <Text
                          css={{
                            color: "$accents7",
                            fontWeight: "$semibold",
                            fontSize: "$sm",
                          }}
                        >
                          {item.price}
                        </Text>
                      </Row>
                    </Card.Footer>
                  </Card>
                </Grid>
              ))}
            </Grid.Container>
          </div>
        </div>
      </div>
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
