import Container from "../container/Container";

import styles from "./aboutBookSection.module.scss";

const AboutBookSection = () => {
  return (
    <section className={styles.aboutBook}>
      <Container>
        <div className={styles.positionWrap}>
          <div className={styles.wrapText}>
            <h2 className={styles.title}>About the book</h2>
            <div className={styles.descr}>
              So you’re about to get into the world of homeownership. It’s
              okay...everyone feels lost during this process, but the more
              preparation you do upfront, the smoother your journey will be.
            </div>
            <div className={styles.wrapInput}>
              <input
                type="text"
                placeholder="Your Email"
                className={styles.inputText}
              />
              <button className={styles.bookBtn}>Get the eBook</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutBookSection;
