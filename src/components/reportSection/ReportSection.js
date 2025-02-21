import preApproved from "../../resources/icon/preApproved.png";
import procent from "../../resources/icon/procent.png";
import relationship from "../../resources/icon/relationship.png";
import styles from "./reportSection.module.scss";

const ReportSection = ({ nameTitle }) => {
  return (
    <section className={styles.reportSection}>
      <div className={styles.title}>What's in the {nameTitle}</div>
      <div className={styles.wrapper}>
        <div className={styles.reportsBlock}>
          <div className={styles.image}>
            <img src={procent} alt="procent" />
          </div>
          <div className={styles.nameCard}>Rate</div>
          <hr className={styles.divider}></hr>
          <div className={styles.descr}>
            Yes. Rate is important, but it’s not everything. Understanding your
            rate is more important.
          </div>
        </div>
        <div className={styles.reportsBlock}>
          <div className={styles.image}>
            <img src={relationship} alt="relationship" />
          </div>
          <div className={styles.nameCard}>Relationship</div>
          <hr className={styles.divider}></hr>
          <div className={styles.descr}>
            Build a solid relationship with a realtor a lender and never look
            back!
          </div>
        </div>
        <div className={styles.reportsBlock}>
          <div className={styles.image}>
            <img src={preApproved} alt="preApproved" />
          </div>
          <div className={styles.nameCard}>Pre-Approved</div>
          <hr className={styles.divider}></hr>
          <div className={styles.descr}>
            Getting pre-approved early will play a key part in finding your
            dream home.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportSection;
