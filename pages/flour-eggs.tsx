import { Container, CircularProgress, Grid } from '@mui/material';
import type { NextPage } from 'next';
import AppBar from 'components/ui/AppBar/AppBar';
import useSwr from 'swr';
import ProductCardTinyButton from 'src/components/ui/cards/ProductCardTinyButton/ProductCardTinyButton';
import { Product } from 'src/types/product';
import { useSimulator } from 'src/simulators';
import { SIMULATE_EFFECT } from 'src/simulators/types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const FlourAndEggs: NextPage = () => {
	const { data, error } = useSwr<Product[]>('/api/product/flour_eggs', fetcher);

	useSimulator([SIMULATE_EFFECT.DRUNKEN_MOUSE]);

	if (data === undefined || error) {
		return <CircularProgress />;
	}

	console.log(data);

	return (
		<>
			<AppBar />
			<Container>
				<Grid container spacing={4} marginY={2}>
					{data.map((product) => (
						<Grid key={product.id} item xs={3}>
							<ProductCardTinyButton product={product} />
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default FlourAndEggs;
