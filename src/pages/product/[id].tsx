import Head from "next/head";
import { Card } from "@/components/Card";
import { Character } from "@/components/Interface";
import { NextPage } from "next";

interface props {
  item: Character;
}

const Product: NextPage<props> = ({ item }) => {
  return (
    <div>
      <>
        <Head>
          <title>Product</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>Product</h1>
          <Card key={item.tail} item={item} />
        </main>
      </>
    </div>
    
  );
};

export const getStaticPaths = async () => {
  const characters = await fetch("https://amiiboapi.com/api/amiibo/");
  const resp = await characters.json();
  const data = resp.amiibo.slice(0, 50);

  const paths = data.map((item: Character) => ({ params: { id: item.tail } }));

  return {
    paths: paths,
    fallback:"blocking",
  };
};

export const getStaticProps = async ({params}: any) => {
  const { id } = params;

  const character = await fetch(`https://amiiboapi.com/api/amiibo/?tail=${id}`);
  const resp = await character.json();

  return {
    props: {
      item: resp.amiibo[0],
    },
    revalidate: 86400 //24 horas
  };
};

export default Product;
