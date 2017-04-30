import React, { Component } from 'react';





export default class NotFound extends Component{
	


	render(){
		const style={
				textAlign: 'center',
				marginTop: '60px'
		}
		return(	<div style={style}>


	<h1>Упс...</h1>
	<img src='http://localhost:3000/sorry.png'/>
	<div>Похоже тут что-то сломалось...</div>


	</div>)

	}
}