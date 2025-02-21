import { useEffect, useRef, useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import { useQuery } from "@tanstack/react-query";

import styles from "./reviewsSection.module.scss";
import shared from "../../style/shared.module.scss";

import google from "../../resources/logo/google.png";
import zillow from "../../resources/logo/zillow.png";
import leftBtn from "../../resources/icon/arrowLeft.svg";
import rightBtn from "../../resources/icon/arrowRight.svg";
import quoteImg from "../../resources/icon/right-quote.png";

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const { request } = useHttp();

  const {
    data: slidesData = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["slides"],
    queryFn: () => request("http://localhost:3001/slides"),
    staleTime: 300000,
    retry: 2,
  });

  //   Логика слайдера
  const slideWidth = 479;
  const gap = 24;
  const step = slideWidth + gap;

  const extndedSlides = [
    {
      ...slidesData[slidesData.length - 1],
      id: `last-${slidesData[slidesData.length - 1]?.id}`,
    },
    ...slidesData,
    { ...slidesData[0], id: `first-${slidesData[0]?.id}` },
  ];

  const totalSlides = slidesData.length.toString().padStart(2, "0");
  const index = currentSlide.toString().padStart(2, "0");

  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;

    if (delta > 50) {
      setCurrentSlide((prev) => prev + 1);
    } else if (delta < -50) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (currentSlide > slidesData.length) {
      setCurrentSlide(1);
    } else if (currentSlide <= 0) {
      setCurrentSlide(slidesData.length);
    }
  }, [slidesData.length, currentSlide]);
  // Конец логики слайдера

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className={styles.reviews}>
      <h2 className={styles.title}>What our customers say</h2>
      <p className={styles.subtitle}>Truly reviews from our clients</p>
      <div className={styles.wrapper}>
        <div className={styles.ratingWrapper}>
          <div className={styles.ratingBlock}>
            <div className={styles.leftContent}>
              <div className={styles.ratingText}>4.5 stars rating</div>
              <div className={styles.imgEnv}>
                <img className={styles.logoCompany} src={google} alt="google" />
              </div>
              <div className={shared.divider}></div>
              <div className={styles.reviewSum}>
                Based on{" "}
                <span className={styles.underlineText}>85 reviews</span>
              </div>
            </div>
            <div className={styles.rightContent}>
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className={styles.star}>
                  <svg viewBox="0 0 24 24" className={styles.starIcon}>
                    {i === 4 ? (
                      <>
                        <defs>
                          <linearGradient id={`halfGrad-${i}`}>
                            <stop offset="50%" stopColor="#278FB4" />
                            <stop offset="50%" stopColor="#e0e0e0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                          fill={`url(#halfGrad-${i})`}
                        />
                      </>
                    ) : (
                      <path
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        fill="#278FB4"
                      />
                    )}
                  </svg>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.ratingBlock}>
            <div className={styles.leftContent}>
              <div className={styles.ratingText}>4 stars rating</div>
              <div className={styles.imgEnv}>
                <img className={styles.logoCompany} src={zillow} alt="zillow" />
              </div>
              <div className={shared.divider}></div>
              <div className={styles.reviewSum}>
                Based on{" "}
                <span className={styles.underlineText}>22 reviews</span>
              </div>
            </div>
            <div className={styles.rightContent}>
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className={styles.star}>
                  <svg viewBox="0 0 24 24" className={styles.starIcon}>
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      fill={i === 4 ? "#e0e0e0" : "#278FB4"}
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={styles.slider}
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.info}>
            <span className={styles.current}>{index}</span>
            <span className={styles.total}>/{totalSlides}</span>
          </div>
          <div className={styles.visionBlock}>
            <div
              className={styles.cardWrapper}
              style={{
                transform: `translateX(-${currentSlide * step}px)`,
                transition:
                  currentSlide === 0 || currentSlide === slidesData.length + 1
                    ? "none"
                    : "transform 0.3s ease-in-out",
              }}
            >
              {extndedSlides.map(
                ({ id, image, location, name, role, quote, icon }) => (
                  <div key={id} className={styles.card}>
                    <div className={styles.header}>
                      <div className={styles.image}>
                        <img src={require(`../../${image}`)} alt={"1"} />
                      </div>
                      <div className={styles.details}>
                        <span className={styles.ratingText}>{location}</span>
                        <div className={styles.nameWrapper}>
                          <h3 className={styles.name}>{name}</h3>
                          <div className={styles.icon}>
                            <img src={require(`../../${icon}`)} alt={"1"} />
                          </div>
                        </div>
                        <span className={styles.role}>{role}</span>
                      </div>
                    </div>
                    <hr className={shared.divider}></hr>
                    <div className={styles.quote}>
                      <div className={styles.quoteIcon}>
                        <img src={quoteImg} alt="quote" />
                      </div>
                      <p className={styles.text}>{quote}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className={styles.btns}>
            <button
              onClick={() => setCurrentSlide((prev) => prev - 1)}
              className={styles.btn}
            >
              <img src={leftBtn} alt="leftBtn" />
            </button>
            <button
              onClick={() => setCurrentSlide((next) => next + 1)}
              className={styles.btn}
            >
              <img src={rightBtn} alt="rigthBtn" />
            </button>
          </div>

          <div className={styles.dots}>
            {slidesData.map((_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${
                  currentSlide === i + 1 ? styles.active : ""
                }`}
                onClick={() => setCurrentSlide(i + 1)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
