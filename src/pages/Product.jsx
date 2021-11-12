import { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';

const Product = (props) => {
	const [product, setProduct] = useState({});

	const history = useHistory();
	const params = useParams();

	useEffect(() => {
		let product = props.products.find(product => product.id == params.id)

		if(product) {
			setProduct(product);
		} else {
			setProduct({});
		}
	}, [props.products])

	const addProduct = useCallback((product) => {
		props.addproduct(product);
	}, [props])

	return (
		<div className="product">
			<h1>{product.nombre}</h1>
			<div className="product-container">
				<div className="product-image">
					<img src={product.imagen} alt="producto-foto"/>
				</div>
				<div className="product-info">
					<p className="column">
						<label>Descripción:</label>
						{product.descripcion}
					</p>
					<button onClick={() => addProduct(product)}>Agregar</button>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		...state.Products
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addproduct: (value) => dispatch({type: "CART_ADD", value})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);