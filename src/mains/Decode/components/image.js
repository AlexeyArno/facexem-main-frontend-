import React, { Component } from 'react';



export default class ImageWorkWindow extends Component{
	



	
	render(){
		var name = 'col-md-12'
		if(this.props.data.size == 'half'){
			name = 'col-md-6'
		}

		return(<div className={name}>
					<img src={this.props.data.url} style={{width: "100%", padding:10, borderRadius: 10}}/>
				</div>




					)

	}



}