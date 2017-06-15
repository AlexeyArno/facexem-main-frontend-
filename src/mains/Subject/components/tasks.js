import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';
import NavigationMoreHoriz from 'material-ui/svg-icons/navigation/more-horiz'


import Random from './task/randomtask/randomTasks.js'
import Onetask from './task/singletask/onetask.js'


import StaticTasks from './statistics/task.js'

export default class Tasks extends Component{
	  constructor(props){
				  super(props);
				  this.state = {
				  	dialog: false,
				  	value: 1
				  }
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

		 	if(this.state.value === 2){
		 		var st1 = style_active
		 		var st2 = style_us

		 		
		 	}else{
		 		st1 = style_us
		 		st2 = style_active	 		
		 	}
		 	st1.borderRadius = '3px 0px 0px 3px'
		 	st2.borderRadius = '0px 3px 3px 0px'
		 	return <div style={{border: '2px solid rgb(33, 150, 243)', margin: '0px 40px', borderRadius: 5}}>
		 				<div style={st1} onClick={()=>this.smth(2)} className="button-change-pos">Одиночные</div>
		 				<div style={st2} onClick={()=>this.smth(1)} className="button-change-pos">Случайные</div>
		 			</div>
		 }

	 dialog=()=>{
	 	if(this.state.dialog){
		 		document.getElementById('root').style.filter = 'blur(0px)'
		 	}else{
		 		document.getElementById('root').style.filter = 'blur(2px)'
		 	}
		 	this.setState({dialog: !this.state.dialog})
		 }



	  handleChange = (event, index, value) => this.setState({value});


	  smth=(i)=>{
	  	this.setState({value: i});
	  }

	render(){



		var random  = <Random color={this.props.color} data={this.props.data}/>
		var staticElement = <Onetask color={this.props.color} data={this.props.data}/>


		var element = random
		//LOOK HERE
		if(this.state.value === 2){
			element = staticElement
		}
		var menu = this.getMenu()
		const closeStyle={
			position: 'absolute',
			top: '18px',
			right: '20px'
		}
		return(	
		<div className="col-xs-12 col-sm-4 paper">

				<Paper className="preferencepaper">
					<div className="Up">
						Задания

						<NavigationMoreHoriz color="rgb(115, 135, 156)" className="buttonMoreInUp" onClick={this.dialog}/>
					</div>
					<hr/>
					<div style={{padding: 10}}>
						{menu}
					</div>
						{element}
				</Paper>
				 <Dialog
				          title="Статистика"
				          modal={false}
				          task={true}
				          titleStyle={{color: 'rgb(33, 150, 243)'}}
				          open={this.state.dialog}
				          autoScrollBodyContent={true}
				          bodyClassName='dialogBodyTable'
				          onRequestClose={this.dialog}
				          contentStyle={{padding: 0,  maxWidth: 700, width: "90%"}}
				          autoDetectWindowHeight={false}
				          style={{maxHeight: 500}}
				        >	
				        <IconButton onClick={this.dialog} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
				        	<StaticTasks data={this.props.data}/>
				        </Dialog>
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