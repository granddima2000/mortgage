import Container from "../container/Container";
import styles from "./description.module.scss";

import mounts from "../../resources/mount.jpg";
import nightForest from "../../resources/nightForest.jpg";

const DescriptionSection = () => {
  return (
    <section className={styles.descriptionSection}>
      <Container maxWidth={648}>
        <div className={styles.wrapDescr}>
          <h3 className={styles.titleThing}>1st thing</h3>
          <div className={styles.info}>
            So you’re about to get into the world of homeownership. It’s
            okay...everyone feels lost during this process, but the more
            preparation you do upfront, the smoother your journey will be. So
            you’re about to get into the world of homeownership. It’s
            okay...everyone feels lost during this process, but the more
            preparation you do upfront, the smoother your journey will be.So
            you’re about to get into the world of homeownership. It’s
            okay...everyone feels lost during this process, but the more
            preparation you do upfront, the smoother your journey will be.So
            you’re about to get into the world of homeownership. I
          </div>
          <div className={styles.img}>
            <img src={mounts} alt="mounts" />
          </div>
          <h3 className={styles.titleThing}>2nd thing</h3>
          <div className={styles.info}>
            So you’re about to get into the world of homeownership. It’s
            okay...everyone feels lost during this process, but the more
            preparation you do upfront, the smoother your journey will be. So
            you’re about to get into the world of homeownership. It’s
            okay...everyone feels lost during this process, but the more
            preparation you do upfront, the smoother your journey will be.So
            you’re about to get into the world of homeownership. It’s
            okay...everyone feels lost during this process, but the more
            preparation you do upfront, the smoother your journey will be.So
            you’re about to get into the world of homeownership. I
          </div>
          <div className={styles.img}>
            <img src={nightForest} alt="nightForest" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DescriptionSection;
