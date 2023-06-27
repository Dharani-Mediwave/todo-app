import { useEffect, useState } from 'react';

const targetTime = new Date("2023-06-30").getTime();

function Countdown() {
	const [currentTime, setCurrentTime] = useState(Date.now());

	const timeBetween = targetTime - currentTime;
	const seconds = Math.floor((timeBetween / 1000) % 60);
	const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
	const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
	const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(Date.now());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<h3>Count down page</h3>
			<p>Deadline comes in {`days typeof is ${typeof days}`}</p>
			<p className="counter">
				<span>{days} days |</span>
				<span>{hours} hours |</span>
				<span>{minutes} min | </span>
				<span>{seconds} sec</span>
			</p>
		</div>
	);
}
export default Countdown;