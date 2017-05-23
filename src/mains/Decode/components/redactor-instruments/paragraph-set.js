import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import IconButton from 'material-ui/IconButton';


export default class PSettings extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	open: this.props.open
		    };
		  }

render(){

	var style={
			right: -200
		}
	if(this.props.open){
		style['right'] = 120	
	}
	return(<Paper className="paragraphSettings" style={style}>
				<div style={{background: 'rgba(0,0,0,0.1)', height: 40, width: 250}}>
					Оформление
				</div>
		</Paper>

		

		   )

}



}