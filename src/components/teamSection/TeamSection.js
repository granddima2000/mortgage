
import styles from './teamSection.module.scss';
import deals from '../../resources/skillsIcon/briefcase.svg'
import compas from '../../resources/skillsIcon/compass.svg'
import dataBase from '../../resources/skillsIcon/database.svg'
import docs from '../../resources/skillsIcon/docs.svg'
import globe from '../../resources/skillsIcon/globe.svg'
import home from '../../resources/skillsIcon/home.svg'
import helper from '../../resources/skillsIcon/helper.svg'
import users from '../../resources/skillsIcon/users.svg'
import manager1 from '../../resources/manager1.png'
import manager2 from '../../resources/manager2.png'
import triangle from '../../resources/Triangle.png'



const TeamSection = () => {
	return (
		<section className={styles.teamSection}>
			<div className={styles.container}>
			<h1 className={styles.title}>Getting a mortgage funded takes a village.</h1>
			<h2 className={styles.subtitle}>Well, not quite a village, but two of the villages best lending heroes!</h2>
			<div className={styles.managerCards}>
				<div className={styles.managerCard}>
					<div className={styles.managerWrapper}>
						<div className={styles.photo}>
							<img src={manager1} alt="manager" />
						</div>
						<div className={styles.btnWrapper}>
							<div className='pulseBtn'>
								<img className={styles.triangle} src={triangle} alt="triangle" />
							</div>
							<div className={styles.pulseText}>Meet Justin</div>
						</div>
					</div>
					<div className={styles.managerTitle}>The master mind</div>
					<div className={styles.managerName}>Justin</div>
					<div className={styles.divider}></div>
					<div className={styles.managerDescr}>Rates change, but every mortgage journey starts with
					a relationship. (Pssst...it’s not just about clicking a button)</div>
					<div className={styles.skillsName}>Skills</div>
					<div className="divider"></div>
					<div className={styles.skillsWrapper}>
						<div className={styles.skillsItem}>
							<div className={styles.skillsImg}>
								<img src={deals} alt="deals" />
							</div>
							<div className={styles.skillsDescr}>Deals</div>
						</div>
						<div className={styles.skillsItem}>
							<div className={styles.skillsImg}>
								<img src={compas} alt="compas" />
							</div>
							<div className={styles.skillsDescr}>Find the right
							way</div>
						</div>
						<div className={styles.skillsItem}>
							<div className={styles.skillsImg}>
								<img src={dataBase} alt="dataBase" />
							</div>
							<div className={styles.skillsDescr}>Mortgage
							«database»</div>
						</div>
						<div className={styles.skillsItem}>
							<div className={styles.skillsImg}>
								<img src={docs} alt="docs" />
							</div>
							<div className={styles.skillsDescr}>Docs master</div>
						</div>
					</div>
				</div>
				<div className={styles.managerCard}>
					<div className={styles.managerWrapper}>
						<div className={styles.photo}>
							<img src={manager2} alt="manager" />
						</div>
						<div className={styles.btnWrapper}>
							<div className='pulseBtn'>
								<img className={styles.triangle} src={triangle} alt="triangle" />
							</div>
							<div className={styles.pulseText}>Meet Scott</div>
						</div>
					</div>
					<div className={styles.managerTitle}>The master mind</div>
					<div className={styles.managerName}>Justin</div>
					<div className={styles.divider}></div>
					<div className={styles.managerDescr}>Rates change, but every mortgage journey starts with
					a relationship. (Pssst...it’s not just about clicking a button)</div>
					<div className={styles.skillsName}>Skills</div>
					<div className="divider"></div>
					<div className={styles.skillsWrapper}>
						<div className={styles.skillsItem}>
							<div className={styles.skillsImg}>
								<img src={globe} alt="globe" />
							</div>
							<div className={styles.skillsDescr}>Linguist</div>
						</div>
						<div className={styles.skillsItem}>
							<div className={styles.skillsImg}>
								<img src={home} alt="home" />
							</div>
							<div className={styles.skillsDescr}>Perfect place
							searcher</div>
						</div>
						<div className={styles.skillsItem}>
							<div className={styles.skillsImg}>
								<img src={helper} alt="helper" />
							</div>
							<div className={styles.skillsDescr}>Helper</div>
						</div>
						<div className={styles.skillsItem}>
							<div className={styles.skillsImg}>
								<img src={users} alt="users" />
							</div>
							<div className={styles.skillsDescr}>Communication
							Guru</div>
						</div>
					</div>
				</div>
			</div>
			
			</div>
		</section>
	);
};

export default TeamSection;