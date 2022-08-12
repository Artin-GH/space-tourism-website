import Head from "next/head";
import React from "react";
import Navbar from "../layouts/Navbar";

export default function Layout(props: {
  children: React.ReactNode | React.ReactNode[];
  bgClass?: string;
  className?: string;
}) {
  return (
    <React.Fragment>
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <div
        className={`fixed w-full h-full top-0 left-0 -z-50
                   bg-cover bg-center bg-scroll ${props.bgClass || ''}`}
      ></div>
      <Navbar />
      <main className={props.className || ''}>{props.children}</main>
    </React.Fragment>
  );
}
