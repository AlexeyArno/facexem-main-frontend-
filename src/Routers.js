import React, { Component, PropTypes } from 'react';
// import Header from './Header.js';
import  Header from './header/header.js'
import { Route, IndexRedirect, browserHistory, Router, IndexRoute } from 'react-router';
import UserPage from './mains/Shells/UserPage.js';
import TestPage from './mains/Shells/TestPage.js';
import SubjectPage from './mains/Shells/SubjectPage.js';
import NotFound from './mains/Shells/NotFound.js';
import LectionPage from './mains/Shells/LectionPage.js';
import PageWithTest from './mains/Shells/PageWithTests.js';
import AuthorPage from './mains/Shells/AuthorPage.js'
import { Provider } from 'react-redux';
import { connect } from 'react-redux'


class RoutersApp extends Component{


	render(){
		const {token, data} = this.props.user
			var store = this.props.store
			var subjects=data.subjects.map(function (item, index) {
				var testsLink = item.link+'/test'
				var testLink = testsLink+'/:test'

				var mysubject = (props) => <Provider store={store}><SubjectPage/></Provider>
				return(
						<div key={index}>
								<Route path={item.link} component={mysubject}/>
								<Route path={testsLink} component={PageWithTest}/>
								<Route path={testLink} component={TestPage}/>
							
						  </div>


					)
				})	


			 

				var Data = {
						// data: data.notifs,
						usermenu: data.info,
						subjects: data.subjects,
				}


				const NewHeader = (props) => <div>
						<Header usermenu={Data.usermenu} subjects={Data.subjects} token={token}/>
						 	{props.children}
						</div>

				const NewUser = (props) => <div>
					 <Provider store={this.props.store}>
						<UserPage/>
					 </Provider>
				</div>

				return(	
					<Router history={browserHistory}>
						<Route path='/' component={NewHeader}>
						    <IndexRedirect to="/mypage"/>
						  	{subjects}
						  	<Route path='mypage' component={NewUser} />
						  	<Route path='author' component={AuthorPage} />
						  	<Route path='*' component={NotFound} />
						</Route>
					</Router>
		)

}
}

function mapStateToProps (state) {
  return {
    user: state.user,
  }
}


export default connect(mapStateToProps)(RoutersApp)