<?php


$data = file_get_contents('php://input');


// JSON形式に変換
$data = json_decode($data, true);

sleep(1); // ダウンロード中だったり？

$fileName = $data['fileName'];
try {
    if (unlink('../webroot/' . $fileName)) {
        $error = false;
    } else {
        $error = true;
    }
} finally {
    header("Access-Control-Allow-Origin: *");
    echo json_encode(["result" => 'OK']);
}
