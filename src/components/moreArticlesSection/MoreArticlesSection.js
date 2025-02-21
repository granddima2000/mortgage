import Container from "../container/Container";

import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/http.hook";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./moreArticlesSection.module.scss";

const MoreArticlesSection = () => {
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
    <div className={styles.moreArticles}>
      <Container>
        <h2 className={styles.title}>More articles</h2>
        <div className={styles.cardWrapper}>
          <Swiper
            // У меня не получается сделать brakepoints. Они работают очень хаотично и нелогично...
            // navigation={true}
            // observer={true}
            // observeParents={true}
            modules={[Navigation]}
            // slidesPerView={3}
            spaceBetween={20}
            // slidesPerGroup={1}
            // lazy={true}
            // loop={true}
            breakpoints={{
              1024: { slidesPerView: 3 },
              992: { slidesPerView: 2 },
              425: { slidesPerView: 1 },
            }}
          >
            {articlesData.map(({ id, category, title, descr, author }) => (
              <SwiperSlide key={id}>
                <div className={styles.item}>
                  <div className={styles.category}>{category}</div>
                  <h3 className={styles.articleTitle}>{title}</h3>
                  <p className={styles.descr}>
                    {descr.length > 93 ? descr.slice(0, 92) + "..." : descr}
                  </p>
                  <hr className={styles.divider}></hr>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorImg}>
                      <img
                        src={require(`../../${author.img}`)}
                        alt={author.name}
                      />
                    </div>
                    <div className={styles.authorText}>
                      <span className={styles.byLabel}>by</span>
                      <span className={styles.authorName}>{author.name}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default MoreArticlesSection;
