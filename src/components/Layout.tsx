import Head from "next/head";
import React from "react";
import Navbar from "../layouts/Navbar";
import Image from "next/image";

function getBackground(name: string, device: string): string {
  return `/images/${name}/background-${name}-${device}.jpg`;
}

export default function Layout(props: {
  children: React.ReactNode | React.ReactNode[];
  background: string;
  className?: string;
}) {
  return (
    <React.Fragment>
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <div className="fixed w-full h-full top-0 left-0 -z-50">
        {[
          { figure: "block sm:hidden", device: "mobile" },
          { figure: "hidden sm:block lg:hidden", device: "tablet" },
          { figure: "hidden lg:block", device: "desktop" },
        ].map((item, i) => (
          <figure className={item.figure} key={i}>
            <Image
              src={getBackground(props.background, item.device)}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </figure>
        ))}
      </div>
      <Navbar />
      <main className={props.className || ""}>{props.children}</main>
    </React.Fragment>
  );
}
