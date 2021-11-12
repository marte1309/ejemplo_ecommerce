import './style.scss';

/**
 * Componente de caja de texto
 * @param {string} value valor del elemento
 * @param {function} onChange función de cambio de valor
 * @returns <input/>
 */
const InputText = ({value, onChange, id, name, className, type, placeholder, label}) => {
	const change = (value) => {
		if(onChange) {
			onChange(value);
		}
	}
	return (
		<div class="Input">
			<input
				className	= {`input ${className}`}
				value		= {value}
				type		= {type || 'text'}
				onChange	= {(input) => change(input.target.value)}
				id			= {id || 'inputComponent'}
				name		= {name}
				placeholder	= {placeholder}
				autoComplete	= "off"/>
			<label for={id || 'inputComponent'} class="Input-label">{label}</label>
		</div>
	);
}

export default InputText