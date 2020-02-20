// 高雄、屏東縣人口數
var chart = c3.generate({
    bindto: '.chart',
    data: {
        columns: [
            ['高雄', 30, 200, 100, 400, 150, 250],
            ['屏東', 50, 20, 10, 40, 15, 25]
        ],
    },
}); 

