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
			
		return(	
		<div className="col-xs-12 col-sm-4 paper">
				<Paper className="preferencepaper">
					<div className="Up">
					<DropDownMenu value={this.state.value} onChange={this.handleChange}  
					underlineStyle={{opacity: 0}} labelStyle={{fontSize: 15, color: 'rgb(115, 135, 156)', paddingLeft: 56}}
					style={{top: '-13px'}}>
			          <MenuItem value={1} primaryText="Случайные задания" onClick={()=>this.smth(1)} style={{textAlign: 'center'}}/>
			          <MenuItem value={2} primaryText="Определенный номер" onClick={()=>this.smth(2)} style={{textAlign: 'center'}}/>
			        </DropDownMenu>
					</div>
					<hr/>
					{element}
				</Paper>

			</div>

)

	}
}
