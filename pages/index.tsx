import { Stack, Container, Typography, Fab } from '@mui/material';
import type { NextPage } from 'next';
import SendIcon from '@mui/icons-material/Send';
import AppBar from 'components/ui/AppBar/AppBar';
import Link from 'components/ui/Link/Link';

const Home: NextPage = () => {
	return (
		<>
			<AppBar />
			<Container>
				<Stack
					py={3}
					spacing={4}
					textAlign='center'
					height='100vh'
					justifyContent='center'
				>
					<Typography variant='h1'>
						Welcome to <br /> a11y inyerface
					</Typography>

					<Link href='/fruits'>
						<Fab color='secondary' variant='extended' size='large'>
							Start <SendIcon sx={{ ml: 2 }} />
						</Fab>
					</Link>
				</Stack>
			</Container>
		</>
	);
};

export default Home;
