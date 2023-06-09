import { Card } from "@/components/Card";
import { Character } from "@/components/Interface";
import homeContentEN from "@/lang/en/home";
import homeContentES from "@/lang/es/home";
import homeContentPT from "@/lang/pt/home";
import styles from "@/styles/Home.module.css";
import { NextPage } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  data: Character[];
}

const Home: NextPage<Props> = ({ data }) => {
  // Traducciones
  const router = useRouter();
  const { locale } = router;
  const content =
    locale === "en"
      ? homeContentEN
      : locale === "es"
      ? homeContentES
      : homeContentPT;

  return (
    <>
      <Head>
        <title>Ecommerce Mario Bros</title>
        <meta name="description" content="Ecommerce De Practica" />
        <meta
          name="keywords"
          content="venta de figuras de Marios Bros, videjuegos, zelda"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>{content.title}</h1>
        <div className={styles.grid}>
          {data.map((item) => (
            <Card key={item.tail} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const characters = await fetch("https://amiiboapi.com/api/amiibo/");
  const resp = await characters.json();
  const data = resp.amiibo.slice(0, 50);

  return {
    props: {
      data,
    },
  };
};

export default Home;
