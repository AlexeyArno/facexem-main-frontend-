import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow'
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import Modal from 'react-modal';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


import Random from './task/randomtask/randomTasks.js'
import Onetask from './task/singletask/onetask.js'

export default class Tasks extends Component{
	  constructor(props){
				  super(props);
				  this.state = {modalIsOpenBest: false,
				  value: 1}
		 }


		 getMenu=()=>{
		 	var style_active={
		 			background: 'rgb(33, 150, 243)',
		 			color: '#fff',
		 			display: 'inline-block',
		 			cursor: "pointer",
		 			fontSize: 14,
		 			width: '50%',
		 			padding: 2
		 		}
		 		var style_us = {
		 			background: '#fff',
		 			color: 'rgb(33, 150, 243)',
		 			display: 'inline-block',
		 			fontSize: 14,
		 			cursor: 'pointer',
		 			width: '50%',
		 			padding: 2
		 		}

		 	if(this.state.value == 2){
		 		var st1 = style_active
		 		var st2 = style_us

		 		
		 	}else{
		 		var st1 = style_us
		 		var st2 = style_active	 		
		 	}
		 	st1.borderRadius = '3px 0px 0px 3px'
		 	st2.borderRadius = '0px 3px 3px 0px'
		 	return <div style={{border: '2px solid rgb(33, 150, 243)', margin: '0px 40px', borderRadius: 5}}>
		 				<div style={st1} onClick={()=>this.smth(2)}>Одиночные</div>
		 				<div style={st2} onClick={()=>this.smth(1)}>Случайные</div>
		 			</div>
		 }

	 openTasks=()=>{
		 	this.setState({modalIsOpenBest: true})
		 }


	  closeTasks=()=>{
		  	this.setState({modalIsOpenBest: false})
		  }

	  handleChange = (event, index, value) => this.setState({value});


	  smth=(i)=>{
	  	this.setState({value: i});
	  }

	render(){
		var last=this.props.data.best_task_random



		var random  = <Random color={this.props.color} data={this.props.data}/>
		var staticElement = <Onetask color={this.props.color} data={this.props.data}/>


		var element = random
		//LOOK HERE
		if(this.state.value == 2){
			element = staticElement
		}
		var menu = this.getMenu()
		return(	
		<div className="col-xs-12 col-sm-4 paper">
				<Paper className="preferencepaper">
					<div className="Up">
						Задания
					</div>
					<hr/>
					<div style={{padding: 10}}>
						{menu}
					</div>
						{element}
				</Paper>

			</div>

)

	}
}


// <DropDownMenu value={this.state.value} onChange={this.handleChange}  
// 					underlineStyle={{opacity: 0}} labelStyle={{fontSize: 15, color: 'rgb(115, 135, 156)', paddingLeft: 56}}
// 					style={{top: '-13px'}}>
// 			          <MenuItem value={1} primaryText="Случайные задания" onClick={()=>this.smth(1)} style={{textAlign: 'center'}}/>
// 			          <MenuItem value={2} primaryText="Определенный номер" onClick={()=>this.smth(2)} style={{textAlign: 'center'}}/>
// 			        </DropDownMenu>