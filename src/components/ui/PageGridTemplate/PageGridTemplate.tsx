import { CircularProgress, Container, Grid } from '@mui/material';
import AppBar from 'components/ui/AppBar/AppBar';
import ProductCardImage from 'src/components/ui/Cards/ProductCardImage/ProductCardImage';
import { Product } from 'src/types/product';
import { shuffle } from 'lodash-es';


export interface IPageGridTemplate {
	data: Product[] | undefined;
	error: Error;
}


const PageGridTemplate: React.FC<IPageGridTemplate> = ({ data, error }) => {

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

export default PageGridTemplate;
