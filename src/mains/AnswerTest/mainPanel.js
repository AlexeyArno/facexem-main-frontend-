import React, { Component } from 'react';
import Links from  './main-panel/links.js'
import Tasks from './main-panel/tasks.js'
import ReactSwipe from 'react-swipe';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionFindInPage from 'material-ui/svg-icons/action/find-in-page'
import ActionViewCarousel from 'material-ui/svg-icons/action/view-carousel'
import ActionViewDay from 'material-ui/svg-icons/action/view-day'
import Close from 'material-ui/svg-icons/navigation/close';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import HardwareKeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up'
// import Links from './main-panel/links.js'

export default class MainPanel extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	key: Math.random(),
		    	dialogSearch: false,
		    	slide: 0,
		    	list: false,
		    	top: false
		    };
		  }

		  next=()=>{
		  	
		  	this.refs.reactSwipe.next()

		  }

		   prev=()=>{
		 
		  	this.refs.reactSwipe.prev()
		  }

		  getPos=()=>{
		  	this.refs.reactSwipe.getPos()
		  }

		  slideTo=(i)=>{
		  	if(!this.state.list){
		  		this.refs.reactSwipe.slide(i)
		  	}else{
		  		var el=document.getElementById('taskNumber'+i).offsetTop
		  		el.scrollIntoView(false)
		  		// this.scrollTo(500, el)
		  	}
		  }






		





		  dialogSearch=()=>{
		  	if(this.state.dialogSearch){
		  		document.getElementById('root').style.filter = 'blur(0px)'
		  	}else{
		  		document.getElementById('root').style.filter = 'blur(2px)'
		  		if(!this.state.list){
		  			this.setState({
		  			slide: this.refs.reactSwipe.getPos()
		  		})
		  		}
		  		
		  	}

		  	this.setState({
		  		dialogSearch: !this.state.dialogSearch
		  	})
		  }


		  






		  scroll=(evt)=>{
		  	var doc = document.documentElement
			var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)
			if(top>=240){
				if(this.state.top != true && this.state.list){
					this.setState({
						top: true
					})
				}
			}else{
				if(this.state.top != false){
					this.setState({
						top: false
					})
				}
			}
		  }


		  componentDidMount=()=>{
			 // window.addEventListener("scroll", function(e){
			 // 	this.scroll(e)
			 // }.bind(this));
		  }


		  getSmallDescript=(content)=>{
		  	var now = content.map(function(item, index){
		  		if(item.type == "paragraph"){
		  			return item.content
		  		}
		  	})
		  	return <div>{now+ '...'} </div>
		  }


		  getSearchIndexes=()=>{
		  	return this.props.data.map(function(item, index){
		  		if(index == this.state.slide){
		  			var border = '1px solid rgb(33, 150, 243)'
		  		}
		  		var descrip = this.getSmallDescript(item.task[0].content)
		  		// return <RaisedButton label={index+1} onClick={()=>this.smth(index)} style={{display: 'inline-block', margin: 5}}/>
		  		var color = 'red'
		  		if(item.solve){
		  			color = 'yellow'
		  		}
		  		if(item.count === item.need_count){
		  			color = 'green'
		  		}
		  		return <IconButton tooltip={descrip} touch={true} style={{margin: 5, display: 'inline-block'}}
		  							 tooltipPosition="bottom-center" onClick={()=>this.smth(index)} iconStyle={{ fontSize: 18, borderBottom: border, color}}>
					      <div>{index+1}</div>
					    </IconButton>

		  	}.bind(this))
		  }
		  
		  scrollTop=()=>{
		  	var 	scrollDuration = 500
		  	const   scrollHeight = window.scrollY,
			        scrollStep = Math.PI / ( scrollDuration / 15 ),
			        cosParameter = scrollHeight / 2;
			var     scrollCount = 0,
			        scrollMargin,
			        scrollInterval = setInterval( function() {
			            if ( window.scrollY != 0 ) {
			                scrollCount = scrollCount + 1;  
			                scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
			                window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
			            } 
			            else clearInterval(scrollInterval); 
			        }, 15 );
		  }


		  getTasks=()=>{
		  	return this.props.data.map(function(item, index){
		  		return <div key={index} id={'task'+index}>
		  					<Tasks pos={index} data={this.props.data} token={this.props.token}/>
				 		</div>
		  	}.bind(this))
		  }

		  change=(i)=>{
		  	this.setState({
		  		slide: i
		  	})
		  }

		  smth=(i)=>{
		  	this.dialogSearch()
		  	if(!this.state.list){
			  	this.refs.reactSwipe.slide(i);
		  	}else{
		  		var ele = document.getElementById('task'+i)
		  		window.scrollTo(ele.offsetLeft, ele.offsetTop)
		  	}
		  }

