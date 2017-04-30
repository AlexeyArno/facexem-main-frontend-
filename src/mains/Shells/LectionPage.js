import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LectionContent from '../Lection/LectionContent.js'
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';



export default class LectionPage extends Component{
	
		heightZero=()=>{
			window.pageYOffset = 0;
		}

	render(){
		var data={
			name: 'Лекция №4',
			content: [
			{
						type: 'p',
						content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum sunt accusantium deserunt repellat voluptas odio, alias aspernatur delectus laudantium pariatur veritatis itaque vel a! Sint nisi aliquam qui inventore dolores!',
						style: {
							textAlign: 'left',
							textIndent: "25px",
						}},

			{
						type: 'img',
						url: 'http://333v.ru/uploads/ea/eaecdf3747af323e763870f7e492a01e.jpg',
						style:{
							maxWidth: '200px',
							textAlign: 'left'
						}
					},
			{
						type: 'p',
						content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum sunt accusantium deserunt repellat voluptas odio, alias aspernatur delectus laudantium pariatur veritatis itaque vel a! Sint nisi aliquam qui inventore dolores!',
						style: {
							textAlign: 'left',
							 textIndent: "25px",

						}},
		
			]
		}
		const labelStyle={
				color: 'white',
				textAlign: 'left',
				height: "20px"
			}
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
				break;}
		this.heightZero();
		return(	<div className=" paper variantsPage">
				<Paper className="" >
					<div className="Up">{data.name}</div>
					<hr/>
					<LectionContent data={data.content} reset={() => this.forceUpdate()}/>
					<hr/>
					<FlatButton label="предыдущая" className="ButtonTask" labelStyle={labelStyle}  backgroundColor={color} hoverColor={closeColor} />
					<FlatButton label="следующая" className="ButtonTask" labelStyle={labelStyle}  backgroundColor={color} hoverColor={closeColor} />
					
					</Paper>
			</div>)

	}
}