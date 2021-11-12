import { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';

import Login from '../pages/Login';
import NotFound from '../pages/404';

const Private = (props) => {
	const { component: Component, ...rest } = props;

	return (
		props.auth? 
		<Route {...rest}>

		</Route>
		:
		<Route>
			<Redirect to={{ pathname: '/', state: { from: props.location } }} />
		</Route>
	);
	/*return (
		<Route
			{...rest}
			render={(props) =>
				props.auth ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				)}
		/>
	)*/
}

function Routes(props) {

	useEffect(() => {
		//console.log(props);
	}, [props])

	return (
		<>
			{props.auth?
				<div>
					<Sidebar>
						<Redirect to="/"/>
						<Switch>
							<Private path="/" exact auth={props.auth}>
								Authorize
							</Private>
							<Private path="/one" auth={props.auth}>
								One
							</Private>
							<Private path="/two" auth={props.auth}>
								Two
							</Private>
							<Route path="*">
								<NotFound/>
							</Route>
						</Switch>
					</Sidebar>
				</div>
				:
				<div>
					<Redirect to="/login"/>
					<Switch>
						<Route path="/login" exact>
							<Login/>
						</Route>
					</Switch>
				</div>
			}
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
