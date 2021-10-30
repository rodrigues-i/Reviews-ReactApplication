import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {FcNext, FcPrevious } from 'react-icons/fc';

const Reviews = ({ people }) => {
	const [index, setIndex] = useState(0)
	const {image, name, job, text} = people[index];

	return (
	<section>
		<h1>Our reviews</h1>
		<article>
			<img src={image} alt={name} />
			<div>
				<h3>{name}</h3>
				<h3>{job}</h3>
				<p>{text}</p>
			</div>
			<button>
				<FcPrevious />
			</button>
			<button>
				<FcNext />
			</button>
		</article>
	</section>
	);
}

Reviews.propTypes = {
	people: PropTypes.array.isRequired
}

export default Reviews;