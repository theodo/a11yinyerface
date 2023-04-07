import type { NextPage } from 'next';
import useSwr from 'swr';
import { Product } from 'src/types/product';
import { useColorFilterSimulator } from 'src/simulators';
import { COLOR_FILTER_ID } from 'src/simulators/types';
import PageGridTemplate from 'src/components/ui/PageGridTemplate/PageGridTemplate';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const FruitsPage: NextPage = () => {
	const { data, error } = useSwr<Product[]>('/api/product/fruits', fetcher);

	useColorFilterSimulator([COLOR_FILTER_ID.PROTANOPIA]);

	return (
		<>
			<PageGridTemplate data={data} error={error} />
		</>
	);
};

export default FruitsPage;