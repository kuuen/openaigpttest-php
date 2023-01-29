# openaigpttest-php
OpenAiのGPT-3を試す

html/cgibinにconf.jsonを作成する  

```
{
    "aitesaki": "ここにpythonが起動しているdockerのホストIPアドレスを指定"
}
```

php/sslフォルダにLet’s Encryptで作成したcert.pem、chain.pem、privkey.pemを配置

コンソールで入って以下を実行  
a2enmod ssl  
a2ensite default-ssl  
apache2ctl graceful  


