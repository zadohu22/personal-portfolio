import React from 'react';
import Card from './Card';
import cookBookImg from '../images/image.psd.png';
import waterImg from '../images/water.psd.png';
import pokemonImg from '../images/pokemon.png';

// Card props are image, title, description, badgeOne, badgeTwo
const Projects = () => {
	return (
		<>
			<h1 className='text-[3em] lg:text-[5em] name text-center mb-10'>
				Projects
			</h1>
			<div className='grid grid-cols-1 items-center place-content-center md:grid-cols-2 xl:grid-cols-3'>
				<Card
					image={cookBookImg}
					title={'CookBook App'}
					description={
						'Made with React and Firebase. Log in with Google, search, save and delete recipes to your personal Cookbook. '
					}
					liveLink={'https://cookbook-3b981.web.app/'}
					repoLink={'https://github.com/zadohu22/cookbook'}
					badgeOne={'React'}
					badgeTwo={'Firebase'}
				/>

				<Card
					image={waterImg}
					title={'Store Page with Cart'}
					description={
						'A store page where you can add items to your cart, and checkout.'
					}
					liveLink={'https://zadohu22.github.io/store-page-deploy/'}
					repoLink={'https://github.com/zadohu22/store-page-deploy'}
					badgeOne={'React'}
					badgeTwo={'Tailwind'}
				/>

				<Card
					image={pokemonImg}
					title={'Pokemon Memory Game'}
					description={`First React project, don't click on the same Pokemon twice, how high can you score?`}
					liveLink={'https://zadohu22.github.io/memory-card-deploy/'}
					repoLink={
						'https://github.com/zadohu22/memory-card/tree/main/memory-card/src'
					}
					badgeOne={'React'}
					badgeTwo={'API'}
				/>
			</div>
		</>
	);
};

export default Projects;
