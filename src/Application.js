import React, { Component, PropTypes} from 'react';
import { Route, IndexRedirect, browserHistory, Router, IndexRoute } from 'react-router';
import UserPage from './mains/Shells/UserPage.js';
import TestPage from './mains/Shells/TestPage.js';
import SubjectPage from './mains/Shells/SubjectPage.js';
import NotFound from './mains/Shells/NotFound.js';
import LectionPage from './mains/Shells/LectionPage.js';
import PageWithTest from './mains/Shells/PageWithTests.js';
import AuthorPage from './mains/Shells/AuthorPage.js'
import CircularProgress from 'material-ui/CircularProgress';

import RoutersApp from './Routers.js'


import { Provider } from 'react-redux';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



import * as userActions from './store/actions/userActions.js'
var injectTapEventPlugin = require("react-tap-event-plugin");

      injectTapEventPlugin(); // in constructor 







class Application extends Component{

	constructor(props) {
		    super(props);

		     // var token = '63cbbf85f586822fdb1858c7a2b605e5c29b3449'
		    this.state = {
		    	open: false,
		    	// token: token,
		    	error: 0,
		    	fulldata: 0
		    };
		  }

	setDataInRedux=(data)=>{
		const {setData} = this.props.userActions
		setData(data)
	}

	setTokenInRedux=(token)=>{
		const {setToken} = this.props.userActions
		setToken(token)
	}


	getToken=()=>{
			var xmlhttp = new XMLHttpRequest()
			xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_token', false);
			xmlhttp.send(null);  
			if(xmlhttp.status == 200) {
			var request = JSON.parse(xmlhttp.responseText).result
			var request ='3e61ea7e45dc6bce4c70039fbf50bb934f3f427c'
			if (request){
				this.setTokenInRedux(request)
				return(request)
			}
			}
	}


	LoadData=(token)=>{
		if (this.state.fulldata == 0){

			var xmlhttp = new XMLHttpRequest()
			var body =  JSON.stringify({token: token})  
			xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_mypage', false);
			xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			xmlhttp.send(body);  
			if(xmlhttp.status == 200) {
			var data = JSON.parse(xmlhttp.responseText)
			if (data.result != 'Error' ){
				this.setDataInRedux(data)
				this.setState({fulldata: data})
				// return(request)
			}
			}
			
		}
	}

	componentDidMount=()=>{
		var token = this.getToken()
		if (this.state.fulldata == 0 && token){
			this.LoadData(token);
		}
		
	}


	render(){
		
		const style = {
			margin: "auto",
			maxWidth: '50px',
			marginTop: (screen.height-100)/2
		}

		if (this.state.error == 1 ){
			return(<div><NotFound/></div>)
		}

		if (this.state.fulldata == 0) {
			return(<div style={style} >

					<CircularProgress size={40} thickness={5} mode={'indeterminate'}/>
				</div>
				)
		}else{
			const {token, data} = this.props.user
		return(<div>
					<RoutersApp store={this.props.store} />
				</div>)
		}
		

	}
}


function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}


function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}




export default connect(mapStateToProps,  mapDispatchToProps)(Application)

