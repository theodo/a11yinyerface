import { Container, CircularProgress, Grid } from '@mui/material';
import type { NextPage } from 'next';
import AppBar from 'components/ui/AppBar/AppBar';
import useSwr from 'swr';
import ProductCardImage from 'src/components/ui/Cards/ProductCardImage/ProductCardImage';
import { Product } from 'src/types/product';
import { useSimulator } from 'src/simulators';
import { SIMULATE_EFFECT } from 'src/simulators/types';
import { shuffle } from 'lodash-es';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const FruitsDistractionsPage: NextPage = () => {
	const { data, error } = useSwr<Product[]>('/api/product/fruits', fetcher);

	useSimulator([SIMULATE_EFFECT.DRUNKEN_MOUSE]);

	if (data === undefined || error) {
		return <CircularProgress />;
	}

	return (
		<>
			<AppBar />
			<Container>
				<Grid container spacing={4} marginY={2}>
					{shuffle(data).map((product) => (
						<Grid key={product.id} item xs={3}>
							<ProductCardImage product={product} />
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default FruitsDistractionsPage;
