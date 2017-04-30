import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {green500, red500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';



export default class ChangeInfo extends Component{

	element=(a)=>{
		return(document.getElementById(a))
	}

	changeBio=()=>{var length = this.element('bioInput').value.length;
	this.element('countElem').innerHTML=length;
};
	choose=(event)=>{
		var eventTa = event.currentTarget
		if(eventTa.hasAttribute('required')){
			var nowcount = this.element('countElemAchiv').innerHTML;
			if(Number(nowcount)>0){
			this.element('countElemAchiv').innerHTML = Number(nowcount) - 1;
			eventTa.removeAttribute("required");
			eventTa.className = "achivElement ";}
		}else{
		var nowcount = this.element('countElemAchiv').innerHTML;
		if(Number(nowcount)<5){
		this.element('countElemAchiv').innerHTML = Number(nowcount) + 1;
		eventTa.setAttribute('required', true);
		eventTa.className += " chooseAchiv";}
}
	}



	jesus = ()=>{
		console.log('Its work')
	}

	chooseBG=(event)=>{
		if(event.currentTarget.getAttribute('data-close') == 'false'){
		var count= this.element('bg').getAttribute('data');
		for(var i=1;i<=count;i++){
			this.element('bc'+i).classList.remove('chooseBackground');}
		event.currentTarget.setAttribute('required', true);
		event.currentTarget.className += " chooseBackground";}}

	
		constructor (props) {
			  	super(props);
			    this.state = {
			      choosenAchivs: 0,
			      fulldata: 0,
			      token: this.props.token
			    };
			  }

	 LoadData=()=>{
		if (this.state.fulldata == 0){
			var body =  JSON.stringify({token: this.state.token})  
			var xhr  = new XMLHttpRequest();   
			xhr .open('POST', 'http://127.0.0.1:9999/api/user/get_achievements', true);
			xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  
			xhr .send([body]);
			xhr.onreadystatechange =  function() {
				if (xhr.readyState == 4){
				    if (xhr.status != 200) {
				      this.setState({error: 1}); 
				    } else {
				      this.setState({fulldata:  JSON.parse(xhr.responseText)});
				    }
			  }
			 }.bind(this)
			
		}
	}

	componentDidMount=()=>{
		if (this.state.fulldata == 0){
			this.LoadData();
		}
		
	}


	render(){

		if (this.state.fulldata == 0){
			const style = {
				margin: "auto",
				maxWidth: '50px',
				marginTop: (screen.height-100)/2
			}
			return(<div style={style} >
					<CircularProgress size={40} thickness={5} mode={'indeterminate'}/>
				</div>)
		}else{
				console.log(this.state.fulldata)
				var OpenAchivs = Array();
				var i=1;
				var Achivs = this.state.fulldata.map(function(obj){
					 if(obj.state == obj.need){
					 	OpenAchivs[i]=obj;
					 	i++;
					 }
				})
				var choosen=0;
				var AchivLine = OpenAchivs.map(function(item, index){
						var style={
							background: 'url('+ item.img +')',
							height: 70,
							width: 70,
						}

						var required = item.choose? true: false;
						if(required){choosen++};
						return(
							<div key={index} className={item.choose? 'achivElement chooseAchiv': 'achivElement'} style={style} onClick={this.choose} id={item.key} required={required}>

							</div>
						)
					}.bind(this))
				

				var Backgrounds=[
				{
					img: 'http://localhost:3000/wall.jpg',
					exp: '100',
					choosen: true,
					open: true,
					key: 'bc12'
				},
				{
					img: 'http://localhost:3000/wall.jpg',
					exp: '100',
					choosen: false,
					open: true,
					key: 'bc13'
				},
				{
					img: 'http://localhost:3000/wall.jpg',
					exp: '10000',
					choosen: false,
					open: false,
					key: 'bc14'
				},
				{
					img: 'http://localhost:3000/wall.jpg',
					exp: '10000',
					choosen: false,
					open: false,
					key: 'bc14'
				},
				{
					img: 'http://localhost:3000/wall.jpg',
					exp: '10000',
					choosen: false,
					open: false,
					key: 'bc14'
				},
				{
					img: 'http://localhost:3000/wall.jpg',
					exp: '10000',
					choosen: false,
					open: false,
					key: 'bc14'
				},
				{
					img: 'http://localhost:3000/wall.jpg',
					exp: '10000',
					choosen: false,
					open: false,
					key: 'bc14'
				},
				]

				var count=0;
				var BackgroundLine = Backgrounds.map(function(item, index){
						var className;
						if(item.choosen){
								if(item.open){
									className = 'backgroundElement chooseBackground ';
								}else{	className = 'backgroundClose backgroundElement chooseBackground ';}
							}else{
								if(item.open){
									className = 'backgroundElement'
								}else{	className = ' backgroundClose backgroundElement';
						}

							}





						var style={
							background: 'url('+ item.img +')',
							height: 70,
							width: 140,
						}

						var styleString={
							height: 20,
							marginTop: 50,
							width: '100%',
							background: 'rgba(0,0,0,0.3)',
							color: '#fff',
							verticalAlign: 'middle',
						}

						var required = item.choosen? true: false;
						var close = item.open? false: true;
						
						count++;
						return(
							<div key={index} className={className} style={style} onClick={this.chooseBG} data-idbackground={item.key} id={'bc'+count+''}  required={required} data-close={close}>
								<div style={styleString}>{item.exp} exp</div>
							</div>	
						)
					}.bind(this))
						
				var data = this.props.data;
				const styles = {
				  errorStyle: {
				    color: red500,
				  },
				  underlineStyle: {
				    borderColor: green500,
				  },
				  floatingLabelStyle: {
				    color: green500,
				  },
				  floatingLabelFocusStyle: {
				    color: green500,
				  },
				};
				return(	
				<div className="contnetChanges">
				<TextField
				id='nameContent'
		      defaultValue= {data.name}
		      floatingLabelText="Ваше Имя"
		      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
		      underlineFocusStyle={styles.underlineStyle}
		      maxLength="50"
		     	fullWidth={true}

		    	/><br />
		    <TextField
		    id='cityContent'
		      defaultValue= {data.city}
		      floatingLabelText="Ваш Город"
		      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
		      underlineFocusStyle={styles.underlineStyle}
		      fullWidth={true}
		      maxLength="50"
		    	/><br />
		    <TextField
		      defaultValue= {data.about}
		      floatingLabelText="Ваша История"
		      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
		      underlineFocusStyle={styles.underlineStyle}
		      fullWidth={true}
		      maxLength="256"
		      onChange={this.changeBio}
		      id="bioInput"
		      multiLine={true}
		    	/>
		    <div className="characterCounter"><div id='countElem'>{data.about.length}</div>/256</div><br />

		    	<div className="TextAchivLine">Достижения для панели</div>
		    	 <div className="achivLine">
		    	 
		    	 {AchivLine}</div>
		    	 <div className="characterCounter"><div id='countElemAchiv'>{choosen}</div>/5</div><br />
		    	 <div className="TextAchivLine">Фон для панели</div>
		    	 <div className="achivLine" id='bg' data={count}>{BackgroundLine}</div>
			</div>)

			}
		}
}