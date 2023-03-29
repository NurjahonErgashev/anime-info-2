// // 'use client'

// import styles from "../../styles/datailed.module.scss";
// import { useRouter } from "next/router";
// export default function singleAnime({ data }) {
//   const { query } = useRouter();
//   console.log(query);
//   const anime = data?.data?.find((item) => item.mal_id == query.id);
//   return (
//     <div className={styles.Main}>
//       <div className={styles.container}>
//         <div className={styles.item1}>
//           <h1 >{anime?.title}</h1>
//           <p>{anime?.synopsis}</p>
//         </div>
//         <div className={styles.item2}>
//           <img src={anime.images.jpg.large_image_url}></img>
//         </div>
//       </div>
//     </div>
//   );
// }
// export let getServerSideProps = async () => {
//   let res = await fetch("https://api.jikan.moe/v4/anime?limit=10000");
//   let data = await res.json();

//   return {
//     props: { data },
//   };
// };
