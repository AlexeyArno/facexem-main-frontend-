import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Whallpaper from '../User/whall.js';
import { connect } from 'react-redux'


class UserPage extends Component{
	


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