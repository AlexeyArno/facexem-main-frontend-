import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip'

export default class UserInfo extends Component{
	render(){
		var about = this.props.data.about
		var fullabout = ''

		if(about.length > 60 ){
			var array = Array.from(about)
			about = ''
			for (var i = 0; i < 60; i++) {
			  about = about + this.props.data.about[i];
			}
			fullabout = this.props.data.about
			about = about + ' ...'
		}
		var tooltip = (about.length > 60)?<ReactTooltip place="bottom" type="dark" effect="float" id='about' class="TooltipAbout"/>: <div/>
		return(
				<div className='infoStyle'>
					<div className="UserName">{this.props.data.name}</div>
					<div className="About" data-for="about" data-tip={fullabout} >{about}</div>
					{tooltip}
					<div className="City">{this.props.data.city}</div>
				</div>
			)
	}
}