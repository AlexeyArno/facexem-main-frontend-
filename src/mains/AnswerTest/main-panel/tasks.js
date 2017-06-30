import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MainDecodeWorkDisplay from '../modules.js'
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';

import CommunicationChat from 'material-ui/svg-icons/communication/chat'
import ActionDoneAll from 'material-ui/svg-icons/action/done-all'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import IconButton from 'material-ui/IconButton';
import ActionLaunch from 'material-ui/svg-icons/action/launch'
import ActionReportProblem from 'material-ui/svg-icons/action/report-problem'
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';
import DialogTask from './dialog.js'
import Issue from './issue.js'



export default class Tasks extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	stepIndex: -1,
		    	open: false,
		    	issue: false
		    };
		  }
		  getUserAnswer=(quest, answers)=>{
		  	return quest.content.map(function (item, index) {
		  		return <MainDecodeWorkDisplay key={index} value={answers}
		  					item={item} index={index} unchangeble={true}/>
		  	})
		  }

		  click=(i)=>{
		  	if(this.state.stepIndex === i){
		  		i = -1
		  	}
		  	this.setState({
		  		stepIndex: i
		  	})
		  }


		  dialog=()=>{
		  	if(!this.state.open){
				document.getElementById('root').style.filter = 'blur(2px)'
			}else{
				document.getElementById('root').style.filter = 'blur(0px)'
			}
		  	this.setState({
		  		open: !this.state.open
		  	})
		  }
		  issue=()=>{
		  	if(!this.state.issue){
				document.getElementById('root').style.filter = 'blur(2px)'
			}else{
				document.getElementById('root').style.filter = 'blur(0px)'
			}
		  	this.setState({
		  		issue: !this.state.issue
		  	})
		  }



		  getMainContent=(maintask)=>{
		  	return maintask.content.map(function (item, index) {
		  		return <MainDecodeWorkDisplay key={index} 
		  					item={item} index={index} />
		  	})
		  }

render(){
	var number = this.props.data[this.props.pos]
	var mainquest = []
	var user_inputs = []
	var true_inputs = []
	number.task.map(function(item, index){
		switch(item.type){
			case 'mainquest':
				mainquest.push(this.getMainContent(item))
				break;
			case 'quest':
				user_inputs.push(this.getUserAnswer(item, number.u_answer))
				true_inputs.push(this.getUserAnswer(item, number.answer))
				break
		}
	}.bind(this))
	var descrip = number.description.map(function(item, index){
		return this.getMainContent(item)
	}.bind(this))



	const styles = {
		  smallIcon: {
		    width: 20,
		    height: 20,
		  },
		small: {
		    width: 46,
		    height: 46,
		    padding: 6,
		  }
	}


	const closeStyle={
			position: 'absolute',
			top: '18px',
			right: '20px'
		}
	var windowDialog = <Dialog
				          title="Какой-то номер" modal={true} autoScrollBodyContent={true}
				          task={true} contentStyle={{padding: 0,  maxWidth: 900, width: "90%"}}
						  autoDetectWindowHeight={false} titleStyle={{color: 'rgb(33, 150, 243)'}}
						  style={{maxHeight: 500}} open={this.state.open} onRequestClose={this.dialog}
        					>
				          <IconButton onClick={this.dialog} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
				        
				          <DialogTask mainquest={mainquest} user_inputs={user_inputs} true_inputs={true_inputs} descrip={descrip}/>
				        </Dialog>


	var issueOpen = <Dialog
			          title="Ошибка"
			          open={this.state.issue}
			          autoScrollBodyContent={true}
			          onRequestClose={this.issue}
			          contentStyle={{width: 400}}
			          autoDetectWindowHeight={false}
			          titleStyle={{color: 'rgb(33, 150, 243)'}}
			          style={{maxHeight: 200}}
			        >	
				        <IconButton onClick={this.issue} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
				       	<Issue id={number.id}  token={this.props.token} close={this.issue}/>
			        </Dialog>



	return(<ReactCSSTransitionGroup
				 transitionName="example"
	               transitionAppear={true} transitionAppearTimeout={350}
	               transitionEnter={false} transitionLeave={false}>
			{windowDialog}
			{issueOpen}
			<div style={{padding:5}}>
			<Paper style={{padding: 5,  marginTop: 10}}>
				<div style={{display:'inline-block', width:" 100%"}}>
									{mainquest}
				</div>
				 <Stepper activeStep={this.state.stepIndex} orientation="vertical" linear={false}>
				  <Step>
					  <StepButton onClick={() => this.click(0)}
								  	style={{paddingLeft: 10, fontSize: 23}} icon={<div/>}>
								  <div style={{position: "absolute", left: 15, top: 10}}>
								  		<ActionDoneAll  color="rgb(33, 150, 243)"/>
								  		<div style={{display: 'inline-block', position: "relative", bottom: 4, left: 10}}>Ответы</div>
								  	</div>
						</StepButton>
						<StepContent>
							<div>

								<Paper style={{padding: 15, margin: 10}}>
									<div>Ваш ответ:</div>
									<div style={{width: "100%", display: 'inline-block'}}>
										{user_inputs}
									</div>
								</Paper>
								<Paper style={{padding: 15, margin: 10}}>
									<div>Правильный ответ:</div>
									<div style={{width: "100%", display: 'inline-block'}}>
										{true_inputs}
									</div>
								</Paper>
							</div>
						</StepContent>
				  </Step>
				  <Step>
					    <StepButton onClick={() => this.click(1)}
									style={{paddingLeft: 10, paddingBottom: 20}} icon={<div/>}>
						   <div style={{position: "absolute", left: 15, top: 20}}>
						  		<CommunicationChat color="rgb(33, 150, 243)"/>
						  		<div style={{display: 'inline-block', position: "relative", bottom: 4, left: 10}}>Решение</div>
						  	</div>
						</StepButton>
						<StepContent>
							<div>

								{descrip}
							</div>
						</StepContent>
				  </Step>
				 </Stepper>
				 <hr style={{marginTop: 25}}/>
				 <div style={{textAlign: 'right'}}>
				 	<IconButton iconStyle={styles.smallIcon}
     							style={styles.small}
     							onClick={this.dialog}
     							tooltip="Развернуть">
				 		<ActionLaunch color="rgba(0,0,0,0.3)"/>
				 	</IconButton>
				 	<IconButton iconStyle={styles.smallIcon}
     							style={styles.small}
     							onClick={this.issue}
     							tooltip="Ошибка?">
				 		<ActionReportProblem  color="rgba(0,0,0,0.3)"/>
				 	</IconButton>
				 </div>
			</Paper>
		</div>
	</ReactCSSTransitionGroup>
		

		   )

}



}