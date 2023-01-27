import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";


export function EditProduct() {
	const navigate = useNavigate()
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault()
		await axios.post('http://localhost:5000/product/', {
			name: name, price: parseInt(price)
		})
		navigate('/')
	}
	const inputName = 'w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow';


	return (<div className={'max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow'}>
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
					/>

				</div>
				<button type={"submit"}
				        className={'w-full py-3 font text-white bg-indigo-600 rounded-lg border-indigo-505 hover:shadow '}>Submit
				</button>
			</div>


		</form>

	</div>);
}


