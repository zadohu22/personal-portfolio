import React from 'react';
import image from '../images/received_787813755812499-modified.png';

const Hero2 = () => {
	return (
		<div className='w-full h-full flex flex-col'>
			<div className='w-full h-[40%] bg-blue-300 skew-y-12 fixed z-[-1]'></div>
			<h1 className='name text-[5em] ml-4 leading-tight sm:mt-8 sm:ml-16 text-black'>
				Zachary Hurst
			</h1>

			<div className='w-full h-[75%] flex flex-col justify-center items-center'>
				<img className='w-[150px] h-[150px] mb-10' src={image} />
				<div className='w-[75%] h-[50%] mt-4 border-2 border-solid mb-10 border-[#93c5fd]'>
					<p className='text-center'>Self-taught developer</p>
				</div>
			</div>
		</div>
	);
};

export default Hero2;
