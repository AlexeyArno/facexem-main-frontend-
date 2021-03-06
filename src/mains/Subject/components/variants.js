import React, {Component , PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ContentRemove from 'material-ui/svg-icons/content/remove'
import ContentAdd from 'material-ui/svg-icons/content/add'
import NavigationMoreHoriz from 'material-ui/svg-icons/navigation/more-horiz'
import VariantStatistic from './statistics/variants.js'
import HardwareKeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up'
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
import StaticTasks from './variants/staticTasks.js'


export default class Variants extends Component{

		 constructor(props) {
			    super(props);
			    this.state = { 
			    count: this.props.data.task_table.length,
			    type: false,
			    open: false,
			    index: -1,
			    value: 0,
			    statistic: false
			};
	 }


	  getSubjectName=()=>{
		var name = window.location.pathname
		name = Array.from(name)
		var subject = []
		var point= 0
		for (var i =0; i<name.length;i++){
			if(name[i]=='/' ){
				point++
			}
			if(i==0){continue}
			if(point==1){
				subject.push(name[i])
			}
		}
		return subject.join('')

	}



	goToStaticTest=(id)=>{
		var subject = this.getSubjectName()
			this.context.router.push({
				 pathname: '/'+subject+'/st-test/'+id
		})
	}




	 setTestData=()=>{
	 	this.props.setTestDataInRedux(this.state.stories)
	 		var subject = this.getSubjectName()
			this.context.router.push({
				 pathname: '/'+subject+'/test'
		})
	 }
	 componentWillMount=()=>{

	 	var stories=[]
	 	for (var i=0;i<this.props.data.task_table.length;i++){
	 		stories.push(1)
	 	}
	 	this.setState({stories})
	 }

	 open=(index)=>{
	 	document.getElementById('nowpage').style.filter='blur(2px)'
	 	this.setState({
	 		open: true, index, value: this.state.stories[index]
	 	})
	 }

	 changeSlider=(e, v)=>{
	 	this.setState({value: v})
	 }

	 Modal=()=>{
	 	this.setState({
	 		open: false
	 	})
	 	document.getElementById('nowpage').style.filter=''
	 }


	 	 statistic=()=>{
		 	if(this.state.statistic){
		 		document.getElementById('nowpage').style.filter=''
		 	}else{
		 		document.getElementById('nowpage').style.filter='blur(2px)'
		 	}
		 	this.setState({
		 		statistic: !this.state.statistic
		 	})
		 }




	 changeButton=(type)=>{
	 	var value=this.state.value
	 	if(type==='add'){	
	 		if(value<5){
	 			value++
	 		}
	 	}else{
	 		if(value>0){
	 			value--
	 		}
	 	}
	 	this.setState({
	 		value
	 	})
	 }

	 shutdown=(n)=>{
	 	var stories=this.state.stories
	 	stories=stories.map(function(item){
	 		return n
	 	})
	 	this.setState({stories})
	 }


	 acceptCount=()=>{
	 	var stories=this.state.stories
	 	stories[this.state.index]=this.state.value
	 	this.setState({stories, index: -1,  open: false})
	 	this.Modal()
	 }
	 

	getCountsTasks=()=>{
		var style={
			display: 'inline-block',
			color: '#fff',
			fontSize: '20px',
			width: 50,
			cursor: 'pointer',
			textAlign: 'center'
		}
		var count={
			width: 45,
			background: '#fff',
			borderRadius: 5,
			margin: 'auto',
			color: 'rgb(33, 150, 243)'
		}
		var final=this.state.stories.map(function(item, index){
			return(
				<FlatButton
				style={{height: 80, margin: 5, minWidth: 60}} key={index} onClick={()=>this.open(index)}>
					<Paper style={style}  >
							<div style={{background: 'rgb(33, 150, 243)'}}>
								{index+1}
							</div>
							<div style={count}>
								{item}
							</div>
					</Paper>
				</FlatButton>)
		}.bind(this))

		return final		
	}

	render(){

		const muiTheme=getMuiTheme({
		  slider: {
		      handleSize: 15,
		      handleSizeDisabled: 10,
		      handleSizeActive: 15,
		  },
		});

		const actions=[<FlatButton label="применить" style={{color: 'rgb(33, 150, 243)'}} onClick={()=>this.acceptCount()}/>]

		const closeStyle={
			position: 'absolute',
			top: '18px',
			right: '20px'
		}
		var elements=this.getCountsTasks()
		var height1 = 0
		var	height2 = 0
		var	overflow1 = 'hidden'
		var	overflow2 = 'hidden'
		if(!this.state.type){
			height1 = 255
			overflow1 = 'auto'
		}else{
			height2 = 255
			overflow2 = 'auto'
		}
		var height1 = (!this.state.type)? 255:0 
		var height2 = (this.state.type)? 255:0 
		return(	<div className="col-xs-12 col-sm-4 paper variants">
				<Paper className="preferencepaper variants" >
					<div className="Up">
						Тест
						<NavigationMoreHoriz color="rgb(115, 135, 156)" className="buttonMoreInUp" onClick={this.statistic}/>
					</div>
					<hr/>
					<div className="testContent" style={{maxHeight: height1, transition: 'max-height 450ms ease-in-out', overflowY: overflow1}}>
						<div >
							{elements}
						</div>
					</div>
					<hr style={{display: (!this.state.type)?'': 'none'}}/>
					<div style={{textAlign: 'center', cursor: 'pointer', transition: 'all 450ms ease-in-out'}}
						 className='buttonChangeTypeSubject' onClick={()=>this.setState({type: !this.state.type})}>
						<HardwareKeyboardArrowUp color="rgb(115, 135, 156)" style={{transform: (!this.state.type)? '':'rotate(180deg)'}}/>
					</div>
					<hr style={{display: (!this.state.type)?'none': ''}}/>
					<div style={{height: height2, transition: 'height 450ms ease-in-out',  overflowY: overflow2}}>
						<div>
							<StaticTasks data={this.props.static_tests} goToStaticTest={this.goToStaticTest} token={this.props.token}/>
						</div>
					</div>
					<hr/>
					<IconMenu
					className='iconMenuVariants'
				    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
				    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      				targetOrigin={{horizontal: 'left', vertical: 'top'}}
				    >
				      <MenuItem primaryText="Обычный" onClick={()=>this.shutdown(1)}/>
				      <MenuItem primaryText="Сбросить" onClick={()=>this.shutdown(0)}/>
				    </IconMenu>
					<RaisedButton  label="Вперед!" labelColor="#fff" style={{marginTop: 5, float:'right', marginRight: 20}}
								   backgroundColor="rgb(33, 150, 243)" onClick={this.setTestData}/>


				</Paper>



				<Dialog
				          title="Статистика"
				          modal={false}
				          titleStyle={{color: 'rgb(33, 150, 243)'}}
				          open={this.state.statistic}
				          autoScrollBodyContent={true}
				          bodyClassName='dialogBodyTable'
				          overlayClassName='overlay'
				          onRequestClose={this.statistic}
				          contentStyle={{padding: 10,  maxWidth: 600, width: "90%", minHeight: 400}}
				          autoDetectWindowHeight={false}
				          style={{maxHeight: 500}}
				        >	
				        <IconButton onClick={this.statistic} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
				        	<VariantStatistic data={this.props.test_info} color='rgb(33, 150, 243)'/>
				 </Dialog>



				<Dialog
		          title="Количество"
		          open={this.state.open}
		          titleStyle={{color: "rgb(33, 150, 243)"}}
		          actions={actions}
				  overlayClassName='overlay'
		          modal={false}
		          bodyClassName="contentModalCountVariants"
		          contentStyle={{width: 300, padding: 0}}
		          onRequestClose={this.Modal}
		        >
		        	<IconButton onClick={()=>this.Modal()} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
	
			        	

			        	<div style={{textAlign: "center", 'fontSize': 22}}>{this.state.value}</div>
			        		        	<div>
			        	<IconButton onClick={()=>this.changeButton('del')} 
			        		style={{display: 'inline-block', position: 'relative', bottom: 43}}>
				          	<ContentRemove color="#dddddd"/>
				          </IconButton>
					        	<div style={{display: 'inline-block', width: 150}}>
						        	<hr style={{position: 'relative', top: 34}}/>
						        	<hr style={{position: 'relative', top: 32.5, border: '0.5px solid rgb(33, 150, 243)',
						        				opacity: 0.5, width: this.state.value*20+'%'}}/>
						        		
						        	 <MuiThemeProvider muiTheme={muiTheme}>
							          
							          		<Slider value={this.state.value} min={0} max={5} step={1}
							          	 		onChange={this.changeSlider} sliderStyle={{borderColor: 'rgb(33, 150, 243)'}}/>

							           </MuiThemeProvider>
						          </div>
				           	<IconButton onClick={()=>this.changeButton('add')} style={{display: 'inline-block', position: 'relative', bottom: 43}}>
				          		<ContentAdd color="#dddddd"/>
				          	</IconButton>
			         </div>
		        </Dialog>
			</div>)

	}
}
Variants.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}
					// <FlatButton label="Обычный" style={{color:"rgb(33, 150, 243)", marginTop: 5, float: 'right', marginRight: 20}}  onClick={()=>this.shutdown(1)}/>
					// <FlatButton label="Сбросить" style={{color:"rgb(247, 89, 89)", marginTop: 5, float: 'right', marginRight: 20}} onClick={()=>this.shutdown(0)} />
