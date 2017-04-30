import React, {Component} from 'react';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ReactTooltip from 'react-tooltip';
import Today from 'material-ui/svg-icons/action/today';
import Badges from './badges.js';

export default class Experience extends Component{
	render(){
		/*VARIABELS*/
		var streack = this.props.data.streack? this.props.data.streack : 0;
		var exp = this.props.data.exp? this.props.data.exp : 0;
		var badges = this.props.data.badges? this.props.data.badges : 0;


		return(
			<div className="lineExp">
				<div className="streack" data-for="exper" data-tip="День">{streack}</div>
				<div className="experience" data-for="exper" data-tip="Ваш опыт">
				{exp}</div>
					<Badges info={badges}/>
				<ReactTooltip place="top" type="dark" effect="solid" id="exper"/>
			</div>
			)
	}
}