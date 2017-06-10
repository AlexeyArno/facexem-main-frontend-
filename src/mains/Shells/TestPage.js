import React, { Component } from 'react';
import TestContent from '../Test/TestContent.js'
import Paper from 'material-ui/Paper';

export default class TestPage extends Component{

	render(){
		var data={
			name: 'Тест №4',
			content: [
			{
				question:{
					p:{
						content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum sunt accusantium deserunt repellat voluptas odio, alias aspernatur delectus laudantium pariatur veritatis itaque vel a! Sint nisi aliquam qui inventore dolores!',
						style: {
							textAlign: 'left',
							maxWidth: '450px',
							fontSize: '18px'
						}},
					img: {
						url: 'http://333v.ru/uploads/ea/eaecdf3747af323e763870f7e492a01e.jpg',
						style:{
							maxWidth: '200px',
							textAlign: 'left'
						}
					}
				}
			
			},
			{
				question:{
					p:{
						content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores laborum repellat at omnis unde obcaecati amet a sunt quidem fugiat dolorum qui distinctio mollitia, repellendus eaque minima aspernatur esse, labore.',
						style: {
							textAlign: 'left',
							maxWidth: '450px',
							fontSize: '18px'
						}},
					img: {
						url: '......',
						style:{
							
						}
					}
				}
			},
		
			]
		}
		var answers = [1,2,'hello',4,5,6,7,8,9]
		return(	
			<div className=" paper variantsPage" id='nowpage'>
				<Paper className="" >
					<div className="Up">Тест</div>
					<hr/>
					<TestContent data={data} answers={answers} reset={() => this.forceUpdate()}/>
					</Paper>
			</div>
		)

	}
}