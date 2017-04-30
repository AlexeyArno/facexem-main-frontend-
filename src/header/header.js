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

export default class Header extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	menu: false,
		    	achievs: false
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

		  achievs = () =>{
		  	this.menu_close()
		  	this.setState({
		  		achievs: !this.state.achievs
		  	})
		  }

render(){
	const closeStyle={
			position: 'absolute',
			top: '18px',
			right: '20px'
		}
	return( <div> 
				<AppBar
				    title="Facexem"
				    titleStyle={{ display: 'inline-block'}}
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
		           achievs={this.achievs} close={this.menu_close}/>
		        </Drawer>
		        <Dialog
				 	open={this.state.achievs}
		 			title="Достижения"
				    contentStyle={{padding: 0}}
					onRequestClose={this.achievs}
				    contentLabel="Modal"
				    contentStyle={{maxWidth: 900, width: "90%"}}
				    autoScrollBodyContent={true}
				  	titleStyle={{color: 'rgb(33, 150, 243)'}}
					>
				<IconButton onClick={this.achievs} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
				<Achievs token={this.props.token}/>
			</Dialog>



  			</div>

		

		   )

}



}