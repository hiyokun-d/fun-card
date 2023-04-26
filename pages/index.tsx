import type { NextPage } from "next";
import styles from "../styles/card.module.css";
import { useRef } from "react";

const Home: NextPage = () => {
const noButtonRef = useRef<HTMLButtonElement>(null);
const cardRef = useRef<HTMLDivElement>(null);

   const handleClick = () => {
			if (noButtonRef.current && cardRef.current) {
				const noButton = noButtonRef.current;
				const buttonRect = noButton.getBoundingClientRect();
				const maxX = 100
				const maxY = 100
				let x = Math.floor(Math.random() * maxX);
				let y = Math.floor(Math.random() * maxY);

				// Make sure the button stays within the card
				x = Math.max(x, 0);
				y = Math.max(y, 0);

				noButton.style.transition = "transform 0.2s ease-in-out"
				noButton.style.transform = `translateX(${x}px) translateY(${y}px)`;
				console.log(`New button position: (${x}, ${y})`);
			}
		};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={`${styles.indexCard} ${styles.allCards}`} ref={cardRef}>
					<div className={styles.cardImage} />
					<h1>Apakah kamu mau setiap hari dikasih tugas?</h1>
					<p>
						kalo mau silahkan di klik tombol di bawah kalo tidak mau sih boleh
						boleh saja silahkan kalo saya sarankan lebih baik iyain aja itupun
						kalo mau gak maksa saya :)
					</p>

					<div className={styles.containerButton}>
						<button className={`${styles.cardButton}`}>yes</button>
						<button
							className={`${styles.cardButton}`}
							ref={noButtonRef}
							onClick={handleClick}
						>
							no
						</button>
					</div>
				</div>
				<div className={`${styles.allCards}`}></div>
				<div className={`${styles.allCards}`}></div>
				<div className={`${styles.allCards}`}></div>
				<div className={`${styles.allCards}`}></div>
				<div className={`${styles.allCards}`}></div>
				<div className={`${styles.allCards}`}></div>
			</div>
		</div>
	);
};

export default Home;
