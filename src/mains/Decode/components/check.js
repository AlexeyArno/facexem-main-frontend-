import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box'

// import ChooseModal from './redactor-instruments/choose-modal.js'

export default class Check extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	open: false
		    };
		  }

		  componentWillMount=()=>{
		  	this.props.data.content.map(function(item, index){
		  			console.log(index)
		  			var data ={
				  		value: false,
				  		index: index
					  	}
				  	this.props.answer('check_create', data, this.props.index)
		 		 }.bind(this)
		  	)
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
		  			return(

		  				   <Checkbox
		  				   onCheck={(e, d)=>this.answer(d, index)}
		  				   	key={index}
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