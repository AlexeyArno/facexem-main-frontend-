import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'
import Task from '../Task/Task.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import CircularProgress from 'material-ui/CircularProgress';

class TaskPage extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	data: 0,
		    	session_key: '',
		    	pos: 0
		    };
		  }


		  componentWillMount=()=>{
		  	var subject = this.getSearchData().subject
		  	this.getSessionTasks(subject)
		  	this.getTask()
		  }


		  getSessionTasks=(subject)=>{
		  	const {token} = this.props.user
		  	var xmlhttp = new XMLHttpRequest()
		  	var body=  JSON.stringify({token, subject})
			xmlhttp.open('POST', 'https://api.facexam.ru/api/user/session_start', false);
			xmlhttp.send(body);  
			if(xmlhttp.status === 200) {
			var request = JSON.parse(xmlhttp.responseText)
			if (request.result!=='Error'){
					// return(request)
					this.setState({
						session_key: request
					})
					return 0
				}
			}
		  }

		  getSearchData = ()=>{
		  	// function that decode "/math/singletask/4" to "math", "singletask", "4"
		  	var body = window.location.pathname
		  	var workbody = Array.from(body)
		  	var subject = []
		  	var type = []
		  	var number = []
		  	var count = 0
		  	for(var i=0; i<workbody.length;i++){
		  		count =(workbody[i] === '/')? count+1:count
		  		if(count===1){
		  			if (workbody[i]==='/') continue;
		  			subject[subject.length] = workbody[i] 
		  		}else if(count === 2){
		  			if (workbody[i] ==='/') continue;
		  			type[type.length] = workbody[i]
		  		}else if(count === 3){
		  			if (workbody[i] ==='/') continue;
		  			number[number.length] = workbody[i]
		  		}
		  		
		  	}
		  	return({subject:subject.join(''), type: type.join(''), number:number.join('')})
		  }

		  next=()=>{
		  	var data = this.getTask()
		  	this.setState({
		  		data: data
		  	})

		  }

		  getTask=()=>{
		  	this.setState({pos: 0})
		  	const {token} = this.props.user
		  	var data = this.getSearchData()
		  	var xmlhttp = new XMLHttpRequest()
		  	var body=  JSON.stringify({token: token, type: data.type, number: data.number, subject: data.subject})
			xmlhttp.open('POST', 'https://api.facexam.ru/api/user/get_task', true);
			xmlhttp.send(body); 
			xmlhttp.onload  = function(e){
				if(xmlhttp.status === 200) {

					var request = JSON.parse(xmlhttp.responseText)
					if (request.result !== 'Error' || !request.result ){
							this.setState({
								pos: 1,
								data: request
							})
						}
				}
			}.bind(this) 
		  }


		  




render(){
	if(this.state.pos === 0){
		return <ReactCSSTransitionGroup
								 transitionName="opacity"
					               transitionAppear={true} transitionAppearTimeout={800}
					               transitionEnter={false} transitionLeave={false}>
				<div className="contentRow">
					
						<Paper style={{padding: '5px', maxWidth: 700, margin: 'auto', marginTop: 80, transform: "rotate(1deg)"}}>
							<Paper style={{padding: '5px', maxWidth: 700, margin: 'auto',  transform: "rotate(358deg)"}}>
								<Paper style={{maxWidth: 700, margin: 'auto', transform: "rotate(1deg)"}}>
									<div style={{width: '100%', minHeight: 400, textAlign: 'center', verticalAlign: 'middle',
									paddingTop: 150}}>
										<CircularProgress size={40} thickness={3} mode={'indeterminate'} color='#2196F3'/>
									</div>
								</Paper>
							</Paper>
						</Paper>
				</div>
	</ReactCSSTransitionGroup>
	}
	const {token} = this.props.user
	// var data = (this.state.data)? this.state.data : this.getTask()
	var data = this.state.data
	var searchData = this.getSearchData()

    // var data = (this.state.type) ? this.state.data : this.getTask()
	return(<ReactCSSTransitionGroup
								 transitionName="opacity"
					               transitionAppear={true} transitionAppearTimeout={800}
					               transitionEnter={false} transitionLeave={false}>
				<div className="contentRow" id='nowpage'>
					
						<Paper style={{padding: '5px', maxWidth: 700, margin: 'auto', marginTop: 80, transform: "rotate(1deg)"}}>
							<Paper style={{padding: '5px', maxWidth: 700, margin: 'auto',  transform: "rotate(358deg)"}}>
								<Paper style={{maxWidth: 700, margin: 'auto', transform: "rotate(1deg)"}}>
									<Task data={data}  token={token} next={this.next} subject={searchData.subject}
									type={searchData.type} session_key={this.state.session_key}/>
								</Paper>
							</Paper>
						</Paper>
				</div>
	</ReactCSSTransitionGroup>
		

		   )

}
}

function mapStateToProps (state) {
  return {
    user: state.user,
  }
}


export default connect(mapStateToProps)(TaskPage)

