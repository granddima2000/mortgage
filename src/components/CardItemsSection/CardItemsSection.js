import styles from "./cardItemsSection.module.scss";

const CardItemsSection = ({ articlesData = [], itemsToShow = 0 }) => {
  return (
    <>
      {articlesData
        .slice(0, itemsToShow)
        .map(({ id, title, category, descr, author }) => (
          <div key={id} className={styles.item}>
            <div className={styles.category}>{category}</div>
            <h3 className={styles.articleTitle}>{title}</h3>
            <p className={styles.descr}>
              {descr.length > 93 ? descr.slice(0, 92) + "..." : descr}
            </p>
            <span className={styles.divider}></span>
            <div className={styles.authorInfo}>
              <div className={styles.authorImg}>
                <img src={require(`../../${author.img}`)} alt="author" />
              </div>
              <div className={styles.authorText}>
                <span className={styles.byLabel}>by</span>
                <span className={styles.authorName}>{author.name}</span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardItemsSection;
