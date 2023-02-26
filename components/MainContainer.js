import Head from 'next/head';
import React from 'react';
import NavLink from './NavLink';
import styles from '../styles/MainContainer.module.scss'

const MainContainer = ({ children, keywords, title }) => {
	return (
		<>
			<Head>
				<meta keywords={"nextjs, learning" + keywords} />
				<title>{title}</title>
			</Head>
			<div className='navbar'>
				<NavLink href={'/'} text={"Home"} />
				<NavLink href={'/users'} text={"Users"} />
			</div>
			<div className={styles.container}>
				{children}
			</div>
		</>
	);
};

export default MainContainer;