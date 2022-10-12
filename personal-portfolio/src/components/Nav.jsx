import React from 'react';

const Nav = () => {
	return (
		<div className='navbar bg-base-100 h-[10%]'>
			<div className='flex-1'>
				<a className='btn btn-ghost normal-case text-xl'>Zachary Hurst</a>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal p-0'>
					<li>
						<a>About</a>
					</li>
					<li>
						<a>Projects</a>
					</li>
					<li>
						<a>Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
