import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {green500, red500} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';
import TextFieldModal from './redactor-instruments/text-filed-redactor.js'
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

export default class TextFieldAnswer extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	open: false
		    };
		  }

		  onChange=(value)=>{
		  
		  	this.props.answer(value, this.props.index)
		  }






render(){
		var name = 'col-md-12'
		if(this.props.data.size == 'half'){
			name = 'col-md-6'
		}
	const styles = {
				  underlineStyle: {
				    borderColor: '#4285f4',
				    opacity: 0.5
				  },
				   underlineStyle1: {
				    borderColor: '#4285f4',
				    opacity: 0.5
				  }
				};

	
	return(<div style={{paddingLeft: 20}} className={name}>
	
			<div style={{marginRight: 10, display: 'inline-block'}}>Ответ:</div>
			<TextField
				name={this.props.data.id+'TextField'}
				style={{display: 'inline-block', maxWidth: 200}}
				underlineStyle ={styles.underlineStyle}
				underlineFocusStyle={styles.underlineStyle}
				onChange={(e, v)=>this.onChange(v)}
				 />
				
			<div style={{marginLeft: 10, display: 'inline-block'}}>{this.props.data.ext}</div>
			</div>

		

		   )

}



}