import { Container, CircularProgress, Box, Stack } from '@mui/material';
import type { NextPage } from 'next';
import AppBar from 'components/ui/AppBar/AppBar';
import useSwr from 'swr';
import ProductCard from 'src/components/ui/cards/ProductCard/ProductCard';
import { Product } from 'src/types/product';
import { useSimulator } from 'src/simulators';
import { SIMULATE_EFFECT } from 'src/simulators/types';
import { shuffle } from 'lodash-es';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const DairyCoffeePage: NextPage = () => {
	const { data, error } = useSwr<Product[]>(
		'/api/product/dairy_coffee',
		fetcher
	);

	useSimulator([SIMULATE_EFFECT.ZOOM]);

	if (data === undefined || error) {
		return <CircularProgress />;
	}

	console.log(data);

	return (
		<>
			<AppBar />
			<Container>
				<Stack direction='row' spacing={2} marginY={2}>
					{shuffle(data).map((product) => (
						<Box key={product.id} minWidth='150px'>
							<ProductCard product={product} />
						</Box>
					))}
				</Stack>
				<Stack direction='row' spacing={2} marginY={2}>
					{shuffle(data).map((product) => (
						<Box key={product.id} minWidth='150px'>
							<ProductCard product={product} />
						</Box>
					))}
				</Stack>
				<Stack direction='row' spacing={2} marginY={2}>
					{shuffle(data).map((product) => (
						<Box key={product.id} minWidth='150px'>
							<ProductCard product={product} />
						</Box>
					))}
				</Stack>
				<Stack direction='row' spacing={2} marginY={2}>
					{shuffle(data).map((product) => (
						<Box key={product.id} minWidth='150px'>
							<ProductCard product={product} />
						</Box>
					))}
				</Stack>
			</Container>
		</>
	);
};

export default DairyCoffeePage;
