import styles from "./footerSection.module.scss";

// import logo from '../../resources/logo/NAF_Logo.svg';
import logo from "../../resources/logo/NAF_LogoWhite.png";
import Container from "../container/Container";
import { useState } from "react";

const FooterSection = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (i) => {
    setOpenSection(openSection === i ? null : i);
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.button}>Schedule a time</div>
        </div>
        <hr className={styles.divider}></hr>
        <div className={styles.wrap}>
          <div
            className={`${styles.section} ${
              openSection === 0 ? styles.active : ""
            }`}
          >
            <h4 className={styles.title} onClick={() => toggleSection(0)}>
              Contact us
            </h4>
            <ul
              className={`${styles.wrapperList} ${
                openSection === 0 ? styles.active : ""
              }`}
            >
              <li className={styles.entry}>
                <address>
                  14511 Myford Road, Suite 100, Tustin, CA 92780
                </address>
              </li>
              <li className={styles.entry}>
                <a href="tel:8004502010">800-450-2010</a>
              </li>
              <li className={styles.entry}>
                <a href="mailto:customerservice@nafinc.com">
                  customerservice@nafinc.com
                </a>
              </li>
            </ul>
          </div>

          <div
            className={`${styles.section} ${
              openSection === 1 ? styles.active : ""
            }`}
          >
            <h4 className={styles.title} onClick={() => toggleSection(1)}>
              Education
            </h4>

            <ul
              className={`${styles.wrapperList}  ${
                openSection === 1 ? styles.active : ""
              }`}
            >
              <li className={styles.entry} href="#">
                <a href="#">Blog</a>
              </li>
              <li className={styles.entry} href="#">
                <a href="#">Ebook</a>
              </li>
              <li className={styles.entry} href="#">
                <a href="#">Webinar</a>
              </li>
            </ul>
          </div>
          <div
            className={`${styles.section} ${
              openSection === 2 ? styles.active : ""
            }`}
          >
            <h4 className={styles.title} onClick={() => toggleSection(2)}>
              Legal
            </h4>
            <ul
              className={`${styles.wrapperList} ${
                openSection === 2 ? styles.active : ""
              }`}
            >
              <li className={styles.entry}>
                <a href="#">Terms of use</a>
              </li>
              <li className={styles.entry}>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <div className={styles.descrWrap}>
              <p className={styles.descr}>
                New American Funding makes Customer Service our number one
                priority. We encourage you to call our Corporate Customer
                Service department at 800-450-2010 ext. 7100 between 8 am and
                5:00 pm Pacific or email us anytime at
                customerservice@nafinc.com for any complaint resolution you may
                have regarding the origination of your loan.
              </p>
              <p className={styles.descr}>
                This site is not authorized by the New York State Department of
                Financial Services. No mortgage solicitation activity or loan
                applications for properties located in the State of New York can
                be facilitated through this site. Read more at{" "}
                <span>
                  https://www.newamericanfunding.com/#SsSswc4OzfksTC0E.99
                </span>
              </p>
            </div>
          </div>
        </div>
        <hr className={styles.divider}></hr>
        <div className={styles.lastDescr}>
          If you received a letter from New American Funding and would like to
          be removed from our mailing list, please call 800-450-2010. <br />©
          2018 Broker Solutions, Inc. DBA New American Funding. All Rights
          Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default FooterSection;
