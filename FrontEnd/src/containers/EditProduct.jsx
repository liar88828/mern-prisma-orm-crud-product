import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";


export function EditProduct() {
	const navigate = useNavigate()
	const {id} = useParams()
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');

	useEffect(() => {
		axios.get('http://localhost:5000/product/' + id)
				.then(res => {
					setName(res.data.name)
					setPrice(res.data.price)
					console.log('get')
				})
	}, [id]);


	const handleSubmit = async (e) => {
		e.preventDefault()
		await axios.patch('http://localhost:5000/product/'+ id, {
			name: name, price: parseInt(price)
		})
		navigate('/')
		console.log('patch')
	}

	const inputName = 'w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow';

	return (
			<div className={'max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow'}>
				<h1>EDIT PRODUCT</h1>
				<form onSubmit={handleSubmit}
				      className={'my-10`'}>
					<div className="flex flex-col">
						<div className="mb-5">
							<label className={'font-bold text-slate-700'}>
								Product Name </label>
							<input type="text"
							       onChange={e => {
								       setName(e.target.value)
							       }}
							       placeholder='Product'
							       className={inputName}
							       value={name}
							/>
							<label className={'font-bold text-slate-700'}>
								Price
							</label>
							<input type="number"
							       placeholder={'Price Name'}
							       onChange={e => {
								       setPrice(e.target.value)
							       }}
							       className={inputName}
							       value={price}
							/>

						</div>
						<button type={"submit"}
						        className={'w-full py-3 font text-white bg-indigo-600 rounded-lg border-indigo-505 hover:shadow '}>Submit
						</button>
					</div>


				</form>

			</div>);
}


