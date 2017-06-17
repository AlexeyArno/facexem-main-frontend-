import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class TextFieldAnswer extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	open: false
		    };
		  }

		  onChange=(value)=>{
		  
		  	this.props.answer('text', value, this.props.index)
		  }






render(){
		var name = 'col-md-12'
		if(this.props.data.size === 'half'){
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
				value={this.props.value}
				name={this.props.data.id+'TextField'}
				style={{display: 'inline-block', maxWidth: 120}}
				underlineStyle={styles.underlineStyle}
				underlineFocusStyle={styles.underlineStyle}
				onChange={(e, v)=>this.onChange(v)}
				 />
				
			<div style={{marginLeft: 10, display: 'inline-block'}}>{this.props.data.ext}</div>
			</div>

		

		   )

}



}