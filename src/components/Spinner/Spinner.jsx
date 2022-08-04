import './Spinner.scss'
import spinner from './spiner.svg'

const Spinner = () =>{
	return(
		<div className='spinner'>
			<img src={spinner} alt=""/>
		</div>
	)
}

export default Spinner