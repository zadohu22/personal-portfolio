/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { MdDesktopWindows } from 'react-icons/md';
import { GoMarkGithub } from 'react-icons/go';

const Card = (props) => {
	return (
		<div className='card w-96 h-98 bg-base-100 shadow-xl border-2 border-solid border-white p-4 place-self-center mb-8'>
			<figure>
				<img
					className='h-[250px] object-fit border-2 border-white border-solid rounded-md'
					src={props.image}
					alt='project'
				/>
			</figure>
			<div className='card-body p-2'>
				<h2 className='card-title'>{props.title}</h2>
				<p className='mb-2 h-[72px]'>{props.description}</p>
				<div className='card-actions justify-start text-3xl flex gap-6'>
					<a
						className='cursor-pointer transition ease-in-out delay-75 duration-300 hover:rotate-[360deg]'
						href={props.liveLink}
						target='_blank'
					>
						<MdDesktopWindows />
					</a>
					<a
						className='cursor-pointer transition ease-in-out delay-75 duration-300 hover:rotate-[360deg]'
						href={props.repoLink}
						target='_blank'
					>
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
