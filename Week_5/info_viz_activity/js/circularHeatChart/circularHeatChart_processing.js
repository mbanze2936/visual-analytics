
/*var data = [
    {title:"<a href=\"google.com\">test</a>",value:0.176042},
	{title:"test1",value:0.096146},
	{title:"test2",value:0.076414},
	{title:"test3",value:0.334734},
	{title:"test4",value:0.132583},
	{title:"test5",value:0.135422},
	{title:"test6",value:0.060884}
    
   ];

*/
   
   /* An array of objects 
data = [];
for(var i=0; i<372; i++) {
    data[i] = {title: "Segment "+i, value: Math.round(Math.random()*100)};
}
*/

//http://christopheviau.com/d3_tutorial/
//http://bl.ocks.org/enjalot/1525346
//http://www.d3noob.org/2012/12/getting-data.html **


//flood event surrogate data - http://www.fema.gov/significant-flood-events

data = [];



d3.csv("data/circular_heat_test_data.csv", function(error, data) {
	  
	  
	//go through each line, can modify contents as need be
	data.forEach(function(d){
			
		//sets the specfic values in the data array
		d.hour = d.Hour
		d.day = d.Day
		d.value = +d.Value
		console.log("m", d)
		//return {"month": m, "value":v} ;
			 
	});






//mouse over data chart chart 4
/*

Show frequency of relevant tweets by day and month (could eventually scale days of week and hours)

Inner segments - 31 possible days in a series of months 

radials - 12 months in a year

(372 segments total)

*/



var chart = circularHeatChart()


	.innerRadius(40)
    .segmentHeight(20)

    .numSegments(24) // define the overall shape
	.margin({top: 20, right: 0, bottom: 20, left: 10}) //changes where the chart will display
    .range(["white", "red"])
    .radialLabels(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])
    .segmentLabels(["Midnight", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am",
    "Midday", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"]);
	
	chart.accessor(function(d) {return d.value;})
	
	
	
d3.select('#chart4')
    .selectAll('svg')
    .data([data])
    .enter()
    .append('svg')
    .call(chart);
	
	

/* events */
d3.selectAll("#chart4 path").on('mouseover', function() {
	var d = d3.select(this).data()[0];
    d3.select("#info").text(d.hour + 'th hour on ' + d.day + ' has value ' + d.value);
});
d3.selectAll("#chart4 svg").on('mouseout', function() {
    d3.select("#info").text('');	
});
d3.selectAll("#chart4 svg").on('click', function() {
    alert('click!');	
});

}); //they stay open until the very end of the file. That means that all those blocks that occur after the d3.tsv bit are referenced to the 'data' array