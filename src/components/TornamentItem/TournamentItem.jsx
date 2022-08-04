import './TournamentItem.scss'
import pin from '../../icon/pin.svg'
import tourney from '../../icon/tourney.svg'
import time from '../../icon/time.svg'
import players from '../../icon/players.svg'
import Button from "./Button/Button";

const TournamentItem = ({register}) =>{
	return(
		<div className='item'>

			<div className="item__header">
				<div className="header__pin">
					<img src={pin} alt=""/>
				</div>
				<div className="header__game">NL 2-7 Triple Draw</div>
				<div className="header__icon"></div>
			</div>

			<Button active={register}/>
			<div className={register ? "item__register": "item__register false"}  >
				{register ? 'Registering': 'Cancel'}
			</div>



			<div className="item__name">
				OFC Pineapple
			</div>
			<div className="item__footer">
				<div className="item__date">
					<img src={time} alt=""/>
					<span>12:00 pm, 28 July</span>
				</div>
				<div className="item__players">
					<img src={players} alt=""/>
					<span>1000/1000</span>
				</div>
				<div className="item__price">
					<img src={tourney} alt=""/>
					<span>1000000</span>
				</div>
			</div>
		</div>
	)
}

export default TournamentItem