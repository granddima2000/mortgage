import shared from "../../../style/shared.module.scss";

import triangle from "../../../resources/icon/Triangle.svg";
import styles from "./pulseBtn.module.scss";

const PulseBtn = () => {
  return (
    <div className={styles.btnWrapper}>
      <div className={shared.pulseBtn}>
        <img className={styles.triangle} src={triangle} alt="triangle" />
      </div>
      <h3 className={styles.pulseText}>Meet Justin</h3>
    </div>
  );
};

export default PulseBtn;
