import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import ReactTooltip from 'react-tooltip'

export default class Achievs extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	achievs: this.props.achievements
		    };
		  }

	getAchievements=()=>{
		var final = []
		this.state.achievs.map(function(item, index){
			if(item.max == item.now){
				final.push(item)
			}
		})
		return(final)
	}

	choose=(key, count)=>{
		var achievs = this.getAchievements()
		var choosens = 0
		achievs.map(function(item, index){
			if(item.choose){
				choosens++
			}
		})
		if(achievs[key].choose){
			achievs[key].choose = !achievs[key].choose
		}else{
			if(choosens>= 5){
				return(0)
			}else{
			achievs[key].choose = !achievs[key].choose
		}
	}
		this.setState({achievs})
	}


	AchievLine=()=>{
		var achiev = this.getAchievements()
		var choosen = 0
		var final = achiev.map(function(item, index){
			var style={background: 'url('+ item.img +')'}
			var name = 'achivElement'
			if(item.choose){
				choosen++
				name+=' chooseAchiev'
			}
			var id = 'achiev'+index
			var tip = item.name
			return(<div  key={index} style={{display: 'inline-block'}}>
					<Paper  className={name}style={style} 
					onClick={()=>this.choose(index)}  data-for={id} data-tip={tip}/>
					<ReactTooltip place="bottom" type="dark" effect='solid' 
					id={id} class="TooltipTasksTooltip"/>
				</div>
				)
		}.bind(this))
		return([final, choosen])
	}

render(){
	var AchievLine = this.AchievLine()
	if(AchievLine[0] == 0){
		AchievLine[0] = <div style={{margin: 10}}>К сожалению, достижений нет</div>
	}
	return(<div>
				<div className="TextAchivLine">Достижения для панели</div>
		    	 <div className="achivLine">
		    	 
		    	 {AchievLine[0]}

		    	</div>
		  		<div className="characterCounter"><div id='countElemAchiv'>{AchievLine[1]}</div>/5</div><br />

		</div>		

		   )

}



}