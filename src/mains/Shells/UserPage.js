import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Whallpaper from '../User/whall.js';
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import CircularProgress from 'material-ui/CircularProgress';






class UserPage extends Component{
	constructor(props) {
		    super(props);
		    this.state = {
		    	load: 0,
		    	data: []
		    };
		  }
	
	componentWillMount=()=>{
		this.LoadData()
	}


	LoadData=()=>{
			const { token} = this.props.user
			var xmlhttp = new XMLHttpRequest()
			var body =  JSON.stringify({token: token})
			xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_mypage', true);
			xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			xmlhttp.send(body); 
			xmlhttp.onreadystatechange = function() { // (3)
			  if (xmlhttp.status === 200) {
			  var data = JSON.parse(xmlhttp.responseText)
				if (data.result != 'Error' ){
					// this.props.setDataInRedux(data)
					this.setState({
						data, load: 1
					})
				}
			  }
			  if (xmlhttp.status != 200) {
			    console.log( 'Ошибка: ' + (xmlhttp.status ? xmlhttp.statusText : 'запрос не удался') );
			    return;
			  }
		}.bind(this)
	}


	render(){
		const {data, token} = this.props.user
		var real_data = this.state.data
		if(this.state.load === 0){
			const style = {
			margin: "auto",
			maxWidth: '50px',
			marginTop: (screen.height-100)/2
		}
		return(
			<div style={style} >
				<CircularProgress size={40} thickness={3} mode={'indeterminate'} color='#2196F3'/>
			</div>
			)
		}
 		return(	
 				<ReactCSSTransitionGroup
								 transitionName="opacity"
					               transitionAppear={true} transitionAppearTimeout={800}
					               transitionEnter={false} transitionLeave={false}>
				 <div id='nowpage'>
						  <MuiThemeProvider>
						      <Whallpaper user={data.info} subjects={data.subjects} last={real_data.actions} token={token}
						       static={real_data.activity} preference={real_data.preference} globalstatic={real_data.global_activ}/>
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



export default connect(mapStateToProps)(UserPage)