import React, { Component } from 'react';
// import Header from './Header.js';
import  Header from './header/header.js'
import { Route, IndexRedirect, browserHistory, Router } from 'react-router';
import UserPage from './mains/Shells/UserPage.js';
import TestPage from './mains/Shells/TestPage.js';
import SubjectPage from './mains/Shells/SubjectPage.js';
import NotFound from './mains/Shells/NotFound.jsx';
import TaskPage from './mains/Shells/TaskPage.js'
import AnswerTest from './mains/Shells/AnswerTestPage.js'
import { Provider, connect  } from 'react-redux';


class RoutersApp extends Component{


	render(){
        var subjects;
        const {token, data} = this.props.user;
        var store = this.props.store;
        subjects = data.subjects.map(function (item, index) {
            var testLink = item.link + '/test';
            var testAnswer = item.link + '/mytest/:test';
            var SinglTaskLink = item.link + '/singletask/:task';
            let RandomTaskLink = item.link + '/randomtask';
            var mysubject = (props) => <Provider store={store}><SubjectPage
				setTestDataInRedux={this.props.setTestDataInRedux}/></Provider>;
            var singletask = (props) => <Provider store={store}><TaskPage/></Provider>;
            var randomtask = (props) => <Provider store={store}><TaskPage/></Provider>;
            var testpage = (props) => <Provider store={store}><TestPage/></Provider>;
            var answertest = (props) => <Provider store={store}><AnswerTest/></Provider>;
            return (
				<div key={index}>
					<Route path={item.link} component={mysubject}/>
					<Route path={testLink} component={testpage}/>
					<Route path={testAnswer} component={answertest}/>
					<Route path={SinglTaskLink} component={singletask}/>
					<Route path={RandomTaskLink} component={randomtask}/>
				</div>


            )
        }.bind(this));


			 

				var Data = {
						// data: data.notifs,
						usermenu: data.info,
						subjects: data.subjects,
				};


				const NewHeader = (props) => <div>
						<Header usermenu={Data.usermenu} subjects={Data.subjects}
						 token={token} reload={this.props.reload}/>
						 	{props.children}
						</div>;

				const NewUser = (props) => <div>
					 <Provider store={this.props.store}>
						<UserPage setDataInRedux={this.props.setDataInRedux}/>
					 </Provider>
				</div>;

				return(	
					<Router history={browserHistory}>
						<Route path='/' component={NewHeader}>
						    <IndexRedirect to="/mypage"/>
						  	{subjects}
						  	<Route path='mypage' component={NewUser} />
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