import React, { Component } from 'react';


export default class ImageWorkWindow extends Component{


		editSmth=(index)=>{
		this.props.editSmth(index)
	}

render(){
	var index = this.props.index
	var item = this.props.item
	var url=item.url;
	var margin= 'auto'
	var display = 'block'
	if(!item.center){
		margin = '1.5%'
		display = 'inline-block'
	} 
	var width = '98%'
	if(item.size == 'half'){
		width = '47%'
	}
	var id = 'content'+index
	
	return(<div style={{width: width, margin: margin, display: display}}>
			<img  id={id} src={url} style={{width: "100%"}} className='imageInWork' />
		</div>)

}



}