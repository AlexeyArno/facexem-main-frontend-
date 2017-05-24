import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Motion, spring} from 'react-motion';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6



export default class Answer extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	position: false
		    };
		  }

		   click=()=>{
		  	this.props.next()
		  }


		  getAnswer=(id, answers, token)=>{
		  	var xmlhttp = new XMLHttpRequest()
		  	var body=  JSON.stringify({token: token, id: id, answers: answers})
			xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_answer', false);
			xmlhttp.send(body);  
			if(xmlhttp.status == 200) {
				var request = JSON.parse(xmlhttp.responseText)
				request = ['hello']
				if (!request.result){
					return request
				}
			}

		  }
render(){
	var data = this.getAnswer(this.props.id, this.props.nowAnswer, this.props.token)
	var height = document.getElementById('mainTaskWindow').offsetHeight
	var style1={
		maxHeight: height,
		position: 'relative',
		bottom: 200,
		overflow: 'hidden',
		minHeight: 200,
		width: '100%',
		boxShadow: '0 0 94px rgba(0,0,0,0.3)',
		padding: 10
	}
	var style2={
		maxHeight: height,
		position: 'relative',
		bottom: height - 100,
		minHeight: height - 100,
		overflow: 'auto',
		width: '100%',
		boxShadow: '0 0 94px rgba(0,0,0,0.3)',
		padding: 10
	}
	var style= (this.state.position)? style2:style1
	var label = (this.state.position)? "Свернуть": "Расследовать"
	return(	
		<ReactCSSTransitionGroup
	      transitionName="answer"
	      transitionAppear={true}
	      transitionAppearTimeout={3000}
	      transitionEnter={false}
	      transitionLeave={false}>
				<Paper style={style} zDepth={1} >
					<div  style={{textAlign: 'center', color: "rgb(115, 135, 156)",
									 fontSize: 24, margin: 10}}>
						Правильно!
					</div>
					<div style={{textAlign: 'center'}}>
						<img src='/checked.svg' style={{width: 100}}/>
					</div>
					<RaisedButton
					          label={label}
					          onClick={()=>this.setState({position: !this.state.position})}
					          style={{ marginTop: 10, position: 'absolute', top: 0 }}
						        />
					<RaisedButton
					          label='Следующий'
					          onClick={this.click}
					          style={{ marginTop: 10, position: 'absolute', top: 0, right:10 }}
						        />

					<hr style={{margin: '20px auto'}}/>
				</Paper>
		
</ReactCSSTransitionGroup>
		   )

}



}