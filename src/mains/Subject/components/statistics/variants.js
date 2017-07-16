import React, { Component } from 'react';


export default class VariantStatistic extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }
	

render(){
	var data = this.props.data
	if(this.props.data.result === 'Error' && data.type == 'Less'){
		var test_word = 'тестов'
		switch(data.need - data.have){
			case 4:
			case 3:
			case 2:
				test_word = 'теста'
				break;
			case 1:
				test_word = 'тест'
		}
		return <div style={{padding: 20}}>Вам нужно решить ещё {data.need-data.have+' '+test_word} для показа статистики</div>
	}
	return(<div style={{padding: 15}}>
			
			</div>
			

		

		   )

}



}