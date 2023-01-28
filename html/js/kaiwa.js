

const  rirekiContent = document.getElementById("rireki");
const  txtMassage = document.getElementById("txtMassage");
let rireki = [];

// 送信ボタン
document.getElementById("btnSend").onclick = function() {
  let m = txtMassage.value;
  let ri = "<div class='ichigyou honninres'>" + m + "</div>"
  rireki.push(m);
  rirekiContent.innerHTML =  rirekiContent.innerHTML + ri;
  txtMassage.value = '';
  txtMassage.focus();
  if (rireki.length >= 5) {
    rireki.splice(0, 1);
  }

  param = '';
  rireki.forEach(function(s){
    param += s + '。';
  });

  aiHantei(param, 5, 20);
}

function aiHantei(a, min, max) {
  var jsondata = JSON.stringify({'msg': a, 'min' : min, 'max' : max});

  // .phpファイルへのアクセス
  // $.ajax('http://localhost:8080/cgi-bin/test.py',
  $.ajax('cgi-bin/hantei.php',
    {
      type: 'post',
      data: jsondata,
      dataType: 'json'
    }
  )
  // 検索成功時にはページに結果を反映
  .done(function(data) {
    // console.log(data['res'])
    
    let airesult = document.getElementById("ai-result");
    m = data['msg'];
    rireki.push(m);
    if (rireki.length >= 5) {
      rireki.splice(0, 1);
    }
    
    rirekiContent.innerHTML =  rirekiContent.innerHTML + "<div class='ichigyou aires'>" + m + "</div>";

  })
  // 検索失敗時には、その旨をダイアログ表示
  .fail(function() {
    window.alert('正しい結果を得られませんでした。');
  });
}