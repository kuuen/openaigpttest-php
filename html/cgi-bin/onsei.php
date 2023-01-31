<?php

// $text = "はい、どうもこんにちは。おろちんゆーよ。今日は渓流釣りするわよ。みんな私の趣味に付き合ってちょうだい。いやエグ。この岩やば自然のパワー美しいわね。ちょっと触ってみようかしら。あーこれはやばいわ。自然のパワーを感じるわ。今回あたしが釣りをする。";

$data = file_get_contents('php://input');


// JSON形式に変換
$data = json_decode($data, true);

$query = '';

// 声の種類
$speaker = 1;

date_default_timezone_set('Asia/Tokyo');
if (date('H') > 20) {
    $speaker = 22; // つぶやき
}

try {
    $ch = curl_init();

    $url = 'http://host.docker.internal:50021/audio_query?speaker=' . $speaker . '&text=';
    $url .= urlencode($data['msg']);

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, TRUE);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);                    //受け取ったデータを変数に

    $query = curl_exec($ch);

    // file_put_contents('$query',$query);

    if(curl_errno($ch)){        //curlでエラー発生
        $CURLERR .= 'curl_errno：' . curl_errno($ch) . "\n";
        $CURLERR .= 'curl_error：' . curl_error($ch) . "\n";
        $CURLERR .= '▼curl_getinfo' . "\n";
        foreach(curl_getinfo($ch) as $key => $val){
            $CURLERR .= '■' . $key . '：' . $val . "\n";
        }
        echo nl2br($CURLERR);
    }

} finally {
    curl_close($ch);
}

// サーバーに接続できない場合は処理終了
if (!$query) {
    echo json_encode(["msg" => 'noconnect']);
    return;
}

$ch = curl_init();

$url = 'http://host.docker.internal:50021/synthesis?speaker=' . $speaker;    

// $a = json_encode($query);

// curl_setopt($ch, CURLOPT_URL, $url);
// curl_setopt($ch, CURLOPT_POST, TRUE);                            //POSTで送信
// curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));  
// curl_setopt($ch, CURLOPT_POSTFIELDS, $query);
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);                    //受け取ったデータを変数に

// $result = curl_exec($ch);

curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_POSTFIELDS, $query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);
$result=curl_exec($ch);

// ファイル名を決める
$fileName = time() . ".wav";

file_put_contents('../webroot/' . $fileName, $result);

// 初期化(GPUメモリ開放)を行う

$url = "http://host.docker.internal:50021/initialize_speaker?speaker=' . $speaker";

curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
// curl_setopt($ch, CURLOPT_POSTFIELDS, $query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url);
$result = curl_exec($ch);

sleep(1); // VICEVOXは連続稼働には向いていない

header("Access-Control-Allow-Origin: *");
echo json_encode(["fileName" => $fileName]);


