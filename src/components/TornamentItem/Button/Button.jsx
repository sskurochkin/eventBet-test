import './Button.scss'


const Button = ({active}) =>{

	return(
		<button disabled={!active} className='button'>
			{active ? 'Join table': 'Cancelled'}
		</button>
	)


}

export default Button
