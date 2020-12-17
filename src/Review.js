import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
	const [ index, setIndex ] = useState(0);

	const { name, job, image, text } = people[index];

	const checkNumber = (num) => {
		if (num > people.length - 1) return 0;
		if (num < 0) return people.length - 1;
		return num;
	};

	const nextPerson = () => {
		setIndex((curIndex) => {
			let newIndex = curIndex + 1;
			return checkNumber(newIndex);
		});
	};

	const prevPerson = () => {
		setIndex((curIndex) => {
			let newIndex = curIndex - 1;
			return checkNumber(newIndex);
		});
	};

	const randomPerson = () => {
		setIndex(() => {
			const rand = Math.floor(Math.random() * people.length);
			// to avoid repeateation if the number == index so add 1
			return rand === index ? checkNumber(rand + 1) : rand;
		});
	};

	return (
		<article className='review'>
			<div className='img-container'>
				<img src={image} alt={name} className='person-img' />
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{job}</p>
			<p className='info'>{text}</p>
			<div className='button-container'>
				<button className='prev-btn' onClick={prevPerson}>
					<FaChevronLeft />
				</button>
				<button className='next-btn' onClick={nextPerson}>
					<FaChevronRight />
				</button>
			</div>
			<button className='random-btn' onClick={randomPerson}>
				surprise me
			</button>
		</article>
	);
};

export default Review;
