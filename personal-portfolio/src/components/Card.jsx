import React from 'react';
import { MdDesktopWindows } from 'react-icons/md';
import { GoMarkGithub } from 'react-icons/go';

const Card = (props) => {
	return (
		<div className='card w-96 h-98 bg-base-100 shadow-xl border-2 border-solid border-white p-4 place-self-center'>
			<figure>
				<img className='h-[170px]' src={props.image} alt='project' />
			</figure>
			<div className='card-body p-2'>
				<h2 className='card-title'>{props.title}</h2>
				<p className='mb-2 h-[72px]'>{props.description}</p>
				<div className='card-actions justify-start text-3xl flex gap-6'>
					<a className='cursor-pointer' href={props.liveLink}>
						<MdDesktopWindows />
					</a>
					<a className='cursor-pointer' href={props.repoLink}>
						<GoMarkGithub />
					</a>
				</div>
				<div className='card-actions justify-end'>
					<div className='badge badge-outline'>{props.badgeOne}</div>
					<div className='badge badge-outline'>{props.badgeTwo}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
