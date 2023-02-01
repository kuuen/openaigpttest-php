# openaigpttest-php
OpenAiのGPT-3を試す

html/cgibinにconf.jsonを作成する  

```
{
    "aitesaki": "ここにpythonが起動しているdockerのホストIPアドレスを指定"
}
```

php/sslフォルダにLet’s Encryptで作成したcert.pem、chain.pem、privkey.pemを配置(再起動毎に必要そう  

コンソールで入って以下を実行(再起動毎に必要そう  
a2enmod ssl  
a2ensite default-ssl  
apache2ctl graceful  

〇音声再生
ホストOSにVOICEVOXをインストール。必要ない場合はJavaScript部分をコメントアウトする
