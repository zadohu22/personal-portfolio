import React, { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import image from '../received_787813755812499-modified.png';
import video from '../4K_5.mp4';
import videowebm from '../4K_5.webm';

const Hero = () => {
	const [isWriting, setIsWriting] = useState(true);
	setTimeout(() => {
		setIsWriting(false);
	}, 4500);
	return (
		<div className='w-full h-full flex flex-col sm:flex-row justify-center items-center'>
			<video
				autoPlay
				muted
				loop
				id='myVideo'
				className='h-full w-full object-fill fixed z-[-1]'
			>
				<source src={video} type='video/mp4' />
				<source src={videowebm} type='video/webm' />
			</video>
			{isWriting === false && (
				<img
					className='h-[200px] w-[200px] image object-contain sm:order-last'
					alt='profile'
					src={image}
				></img>
			)}
			<div className='flex flex-col h-[30%] w-[50%] sm:w-[30%] justify-center items-center'>
				<ReactTypingEffect
					className='text-[3em] lg:text-[5em] name text-center'
					text={"Hello, I'm Zach"}
					typingDelay={500}
					eraseDelay={100000000000}
					speed={50}
					cursor={' '}
				/>
				<ReactTypingEffect
					className='text-2xl lg:text-[3em] name text-center'
					text={'Web Developer'}
					typingDelay={2500}
					eraseDelay={100000000000}
					speed={100}
					cursor={' '}
				/>
			</div>
		</div>
	);
};

export default Hero;