render(){
	var tasks = this.getTasks()
		const closeStyle={
			position: 'absolute',
			top: '18px',
			right: '20px'
		}



	if(this.state.list){
		var body = <div>{tasks}</div>
	}else{
		var onec = 100/tasks.length
		var width = onec*(this.state.slide+1)
		var body = <div >
						<ReactSwipe ref="reactSwipe" swipeOptions={{continuous: false, 
							  			startSlide: this.state.slide,	speed: 600,  callback: function(index, elem) {
							  				this.setState({
							  					slide: index
							  				})
							  			}.bind(this)}}>
							{tasks}
						</ReactSwipe>
						
						<RaisedButton style={{margin: 12, float: "left"}} onClick={this.prev} disabled={(this.state.slide==0)? true:false} icon={<HardwareKeyboardArrowLeft />}/>
						<RaisedButton style={{margin: 12, float: "right"}} onClick={this.next} disabled={(this.state.slide==tasks.length-1)? true:false}icon={<HardwareKeyboardArrowRight />}/>
						<div style={{height: 2, backgroundColor: 'rgba(0,0,0,0.3)', margin: '30px auto', width: "35%", }}>
							<div style={{width: width+'%', height: 2, backgroundColor: 'rgb(33, 150, 243)', transition: 'width 0.5s ease-in-out'}}/>
						</div>
					 	
					</div>
	}
	var search = this.getSearchIndexes()
	var searchDialog = <Dialog
					  open={this.state.dialogSearch}
					   title="Найти"
					  contentStyle={{padding: 0, maxWidth: 500, width: "90%"}}
					  onRequestClose={this.dialogSearch}
					  contentLabel="Modal"
					  titleStyle={{color:'rgb(33, 150, 243)'}}
					  autoScrollBodyContent={true}
					>	
					<IconButton onClick={this.dialogSearch} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
						<div style={{padding: 10,textAlign:"center", minHeight: 200}}>
							{search}
							</div>
					</Dialog>
	var buttonUp=(!this.state.list)?<div/>:<FloatingActionButton style={{position: 'fixed', bottom: 10, left: 10}} onClick={this.scrollTop}
										 					backgroundColor="rgb(33, 150, 243)" className='UpButton'>
									      <HardwareKeyboardArrowUp />
									    </FloatingActionButton>	

	return(<div>
			<div style={{width: '100%'}}>

				<div style={{display:" inline-block"}}><Links data={this.props.data} changePos={this.slideTo}  top={this.state.top}/></div>
				<div style={{display: 'inline-block', textAlign: 'right'}}>
					<div style={{width: 300}}>
						<IconButton style={{display: "inline-block"}} onClick={()=>this.setState({list: false})}>
							<ActionViewCarousel  color={(!this.state.list)? 'rgb(33, 150, 243)':  'rgba(0,0,0,0.5)'}/>
						</IconButton>
						 <Toggle
						 	defaultToggled={this.state.list}
						 	  thumbSwitchedStyle={{backgroundColor: 'rgb(33, 150, 243)' }}
	      						trackSwitchedStyle={{backgroundColor: 'rgba(33, 150, 243, 0.5)' }}
	      						onToggle={(e, v)=>this.setState({list: v})}
					      	style={{display: 'inline-block', maxWidth: 50, position: "relative", bottom: 5}}
					    />
					    <IconButton style={{display: "inline-block"}} onClick={()=>this.setState({list: true})}>
					    	<ActionViewDay  color={(this.state.list)? 'rgb(33, 150, 243)': 'rgba(0,0,0,0.5)'}/>
						</IconButton>
				    </div>
			    </div>
			</div>
				{body}
			{buttonUp}
		</div>

		

		   )

}



}

// <IconButton style={{}}>
				// 	<ActionFindInPage onClick={this.dialogSearch} color='rgb(33, 150, 243)'/>
				// </IconButton>