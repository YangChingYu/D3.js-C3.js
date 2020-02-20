// select
d3.selectAll("p").style("color", "blue");



// 繪製SVG
d3.select('.chart-d3')
    .append('svg')
    .attr({
      'width':"75px",
      'height':"75px"
    });
// cx: 繪製的x座標 cy:繪製的 y 座標 r:半徑,
d3.select('.chart-d3 svg')
  .append('circle')
  .attr({
  'cx':35,
  'cy':35,
  'r':30,
  'stroke':'black',
  'fill':'red',
  'stroke-width':'5px'
  });

// jq 作法

$('.chart-jq circle').attr({
  'cx':35,
  'cy':35,
  'r':30,
  'stroke':'black',
  'fill':'red',
  'stroke-width':'5px'
});

// d3.select('.chart-d3 svg circle')
//   .transition().duration(1000).delay(2000).attr({
//     fill: "black"
//   });

// .transition 漸變效果
// duration 動畫過程秒數
// delay 延遲幾秒才執行