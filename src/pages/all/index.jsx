"use client";

import { useState, useEffect } from "react";
import styles from "../../styles/all.module.scss";
import { Card, Col, Row, Button, Text, Pagination } from "@nextui-org/react";
import { api } from "../api/allapi";
import Link from "next/link";

function All() {
  const [obj, setObj] = useState(
    api?.data?.filter((item, index) => {
      if (index >= 0 && index < 25) {
        return item;
      }
    })
  );
  const cap = (value) => {
    setObj((prev) =>
      api?.data?.filter((item, index) => {
        if (index < 25 * value && index > 25 * value - 26) {
          return item;
        }
      })
    );
  };
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {obj?.map((anime, index) => (
            <Link href={`/all/${anime.mal_id}`} key={anime?.mal_id}>
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
        <div className={styles.pagination}>
          <Pagination
            onChange={cap}
            total={9}
            initialPage={1}
            color="gradient"
          />
        </div>
      </div>
    </div>
  );
}

export default All;
