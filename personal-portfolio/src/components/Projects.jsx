import React from 'react';
import Card from './Card';
import cookBookImg from '../images/image.psd.png';
import waterImg from '../images/water.psd.png';

// Card props are image, title, description, badgeOne, badgeTwo
const Projects = () => {
	return (
		<>
			<h1 className='text-[3em] lg:text-[5em] name text-center'>Projects</h1>
			<div className='grid grid-cols-1 items-center place-content-center sm:grid-cols-2 md:-grid-cols-3'>
				<Card
					image={cookBookImg}
					title={'CookBook App'}
					description={
						'Made with React and Firebase. Log in with Google, search, save and delete recipes to your personal Cookbook. '
					}
					badgeOne={'React'}
					badgeTwo={'Firebase'}
				/>

				<Card
					image={waterImg}
					title={'Store Page with Cart'}
					description={
						'A store page where you can add items to your cart, and checkout.'
					}
					badgeOne={'React'}
					badgeTwo={'Tailwind'}
				/>
			</div>
		</>
	);
};

export default Projects;
