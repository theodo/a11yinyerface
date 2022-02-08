import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>a11yinyerface</title>
				<meta
					name='description'
					content='A worst-practice accessibility experiment'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			a11yinyerface
		</>
	);
};

export default Home;
