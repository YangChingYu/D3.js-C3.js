// 高雄、屏東縣人口數
var chart = c3.generate({
    bindto: '.chart',
    data: {
        columns: [
            ['高雄', 30, 200, 100, 400, 150, 250],
            ['屏東', 50, 20, 10, 40, 15, 25]
        ],
        type: "line",
//       types: {
//         "高雄":'bar',
//          "屏東":'line'
//       },
//       也可以分別為兩個數據做出不一樣的圖
        colors:{
          "高雄":'#000000',
          "屏東":'#ff0000'
        }
    },
    legend: {
        show: true
    },
     axis: {
        x: {
            type: 'category',
            categories:  [1996,1997,1998,1999,2000,2001],
          label:{
            text:'年份',
            
          }
        },
       y:{         
         label:{
           text:'人數',
           position: 'outer-middle',
         }
         
       } 
    },
}); 


chart.load({
  columns: [
    ['高雄', 300, 100, 250, 150, 300, 150],
    ['屏東', 100, 200, 150, 50, 100, 250]
  ]
});