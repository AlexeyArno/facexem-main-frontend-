import React, {Component , PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';
import ContentReply from 'material-ui/svg-icons/content/reply'
import SocialPerson from 'material-ui/svg-icons/social/person'



// CUSTOM MODULES
import UserMenu from './menu.js'
// import Achievs from './achievs.js'
import Settings from './settings.js'
import Issue from './issue.js'

export default class Header extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	menu: false,
		    	achievs: false,
		    	settings: false,
		    	issue: false,
		    	windows: {achievs: false, settings: false, issue: false}
		    };
		  }
		   handllink=(name)=>{
			this.context.router.push({
				 pathname: '/'+name
			});
		}

		  menu_open=()=>{
		  	document.getElementById('nowpage').style.filter = 'blur(2px)'
		  	this.setState({
		  		menu: true
		  	})
		  }

		  menu_close=()=>{
		  	document.getElementById('nowpage').style.filter = ''
		  	this.setState({
		  		menu: false
		  	})
		  }

		  blurControll=(bool)=>{
		  	if(bool){
		  		document.getElementById('nowpage').style.filter = ''
		  	}else{
		  		document.getElementById('nowpage').style.filter = 'blur(2px)'
		  	}
		  }

		  windowController=(type)=>{
		  	this.menu_close()
		  	var data = this.state.windows
		  	this.blurControll(data[type])
		  	data[type] = !data[type]
		  	this.setState({
		  		windows: data
		  	})

		  }


		  settings =()=>{
		  	this.menu_close()
		  	if(this.state.settings){
		  		document.getElementById('nowpage').style.filter = ''
		  	}else{
		  		document.getElementById('nowpage').style.filter = 'blur(2px)'
		  	}
		  	this.setState({
		  		settings: !this.state.settings
		  	})
		  }

		  achievs = () =>{
		  	this.menu_close()
		  	if(this.state.achievs){
		  		document.getElementById('nowpage').style.filter = ''
		  	}else{
		  		document.getElementById('nowpage').style.filter = 'blur(2px)'
		  	}
		  	this.setState({
		  		achievs: !this.state.achievs
		  	})
		  }


		  getUrlhData = ()=>{
		  	// function that decode "/math/singletask/4" to "math", "singletask", "4"
		  	var body = window.location.pathname
		  	var workbody = Array.from(body)
		  	var subject = []
		  	var type = []
		  	var number = []
		  	var count = 0
		  	for(var i=0; i<workbody.length;i++){
		  		count =(workbody[i] === '/')? count+1:count
		  		if(count===1){
		  			if (workbody[i]==='/') continue;
		  			subject[subject.length] = workbody[i] 
		  		}else if(count === 2){
		  			if (workbody[i]==='/') continue;
		  			type[type.length] = workbody[i]
		  		}else if(count === 3){
		  			if (workbody[i]==='/') continue;
		  			number[number.length] = workbody[i]
		  		}
		  		
		  	}
		  	return({subject:subject.join(''), type: type.join(''), number:number.join('')})
		  }

		  getTitle=(data)=>{
			  	switch(data.subject){
				case 'chemistry':
					return('Химия')
				case 'math':
					return('Математика базовый')
				case 'math-pro':
					return('Математика профиль')
				case 'russian':
					return('Русский язык')
				case 'english':
					return('Английский язык')
				case 'physics':
					return('Физика')
				case 'history':
					return('История')
				case 'information':
					return('Информатика')
				default:
					return('Facexam');
			}
			
		  }

render(){
	const closeStyle={
			position: 'absolute',
			top: '18px',
			right: '20px'
		}
	var data_header = this.getUrlhData()
	var title = this.getTitle(data_header)
	document.title = (title!=='Facexam')? title+' | Facexem': title
	var color_achiev = 'rgb(33, 150, 243)'
	var color_sett = '#7bc6cc'
	var color_issue = '#ff9f89'
	var icon_right = <div/>
	if(data_header.type === 'randomtask' || data_header.type === "singletask" || data_header.type === 'test' || data_header.type === 'mytest' || data_header.type=== 'st-test'){
		icon_right = <IconButton onClick={()=>this.handllink(data_header.subject)} tooltip="Вернуться"><ContentReply/></IconButton>
	}else if(data_header.subject !== 'mypage'){
		icon_right = <IconButton onClick={()=>this.handllink('mypage')} tooltip="Моя страница"><SocialPerson/></IconButton>
	}
	return( <div> 
				<AppBar
				    title={title}
				    titleStyle={{ display: 'inline-block', fontSize: 19, marginTop: 14}}
				    style={{height: 50, background: '#2196F3', position: 'fixed', top: "0px"}}
				    zDepth={2}
				    iconElementLeft={<IconButton style={{margin: 0}} 
				    onClick={()=>this.menu_open()}><Menu /></IconButton>}
				    iconElementRight={icon_right}
				    iconStyleRight={{float: 'right'}}
			  	/>
			  	<Drawer
		          docked={false}
		          overlayClassName='overlay'
		          width={250}
		          disableSwipeToOpen={true}
		          open={this.state.menu}
		          onRequestChange={() => this.menu_close()}
		        >
		          <UserMenu data={this.props.usermenu} subjects={this.props.subjects} 
		            close={this.menu_close} settings={()=>this.windowController('settings')}
		            issue={()=>this.windowController('issue')}/>
		        </Drawer>
		        
				<Dialog
				 	open={this.state.windows.settings}
		 			title="Настройки"
		 			overlayClassName='overlay'
				    contentStyle={{padding: 0}}
					onRequestClose={()=>this.windowController('settings')}
				    contentLabel="Modal"
				    contentStyle={{maxWidth:500, width: "90%"}}
				    autoScrollBodyContent={true}
				  	titleStyle={{color: color_sett}}
					>
					<IconButton onClick={()=>this.windowController('settings')} style={closeStyle}>
						<Close color={color_sett}/>
					</IconButton>
					<Settings token={this.props.token} color={color_sett} 
								close={()=>this.windowController('settings')} reload={this.props.reload}/>
				</Dialog>
				<Dialog
				 	open={this.state.windows.issue}
		 			title="Ошибка?"
		 			modal={true}
		 			overlayClassName='overlay'
				    contentStyle={{padding: 0}}
					onRequestClose={()=>this.windowController('issue')}
				    contentLabel="Modal"
				    contentStyle={{maxWidth:500, width: "90%"}}
				    autoScrollBodyContent={true}
				  	titleStyle={{color: color_issue}}
					>
					<IconButton onClick={()=>this.windowController('issue')} style={closeStyle}>
						<Close color={color_issue}/>
					</IconButton>
					<Issue token={this.props.token} color={color_issue} 
							close={()=>this.windowController('issue')}/>
				</Dialog>



  			</div>

		

		   )

}



}


Header.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}


// <Dialog
// 				 	open={this.state.achievs}
// 		 			title="Достижения"
// 				    contentStyle={{padding: 0}}
// 					onRequestClose={this.achievs}
// 				    contentLabel="Modal"
// 				     task={true}
// 				    contentStyle={{maxWidth: 900, width: "90%"}}
// 				    autoScrollBodyContent={true}
// 				  	titleStyle={{color: color_achiev}}
// 					>
// 					<IconButton onClick={this.achievs} style={closeStyle}><Close color={color_achiev}/></IconButton>
// 					<Achievs token={this.props.token} color={color_sett}/>
// 				</Dialog>