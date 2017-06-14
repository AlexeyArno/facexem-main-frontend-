import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';
import Badges from './badges.js';

export default class Experience extends Component{
	render(){
		/*VARIABELS*/
		var exp = this.props.data.exp? this.props.data.exp : 0;
		var badges = this.props.data.badges? this.props.data.badges : 0;


		return(
			<div className="lineExp">
				<div className="experience" data-for="exper" data-tip="Ваш рейтинг">
				{exp}</div>
					<Badges info={badges}/>
				<ReactTooltip place="top" type="dark" effect="solid" id="exper"/>
			</div>
			)
	}
}