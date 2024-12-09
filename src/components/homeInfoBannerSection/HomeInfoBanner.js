import classNames from "classnames";

import AboutBookSection from "../aboutBookSection/AboutBookSection";
import Container from "../container/Container";
import styles from "./homeInfoBanner.module.scss";

import book from "../../resources/bigBook.png";
import logo from "../../resources/logo/NAF_LogoWhite.png";

const HomeInfoBanner = ({ isBook }) => {
  return (
    <>
      <section className={styles.homeInfo}>
        <div className={styles.homeBanner}>
          <Container>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
            <div
              className={classNames(styles.wrapper, {
                [styles.otherWrapper]: !isBook,
              })}
            >
              {isBook ? (
                <div className={styles.bookImg}>
                  <img src={book} alt="book" />
                </div>
              ) : null}
              <div className={styles.infoWrap}>
                <div className={styles.infoTextBlock}>
                  <h2 className={styles.infoText}>
                    9 Things You Must Know About Buying Your First Home
                  </h2>
                  <div className={styles.authorName}>Scott Johnson</div>
                </div>
                {isBook ? (
                  <div className={styles.btns}>
                    <button className={styles.btn}>PDF</button>
                    <button className={styles.btn}>ePUB</button>
                  </div>
                ) : null}
              </div>
            </div>
          </Container>
        </div>
      </section>
      {isBook ? <AboutBookSection /> : null}
    </>
  );
};

export default HomeInfoBanner;
