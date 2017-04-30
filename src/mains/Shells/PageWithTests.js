import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';




export default class PageWithTest extends Component{

	clickTest=(k, o)=>{
		var path = window.location.pathname
		var count=0
		var link=k.split('')
		var number='/' ;
		link.map(function(item, index){
			if(count>5){
				number+=item
			}
			count++
		})
		if(o){
			this.context.router.push({
			 pathname: path+number
		});

		}

	}

	render(){
		var path = window.location.pathname;
		var newpath= new Array();
		var count=0;
		for (var i=0;i<path.length;i++){
				if(path[i]=='/'){
					if(count==1){
						path=newpath
					}
					count++
				}
			newpath+=path[i]
		}
		var color;
		var closeColor;
		switch(path){
			case '/':
				color = '#5DA5DA';
				closeColor = '#70bdf9'
				break;
			case '/chemistry':
				color = '#60BD68';
				closeColor = '#85cc8b'
				break;
			case '/math':
				color = '#346EB4';
				closeColor = '#5289cc'
				break;
			case '/russian':
				color = '#F17CB0';
				closeColor = '#f7abcd'
				break;
			case '/english':
				color = '#B276B2';
				closeColor = '#c497c4'
				break;
			case '/physics':
				color = '#4AEBBF';
				closeColor = '#93f2d8'
				break;
			case '/history':
				color = '#ff7373';
				closeColor = '#ffa8a8'
				break;
			case '/information':
				color = '#0099cc';
				closeColor = '#00bfff'
				break;
		}
		var data={
			tests:[
				{
					open: true,
					rating: 2,
					link: '/test/1'
				},
								{
					open: true,
					rating: 2,
					link: '/test/2'
				},
								{
					open: true,
					rating: 2,
					link: '/test/3'
				},
								{
					open: true,
					rating: 0,
					link: '/test/4'
				},
								{
					open: false,
					rating: 0,
					link: '/test/5'
				},
								{
					open: false,
					rating: 0,
					link: '/test/6'
				},
								{
					open: false,
					rating: 0,
					link: '/test/7'
				},
								{
					open: false,
					rating: 0,
					link: '/test/8'
				},
												{
					open: false,
					rating: 0,
					link: '/test/8'
				},								{
					open: false,
					rating: 0,
					link: '/test/8'
				},
												{
					open: false,
					rating: 0,
					link: '/test/8'
				},
												{
					open: false,
					rating: 0,
					link: '/test/8'
				},
												{
					open: false,
					rating: 0,
					link: '/test/8'
				},
												{
					open: false,
					rating: 0,
					link: '/test/8'
				},
												{
					open: false,
					rating: 0,
					link: '/test/8'
				},
												{
					open: false,
					rating: 0,
					link: '/test/8'
				},
												{
					open: false,
					rating: 0,
					link: '/test/8'
				},
												{
					open: false,
					rating: 0,
					link: '/test/8'
				},
												{
					open: false,
					rating: 0,
					link: '/test/8'
				},
			],
		}
		var number = 0
		var test = data.tests.map(function(item, index){
			number = number + 1;
			var type = (item.open ? 'testButton testOpen ':'testButton testClose ')
			const style={
				background: (item.open ? color: closeColor)
			}
			const imgstyle={
				width: 25,
				height: 25,
				marginBottom: 5,
				marginLeft: 2,
				marginRight: 2
			}
			var stars;
			if(item.open){
				switch(item.rating){
					case 0:
						stars=(<div><img src='http://localhost:3000/star1.svg' style={imgstyle}/><img src='http://localhost:3000/star1.svg' style={imgstyle}/><img src='http://localhost:3000/star1.svg' style={imgstyle}/></div>)
						break;
					case 1:
						stars = (<div><img src='http://localhost:3000/star.svg' style={imgstyle}/><img src='http://localhost:3000/star1.svg' style={imgstyle}/><img src='http://localhost:3000/star1.svg' style={imgstyle}/></div>)
						break;
					case 2:
						stars=(<div><img src='http://localhost:3000/star.svg' style={imgstyle}/><img src='http://localhost:3000/star.svg' style={imgstyle}/><img src='http://localhost:3000/star1.svg' style={imgstyle}/></div>)
						break;
					case 3:
						stars=(<div><img src='http://localhost:3000/star.svg' style={imgstyle}/><img src='http://localhost:3000/star.svg' style={imgstyle}/><img src='http://localhost:3000/star.svg' style={imgstyle}/></div>)
						break;
				}

			}else{
				stars = (<img src='http://localhost:3000/padlock.svg' style={imgstyle}/>)
			}

			return(

					<div className ={type} style={style} key={index} onClick={()=>this.clickTest(item.link, item.open)}>
						<div className="testNumber">{number}</div>
						<div className="testOverlay">{stars}</div>
					</div>

				)
		}.bind(this))
		return(	<div className=" paper variantsPage">
				<Paper className="" >
					<div className="Up">Тесты</div>
					<hr/>
						{test}
				</Paper>
			</div>)

	}
}
PageWithTest.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}