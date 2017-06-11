import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Chart from 'chart.js';





  
export default class Preference extends Component{
	componentDidMount(){
		// var labels = [1,2,3,4,5,6,7]
		// var data = [1,2,3,4,5,6,7]
		var labels = this.props.data[1]
		var data = this.props.data[0]

		var sum = 0
		data.map(function(item){
			sum+=item
		})
		data = data.map(function (item) {
			return Math.floor(item/sum*100)
		})
		data = data.map(function(item, index){
			return (item)? item: 1
		})
		var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		    type: 'doughnut',
			options: {
				cutoutPercentage: 70,
			    animation:{
	        		animateScale:true
	    		},
	    		 tooltips: {
	    		 	mode:'point',
	    		 	displayColors: false,
	    		 	callbacks: {
	    		 		label: function(tooltipItems, data) {
				        	return data.labels[tooltipItems.index]+" "+data.datasets[0].data[tooltipItems.index] + ' %';
				      },
	    		 }
	    	}
	    	},
		    data: {
		        labels: labels,
		        datasets: [{
		            label: 'Топ',
		            data: data,
		            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ]
				       }],
		    }
		
		    
		});

}

	render(){
		return(
			<div className="col-xs-12 col-sm-4 paper">
				<Paper className="preferencepaper">
					<div className="Up">Рейтинг предметов</div>
					<hr/>
					<canvas id="myChart" width="270px" height="250px" className="chart"></canvas>
				</Paper>
			</div>

			)
	}
}