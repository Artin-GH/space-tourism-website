import Head from "next/head";
import React from "react";
import Navbar from "../layouts/Navbar";
import Image from "next/image";
import useWindowSize from "../hooks/useWindowSize";
import breakpoints from "../utils/breakpoints";

function getBackground(name: string, device: string): string {
  return `/images/${name}/background-${name}-${device}.jpg`;
}

export default function Layout(props: {
  children: React.ReactNode | React.ReactNode[];
  background: string;
  className?: string;
}) {
  const windowWidth = useWindowSize().width;

  return (
    <React.Fragment>
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <div className="fixed w-full h-full top-0 left-0 -z-50">
        <figure>
          <Image
            src={getBackground(
              props.background,
              windowWidth < breakpoints.sm
                ? "mobile"
                : windowWidth < breakpoints.lg
                ? "tablet"
                : "desktop"
            )}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </figure>
      </div>
      <Navbar />
      <main className={props.className || ""}>{props.children}</main>
    </React.Fragment>
  );
}
