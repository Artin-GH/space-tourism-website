import { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout
      background="home"
      className="pb-2.5 overflow-hidden"
    >
      <header className={`${styles.hero} h-full`}>
        <div className={`container ${styles.container}`}>
          <div className={styles.half}>
            <h5 className="heading-5 text-blue">SO, YOU WANT TO TRAVEL TO</h5>
            <h1 className="heading-1 sm:mt-7 mt-5">SPACE</h1>
            <p className={`text-blue sm:mt-7 mt-5 ${styles.paragraph}`}>
              Let&apos;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&apos;ll give you a truly
              out of this world experience!
            </p>
          </div>
          <div className={`${styles.half} flex justify-end`}>
            <a
              href="#!"
              className={`${styles.exploreBtn} after:grid
                                after:place-content-center`}
            ></a>
          </div>
        </div>
      </header>
    </Layout>
  );
};

export default Home;
