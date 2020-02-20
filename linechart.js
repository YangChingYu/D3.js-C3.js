var vote =[
    {
      "name":"tom",
      "num": 80
    },
    {
      "name":"mary",
      "num": 100
    },
    {
      "name":"tom",
      "num": 200
    },
  ];
  
  d3.select('.chart')
    .selectAll("div")
    .data(vote)
    .enter()
    .append("div")
    .html(function(d){
    return d.name+'<br>'+d.num
  })
    .style("height", function(d){
    return d.num+'px'
  });