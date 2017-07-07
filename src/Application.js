import React, { Component} from 'react';
import NotFound from './mains/Shells/NotFound.jsx';
// import AuthorPage from './mains/Shells/AuthorPage.js'
import CircularProgress from 'material-ui/CircularProgress';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import RoutersApp from './Routers.js'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



import * as userActions from './store/actions/userActions.js'
var injectTapEventPlugin = require("react-tap-event-plugin");

      injectTapEventPlugin(); // in constructor 







class Application extends Component{

	constructor(props) {
		    super(props);
		    this.state = {
		    	open: false,
		    	error: 0,
		    	fulldata: 0,
		    	key: Math.random()
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

	setTestDataInRedux=(data)=>{
		const {setTestDate} = this.props.userActions
		setTestDate(data)
	}



	componentWillMount=()=>{
		var token = this.getToken()
		this.LoadData(token);
	}

	getToken=()=>{
			var xmlhttp = new XMLHttpRequest()
			xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_token', false);
			xmlhttp.send(null);  
			if(xmlhttp.status === 200) {
			var request = JSON.parse(xmlhttp.responseText)
			request ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWMiOiIxZGU2NDA4N2E3ZWQ5ZWQxZmRhZmQ1ZDk1MGU0YTBlOWU5MTdmZjBmIiwiZXhwIjoxNTAyMDI2OTM5fQ.K2CUltNu9T4nXpsZZA5dtzY12Gj2AnMyALDZrgcJ__g"
				if (!request.result){
					this.setTokenInRedux(request)
					return(request)
				}
			}
	}


	LoadData=(token)=>{

			var xmlhttp = new XMLHttpRequest()
			var body =  JSON.stringify({token: token})  
			xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_mypage', false);
			xmlhttp.send(body);  
			if(xmlhttp.status === 200) {
			var data = JSON.parse(xmlhttp.responseText)
			if (data.result !== 'Error' ){
				this.setDataInRedux(data)
				this.setState({fulldata: data})
			}
			}
			
	}

	reload=(data)=>{
		var o_data = this.state.fulldata
		o_data.info[0].name = data.name
		this.setDataInRedux(o_data)
		this.setState({
			fulldata: o_data
		})
	}



	render(){
		
		const style = {
			margin: "auto",
			maxWidth: '50px',
			marginTop: (screen.height-100)/2
		}

		if (this.state.error === 1 ){
			return(<div><NotFound/></div>)
		}

		if (this.state.fulldata === 0) {
			return(<div style={style} >

					<CircularProgress size={40} thickness={3} mode={'indeterminate'} color='#2196F3'/>
				</div>
				)
		}else{
		return(
					<div>
						<RoutersApp store={this.props.store} setDataInRedux={this.setDataInRedux}
						 setTestDataInRedux={this.setTestDataInRedux} reload={this.reload} key={this.state.key}/>
					</div>
				)
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

