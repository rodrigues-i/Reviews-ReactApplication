import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {FcNext, FcPrevious } from 'react-icons/fc';

const Reviews = ({ people }) => {
	const [index, setIndex] = useState(0)
	const {image, name, job, text} = people[index];

	const checkNumber = number => {
		if(number > people.length - 1) {
			return 0;
		}

		if(number < 0) {
			return people.length - 1;
		}

		return number;
	}

	function nextPerson() {
		let newIndex = index + 1;
		setIndex(checkNumber(newIndex));
	}

	const prevPerson = () => {
		let newIndex = index - 1;
		setIndex(checkNumber(newIndex));
	}

	function randomPerson() {
		let newIndex = Math.floor(Math.random() * people.length);
		if(newIndex === index) {
			return setIndex(checkNumber(newIndex + 1));
		}
		return setIndex(newIndex);
	}

	return (
	<section className='main-container'>
		<h1>Our reviews</h1>
		<article>
			<img src={image} alt={name} />
			<div className='person-info'>
				<h3 className='name'>{name}</h3>
				<h3 className='job'>{job}</h3>
				<div className='text'>
					<p>{text}</p>
				</div>
			</div>
			<div className='btn'>
				<button onClick={prevPerson}>
					<FcPrevious />
				</button>
				<button onClick={nextPerson}>
					<FcNext />
				</button>
			</div>
			<button onClick={randomPerson} className='random-person'>Surprise me</button>
		</article>
	</section>
	);
}

Reviews.propTypes = {
	people: PropTypes.array.isRequired
}

export default Reviews;