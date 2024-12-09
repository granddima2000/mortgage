import PulseBtn from "../buttons/pulseBtn/PulseBtn";
import Container from "../container/Container";

import styles from "./aboutAuthor.module.scss";

import manager from "../../resources/manager1.png";

const AboutAuthor = () => {
  return (
    <section className={styles.aboutAuthor}>
      <Container>
        <h2 className={styles.title}>About author</h2>
        <div className={styles.managerProfile}>
          <div className={styles.photoProfile}>
            <img src={manager} alt="manager" />
          </div>
          <div className={styles.wrapperProfile}>
            <div className={styles.smallText}>The master mind</div>
            <div className={styles.name}>Justin</div>
            <span className={styles.divider}></span>
            <div className={styles.descr}>
              Rates change, but every mortgage journey starts with a
              relationship. (Pssst...it’s not just about clicking a button)
            </div>
            <PulseBtn />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutAuthor;
