import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ReactTooltip from 'react-tooltip'

export default class UserInfo extends Component{
	render(){
		var abouttip = false;
		var about = '';
		var fullabout = '';
		if(this.props.data.about.length > 60 ){
			for (var i = 0; i < 60; i++) {
			  about = about + this.props.data.about[i]; 
			}
		fullabout = this.props.data.about;
		abouttip = true;
		about = about + ' ...';
		}else {about = this.props.data.about;};


		return(
				<div className='infoStyle'>
					<div className="UserName">{this.props.data.name}</div>
					<div className="About" data-for="about" data-tip={fullabout} >{about}</div>
					<ReactTooltip place="bottom" type="dark" effect="float" id='about' class="TooltipAbout"/>
					<div className="City">{this.props.data.city}</div>
				</div>
			)
	}
}