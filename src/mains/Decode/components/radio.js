import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ToggleRadioButtonChecked from 'material-ui/svg-icons/toggle/radio-button-checked'
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';

import ChooseModal from './redactor-instruments/choose-modal.js'

export default class Radio extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	open: false
		    };
		  }

		  answer=(value)=>{
		  	this.props.answer(value)
		  }




		  getBoxes=(content)=>{
		  	return(
		  		content.map(function(item, index){
		  			return(

		  				   <RadioButton
		  				   	key={index}
						    label={item.content}
						    checkedIcon={<ToggleRadioButtonChecked/>}
						    iconStyle={{fill: '#4285f4'}}
						    value={index}
						    onClick={()=>this.answer(index+1)}
						    style={{ padding: 16, paddingLeft: 0}}
						    />

		  				)

		  		}.bind(this))


		  		)
		  }



render(){
	var name = 'col-md-12'
		if(this.props.data.size == 'half'){
			name = 'col-md-6'
		}



	var checks = this.getBoxes(this.props.data.content)

	return(<div className={name}>
				 <RadioButtonGroup name={String(this.props.data.id)} defaultSelected="nothing">
					{checks}
				</RadioButtonGroup>
			</div>)


}
}