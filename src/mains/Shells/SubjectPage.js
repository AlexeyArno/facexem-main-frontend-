import React, { Component } from 'react'; 
import SubjectRow from '../Subject/subjectRow.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SubjectContent from '../Subject/SubjectContent.js'
import CircularProgress from 'material-ui/CircularProgress';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import { connect } from 'react-redux'

class SubjectPage extends Component{
		 constructor(props) {
			    super(props);
			    this.state = {
			    	subject: window.location.pathname,
			    	data: 0};

			  }	


	componentDidMount=()=>{
		const {token} = this.props.user
		if(this.state.data === 0){
			this.LoadData(token)
		}
	}



	LoadData=(token)=>{
		if (this.state.data === 0){
			var subject = window.location.pathname
			var xmlhttp = new XMLHttpRequest()
			var body =  JSON.stringify({token: token, subject: subject.slice(1)})  
			xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_my_subject', false);
			xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			xmlhttp.send(body);  
			if(xmlhttp.status == 200) {
			var data = JSON.parse(xmlhttp.responseText)
			if (data.result !== 'Error' ){
				this.setState({data: data})
			}
			}
			
		}
	}

	render(){
		if (this.state.data === 0){
			const style = {
			margin: "auto",
			maxWidth: '50px',
			marginTop: (screen.height-100)/2
		}
			return(

					<div style={style} >

					<CircularProgress size={40} thickness={5} mode={'indeterminate'}/>
				</div>
				)
		}








		var pathname=window.location.pathname;
		var name;
		switch(pathname){
			case '/chemistry':
				name = 'Химия';
				break;
			case '/math':
				name = 'Математика';
				break;
			case '/russian':
				name = 'Русский язык';
				break;
			case '/english':
				name = 'Английский язык';
				break;
			case '/physics':
				name = 'Физика';
				break;
			case '/history':
				name = 'История';
				break;
			case '/information':
				name = 'Информатика';
				break;
			default:
				name = 'Неизвестный'
		}
		// <MuiThemeProvider>
			// <SubjectRow data={info} subject={this.state.subject} reset={() => this.forceUpdate()} key={Math.random()}/>
		  // </MuiThemeProvider>

		return(	<ReactCSSTransitionGroup
								 transitionName="opacity"
					               transitionAppear={true} transitionAppearTimeout={800}
					               transitionEnter={false} transitionLeave={false}>
							<div style={{marginTop: 60}} id='nowpage'>
					 	<MuiThemeProvider>
					 		 <SubjectRow data={this.state.data.activity}/>
					 	</MuiThemeProvider>
					  <MuiThemeProvider>

					  	<SubjectContent subject={this.state.subject} data={this.state.data}
					  					 reset={() => this.forceUpdate()} key={Math.random()}
					  					  setTestDataInRedux={this.props.setTestDataInRedux}/>
					  	</MuiThemeProvider>
				</div>
			</ReactCSSTransitionGroup>)

	}
}

function mapStateToProps (state) {
  return {
    user: state.user,
  }
}


export default connect(mapStateToProps)(SubjectPage)