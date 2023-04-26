import type { NextPage } from "next";
import styles from "../styles/card.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={`${styles.indexCard} ${styles.allCards}`}>
					<div className={styles.cardImage} />
					<h1>This is a card</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
						quaerat illo cumque, quos molestias, deserunt voluptatibus quasi
						alias doloremque odio sunt sit modi praesentium minus hic incidunt
						nihil debitis fugiat.
					</p>
					<button className={`${styles.cardButton} ${styles.cardYesButton}`}>
						yes
					</button>
					<button className={`${styles.cardButton} ${styles.cardNoButton}`}>
						no
					</button>
				</div>
				<div className={`${styles.allCards} ${styles.card2}`}></div>
				<div className={`${styles.allCards} ${styles.card3}`}></div>
				<div className={`${styles.allCards} ${styles.card4}`}></div>
				<div className={`${styles.allCards} ${styles.card5}`}></div>
				<div className={`${styles.allCards} ${styles.card6}`}></div>
				<div className={`${styles.allCards} ${styles.card7}`}></div>
			</div>
		</div>
	);
};

export default Home;
