import React, { Component } from 'react';






export default class ParagraphWorkWindow extends Component{
	constructor(props) {
		    super(props);
		    this.state = {
		    };
		   
		  }


	

 

render(){	
			var content = this.props.data.content
			var name = 'col-md-12 col-lg-12'
			if(this.props.data.size === 'half'){
				name = 'col-md-6 col-lg-6'
			}

			return(
				<div style={{paddingRight: "20px"}} className={name}>
						<p>{content}</p>
				</div>)

		   

		


}



}