import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';



// CUSTOM MODULES
import UserMenu from './menu.js'
import Achievs from './achievs.js'
import Settings from './settings.js'

export default class Header extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	menu: false,
		    	achievs: false,
		    	settings: false
		    };
		  }

		  menu_open=()=>{
		  	this.setState({
		  		menu: true
		  	})
		  }

		  menu_close=()=>{
		  	this.setState({
		  		menu: false
		  	})
		  }


		  settings =()=>{
		  	this.menu_close()
		  	this.setState({
		  		settings: !this.state.settings
		  	})
		  }

		  achievs = () =>{
		  	this.menu_close()
		  	this.setState({
		  		achievs: !this.state.achievs
		  	})
		  }

		  getTitle=(path)=>{
			  	switch(path){
				case '/chemistry':
					return('Химия')
				case '/math':
					return('Математика базовый')
				case '/math-pro':
					return('Математика профиль')
				case '/russian':
					return('Русский язык')
				case '/english':
					return('Английский язык')
				case '/physics':
					return('Физика')
				case '/history':
					return('История')
				case '/information':
					return('Информатика')
			}
			return('Facexem');
		  }

render(){
	const closeStyle={
			position: 'absolute',
			top: '18px',
			right: '20px'
		}

	var title = this.getTitle(window.location.pathname)
	var color_achiev = 'rgb(33, 150, 243)'
	var color_sett = 'rgb(28, 206, 144)'
	return( <div> 
				<AppBar
				    title={title}
				    titleStyle={{ display: 'inline-block', fontSize: 19, marginTop: 14}}
				    style={{height: 50, background: '#2196F3', position: 'fixed', top: "0px"}}
				    zDepth={2}
				    iconElementLeft={   <IconButton style={{margin: 0}} 
				    onClick={()=>this.menu_open()}><Menu /></IconButton>}
			  	/>
			  	<Drawer
		          docked={false}
		          width={250}
		          disableSwipeToOpen={true}
		          open={this.state.menu}
		          onRequestChange={() => this.menu_close()}
		        >
		          <UserMenu data={this.props.usermenu} subjects={this.props.subjects} 
		           achievs={this.achievs} close={this.menu_close} settings={this.settings}/>
		        </Drawer>
		        <Dialog
				 	open={this.state.achievs}
		 			title="Достижения"
				    contentStyle={{padding: 0}}
					onRequestClose={this.achievs}
				    contentLabel="Modal"
				     task={true}
				    contentStyle={{maxWidth: 900, width: "90%"}}
				    autoScrollBodyContent={true}
				  	titleStyle={{color: color_achiev}}
					>
					<IconButton onClick={this.achievs} style={closeStyle}><Close color={color_achiev}/></IconButton>
					<Achievs token={this.props.token} color={color_sett}/>
				</Dialog>
				<Dialog
				 	open={this.state.settings}
		 			title="Настройки"
				    contentStyle={{padding: 0}}
					onRequestClose={this.settings}
				    contentLabel="Modal"
				    contentStyle={{maxWidth:500}}
				    autoScrollBodyContent={true}
				  	titleStyle={{color: color_sett}}
					>
					<IconButton onClick={this.settings} style={closeStyle}><Close color={color_sett}/></IconButton>
					<Settings token={this.props.token} color={color_sett}/>
				</Dialog>



  			</div>

		

		   )

}



}