import React, { Component } from 'react';
import Paper from 'material-ui/Paper';




export default class Challenge extends Component{
	


	render(){
		var width = 23/72*100

		return(			
			<div className="col-xs-12 col-sm-4 paper">
				<Paper className="preferencepaper">
					<div className="Up">Челлендж</div>
					<hr/>
					<img src='/goal.svg' style={{width: 150, margin: 'auto', marginTop: 20}}/>
					<p>Пройти 72 леции за сегодня</p>
					<div style={{background: 'rgba(0,0,0,0.1)', width: "80%", margin: 'auto', height: 20, marginTop: 10,
					 				border: "2px solid rgba(0,0,0,0.1)", borderRadius: "3px"}}>
						<div style={{width: width+'%', background: 'linear-gradient(to right, rgb(33, 150, 243), rgb(88, 179, 252)', height: 16}}>
						</div>
					</div>
					<div className="characterCounter" style={{margin:10}}>23/72</div>
					
				</Paper>
			</div>)

	}
}

// <div style={{float: "left", marginTop: 40, marginLeft: 20}}>
// 					Выигрыш:
// 						<Paper style={{display: 'inline-block', padding: 10, background: 'rgb(33, 150, 243)', borderRadius: 25, color: '#fff'}}>
// 							233xp
// 						</Paper>
// 					</div>