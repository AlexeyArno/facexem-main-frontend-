
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Experience from './exp.js';
import UserInfo from './info.js';
// import Modal from 'react-modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';
import Change from './change.js';
import Dialog from 'material-ui/Dialog';
// import MiniMenu from './mini-menu.js';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';


import ActionSettings from 'material-ui/svg-icons/action/settings'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'

export default class UserRow extends Component{
			constructor(props) {
			    super(props);
			    this.state = {
			    	open:false,
			    	token:this.props.token,
			    	notif:false,
			    	modalIsOpenMessages:false,
			    	real_data: this.props.data,
			    	data: JSON.parse(JSON.stringify(this.props.data)),
			    	modalIsOpenBest:false
			    };
			  }

			  closeBest=()=>{
			  	this.setState({modalIsOpenBest: false});
		  			document.getElementById('nowpage').style.filter = ''
				}
				
			  someFuncBest=()=>{
		  		document.getElementById('nowpage').style.filter = 'blur(2px)'
			  	this.setState({open: false});
			  	this.setState({modalIsOpenBest: true});
			  }

			  doc=(name)=>{return(document.getElementById(name))}

			  // THIS ELEMENTS IS IN CONTENTCHANGE, OK?
			  save=()=>{
			  	// var name = this.doc('nameContent').value
			  	var city = this.state.data.city
			  	var background = this.state.data.background
			  	var about = this.state.data.about
			  	var photo = this.state.data.photo
			  	var body =  JSON.stringify({token: this.props.token, city, about, photo, background})  
				var xhr  = new XMLHttpRequest();   
				xhr .open('POST', 'http://127.0.0.1:9999/api/user/set_page_info', true);
				xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  
				xhr .send([body]);
				xhr.onreadystatechange =  function() {
					if (xhr.readyState === 4){
					    if (xhr.status !== 200) {
					      console.log('Error loads')
				    } else {
				      this.closeBest()
				      var data = this.state.real_data
				      data.city = city
				      data.about = about
				      data.background = background
				      data.photo = photo
				      this.setState({
				      	real_data: data,
				      	data:  JSON.parse(JSON.stringify(data))
				      })
				    }
				  }
				 }.bind(this)
			  }	

			 change=(data)=>{
			 	this.setState({
			 		data
			 	})
			 }
	render(){




		/*  Variables*/



		var background = this.state.real_data.background;
		var photo = this.state.real_data.photo;



		/*  STYLES*/




		

		const stylePhoto = {
			backgroundImage: 'url(/avatars/' + photo + ')',
			width: 100,
			height: 100,
			float: 'left',
			marginLeft: 10,
			backgroundColor: 'rgba(0,0,0,0.7)'
		}
		const style={
			backgroundImage: 'url(/bg/' + background + ')',
			color: "white",
			boxShadow: 'rgba(50, 50, 50, 0.507843) 0px -48px 49px -26px inset, rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
			paddingTop: 30
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
		 <FlatButton style={{float: "left"}} label="подписка" labelStyle={{color: 'rgb(33, 150, 243)'}} onClick={this.closeBest}/>,
		 <RaisedButton label="сохранить" labelStyle={labelStyle}  backgroundColor="rgb(33, 150, 243)" onClick={this.save}/>
		 ]
		return(
				<div>
					<Paper className="UserRow" style={style}>
						<div >
							<Paper style={stylePhoto} zDepth={3} circle={true} className='userAvatar'/>
							<UserInfo  data={this.state.real_data}/>
							<FloatingActionButton onClick={this.someFuncBest} style={{float: "right", marginRight: 16, marginTop: -16}}
												 backgroundColor="rgb(33, 150, 243)" className="buttonMenuUser" mini={true}>
								<EditorModeEdit />
							</FloatingActionButton>


							<div className="Overlay">
							 <Experience data={this.state.data} />
							</div>
						</div>
					</Paper>
					<ReactCSSTransitionGroup
							transitionName="example"
				               transitionAppear={true} transitionAppearTimeout={2000}
				               transitionEnter={false} transitionLeave={false}>
					<Dialog
					  open={this.state.modalIsOpenBest}
					   title="Изменить"
					  modal={true}
					  overlayClassName='overlay'
					  actions={actions}
					  contentStyle={{padding: 0, maxWidth: 500, width: "90%"}}
					  onRequestClose={this.closeBest}
					  contentLabel="Modal"
					  titleStyle={{color:'rgb(33, 150, 243)'}}
					  autoScrollBodyContent={true}
					>	
					<IconButton onClick={this.closeBest} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
						<Change data={this.state.data} color='rgb(33, 150, 243)' token={this.props.token} change={this.change}/>
					</Dialog>

					</ReactCSSTransitionGroup>
				</div>
		)
	}
}


							// <FlatButton style={styleButton} label="Изменить" primary={true} labelStyle={styleButtonLabel} onClick={this.someFuncBest} />
