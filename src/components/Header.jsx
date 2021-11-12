import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Carticon } from '../assets';

const Header = (props) => {
	return (
		<header>
			<div className="logo">
				<Link to="/">
					<h1>Ecommerce</h1>
				</Link>
			</div>
			<div className="cart-icon">
				<Link to="/cart">
					<img src={Carticon} alt="carticon"/>
					{props.cart.length > 0 && <span className="badge">{props.cart.length}</span>}
				</Link>
			</div>
		</header>
	)
}

const MapStateToProps = (state) => {
	return {
		...state.Cart
	}
}

export default connect(MapStateToProps)(Header);