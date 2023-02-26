import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from '../../styles/[id].module.scss';

const Func = ({ user }) => {
	const { query } = useRouter();

	return (
		<MainContainer keywords={user.name} title={user.name}>
			<div className={styles["user"]}>
				<h1 className={styles["user__name"]}>{user.name}:id/{query.id}</h1>
				<div className={styles["info"]}>
					<p>Email: {user.email}</p>
					<p>WebSite: {user.website}</p>
				</div>
			</div>
		</MainContainer>
	);
};

export default Func;

export async function getServerSideProps({ params }) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
	const user = await response.json();

	return {
		props: { user },
	}
}