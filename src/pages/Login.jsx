import { connect } from 'react-redux';
import { Loginbackground, Logo } from '../assets';
import InputText from '../components/InputText';

const Login = (props) => {
	//console.log(props);
	return (
		<div id="login" style={{backgroundImage: `url(${Loginbackground})`}}>
			<div className="login-container">
				<div className="logo">
					<img src={Logo} alt="4MegaBytes"/>
				</div>
				<form className="login-form" autocomplete="off">
					<InputText
						placeholder	= {"Usuario"}
						label		= {"Usuario"}/>
					<InputText
						placeholder	= {"Password"}
						label		= {"Password"}
						type		= {"password"}/>
				</form>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		...state
	}
}

export default connect(mapStateToProps)(Login)
