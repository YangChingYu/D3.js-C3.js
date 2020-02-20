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
  
  var voteUpdate =[
    {
      "name":"tom",
      "num": 120
    },
    {
      "name":"mary",
      "num": 80
    },
    {
      "name":"tom",
      "num": 60
    }
  ];
  var node = d3
    .select('.chart')
    .selectAll("div")
    .data(vote)
    .enter()
    .append("div")
  function update(){
    node
    .html(function(d){
      return d.name+'<br>'+d.num
    })
    .style("height", function(d){
      return d.num+'px'
    })
  }
  update();
  // node.data(voteUpdate);
  // update();
  
    