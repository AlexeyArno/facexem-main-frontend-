import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Close from 'material-ui/svg-icons/navigation/close';
import ActionQuestionAnswer from 'material-ui/svg-icons/action/question-answer';
import People from 'material-ui/svg-icons/social/people';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import BatteryChargingFull from 'material-ui/svg-icons/device/battery-charging-full';
import Settings from 'material-ui/svg-icons/action/settings';
import Divider from 'material-ui/Divider';
import LibraryBooks from 'material-ui/svg-icons/av/library-books';
import Help from 'material-ui/svg-icons/action/help';
import Streetview from 'material-ui/svg-icons/maps/streetview';
import Email from 'material-ui/svg-icons/communication/email';
import Whatshot from 'material-ui/svg-icons/social/whatshot';
import AvEqualizer from 'material-ui/svg-icons/av/equalizer'
import EditorBorderColor from 'material-ui/svg-icons/editor/border-color'


export default class WriterMenu extends Component{
	
	click=(type)=>{
		this.props.clickOnItem(type)
	}

	render(){

		return(	<div>
						<MenuItem onClick={()=>this.click('author')} primaryText="Редактор" leftIcon={<EditorBorderColor color={this.props.color}/>}/>
		          			          
	</div>)

	}
}