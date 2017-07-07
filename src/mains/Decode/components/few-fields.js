import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';
// import FewFieldsRedactor from './redactor-instruments/few-fields.js'

// SETTINGS 


export default class FewFields extends Component{
constructor(props) {
		    super(props);
		    this.state = {
		    	open: false,
		    	answer:[]
		    };
		  }
		
		  componentWillMount=()=>{
		  	if(!this.props.value){
		  		var answer = this.state.answer
		  		for (var i=0;i<this.props.data.content.length;i++){
		  			answer.push('')
		  		}
		 		 if(!this.props.unchangeble){
				  		this.props.answer('few-fields-create', answer, this.props.index)
					}
					this.setState({
						answer
					})
		  	
			  }else{
			  	this.setState({answer:this.props.value})
			  }
		  }


		  answer=(d, v)=>{
		  	var data ={
		  		value: d,
		  		index: v
		  	}
		  	this.props.answer('few-fields', data, this.props.index)
		  }
		
	

		getInputs=(data)=>{
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
			return data.map(function (item, index) {
				if(this.props.value){
					return <TextField floatingLabelText={item}
						key={index} value={this.state.answer[index]}
						name={this.props.data.id+'TextField'+index}
						style={{display: 'inline-block', maxWidth: 100, margin: '0px 10px'}}
						underlineStyle ={styles.underlineStyle}
						underlineFocusStyle={styles.underlineStyle}
						floatingLabelFocusStyle={{color: '#4285f4'}}/>
				}
				return <TextField floatingLabelText={item}
						key={index} value={this.state.answer[index]}
						onChange={(e, d)=>this.answer(d, index)}
						name={this.props.data.id+'TextField'+index}
						style={{display: 'inline-block', maxWidth: 100, margin: '0px 10px'}}
						underlineStyle ={styles.underlineStyle}
						underlineFocusStyle={styles.underlineStyle}
						floatingLabelFocusStyle={{color: '#4285f4'}}/>
			}.bind(this))
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
	const closeStyle={
			position: 'absolute',
			top: '15px',
			right: '20px'
		}
	
	var data = this.props.data
	var inputs =this.getInputs(data.content)
	return(<div style={{paddingLeft: 20}} className={name}>
	
			{inputs}
			</div>

		

		   )

}



}

	// <TextField
			// 	name={this.props.data.id+'TextField'}
			// 	style={{display: 'inline-block', maxWidth: 200}}
			// 	underlineStyle ={styles.underlineStyle}
			// 	underlineFocusStyle={styles.underlineStyle}
			// 	 />
			// <div style={{marginLeft: 10, display: 'inline-block'}}>{this.props.data.ext}</div>