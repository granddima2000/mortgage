import { useState } from "react";
import Container from "../container/Container";
import VideoBlock from "../videoBlock/VideoBlock";
import styles from "./journeySection.module.scss";

const JourneySection = () => {
  const videoData = [
    {
      id: 1,
      descr: "The difference between «fixed rate» and «adjustable»",
      time: "0:29",
    },
    {
      id: 2,
      descr: "What are points and credits?",
      time: "0:27",
    },
    {
      id: 3,
      descr: "Why a mortgage is so much more than just a rate?",
      time: "0:34",
    },
  ];

  const [videoBlocks, setVideoBlocks] = useState(videoData);

  const handleBlockClick = (index) => {
    setVideoBlocks((prev) => {
      const clickedBlock = prev[index];
      const otherBlocks = prev.filter((_, i) => i !== index);
      return [clickedBlock, ...otherBlocks];
    });
  };

  return (
    <section className={styles.journey}>
      <Container>
        <h2 className={styles.title}>Your mortgage journey is a story</h2>
        <p className={styles.subtitle}>It's not just about clicking a button</p>
        <div className={styles.content}>
          <div className={styles.leftWrapper}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <h3 className={styles.stepTitle}>Get positioned</h3>
              <hr className={styles.divider}></hr>
              <div className={styles.descr}>
                Structure, pre-approval, gathering, put them <br />
                into the position get the offer accepted.
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <h3 className={styles.stepTitle}>Prep the offer</h3>
              <hr className={styles.divider}></hr>
              <div className={styles.descr}>
                Terms of your offer, how quickly you can turn things around and
                who your lenders is advising.
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <h3 className={styles.stepTitle}>Finalize Closing</h3>
              <hr className={styles.divider}></hr>
              <div className={styles.descr}>
                Put the final touches on from contract to close. Close the deal.
              </div>
            </div>
          </div>
          <div className={styles.rightWrapper}>
            <div className={styles.gridContainer}>
              {videoBlocks.map((video, i) => (
                <VideoBlock
                  key={video.id}
                  descr={video.descr}
                  time={video.time}
                  isActive={i === 0}
                  onClick={() => handleBlockClick(i)}
                />
              ))}
            </div>
          </div>

          <div className={styles.nav}>
            <div className={styles.circle}></div>
            <div className={styles.dottedLine}></div>
            <div className={`${styles.circle} ${styles.circleActive}`}></div>
            <div className={styles.dottedLine}></div>
            <div className={styles.circle}></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JourneySection;
