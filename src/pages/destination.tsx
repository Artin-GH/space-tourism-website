import { Fragment, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/pages/Destinations.module.css";
import PrimaryPageTitle from "../components/PrimaryPageTitle";
import PreloadImage from "../components/PreloadImage";
import Image from "next/image";

const Destinations: NextPage = () => {
  return (
    <Layout className={`text-white pb-2.5`} background="destination">
      <PrimaryPageTitle className={styles.title}>
        <span className="number">1</span>
        PICK YOUR DESTINATION
      </PrimaryPageTitle>
      <Destination />
    </Layout>
  );
};

export default Destinations;

const Destination = () => {
  const [index, setIndex] = useState(0);
  const destination = destinations[index];

  return (
    <div
      className={`${styles.container} flex mx-auto lg:flex-row flex-col
                  lg:text-left text-center`}
    >
      <div className={`${styles.half}`}>
        <ImageAnim index={index}>
          <figure className={`${styles.image} relative h-full`}>
            <Image
              src={destination.images.webp}
              layout="fill"
              objectFit="contain"
              objectPosition="left center"
              alt={destination.name}
            />
          </figure>
        </ImageAnim>
      </div>
      <div className={`${styles.half}`}>
        <div>
          <ul
            className={`${styles.menu} flex justify-between nav-font text-blue
                        lg:m-0 mx-auto`}
          >
            {destinations.map((item, i) => (
              <Fragment key={i}>
                <PreloadImage src={item.images.webp} />
                <li
                  className={`${styles.menuItem} ${
                    i === index ? "active" : ""
                  }`}
                  onClick={() => {
                    setIndex(i);
                  }}
                >
                  {item.name}
                </li>
              </Fragment>
            ))}
          </ul>
          <TextAnim index={index}>
            <div>
              <h1 className="heading-2">{destination.name.toUpperCase()}</h1>
              <p className="text-blue sm:mt-5 mt-3 sm:mb-12 mb-7">
                {destination.description}
              </p>
            </div>
          </TextAnim>
          <hr className="border-white border-opacity-25" />
          <TextAnim index={index}>
            <div className="sm:flex my-7 sm:space-y-0 space-y-7">
              <div className="flex-grow space-y-3.5">
                <h4 className="subheading-2 text-blue">AVG. DISTANCE</h4>
                <h3 className="subheading-1">{destination.distance}</h3>
              </div>
              <div className="flex-grow space-y-3.5">
                <h4 className="subheading-2 text-blue">Est. travel time</h4>
                <h3 className="subheading-1">{destination.travel}</h3>
              </div>
            </div>
          </TextAnim>
        </div>
      </div>
    </div>
  );
};

// <Animations> //
const ImageAnim = ({
  children,
  index,
}: {
  children: React.ReactElement;
  index: number;
}) => {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={600}
        key={index}
        classNames={{
          enter: styles.imageAnimEnter,
          enterActive: styles.imageAnimEnterActive,
          exit: "!hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
const TextAnim = ({
  children,
  index,
}: {
  children: React.ReactElement;
  index: number;
}) => {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={600}
        key={index}
        classNames={{
          enter: styles.textAnimEnter,
          enterActive: styles.textAnimEnterActive,
          exit: "!hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
// </Animations> //

// <Data> //
const destinations = [
  {
    name: "Moon",
    images: {
      png: "/images/destination/image-moon.png",
      webp: "/images/destination/image-moon.webp",
    },
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away " +
      "to help regain perspective and come back refreshed. While you're there, take " +
      "in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "/images/destination/image-mars.png",
      webp: "/images/destination/image-mars.webp",
    },
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, " +
      "the tallest planetary mountain in our solar system. It's two and a half times " +
      "the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "/images/destination/image-europa.png",
      webp: "/images/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter " +
      "lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, " +
      "hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "/images/destination/image-titan.png",
      webp: "/images/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away " +
      "from home (just a few hundred degrees colder!). As a bonus, you get striking views of " +
      "the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];
// </Data> //
