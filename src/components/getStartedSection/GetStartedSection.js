import GetStartedButtons from "../buttons/getStartedButtons/Button";
import Container from "../container/Container";
import styles from "./getStartedSection.module.scss";

import cat from "../../resources/wideCat.jpg";

const GetStartedSection = () => {
  return (
    <section className={styles.getStarted}>
      <Container>
        <div className={styles.wrapperStarted}>
          <div className={styles.leftContent}>
            <h2 className={styles.title}>Get started with us</h2>
            <div className={styles.descr}>
              Rates change, but every mortgage journey starts with a
              relationship. (Pssst...it’s not just about clicking a button)
            </div>
            <span className={styles.divider}></span>
            <div className={styles.wrapperBtn}>
              <GetStartedButtons />
            </div>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.catImg}>
              <img src={cat} alt="cat" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default GetStartedSection;
