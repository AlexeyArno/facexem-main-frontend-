import React, { Component } from 'react';


export default class VideoWorkWindow extends Component{


render(){
	var item = this.props.item
	var index = this.props.index
	var videoNumber=item.videoNumber;
	var url = 'https://www.youtube.com/embed/'+videoNumber
	var style=item.style;
	var width = style.width
	var height = style.height
	if(this.props.displayType == "mobile"){
		if(style.width == '100%'){
			width = 360
			height = width/1.77
		}
	}else{
		if(style.width == '100%'){
			width = 780
			height = width/1.77
		}
	}
	var id = 'content'+index
	
	return(

		<iframe id={id} src={url} style={{width: width, height: height}} frameBorder="0"></iframe>

		   )

}



}