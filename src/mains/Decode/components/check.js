import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box'

// import ChooseModal from './redactor-instruments/choose-modal.js'

export default class Check extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	open: false,
		    	answer: []
		    };
		  }

		  componentWillMount=()=>{
		  	if(!this.props.value){
		  	this.props.data.content.map(function(item, index){
		  			var data ={
				  		value: false,
				  		index: index
					  	}
					 var answer = this.state.answer
					 answer[index] = false
					this.setState({
						answer
					})
					if(!this.props.unchangeble){
				  		this.props.answer('check_create', data, this.props.index)
					 }
		 		 }.bind(this)
		  	)
			  }else{
			  	this.setState({answer:this.props.value})
			  }
		  }



		  answer=(d, v)=>{
		  	var data ={
		  		value: d,
		  		index: v
		  	}
		  	this.props.answer('check', data, this.props.index)
		  }
		  getBoxes=(content)=>{
		  	return(
		  		content.map(function(item, index){
		  			if(this.props.unchangeble){
		  				return (
		  					 <Checkbox
		  				   	key={index}
		  				   	checked={this.state.answer[index]}
						    label={item.content}
						    checkedIcon={<ToggleCheckBox/>}
						    iconStyle={{fill: '#4285f4'}}
						    style={{ padding: 16, paddingLeft: 0}}
						    />)
		  			}
		  			return(

		  				   <Checkbox
		  				   	onCheck={(e, d)=>this.answer(d, index)}
		  				   	key={index}
		  				   	defaultChecked={this.state.answer[index]}
						    label={item.content}
						    checkedIcon={<ToggleCheckBox/>}
						    iconStyle={{fill: '#4285f4'}}
						    style={{ padding: 16, paddingLeft: 0}}
						    />

		  				)

		  		}.bind(this))


		  		)
		  }


render(){
	var name = 'col-md-12 col-xs-12 col-sm-12 col-lg-12'
		if(this.props.data.size === 'half'){
			name = 'col-md-6 col-xs-12 	col-sm-6 col-lg-6'
		}
	var checks = this.getBoxes(this.props.data.content)
	return(<div className={name}>
				{checks}
			</div>

		

		   )

}



}