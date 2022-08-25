import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/altynai_logo.png";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + "- Altynai Fashion" : "Altynai Fashion"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-22 justify-between items-center shadow-md px-4">
            <Link href="/">
              <a className="text-lg font-bold w-2">
                <Image
                  src={Logo}
                  alt="company logo"
                  height={60}
                  width={100}
                  layout="fixed"
                />
              </a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          Copyright © 2022 Altynai Fashion
        </footer>
      </div>
    </>
  );
}
