import React, { Component } from 'react';
import ThreeSlider from './components/ThreeSlider.js'
import TopNews from './components/top.js'
export default class NewsContent extends Component{

	render(){
		return(	
			<div >
				<ThreeSlider data={this.props.data.threepage} dataTop={this.props.data.top}/>
			</div>
		)

	}
}