import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';
import ContentCreate from 'material-ui/svg-icons/content/create'


export default class TitlehWorkWindow extends Component{


	editSmth=(index)=>{
		this.props.editSmth(index)
	}

render(){
	var content = this.props.data
	var id = 'content'+this.props.index
	return(<div style={{paddingRight: "20px"}}>
				<h2 id={id} style={{color:'rgb(164, 198, 57)',fontWeight: 300}}>{content}</h2>
		</div>)

}



}