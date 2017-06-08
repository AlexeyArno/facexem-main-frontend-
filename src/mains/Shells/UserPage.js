import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Whallpaper from '../User/whall.js';
import { connect } from 'react-redux'






class UserPage extends Component{
	
	componentWillMount=()=>{
		const { token} = this.props.user
		var xmlhttp = new XMLHttpRequest()
			var body =  JSON.stringify({token: token})  
			xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_mypage', false);
			xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			xmlhttp.send(body);  
			if(xmlhttp.status == 200) {
			var data = JSON.parse(xmlhttp.responseText)
			if (data.result != 'Error' ){
				this.props.setDataInRedux(data)
			}
			}
	}


	render(){
		const {data, token} = this.props.user
 		return(	<div>
		  <MuiThemeProvider>
		      <Whallpaper user={data.info} subjects={data.subjects} last={data.actions} token={token}
		       static={data.activity} preference={data.preference} globalstatic={data.global_activ}/>
		   </MuiThemeProvider>
  </div>)

	}
}
function mapStateToProps (state) {
  return {
    user: state.user,
  }
}



export default connect(mapStateToProps)(UserPage)