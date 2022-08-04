import './PlayerInfo.scss'
import Star from "./Star/Star";
import avatar from './avatar.png'
import hide from '../../icon/hide.svg'

const PlayerInfo = () =>{
	return(
		<div className='player'>
			<div className="player__name">
				<p>LongUserName</p>
				<div className="player__rate">
					<Star/>
					<Star/>
					<Star/>
					<Star/>
					<Star/>
				</div>
			</div>
			<div className="player__icon">
				<img src={avatar} alt=""/>
			</div>
			<div className="player__balance">
				<div className="player__balance-icon">
					<img src={hide} alt=""/>
				</div>
				<div className="player__balance-balance">$100,500.00</div>
			</div>
		
		</div>
	)
}

export default PlayerInfo