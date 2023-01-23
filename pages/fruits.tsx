import { Container, CircularProgress, Grid } from '@mui/material';
import type { NextPage } from 'next';
import AppBar from 'components/ui/AppBar/AppBar';
import useSwr from 'swr';
import ProductCardImage from 'src/components/ui/cards/ProductCardImage/ProductCardImage';
import { Product } from 'src/types/product';
import { useColorFilterSimulator } from 'src/simulators';
import { COLOR_FILTER_ID } from 'src/simulators/types';
import { shuffle } from 'lodash-es';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const FruitsPage: NextPage = () => {
	const { data, error } = useSwr<Product[]>('/api/product/fruits', fetcher);
	useColorFilterSimulator([COLOR_FILTER_ID.PROTANOPIA]);

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

export default FruitsPage;
