import { connect } from 'react-redux';

const Home = (props) => {
	return (
		<div className="home">
			<div className="title">
				<h1>Ejemplo Ecommerce React + Redux</h1>
			</div>

			<div className="product-container">
				{props.products.map(product =>
					<div key={product.id} className="product-card">
						<div className="product-card-image">
							<img src={product.imagen} alt={`product-${product.id}`}/>
						</div>
						<div className="product-name">
							<h1>{product.nombre}</h1>
						</div>
						<div className="product-price">
							<h4>$ {parseFloat(product.precio).toFixed(2)}</h4>
						</div>
						<button>Agregar</button>
					</div>
				)}
			</div>
		</div>
	)
}

const MapStateToProps = (state) => {
	return {
		...state.Products
	}
}

export default connect(MapStateToProps)(Home);