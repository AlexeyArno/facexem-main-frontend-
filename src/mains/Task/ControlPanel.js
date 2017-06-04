import React, { Component } from 'react';
import ActionLaunch from 'material-ui/svg-icons/action/launch'
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';


import ActionReportProblem from 'material-ui/svg-icons/action/report-problem'

import Issue from './issue.js'

export default class ControlPanel extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	window1: false,
		    	window2: false
		    };
		  }



			open1=()=>{
			this.setState({
					window1: !this.state.window1
				})	
			}

			open2=()=>{
			this.setState({
					window2: !this.state.window2
				})	
			}	
render(){
		const closeStyle={
			position: 'absolute',
			top: '18px',
			right: '20px'
		}
	var dialog1 = <Dialog
			          title="Объяснение"
			          open={this.state.window1}
			          autoScrollBodyContent={true}
			          bodyClassName = 'dialogBodyTable'
			          onRequestClose={this.open1}
			          contentStyle={{padding: 0,  maxWidth: 900, width: "90%"}}
			          autoDetectWindowHeight={false}
			          titleStyle={{color: 'rgb(33, 150, 243)'}}
			          style ={{maxHeight: 500}}
			        >	
				        <IconButton onClick={this.open1} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
				        {this.props.description}
			        </Dialog>


	var dialog2 = <Dialog
			          title="Ошибка"
			          open={this.state.window2}
			          autoScrollBodyContent={true}
			          onRequestClose={this.open2}
			          contentStyle={{width: 400}}
			          autoDetectWindowHeight={false}
			          titleStyle={{color: 'rgb(33, 150, 243)'}}
			          style ={{maxHeight: 200}}
			        >	
				        <IconButton onClick={this.open2} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
				       	<Issue id={this.props.id}  token={this.props.token} close={this.open2}/>
			        </Dialog>
	
	return(	<div className='ControlPanelDescription'>
				<IconButton tooltip="Развернуть" onClick={this.open1} className='deployDescription'>
						<ActionLaunch />
					</IconButton>
				<IconButton tooltip="Ошибка?" onClick={this.open2} className='deployDescription'>
						<ActionReportProblem />
					</IconButton>
				{dialog1}
				{dialog2}
				</div>

		

		   )

}



}