import { connect } from 'react-redux';

const Cart = (props) => {
	const deleteProduct = (producto) => {
		props.deleteItem(producto);
	}

	return (
		<div className="cart">
			<div className="cart-container">
				{props.cart.map(product =>
					<div key={product.id} className="product-card">
						<div className="product-card-image">
							<img src={product.imagen} alt={`product-${product.id}`}/>
						</div>
						<div className="product-name">
							<h1>{product.nombre}</h1>
						</div>
						<div className="product-price">
							<label>Precio Unitario</label>
							<h4>$ {parseFloat(product.precio).toFixed(2)}</h4>
						</div>
						<div className="product-quantity">
							<label>Cantidad</label>
							<h4>{parseFloat(product.quantity).toFixed(0)}</h4>
						</div>
						<div className="product-total">
							<label>Importe</label>
							<h4>$ {parseFloat(product.precio * product.quantity).toFixed(2)}</h4>
						</div>
						<button onClick={() => deleteProduct(product)}>Eliminar</button>
					</div>
				)}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		...state.Cart
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteItem: (item) => dispatch({type: "CART_DELETE", value: item})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);