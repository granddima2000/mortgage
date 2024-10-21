import styles from './footerSection.module.scss';

// import logo from '../../resources/logo/NAF_Logo.svg';
import logo from '../../resources/logo/NAF_Logo.png';

// Я не знаю как перекрасить img logo
const FooterSection = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.header}>
					<div className={styles.logo}>
						<img src={logo} alt="logo" />
					</div>
					<div className={styles.button}>Schedule a time</div>		
				</div>
				<span className={styles.divider}></span>
				
				{/* Как вообще лучше: писать через sectionName или просто name? Не слишком ли общие слова для классов "wrap","header" и т.д.? */}
				<div className={styles.wrap}>
					<div className={styles.section}>
						<h4 className={styles.title}>Contact us</h4>
						<div className={styles.underItem}>
							<addres className={styles.entry}>14511 Myford Road, Suite 100, Tustin, CA 92780</addres>
							<p className={styles.entry}>800-450-2010</p>
							<a className={styles.entry} href="customerservice@nafinc.com">customerservice@nafinc.com</a>
						</div>
						
					</div>
					<div className={styles.section}>
						<h4 className={styles.title}>Education</h4>
						<div className={styles.underItem}>
							<a className={styles.entry} href="#">Blog</a>
							<a className={styles.entry} href="#">Ebook</a>
							<a className={styles.entry} href='#'>Webinar</a>
						</div>
					</div>
					<div className={styles.section}>
						<h4 className={styles.title}>Education</h4>
						<div className={styles.underItem}>
							<a className={styles.entry} href="#">Terms of use</a>
							<a className={styles.entry} href="#">Privacy policy</a>
						</div>
						
					</div>
					<div className={styles.section}>
						<p className={styles.descr}>
							New American Funding makes Customer Service our number one priority. We encourage you to call our Corporate Customer Service department at 800-450-2010 ext. 7100 between 8 am and 5:00 pm Pacific or email us anytime at customerservice@nafinc.com for any complaint resolution you may have regarding the origination of your loan.
						</p>
						<p className={styles.descr}>
							This site is not authorized by the New York State Department of Financial Services. No mortgage solicitation activity or loan applications for properties located in the State of New York can be facilitated through this site.
							Read more at <span>https://www.newamericanfunding.com/#SsSswc4OzfksTC0E.99</span>
						</p>
					</div>

				</div>
				<span className={styles.divider}></span>
				<div className={styles.lastDescr}>
					If you received a letter from New American Funding and would like to be removed from our mailing list, please call 800-450-2010. <br />
					© 2018 Broker Solutions, Inc. DBA New American Funding. All Rights Reserved.
				</div>
			</div>
		</footer>	
	);
};

export default FooterSection;