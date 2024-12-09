
import VideoBlock from '../videoBlock/VideoBlock';
import Container from '../container/Container';
import styles from './journeySection.module.scss';

// import triangle from '../../resources/icon/Triangle.svg';


const JourneySection = () => {

    const videoData = [
        {
          descr: "The difference between «fixed rate» and «adjustable»",
          time: "0:29"
        },
        {
          descr: "What are points and credits?",
          time: "0:27"
        },
        {
          descr: "Why a mortgage is so much more than just a rate?",
          time: "0:34"
        }
      ];

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
              <span className={styles.divider}></span>
              <div className={styles.descr}>Structure, pre-approval, gathering, put them <br />
              into the position get the offer accepted.</div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <h3 className={styles.stepTitle}>Prep the offer</h3>
              <span className={styles.divider}></span>
              <div className={styles.descr}>Terms of your offer, how quickly you can turn 
              things around and who your lenders is advising.</div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <h3 className={styles.stepTitle}>Finalize Closing</h3>
              <span className={styles.divider}></span>
              <div className={styles.descr}>Put the final touches on from contract to close. 
              Close the deal.</div>
            </div>
          </div>
          <div className={styles.rightWrapper}>
            <div className={styles.gridContainer}>
                {videoData.map((video, i) => (
                    <VideoBlock key={i} descr={video.descr} time={video.time}/>
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