import menuContentEn from "@/lang/en/en";
import menuContentEs from "@/lang/es/es";
import menuContentPt from "@/lang/pt/pt";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  //Traducciones
  const router = useRouter();
  const { locale } = router;
  const content =
    locale === "en"
      ? menuContentEn
      : locale === "es"
      ? menuContentEs
      : menuContentPt;

  const chacgeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <nav>
      <div>
        <Link href="/">
          <Image
            src="/logo-super-mario.png"
            alt="logo"
            width={200}
            height={200}
            priority={true}
          />
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/">{content.home}</Link>
        </li>
        <li>
          <Link href="/about">{content.about}</Link>
        </li>
        <li>
          <Link href="/contact">{content.contact}</Link>
        </li>
        <li>
          <Link href="/blog">{content.blog}</Link>
        </li>
        <li>
          <select onChange={chacgeLanguage} name="idioma" id="idioma">
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="pt">Português</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};
