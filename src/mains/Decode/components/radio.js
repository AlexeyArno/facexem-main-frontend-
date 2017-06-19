import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ToggleRadioButtonChecked from 'material-ui/svg-icons/toggle/radio-button-checked'



export default class Radio extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	open: false
		    };
		  }

		  answer=(value)=>{
		  	this.props.answer('radio', value, this.props.index)
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
						    style={{ padding: 16, paddingLeft: 0}}
						    />

		  				)

		  		})


		  		)
		  }



render(){
	var name = 'col-md-12 col-xs-12 col-sm-12 col-lg-12'
		if(this.props.data.size === 'half'){
			name = 'col-md-6 col-xs-12 	col-sm-6 col-lg-6'
		}




	var checks = this.getBoxes(this.props.data.content)
	var defaultCh=(this.props.value)? this.props.value-1: ''
	return(<div className={name}>
				 <RadioButtonGroup name={String(this.props.data.id)} defaultSelected={defaultCh} 
				 			onChange={(e, v)=>this.answer(v+1)}>
					{checks}
				</RadioButtonGroup>
			</div>)


}
}