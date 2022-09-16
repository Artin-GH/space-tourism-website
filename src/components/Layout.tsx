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
  const isMobile = windowWidth < breakpoints.sm;
  const isTablet = !isMobile && windowWidth < breakpoints.lg;

  return (
    <React.Fragment>
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <div className="fixed w-full h-full top-0 left-0 -z-50">
        <Image
          src={getBackground(
            props.background,
            isMobile ? "mobile" : isTablet ? "tablet" : "desktop"
          )}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="background"
        />
      </div>
      <Navbar />
      <main className={`overflow-hidden ${props.className || ""}`}>
        {props.children}
      </main>
    </React.Fragment>
  );
}
