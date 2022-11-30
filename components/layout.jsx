import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/layout.module.css";
import SubButton from "./subBtn";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script>
      </Head>
      <nav className="bg-white border-gray-200 px-4 py-2.5 bg-main-orange">
        <div className="container flex mx-auto justify-between">
          <a href="/" className="flex items-center">
            <h1 className="self-center text-xl font-semibold whitespace-nowrap text-white">
              抱っこさん
            </h1>
          </a>
          <div className="w-48">
          <SubButton
            text="アンケートに回答"
            isTarget="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdpCueldaiK2WcFvdePnsnfTo-xrTibhqCsAc7nnqfrSfYN_Q/viewform"
            icon={<span className="material-symbols-outlined">edit_note</span>}
          />
          </div>
        </div>
      </nav>
      {children}
      <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto bg-main-orange w-full">
        <div className="flex flex-col items-center pt-6">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
            <a href="/" className="text-white text-sm text-white">
              トップ
            </a>
            <a
              href="/ninpu/dashboard"
              className="text-gray-500 text-sm text-white"
            >
              妊婦さんページ
            </a>
            <a
              href="/doctor/dashboard"
              className="text-gray-500 text-sm text-white"
            >
              産婦人科ページ
            </a>
          </nav>
        </div>

        <div className="text-gray-400 text-sm text-center py-8 text-white">
          © 2022
        </div>
      </footer>
    </div>
  );
};

export default Layout;
