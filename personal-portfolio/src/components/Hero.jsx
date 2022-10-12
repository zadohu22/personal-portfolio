import React, { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import portrait from '../images/received_787813755812499-modified.png';
import video from '../video/4K_5.mp4';
import videowebm from '../video/4K_5.webm';

const Hero = () => {
	const [isWriting, setIsWriting] = useState(true);
	setTimeout(() => {
		setIsWriting(false);
	}, 4000);
	return (
		<div className='w-full h-full flex flex-col sm:flex-row justify-center items-center border-b-2 border-white'>
			<video
				autoPlay
				muted
				loop
				id='myVideo'
				className='h-full w-full object-fill absolute top-0 z-[-1]'
			>
				<source src={video} type='video/mp4' />
				<source src={videowebm} type='video/webm' />
			</video>

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
					speed={50}
					cursor={' '}
				/>
			</div>
			{isWriting === false && (
				<div className='flex flex-col justify-center items-center w-60 p-4 rounded-md  h-60 sm:h-80'>
					<img
						className='h-[100px] w-[100px] image object-contain'
						alt='profile'
						src={portrait}
					></img>
					<div className='w-60 text-center'>
						<p className='mt-2'>
							Self Taught Developer moving out of Customer Service, and into Web
							Development.
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Hero;
