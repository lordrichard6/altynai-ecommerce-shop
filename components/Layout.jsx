import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/altynai_logo.png";
import { Store } from "../utils/Store";
import { useSession, signOut } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { Menu } from "@headlessui/react";
import DropdownLink from "./DropdownLink";
import { IoIosCart, IoIosContact } from "react-icons/io";

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };

  return (
    <>
      <Head>
        <title>{title ? title + " - Altynai Fashion" : "Altynai Fashion"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex min-h-screen flex-col justify-between page-background">
        <header>
          <nav className="flex h-22 z-10 justify-between items-center shadow-md px-4 lg:px-28 bg-slate-100">
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
            <div className="flex relative">
              <Link href="/cart">
                <a className="py-2 px-4">
                  {/* Cart */}
                  <IoIosCart className="h-8 w-8" />
                  {cartItemsCount > 0 && (
                    <span className="absolute left-8 top-6 ml-1 rounded-full bg-pink-300 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <Menu as="div" className="relative flex z-20">
                  <Menu.Button className="text-red-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >Admin Dashboard</DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <a
                        href="#"
                        className="dropdown-link"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">
                  <a className="py-2 pl-2">
                    {/* Login */}
                    <IoIosContact className="h-8 w-8" />
                  </a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4 xl:px-24 z-10">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          Copyright © 2022 Altynai Fashion
        </footer>
      </div>
    </>
  );
}
