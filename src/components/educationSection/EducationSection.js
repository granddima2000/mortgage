import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/http.hook";

import styles from "./educationSection.module.scss";

import CardItemsSection from "../CardItemsSection/CardItemsSection";
import Container from "../container/Container";

const EducationSection = ({ className }) => {
  const itemsToShow = className ? 10 : 3;
  const { request } = useHttp();

  const {
    data: articlesData = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: () => request("http://localhost:3001/articles"),
    staleTime: 300000,
    retry: 2,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className={styles[className ? className : null]}>
      <Container>
        <div className={styles.headerWithLink}>
          <h2 className={styles.title}>Education</h2>
          {className ? null : (
            <a href="#" className={styles.underlineLink}>
              All articles
            </a>
          )}
        </div>
        <div className={styles.wrapper}>
          {
            <CardItemsSection
              articlesData={articlesData}
              itemsToShow={itemsToShow}
            />
          }
        </div>
      </Container>
    </section>
  );
};

export default EducationSection;
