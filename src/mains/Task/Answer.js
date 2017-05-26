import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Motion, spring} from 'react-motion';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import MainDecodeWorkDisplay from '../Decode/mainDecode.js'
import IconButton from 'material-ui/IconButton';
import ControlPanel from './ControlPanel.js'

export default class Answer extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	position: false,
		    	description: [],
		    	answer: 0,
		    };
		  }

		   click=()=>{
		  	this.props.next()
		  }


	

		  getDescription=()=>{
			  	var xmlhttp = new XMLHttpRequest()
			  	var body=  JSON.stringify({token: this.props.token, id: this.props.id})
				xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_description', false);
				xmlhttp.send(body);  
				if(xmlhttp.status == 200) {
					var request = JSON.parse(xmlhttp.responseText)
					if (!request.result){
						return request
					}
				}
			  }

			processDescription=(data)=>{
				if(data.length==0){
					return <div/>
				}
				var final =  data.map(function (item, index) {
					return(
						<MainDecodeWorkDisplay item={item} key={index}/>)
				})

				return(<ReactCSSTransitionGroup
						 transitionName="example"
			               transitionAppear = {true} transitionAppearTimeout = {3000}
			               transitionEnter = {false} transitionLeave = {false}>
					               {final}
					        </ReactCSSTransitionGroup>)
			}

			controlDescription=()=>{
				if(this.state.description.length == 0){
					var data = this.getDescription()
					this.setState({
						description: data,
						position: !this.state.position
					})
				}else{
					this.setState({
						position: !this.state.position
					})
				}
			}



		


render(){

	var data = this.props.data
	var height = document.getElementById('mainTaskWindow').offsetHeight
	var style1={
		maxHeight: height,
		position: 'relative',
		bottom: 120,
		overflow: 'hidden',
		minHeight: 120,
		width: '100%',
		boxShadow: '0 0 94px rgba(0,0,0,0.3)',
		padding: 10
	}
	var style2={
		maxHeight: height,
		position: 'relative',
		bottom: height - 80,
		minHeight: height - 100,
		overflow: 'hidden',
		width: '100%',
		boxShadow: '0 0 94px rgba(0,0,0,0.3)',
		padding: 10
	}

	
	var description = this.processDescription(this.state.description)
	var right = <div>
					<div  style={{textAlign: 'center', color: "rgb(115, 135, 156)",
										 fontSize: 24, margin: 10}}>
							Правильно!
						</div>
						<div style={{textAlign: 'center'}}>
							<img src='/checked.svg' style={{width: 100}}/>
						</div>
				</div>
	var issue = <div>
					<div  style={{textAlign: 'center', color: "rgb(115, 135, 156)",
										 fontSize: 24, margin: 10}}>
							Ошибочка!
						</div>
						<div style={{textAlign: 'center'}}>
							<img src='/cancel.svg' style={{width: 100}}/>
						</div>
				</div>
	var final_answer = (data)?right:issue
	var style= (this.state.position)? style2:style1
	var label = (this.state.position)? "Свернуть": "Расследовать"

	return(	
			<ReactCSSTransitionGroup
	      transitionName="answer"
	      transitionAppear={true}
	      transitionAppearTimeout={500}
	      transitionEnter={false}
	      transitionLeave={false}>
		<div>
				
				<Paper style={style} zDepth={1} >
	
					{final_answer}
					<RaisedButton
					          label={label}
					          onClick={()=>this.controlDescription()}
					          style={{ marginTop: 10, position: 'absolute', top: 0 }}
						        />
					<RaisedButton
					          label='Следующий'
					          onClick={this.click}
					          style={{ marginTop: 10, position: 'absolute', top: 0, right:10 }}
						        />


					<hr style={{margin: '20px auto'}} />
						<ControlPanel description={description}/>
						<div style={{overflow: 'auto', maxHeight:height-300, padding: 10, margin: '20px 0px', 
									boxShadow:"1px 1px 6px 0px rgba(0,0,0,0.2) inset"}}>
							
							{description}
					
						</div>
				
				</Paper>
		
</div>
</ReactCSSTransitionGroup>

		   )

}



}