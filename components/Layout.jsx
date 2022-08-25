import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/altynai_logo.png";
import { Store } from "../utils/Store";

export default function Layout({ title, children }) {
  const {state } = useContext(Store)
  const {cart}= state
  return (
    <>
      <Head>
        <title>{title ? title + "- Altynai Fashion" : "Altynai Fashion"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between page-background">
        <header>
          <nav className="flex h-22 justify-between items-center shadow-md px-4 nav-background">
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
                <a className="p-2">Cart
                {cart.cartItems.length > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cart.cartItems.reduce((a,c) => a + c.quantity, 0)}
                  </span>
                )}
                </a>
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
