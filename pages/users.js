import Link from "next/link";
import MainContainer from "../components/MainContainer";
import styles from "../styles/users.module.scss"

const Users = ({ users }) => {

	return (
		<MainContainer keywords={"users"} title="Users">
			<h1>Список пользователей</h1>
			<ul>
				{users.map(user =>
					<li key={user.id} className={styles["user-link"]}>
						<Link href={`/users/${user.id}`}>
							{user.name}
						</Link>
					</li>
				)}
			</ul>
		</MainContainer>
	);
};

export default Users;

export async function getStaticProps(context) {

	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const users = await response.json();

	return {
		props: { users },
	}
}