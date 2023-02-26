import React from 'react';
import MainContainer from '../components/MainContainer';
import styles from '../styles/404.module.scss';

const Error = () => {
	return (
		<MainContainer>
			<div className={styles["container"]}>
				<h1>Страница не существует!</h1>
			</div>
		</MainContainer>
	);
};

export default Error;