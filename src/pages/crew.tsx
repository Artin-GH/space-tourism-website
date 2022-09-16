import { NextPage } from "next";
import { ReactElement, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import range from "../utils/range";
import Layout from "../components/Layout";
import PrimaryPageTitle from "../components/PrimaryPageTitle";
import styles from "../styles/pages/Crews.module.css";
import Image from "next/image";
import useBreakpoint from "../hooks/useBreakpoint";
import breakpoints from "../utils/breakpoints";
import PreloadImage from "../components/PreloadImage";

const Crew: NextPage = () => {
  return (
    <Layout
      background="crew"
      className="lg:text-left text-center pb-2.5 sm:pb-0
                 lg:pb-2.5 overflow-y-hidden relative"
    >
      <PrimaryPageTitle>
        <span className="number">2</span>
        MEET YOUR CREW
      </PrimaryPageTitle>
      {crew.map((member, i) => (
        <PreloadImage src={member.images.webp} key={i} />
      ))}
      <CrewMember />
    </Layout>
  );
};

export default Crew;

const CrewMember = () => {
  const [index, setIndex] = useState(0);
  const member = crew[index];

  return (
    <div
      className={`${styles.container} mx-auto uppercase flex max-h-full
                  lg:flex-row flex-col justify-between items-stretch`}
    >
      <div className="flex flex-col">
        <div className={styles.textCon}>
          <TextTransition id={index}>
            <div>
              <h2 className="heading-4 text-white text-opacity-50">
                {member.role}
              </h2>
              <h1 className={`heading-3 text-white ${styles.heading}`}>
                {member.name}
              </h1>
              <p className={`${styles.paragraph} ${styles[member.cls]}`}>
                {member.bio}
              </p>
            </div>
          </TextTransition>
        </div>
        <div
          className={`${styles.circles} flex justify-between lg:mx-0 mx-auto
                      sm:order-none -order-1 sm:my-0 my-8`}
        >
          {range(crew.length).map((i) => (
            <button
              onClick={() => {
                setIndex(i);
              }}
              key={i}
              className={i === index ? "active" : undefined}
            ></button>
          ))}
        </div>
      </div>
      <div className="flex-grow sm:order-none -order-1 h-full">
        <ImageTransition
          id={index}
          className={`${styles.imageCon} ${styles[member.cls]}`}
        >
          <figure className={`${styles.image} relative`}>
            <Image
              src={member.images.webp}
              layout="fill"
              objectFit="contain"
              objectPosition={useBreakpoint(breakpoints.lg) ? "left" : "center"}
              alt={member.name}
            />
          </figure>
        </ImageTransition>
      </div>
    </div>
  );
};

// <Animation> //
const ImageTransition = ({
  id,
  children,
  className,
}: {
  id: number;
  children: ReactElement;
  className?: string;
}) => {
  return (
    <TransitionGroup className={className}>
      <CSSTransition
        key={id}
        timeout={600}
        classNames={{
          enter: styles.imageAnimEnter,
          enterActive: styles.imageAnimEnterActive,
          exit: "hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

const TextTransition = ({
  id,
  children,
}: {
  id: number;
  children: ReactElement;
}) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={id}
        timeout={600}
        classNames={{
          enter: styles.textAnimEnter,
          enterActive: styles.textAnimEnterActive,
          exit: "hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
// </Animation> //

// <Types> //
interface ICrewMember {
  cls: string;
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}
// </Types> //

// <Data> //
const crew: ICrewMember[] = [
  {
    cls: "hurley",
    name: "Douglas Hurley",
    images: {
      png: "/images/crew/image-douglas-hurley.png",
      webp: "/images/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps " +
      "pilot and former NASA astronaut. He launched into space for the third " +
      "time as commander of Crew Dragon Demo-2.",
  },
  {
    cls: "shuttleworth",
    name: "Mark Shuttleworth",
    images: {
      png: "/images/crew/image-mark-shuttleworth.png",
      webp: "/images/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company " +
      "behind the Linux-based Ubuntu operating system. Shuttleworth became the first " +
      "South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    cls: "glover",
    images: {
      png: "/images/crew/image-victor-glover.png",
      webp: "/images/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the " +
      "International Space Station. Glover is a commander in the U.S. Navy where " +
      "he pilots an F/A-18.He was a crew member of Expedition 64, and served as a " +
      "station systems flight engineer.",
  },
  {
    cls: "ansari",
    name: "Anousheh Ansari",
    images: {
      png: "/images/crew/image-anousheh-ansari.png",
      webp: "/images/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea " +
      "Systems. Ansari was the fourth self-funded space tourist, the first self-funded " +
      "woman to fly to the ISS, and the first Iranian in space.",
  },
];
// </Data> //
