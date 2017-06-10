import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Experience from './exp.js';
import UserInfo from './info.js';
// import Modal from 'react-modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';
import Change from './change.js';
import {fullWhite} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
// import MiniMenu from './mini-menu.js';

export default class UserRow extends Component{
			constructor(props) {
			    super(props);
			    this.state = {open: false,
			    	token: this.props.token,
			    	notif: false,
			    	modalIsOpenMessages:false,
			    	data: this.props.data,

			    	modalIsOpenBest:false};
			  }

			  closeBest = () => {
			  	this.setState({modalIsOpenBest: false});
		  			document.getElementById('root').style.filter = 'blur(0px)'
				}
				
			  someFuncBest = () => {
		  		document.getElementById('root').style.filter = 'blur(2px)'
			  	this.setState({open: false});
			  	this.setState({modalIsOpenBest: true});
			  }

			  doc=(name)=>{return(document.getElementById(name))}

			  // THIS ELEMENTS IS IN CONTENTCHANGE, OK?
			  save=()=>{
			  	
			  	var name = this.doc('nameContent').value
			  	var city = this.doc('cityContent').value
			  	var history = this.doc('bioInput').value
			  	var body =  JSON.stringify({token: this.state.token, name: name, city: city, about: history})  
				var xhr  = new XMLHttpRequest();   
				xhr .open('POST', 'http://127.0.0.1:9999/api/user/set_page_info', true);
				xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  
				xhr .send([body]);
				xhr.onreadystatechange =  function() {
					if (xhr.readyState == 4){
					    if (xhr.status != 200) {
					      console.log('Error')
					    } else {
					      this.closeBest()
					      var data = this.state.data
					      data.name = name
					      data.city = city
					      data.about = history
					      this.setState({
					      	data: data
					      })
					    }
				  }
				 }.bind(this)
			  }	

	render(){




		/*  Variables*/



		var background = this.state.data.background;
		var photo = this.state.data.photo;
		var badges = this.state.data.badges;



		/*  STYLES*/




		

		const stylePhoto = {
			backgroundImage: 'url(/avatars/' + photo + ')',
			width: 100,
			height: 100,
			float: 'left',
			marginLeft: 10,
			backgroundColor: 'rgba(0,0,0,0)'
		}
		const styleButton = {
			float: "right",
			position: 'relative',
			marginLeft: '90%',
			border: '0.5px solid #9CCC65',
			top: 5,
			right: 5,
			lineHeight: 1.3
		}
		const styleButtonLabel={
			color: '#9CCC65',
			opacity: 0.9,
			lineHeight: 1.6

		}
		const style={
			backgroundImage: 'url(' + background + ')',
			color: "white"
		}
		const labelStyle={
			color: 'white'
		}
		const closeStyle={
			position: 'absolute',
			top: '18px',
			right: '20px'
		}


		/*  Content     */




		 const actions = [
		 <FlatButton style={{float: "left"}} label="подписка" primary={true} onClick={this.closeBest}/>,
		 <FlatButton label="сохранить" labelStyle={labelStyle}  backgroundColor="rgb(150, 198, 95)" hoverColor="#8AA62F" onClick={this.save}/>
		 ]
		return(
				<div>
					<Paper className="UserRow" style={style}>
						<FlatButton style={styleButton} label="Изменить" primary={true} labelStyle={styleButtonLabel} onClick={this.someFuncBest} />
						<Paper style={stylePhoto} zDepth={3} circle={true} />
						<UserInfo  data={this.state.data}/>
						<div className="Overlay">
							


						 <Experience data={this.state.data} />
						</div>
					</Paper>
					<ReactCSSTransitionGroup
							transitionName="example"
				               transitionAppear = {true} transitionAppearTimeout = {2000}
				               transitionEnter = {false} transitionLeave = {false}>
					<Dialog
					  open={this.state.modalIsOpenBest}
					   title="Изменить"
					  actions={actions}
					  contentStyle={{padding: 0, maxWidth: 900, width: "90%"}}
					  onRequestClose={this.closeBest}
					  contentLabel="Modal"
					  titleStyle={{color:'rgb(150, 198, 95)'}}
					  autoScrollBodyContent={true}
					>	
					<IconButton onClick={this.closeBest} style={closeStyle}><Close color='rgb(150, 198, 95)'/></IconButton>
					<Change data={this.state.data} token={this.state.token}/>
					</Dialog>

					</ReactCSSTransitionGroup>
				</div>
		)
	}
}


