import Link from "next/link"
import styles from '../styles/NavLink.module.scss'

const NavLink = ({ text, href }) => {
	return (
		<Link href={href} className={styles.link}>
			{text}
		</Link>
	);
};

export default NavLink;