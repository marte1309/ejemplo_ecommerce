import { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../pages/Home';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Routes(props) {

	useEffect(() => {
		//console.log(props);
	}, [props])

	return (
		<>
			<Header/>
				<Switch>
					<Route path="/" exact>
						<Home/>
					</Route>
					<Route path="/product/:id" exact>
						<Home/>
					</Route>
					<Route path="/cart" exact>
						<Home/>
					</Route>
					<Route path="/checkout" exact>
						<Home/>
					</Route>
				</Switch>
			<Footer/>
		</>
	)
}

const mapStateToProps = state => {
	return state.Auth;
}

const mapDispatchToProps = dispatch => {
	return {
		authorize: (value) => {
			dispatch({type: 'AUTH', value: value});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
