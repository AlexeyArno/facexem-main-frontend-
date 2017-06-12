import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';




export default class Achievs extends Component{
	constructor (props) {
			  	super(props);
			    this.state = {
			      choosenAchivs:0,
			      fulldata:0,
			      token:this.props.token,
			      achiev:0
			    };
			  }

	componentDidMount=()=>{
		if(this.state.achiev === 0){
			this.loadAchieve();
		}


	}


	loadAchieve=()=>{
		var body =  JSON.stringify({token: this.state.token})  
			var xhr  = new XMLHttpRequest();   
			xhr.open('POST', 'http://127.0.0.1:9999/api/user/get_achievements', true);
			xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  
			xhr.send([body]);
			xhr.onreadystatechange =  function() {
				if (xhr.readyState === 4){
				    if (xhr.status !== 200) {
				      this.setState({error: 1}); 
				    } else {
				      this.setState({fulldata:  JSON.parse(xhr.responseText),
				      	achiev: 1});
				    }
			  }
			 }.bind(this)
	}


	getAchievs=()=>{
		var achivs = this.state.fulldata
		if (achivs.length === 0){
			return(<div style={{textAlign: 'center', width: '100%'
				, height: 250, verticalAlign: 'middle', padding: "25%"}}>
				К сожалению, здесь пусто </div>)
		}
		var achivView = achivs.map(function(item,index){
			var respons = Math.round(item.now/item.max*100)+'%';
			var InsideProgressAchiv = {
				background: '#2196F3',
				width:  respons,
				height: 10,
			}
			var ProgresAchiv={
				background: '#F5F5F5',
				width: '100%',
				margin: '10px auto',
				marginBottom: '10px',
				height: 10,		
			}
			var style = {
				background: 'url('+item.img+') no-repeat',
				backgroundSize: '100%',
				margin: '5px auto',
				width: 200,
				height: 200
			}

			return(	
					<div key={index} className="col-xs-12 col-sm-6 col-md-4 paper">
						<Paper className="Achivment">
							<div className="UpAchiv">{item.name}</div>
							<Paper circle={true} style={style}/>
							<div className="achivDescription">{item.content}</div>
							<div style={ProgresAchiv}><div style={InsideProgressAchiv}></div></div>
							<div className="numbersAchiv">{item.now}/{item.max}</div>
						</Paper>

					</div>

						)


		})
		return(achivView)
	}


	render(){
		const style = {
			margin: "auto",
			maxWidth: '50px',
			marginTop: (screen.height-100)/2
		}
	if (this.state.achiev == 0){
		return(<div style={style} >
					<CircularProgress size={40} thickness={5} mode={'indeterminate'}/>
				</div>
				)
		}else{


			var achivView = this.getAchievs()

		

			return(	<div >

				{achivView}



		</div>)

		}
	}
}