<?php

// $text = "PHP処理で失敗しました";
// ErrLog($text);
function ErrLog($text){
  $path = 'C:\Apache\logs/phplog.log';
  $currentdate = date("m/d H:i:s");
  $logmessages = $currentdate . " : " . $text;
  error_log($logmessages . "\n", 3, $path);
}


function socketTuusin($keyword) {

    $conf = file_get_contents("conf.json");
    $conf = mb_convert_encoding($conf, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
    $conf = json_decode($conf,true);

    // $address = '127.0.0.1'; // ←にすると自身のコンテナに送信をすることになる。
    $address = $conf['aitesaki']; // pythonが動作しているコンテナに通信するにはホストOSのIPアドレスの指定が必要
    $port = 4922;

    $fp  = fsockopen( $address, $port, $errono, $errmsg, 30 );

    if (!$fp) {
        echo "接続できません<br>\n";
    } else {
        // 読み書きのタイムアウト設定
        socket_set_timeout($fp, 2);
//        fputs ($fp, "GET / HTTP/1.0\r\nHost: www.php.net\r\n\r\n");

        fputs($fp, $keyword);

        $msg = "";
        while (!feof($fp)) {
            $msg = fgets ($fp, 4096);
        }
        // ソケットがタイムアウトしたかどうか調べる
        $stat = socket_get_status($fp);
        if ($stat["timed_out"]) { echo "timeout"; }
        // ソケットを閉じる
        fclose ($fp);
    }

    return $msg;
}

$json = file_get_contents('php://input');
// Converts json data into a PHP object 
//$data = json_decode($json, true);

// ErrLog($json);

header("Access-Control-Allow-Origin: *");

try {
    $kekka = socketTuusin($json);

    $kekka = json_decode($kekka, true);
    
    $response = ["msg" => $kekka['msg']];

    // echo "Content-Type: text/json; charset=utf-8";
    // echo "Access-Control-Allow-Origin: *\r\n";
    echo json_encode($response);
} catch (Exception $e) {
  //例外が発生した(=Exceptionオブジェクトがthrowされた)ときの処理
  // ErrLog($e->getMessage());

  echo json_encode(["msg" => 'なんか失敗した']);
} finally {
  //例外が発生してもしなくても必ず行いたい処理
}

?>
