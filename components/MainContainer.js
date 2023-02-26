import Head from 'next/head';
import React from 'react';
import NavLink from './NavLink';

const MainContainer = ({ children, keywords, title }) => {
	return (
		<>
			<Head>
				<meta keywords={"nextjs, learning" + keywords} />
				<title>{title}</title>
			</Head>
			<div className='navbar'>
				<NavLink href={'/'} text={"Главная"} />
				<NavLink href={'/users'} text={"Пользователи"} />
			</div>
			<div>
				{children}
			</div>
		</>
	);
};

export default MainContainer;