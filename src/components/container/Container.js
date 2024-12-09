import classNames from "classnames";
import styles from "./container.module.scss";

const Container = ({ children, maxWidth }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.maxWidth]: maxWidth,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
