import React, { Component } from 'react';
import MenuUp from './menu/menu_up.js'
import MenuContent from './menu/menu_content.js'



export default class UserMenu extends Component{

// constructor(props) {
// 		    super(props);
// 		    this.state = {
// 		    };
// 		  }

		  achievs = () =>{

		  	this.props.achievs()
		  }

		   settings = () =>{

		  	this.props.settings()
		  }


render(){


	return(
	<div>
		<MenuUp data={this.props.data}/>
		<MenuContent data={this.props.data} subjects={this.props.subjects} achievs={this.achievs}
		close={this.props.close} settings={this.settings}/>

	</div>

		

		   )

}



}