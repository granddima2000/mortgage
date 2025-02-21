import styles from "./cardBook.module.scss";

import placeholder from "../../resources/placeholder.png";
import arrowBottom from "../../resources/icon/arrowBottom.svg";

const CardBook = ({ title, img }) => {
  return (
    <div className={styles.item}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardImg}>
          <img src={img || placeholder} alt="book" />
        </div>
        <div className={styles.textWrap}>
          <div className={styles.blueText}>Resources</div>
          <div className={styles.textContent}>{title}</div>
        </div>
      </div>
      <hr className={styles.divider}></hr>
      <div className={styles.buttonRight}>
        {img ? (
          <button className={styles.button}>
            Download
            <img src={arrowBottom} alt="arrowBottom" />
          </button>
        ) : (
          <button className={styles.eyeButton}>
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default CardBook;
