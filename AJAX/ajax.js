var send = document.querySelector('.send');
send.addEventListener('click',getApi)
// 高雄、屏東縣人口數
function load(data){
  var chart = c3.generate({
    bindto: '.chart',
    data: {
        columns: data,
    },
  });
}

function getApi(){
  var xhr = new XMLHttpRequest();
  xhr.open('get',"https://yangchingyu.github.io/YangChingYu.github.io/taiwanData.json");
//   從ajax撈資料 再把資料寫入話面
  xhr.send(null)
  xhr.onload = function(){
    var response = JSON.parse(xhr.responseText);
    load(response);
  }
}


