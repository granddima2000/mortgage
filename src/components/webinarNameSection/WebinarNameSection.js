import styles from "./webinarNameSection.module.scss";

import arrow from "../../resources/icon/Triangle.svg";
import logo from "../../resources/logo/NAF_Logo.png";

const WebinarNameSection = () => {
  return (
    <section className={styles.webinarName}>
      <div className={styles.webinarInfo}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.title}>Webinar name</div>
        <div className={styles.name}>Scott Johnson</div>
        <div className={styles.descr}>
          So you’re about to get into the world of homeownership. It’s
          okay...everyone feels lost during this process, but the more
          preparation you do upfront, the smoother your journey will be.
        </div>
        <div className={styles.wrapInput}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.elements.emailInput.value;
              console.log(email);
            }}
          >
            <input
              type="text"
              name="emailInput"
              className={styles.emailInput}
              placeholder="Your Email"
              required
            />
            <button className={styles.btn}>Go the eBook</button>
          </form>
        </div>
      </div>
      <div className={styles.blueBg}>
        <div className={styles.imgPC}>
          <div className={styles.pulseBtn}>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarNameSection;
