import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface Pros {
  item: {
    image: string;
    name: string;
    character: string;
    amiiboSeries: string;
    tail: string;
  };
}

export const Card: FC<Pros> = ({ item }) => {
  const router = useRouter();

  const handleClic = () => {
    router.push(`/product/${item.tail}`);
  };
  return (
    <div onClick={handleClic}>
      <Image
        src={item.image}
        alt={item.name}
        width={180}
        height={250}
        priority={true}
      />
      <h2>{item.character}</h2>
      <span>{item.amiiboSeries}</span>
    </div>
  );
};
