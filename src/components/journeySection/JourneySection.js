import styles from './journeySection.module.scss';

import triangle from '../../resources/icon/Triangle.png';


const JourneySection = () => {
	return (
		<section className={styles.journey}>
			<div className={styles.container}>
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
                <div className={styles.videoBlock}>
                    <div className={styles.videoWrapper}>
                        <div className={styles.btn}>
                            <img className={styles.triangle} src={triangle} alt="triangle" />
                        </div>
                        <div className={styles.videoDescr}>The difference between «fixed rate»
                        and «adjustable»</div>
                        <div className={styles.videoDuration}>0:29</div>
                    </div>
                    
                </div>
                <div className={styles.videoBlock}>
                    <div className={styles.videoWrapper}>
                        <div className={styles.btn}>
                            <img className={styles.triangle} src={triangle} alt="triangle" />
                        </div>
                        <div className={styles.videoDescr}>What are points and credits?</div>
                        <div className={styles.videoDuration}>0:27</div>
                    </div>
                </div>
                <div className={styles.videoBlock}>
                    <div className={styles.videoWrapper}>
                        <div className={styles.btn}>
                            <img className={styles.triangle} src={triangle} alt="triangle" />
                        </div>
                        <div className={styles.videoDescr}>Why a mortgage is so much more 
                        than just a rate?</div>
                        <div className={styles.videoDuration}>0:34</div>
                    </div>
                    
                </div>
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
        </div>

		</section>
		
	);
};

export default JourneySection;