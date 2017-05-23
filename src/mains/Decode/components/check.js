import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box'
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

import ChooseModal from './redactor-instruments/choose-modal.js'

export default class Check extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	open: false
		    };
		  }


		  getBoxes=(content)=>{
		  	return(
		  		content.map(function(item, index){
		  			return(

		  				   <Checkbox
		  				   	key={index}
						    label={item.content}
						    checkedIcon={<ToggleCheckBox/>}
						    iconStyle={{fill: '#4285f4'}}
						    style={{ padding: 16, paddingLeft: 0}}
						    />

		  				)

		  		})


		  		)
		  }


render(){
	var name = 'col-md-12'
		if(this.props.data.size == 'half'){
			name = 'col-md-6'
		}

	var checks = this.getBoxes(this.props.data.content)
	return(<div className={name}>
				{checks}
			</div>

		

		   )

}



}