import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {ListItem} from 'material-ui/List';
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
import HardwareKeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up'
import ContentRemove from 'material-ui/svg-icons/content/remove'
import NavigationMoreHoriz from 'material-ui/svg-icons/navigation/more-horiz'
import Close from 'material-ui/svg-icons/navigation/close';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import ThemesStatic from './statistics/themes.js'

export default class Theme extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	statistic: false	
		    };
		  }

		  getRightIcon=(now, last)=>{
		  	if(!now){now = 0}
		  	if(!last){last = 0}
		  	var change = Math.floor(now-last)
		  	const icon_style={
		  		width: 30
		  	}
		  	var color = (change<=0)?'#E74D49':'#89D8C2'
		  	var icon = (change<=0)?<HardwareKeyboardArrowDown style={icon_style} color={color}/>:<HardwareKeyboardArrowUp style={icon_style} color={color}/>
		  	var title =(change<0)?change+' %':'+'+change+'%'
		  	if(change===0){
		  		
		  		title = change+' %'
		  		color = 'rgba(0,0,0,0.5)'
		  		icon = <ContentRemove style={icon_style} color={color}/>
		  	}
		  	return <div style={{width: 75}}>
		  				<div style={{display: 'inline-block'}}>
		  					{icon}
		  				</div>
		  				<div style={{display: 'inline-block', verticalAlign: 'super',
		  						 	color, opacity: 0.7, fontSize: 14}}>
		  					{title}
		  				</div>
		  			</div>
		  }



		  getTasks=()=>{
		  	var last_task = this.props.data.task_info.last_task_procents
		  	var tasks = this.props.data.task_info.task_table
		  	var end = (tasks.length>=4)? 4: tasks.length-1
		  	tasks =  tasks.slice(0, end)
		  	return tasks.map(function (item, index) {
		  		var color = '#F29F05'
		  		if(item.color === 'red'){
		  			color = '#E74D49'
		  		}else if(item.color === 'green'){
		  			color = '#89D8C2'
		  		}
		  		var last_num = last_task[item.num]
		  		var icon = this.getRightIcon(item.procent*100,last_num*100)
		  		return <ListItem key={index}
		  					rightIcon={icon}
		  					 style={{textAlign: 'left', padding: '5px', paddingLeft: 20}}
						        primaryText={item.theme}
						        secondaryText={item.procent*100+'%'}
						      >
						     <div style={{width: 10, height: 10, background: color, borderRadius: 5,
						     				 position: 'absolute', left: -6,top: 22, filter: 'blur(1px)'}}/>


						    </ListItem>
		  				
		  	}.bind(this))
		  }

		 statistic=()=>{
		 	if(this.state.statistic){
		 		document.getElementById('root').style.filter = 'blur(0px)'
		 	}else{
		 		document.getElementById('root').style.filter = 'blur(2px)'
		 	}
		 	this.setState({
		 		statistic: !this.state.statistic
		 	})
		 }

render(){
	var tasks = this.getTasks()
	const closeStyle={
			position: 'absolute',
			top: '18px',
			right: '20px'
		}
	return(<div className="col-xs-12 col-sm-4 paper variants">
				<Paper className="preferencepaper variants">
					<div className="Up">
						Статистика тем
						<NavigationMoreHoriz color="rgb(115, 135, 156)" className="buttonMoreInUp" onClick={this.statistic}/>
						</div>
					<hr/>
					<div >
						{tasks}
					</div>
					 
				</Paper>
				 <Dialog
				          title="Статистика тем"
				          modal={false}
				          task={true}
				          titleStyle={{color: 'rgb(33, 150, 243)'}}
				          open={this.state.statistic}
				          autoScrollBodyContent={true}
				          bodyClassName='dialogBodyTable'
				          onRequestClose={this.statistic}
				          contentStyle={{padding: 0,  maxWidth: 600, width: "90%"}}
				          autoDetectWindowHeight={false}
				          style={{maxHeight: 500}}
				        >	
				        <IconButton onClick={this.statistic} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
				        	<ThemesStatic last_task_procents={this.props.data.task_info.last_task_procents} task_table={this.props.data.task_info.task_table}/>
				        </Dialog>
			</div>)

}



}


// <Paper key={index} style={{margin: 10, padding: 10}}>

// <div style={{color: main_color, 
// 		  							 marginTop: 10, 
// 		  							 float: 'left', display: 'inline-block'}}>
// 		  							 	{item.theme}
// 		  							 </div>
// 		  					<div style={{display: 'inline-block', marginLeft: 10, color}}>{item.procent * 100+'%'}</div>