import {Link} from "react-router-dom";

import useSwr, {useSWRConfig} from 'swr'
import axios from "axios";

export const ProductList = () => {
	const {mutate} = useSWRConfig()
	const fetcher = async () => {
		const respon = await axios.get('http://localhost:5000/products/')
		console.log('get')
		return respon.data
                                               	}
	const {data} = useSwr('products', fetcher)
	if (!data) return <h2>Loading</h2>


	const handleDelete = async (id) => {
		await axios.delete('http://localhost:5000/product/' + id)
		mutate('products')
	}
	return (
			<div className={'flex flex-col mt-5 ml-8'}>
				<div className="w-full">
					<div className="relative shadow rounded-lg mt-3">
						<Link className='bg-green-500
						hover:bg-green-700 border border-slate-100
						text-white font-bold py-2 px-4 rounded-lg'
						      to={'/add'}>Add New</Link>
						<table className={'w-full text-sm text-left text-gray-500 mt-8'}>
							<thead className={'text-xs text-gray-700 uppercase bg-gray-100'}>
							<tr>
								<td className={'py-3 px-1 text-center'}>No</td>
								<td className={'py-3 px-6 '}>Product Name</td>
								<td className={'py-3 px-6 '}>Price</td>
								<td className={'py-3 px-1 text-center'}>Action</td>
							</tr>
							</thead>
							<tbody>

							{data.map((produk, index) => {
								return (
										<tr key={produk.id} className={'bg-white border-b'}>
											<td className={'py-3 px-1 text-center'}>{index + 1}</td>
											<td className={'py-3 px-6 font-medium text-gray-900'}>{produk.name}</td>
											<td className={'py-3 px-6 '}>{produk.price}</td>
											<td className={'py-3 px-1 text-center'}>
												<Link to={'/edit/' + produk.id} className={'font-medium bg-blue-400 hover:bg-blue-500 px-3' +
														'py-1 rounded text-white mr-1 p-2'}>Edit</Link>

												<button onClick={() => handleDelete(produk.id)}
												        className={'font-medium bg-red-300 hover:bg-red-500 px-3' +
														        'py-1 rounded text-white mr-1 p-2'}>Delete
												</button>
											</td>
										</tr>)
							})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
	);
}