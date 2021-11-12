import { useCallback } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = (props) => {
	const addProduct = useCallback((product, event) => {
		event.stopPropagation();
		event.preventDefault();

		props.addproduct(product);
	}, [props])

	return (
		<div className="home">
			<div className="title">
				<h1>Ejemplo Ecommerce React + Redux</h1>
			</div>

			<div className="product-container">
				{props.products.map(product =>
					<Link key={product.id} to={`/product/${product.id}`} className="product-card">
						<div className="product-card-image">
							<img src={product.imagen} alt={`product-${product.id}`}/>
						</div>
						<div className="product-name">
							<h1>{product.nombre}</h1>
						</div>
						<div className="product-price">
							<h4>$ {parseFloat(product.precio).toFixed(2)}</h4>
						</div>
						<button onClick={(event) => addProduct(product, event)}>Agregar</button>
					</Link>
				)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);