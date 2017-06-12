import React, { Component } from 'react';

export default class ListWorkWindow extends Component{
		constructor(props) {
		    super(props);
		    this.state = {
		    	open: false,
		    };
		}



render(){
	var name = 'col-md-12'
		if(this.props.data.size === 'half'){
			name = 'col-md-6'
		}
	var item = this.props.data
	var content = item.content.map(function(item, index){
		return(this.getItem(item, index))
	}.bind(this))
	var parent = <ol>{content}</ol>
	if(item.typeList === 'holes'){
		parent = <ul>{content}</ul>
	}

	return(<div style={{paddingRight: 20}} className={name}>
			{parent}
		</div>
)

}



}