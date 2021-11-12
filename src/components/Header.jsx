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
				</Link>
			</div>
		</header>
	)
}

export default Header;