import React, {Component} from 'react';
import UserRow from './Head/userRow.js';
import ContentRow from './Content/contentRow.js'

export default class Whallpaper extends Component{
	render(){
		// var background = initArray.background

		const style={
			width: '100%',
		}
		return(
				<div>
					<UserRow style={style} data={this.props.user[0]} token={this.props.token} /*userbadges = {this.props.badges} achivs={this.props.achivs}*//>
					<ContentRow subjects={this.props.subjects} circle = {this.props.circle} last={this.props.last} 
					static={this.props.static} preference={this.props.preference} globalstatic ={this.props.globalstatic}/>
				</div>
			)
	}

};