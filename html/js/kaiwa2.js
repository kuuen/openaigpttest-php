

const  rirekiContent = document.getElementById("rireki");
const  txtMassage = document.getElementById("txtMassage");
const audioeria = document.getElementById("audioeria");

const player = document.getElementById("saisei");
player.controls = false; // オーディオは普段は非表示

const hihyouzi = document.getElementById("hihyouzi");

// 

let rireki = [];

// 音声ファイル
var files = [];

/** 音声生成の分割 */
var texts = [];

/** 音声作成依頼のテキストの位置 */
var textsIndex = 0;

/** 再生中のファイル位置 */
var saiseiIndex = 0;

var pMsg = '初期値'

var isStop = false;

// ボタン
btnStart.onclick = function() {
  isStop = false;
  vr_function();
}

btnEnd.onclick = function() {
  isStop = true;
  player.stop();
}

function exec(m) {

  // let ri = "<div class='ichigyou honninres'>" + m + "</div>"
  let ri = 'あなた：' + m + '\n';
  rireki.push(m);
  rirekiContent.innerHTML =  rirekiContent.innerHTML + ri;
  
  // 10件以前は省く
  if (rireki.length >= 10) {
    rireki.splice(0, 1);
  }

  param = '';
  rireki.forEach(function(s){
    b = s.replace('\n', '');
    param += b + '。';
  });

  hihyouzi.className = "syotityuu";

  // rtn = 'ずんずんずーん'
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
      dataType: 'json',
      // async : false, // 非同期にしない
    }
  )
  // 検索成功時にはページに結果を反映
  .done(function(data) {
    console.log(data['res'])
    
    let airesult = document.getElementById("ai-result");
    m = data['msg'];

    if (m != '') {

      rireki.push(m);
      if (rireki.length >= 10) {
        rireki.splice(0, 1);
      }

      // m = m.replace('\n', '');
      m = m.replace(/\n/g, '');

      // rirekiContent.innerHTML =  rirekiContent.innerHTML + "<div class='ichigyou aires'>" + m + "</div>";
      rirekiContent.innerHTML =rirekiContent.innerHTML +  "\nAI：" + m + '\n';

      rirekiContent.scrollTop = rirekiContent.scrollHeight;

      rtn = m;
    } else {
      // rirekiContent.innerHTML =  rirekiContent.innerHTML + "<div class='ichigyou aires'>" + m + "</div>";
      rirekiContent.innerHTML =rirekiContent.innerHTML +  "\nAI：" + 'ビジーです' + '\n';

      rirekiContent.scrollTop = rirekiContent.scrollHeight;

      rtn = 'ビジーです';
    }

    size = rtn.length;

    // 切り出し位置
    index = 1;
    max = 100;
  
    // 音声ファイル
    files = [];
  
    texts = [];
  
    textsIndex = 0;
  
    saiseiIndex = 0;
  
    for (i=0; i <= size; i += max) {
      index = i;
  
      // 100文字ずつ処理
      texts.push(rtn.substr(index, max))
      // 音声作成、再生
      // onsei(s);
  
    }
  
    if (index % max != 0) {
      // onsei(s);
      texts.push(str.substr(index, max))
    }
  
    onsei(texts[0]);
  })
  // 検索失敗時には、その旨をダイアログ表示
  .fail(function() {
    window.alert('正しい結果を得られませんでした。');
  });

}

/**
 * 再生
 * @param {} text 再生テキスト
 */
