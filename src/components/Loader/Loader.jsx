import './Loader.scss'

const Loader = () =>{
	return(
		<div className='loader'>
			<div className="progress">
				<span></span>
			</div>
			<div className="status">Loading 70%</div>
		</div>
	)
}

export default Loader