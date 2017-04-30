import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';
import Paper from 'material-ui/Paper';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';
import browserHistory from 'react-router';
import {Router, Route} from 'react-router'
import TopNews from './top.js'
export default class ThreeSlider extends Component{
	 constructor(props) {
    super(props)
    	this.changeHandler = this.changeHandler.bind(this)
  	}
  	 changeHandler(n) {
    this.refs.slider.slickGoTo(n)
  	}


	ChangeFuck=(k)=>{
		console.log(k)
	}
	handllink=(name)=>{
			 		this.setState({open: false});
					this.context.router.push({
					  pathname: '/'+name
					});				
			 }
	render(){
		var data=this.props.data
		console.log(data)
		var states=data.map(function(item, index){
			var style={
			background: 'url('+item.img+')',
			display: 'inline-block',
			maxWidth: "900px",
			height: "700px",
			marginTop: 0,
			backgroundRepeat: 'no-repeat',
			paddingTop: '300px',
			boxShadow: " 0px 150px 100px #000" 
			}
			var timeStyle={
				marginLeft: "10px",
				width: "100px",
				vericalAlign: 'middle',
				textAlign: 'center',
				background: 'rgba(0,0,0,0.3)',
				color: "rgb(255, 64, 129)",
				fontSize: '13px',
				fontWeight: '500',
				height: "25px",
				paddingLeft: '10px'
			}
			var url = 'news/'+ item.url
			return(<div style={style} key={index} className='sliderUnit' onClick={()=>this.handllink(url)} >
					<div style={timeStyle}><ActionSchedule style={{fontSize: "13px", color: 'rgb(255,64,129)', width: '20px', float: "left"}}/><div style={{display: 'inline-block',float: "left", height: "24px", lineHeight: '2',paddingLeft: '5px'}}>{item.time}</div></div>
					<div style={{color: '#fff', fontSize: '26px', fontWeight: '500', marginLeft: "10px", marginTop: '15px' }}>{item.name}</div>
					<div style={{color: '#fff', fontSize: '16px', fontWeight: '400', marginLeft: "10px", marginTop: '15px', height: '70px' }}>{item.description}</div>
				</div>)
		}.bind(this))
		var count=0
		var rightbar=data.map(function(item, index){
			var style={
			background: 'url('+item.img+')',
			maxWidth: "200px",
			minHeight: "150px",
			margin: 0,
			backgroundSize: '150%',
			backgroundRepeat: 'no-repeat',
			}
			return(
				<div style={style} key={index} onClick={()=>this.changeHandler(index)}>
					<div className='TitleNameState'>{item.name}</div>
				</div>


				)
		}.bind(this))
			var style={
			margin: '0 auto',
			maxWidth: "900px",
			height: "450px",
			padding: 0,
			display: 'inline-block',
			overflow: 'hidden',
			float: "left"
			}
			var settings={
				accessibility: false,
				autoplay: true,
				autoplaySpeed: 5000,
				dots: false,
				speed: 1500,
				pauseOnHover: true,
				fade: true,
				swipe: false,
				arrows: false
			}
		return(	<div>
			<Paper>
				<div style={style}>
					<Slider style={style} {...settings} ref='slider'>
					{states}
			      	</Slider>
			     </div>
			     <div style={{float: "left"}}>{rightbar}</div>
			</Paper>

			</div>
		)

	}
}
ThreeSlider.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}