function onsei(text) {
  var jsondata = JSON.stringify({'msg': text});

  // .phpファイルへのアクセス
  // $.ajax('http://localhost:8080/cgi-bin/test.py',
  $.ajax('cgi-bin/onsei.php',
    {
      type: 'post',
      data: jsondata,
      dataType: 'json',
      // async : false, // 非同期にしない
    }
  )
  // 検索成功時にはページに結果を反映
  .done(function(data) {
    // console.log(data['res'])
    
    hihyouzi.className = "hihyouzi";

    // ファイル指定
    d = data['fileName'];

    files.push(d);

    textsIndex++;

    if (textsIndex < texts.length) {
      onsei(texts[textsIndex]);
    } else {
      
      // オーディオを表示
      player.console = true;
    
      file = files[0];
      // player.pause();
      player.src = "./webroot/" + file;

      // 再生開始
      // ユーザのボタンクリック等から呼び出さないと再生が始まらない
      player.play();

      // let ad = new Audio("./webroot/" + file);
      // ad.play();


      flg = true; // 開始フラグ
    }

  })
  // 検索失敗時には、その旨をダイアログ表示
  .fail(function() {
    window.alert('正しい結果を得られませんでした。');
  });
}

//再生完了を検知
player.addEventListener("ended", function(){
  player.console = false; // 非表示にする
  onseiDelete(files[saiseiIndex]); // 削除指示

  saiseiIndex++;
  if (saiseiIndex < files.length) {
    // 次のファイルがあれば再生を行う
    player.src = "./webroot/" + files[saiseiIndex];
    player.load();

    // ユーザのボタンクリック等から呼び出さないと再生が始まらない
    player.play();

    // let ad = new Audio("./webroot/" + files[saiseiIndex]);
    // ad.play();
  } else {
    vr_function();
  }

}, false);

/**
 * 再生済みのファイルを削除
 * @param {} fileName 
 */
function onseiDelete(fileName) {
  var jsondata = JSON.stringify({'fileName': fileName});

  // .phpファイルへのアクセス
  // $.ajax('http://localhost:8080/cgi-bin/test.py',
  $.ajax('cgi-bin/onsei_delete.php',
    {
      type: 'post',
      data: jsondata,
      dataType: 'json'
    }
  )
  // 検索成功時にはページに結果を反映
  .done(function(data) {
    // 特に何もしない
    
  })
  // 検索失敗時には、その旨をダイアログ表示
  .fail(function() {
    window.alert('正しい結果を得られませんでした。');
  });
}

var flag_speech = 0;

var recognition = null;


function vr_function() {    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  recognition = new webkitSpeechRecognition();
  recognition.lang = 'ja';
  recognition.interimResults = true;
  recognition.continuous = true;

  recognition.onsoundstart = function() {
    rirekiContent.innerHTML += "認識中\n";
  };
  recognition.onnomatch = function() {
    rirekiContent.innerHTML += "もう一度試してください\n";
      recognition.stop();
      vr_function();
  };
  recognition.onerror = function() {
      rirekiContent.innerHTML += "エラー\n";
      if(flag_speech == 0) {
        vr_function();
      }
  };
  recognition.onsoundend = function() {
    rirekiContent.innerHTML += "停止中\n";
      // vr_function();
  };

  recognition.onspeechend = () => {
    recognition.stop();
  }

  recognition.onresult = function(event) {
      var results = event.results;
      for (var i = event.resultIndex; i < results.length; i++) {
        if (results[i].isFinal)
        {

          if (results[i][0].transcript != '') {
            
            // document.getElementById('result_text').innerHTML = results[i][0].transcript;
            // vr_function();

            // ここで取得
            hatugen = results[i][0].transcript;

            // alert('pMsg:' + pMsg + ' hatugen：' + hatugen );
            if (pMsg != hatugen) {
              exec(hatugen);
            }

            pMsg = hatugen;
            

            recognition.stop();
            
            // exec(hatugen);
        
            break;
          }
        }
        else
        {
          // document.getElementById('result_text').innerHTML = "[途中経過] " + results[i][0].transcript;
          flag_speech = 1;
        }
      }
  }
  flag_speech = 0;
  // document.getElementById('status').innerHTML = "start";

  if (!isStop) {
    rirekiContent.innerHTML += "お話しください\n";
    recognition.start();
  }
}

