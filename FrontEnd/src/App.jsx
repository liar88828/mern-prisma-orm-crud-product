import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ProductList} from "./containers/ProductList";
import AddProduct from "./containers/AddProduct";
import {EditProduct} from "./containers/EditProduct";

function App() {
	return (
			<Router>
				<div className={'container'}>
					<Routes>
						<Route path='/' element={<ProductList/>}/>
						<Route path='/add' element={<AddProduct/>}/>
						<Route path='/edit/:id' element={<EditProduct/>}/>
					</Routes>
				</div>
			</Router>
	)
}

export default App
