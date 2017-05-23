import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Chart from 'chart.js';





  
export default class StatiscGraph extends Component{
	componentDidMount(){
var data = {
    labels:this.props.data.dates,
    datasets: [
        {
            label: "Решенно заданий",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(33, 150, 243, 0.3)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgb(33, 150, 243)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(33, 150, 243)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.props.data.values,
            spanGaps: false,
        }
    ]
};

		


var ctx = document.getElementById("myChart3").getContext("2d");


var chartInstance = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend:{
        	 display: false
        },
        tooltips: {
        	enabled: true
        },
        line:{
        	borderWidth: 0
        },
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false,
                 ticks: {
                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true   // minimum value will be 0.
            }
            }]
        }
    }
});


}

	render(){

		var style={
			width: 'auto',
			maxWidth: 1100,
		}



		return(

			<div>
					<canvas id="myChart3" style={style}/>
				</div>
			

			)
	}
}
