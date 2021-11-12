import { useHistory } from "react-router"

function Sidebar(props) {
	const history = useHistory();

	return (
		<>
			<ul>
				<li onClick={() => history.push('/one')}>One</li>
				<li onClick={() => history.push('/two')}>Two</li>
				<li onClick={() => history.push('/three')}>Three</li>
			</ul>
			<div>
				{props.children}
			</div>
		</>
	)
}

export default Sidebar