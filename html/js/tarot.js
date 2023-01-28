// タロットの名前や意味等を保持
let tarots = [
  {"index":0,no:0,type:0,name:"THE FOOL",name_ja:"愚者",meaning:[["自由","未確定","冒険","積極性が必要"],["純粋無垢","無計画","不安定"]],image:"img/tarot/RWS_Tarot_00_Fool.jpg"},
  {"index":0,no:1,type:0,name:"THE MAGICIAN",name_ja:"魔術師",meaning:[["創造","自信","順調","挑戦"],["優柔不断","中途半端","うまくいかない","消極的"]],image:"img/tarot/RWS_Tarot_01_Magician.jpg"},
  {"index":0,no:2,type:0,name:"THE HIGH PRIESTESS",name_ja:"女教皇",meaning:[["知力","冷静","洞察力"],["無慈悲","神経質","わがまま","ヒステリー"]],image:"img/tarot/RWS_Tarot_02_High_Priestess.jpg"},
  {"index":0,no:3,type:0,name:"THE EMPRESS",name_ja:"女帝",meaning:[["真実","豊か","情熱的","努力が実る"],["贅沢","嫉妬心","怠ける","出しゃばり"]],image:"img/tarot/RWS_Tarot_03_Empress.jpg"},
  {"index":0,no:4,type:0,name:"THE EMPEROR",name_ja:"皇帝",meaning:[["安定","責任感","実行力"],["威圧的","自分勝手","慢心","不安定"]],image:"img/tarot/RWS_Tarot_04_Emperor.jpg"},
  {"index":0,no:5,type:0,name:"THE HIEROPHANT",name_ja:"法皇",meaning:[["慈愛心","寛大な精神","集中力","良き友"],["出し惜しみ","偏狭","縁がない","ひとりよがり"]],image:"img/tarot/RWS_Tarot_05_Hierophant.jpg"},
  {"index":0,no:6,type:0,name:"THE LOVERS",name_ja:"恋人",meaning:[["楽しい","無邪気","愛の予感"],["遊び気分","軽い","離別","失敗"]],image:"img/tarot/RWS_Tarot_06_Lovers.jpg"},
  {"index":0,no:7,type:0,name:"THE CHARIOT",name_ja:"戦車",meaning:[["情熱","開拓","勝利","闘志"],["暴走","混乱","敗北","気力低下"]],image:"img/tarot/RWS_Tarot_07_Chariot.jpg"},
  {"index":0,no:8,type:0,name:"STRENGTH",name_ja:"力",meaning:[["強固","意志","努力","全力投球"],["困難","失敗","自信を失う","誤解"]],image:"img/tarot/RWS_Tarot_08_Strength.jpg"},
  {"index":0,no:9,type:0,name:"THE HERMIT",name_ja:"隠者",meaning:[["模索","静寂","尊重","信用"],["閉鎖的","孤立","集中力低下","持病の再発"]],image:"img/tarot/RWS_Tarot_09_Hermit.jpg"},
  {"index":0,no:10,type:0,name:"WHEEL of FORTUNE",name_ja:"運命の輪",meaning:[["幸運","運命的","告白","臨機応変"],["大きな変化","落ち込み","不安定","悪い方向"]],image:"img/tarot/RWS_Tarot_10_Wheel_of_Fortune.jpg"},
  {"index":0,no:11,type:0,name:"JUSTICE",name_ja:"正義",meaning:[["平等","客観的","誠実","平和"],["義務感","バランス注意","一方的","不幸編"]],image:"img/tarot/RWS_Tarot_11_Justice.jpg"},
  {"index":0,no:12,type:0,name:"THE HANGED MAN",name_ja:"吊るされた男",meaning:[["試練","忍耐","中途半場","長引く"],["わがまま","葛藤","エゴ","諦めが肝心"]],image:"img/tarot/RWS_Tarot_12_Hanged_Man.jpg"},
  {"index":0,no:13,type:0,name:"DEATH",name_ja:"死",meaning:[["別れ","転換期","苦し恋","行き詰る"],["再生","運命","一発逆転","良い方向"]],image:"img/tarot/RWS_Tarot_13_Death.jpg"},
  {"index":0,no:14,type:0,name:"TEMPERANCE",name_ja:"節制",meaning:[["バランス","穏やか","復習","日常生活"],["マンネリ","不摂生","小心","根気が足りず"]],image:"img/tarot/RWS_Tarot_14_Temperance.jpg"},
  {"index":0,no:15,type:0,name:"THE DEVIL",name_ja:"悪魔",meaning:[["欲望","依存","束縛","危険な誘い"],["恐怖","破壊","別れ","さぼり癖"]],image:"img/tarot/RWS_Tarot_15_Devil.jpg"},
  {"index":0,no:16,type:0,name:"THE TOWER",name_ja:"塔",meaning:[["災難","崩壊","失う","トラブル"],["トラブル","不安","失敗","予防"]],image:"img/tarot/RWS_Tarot_16_Tower.jpg"},
  {"index":0,no:17,type:0,name:"THE STAR",name_ja:"星",meaning:[["高揚","憧れ","希望","独創的"],["幻滅","ギャップ","高望み","疲労気味"]],image:"img/tarot/RWS_Tarot_17_Star.jpg"},
  {"index":0,no:18,type:0,name:"THE MOON",name_ja:"月",meaning:[["疑心暗鬼","誤解","不安","噂話注意"],["クリア","解消","徐々に好転","慎重さ"]],image:"img/tarot/RWS_Tarot_18_Moon.jpg"},
  {"index":0,no:19,type:0,name:"THE SUM",name_ja:"太陽",meaning:[["幸福","純粋","順調","強い生命力"],["暗黒","崩壊","意欲の低下","誤った判断"]],image:"img/tarot/RWS_Tarot_19_Sun.jpg"},
  {"index":0,no:20,type:0,name:"JUDGEMENT",name_ja:"審判",meaning:[["復活","許し","好奇心","好転する"],["自然消滅","不幸","無駄","過去のとらわれ"]],image:"img/tarot/RWS_Tarot_20_Judgement.jpg"},
  {"index":0,no:21,type:0,name:"THE WORLD",name_ja:"世界",meaning:[["幸福感","成長","やる気十分","良いこと"],["マンネリ","不完全","計画失敗","スランプ"]],image:"img/tarot/RWS_Tarot_21_World.jpg"},
  {"index":0,no:101,type:1,name:"ACE of WANDS",name_ja:"こん棒のＡ",meaning:[["発展","出発","発明"],["終了","破滅"]],image:"img/tarot/RWS_Tarot_Wands01.jpg"},
  {"index":0,no:102,type:1,name:"TOW of WANDS",name_ja:"こん棒の２",meaning:[["社会的・経済的成功","物質運上昇"],["ハプニング","トラブル","予想外"]],image:"img/tarot/RWS_Tarot_Wands02.jpg"},
  {"index":0,no:103,type:1,name:"THERR of WANDS",name_ja:"こん棒の３",meaning:[["努力成就","希望","期待"],["努力失敗","軽い失望"]],image:"img/tarot/RWS_Tarot_Wands03.jpg"},
  {"index":0,no:104,type:1,name:"FOUR of WANDS",name_ja:"こん棒の４",meaning:[["心の安らぎ"],["不安","裏切り","ミス"]],image:"img/tarot/RWS_Tarot_Wands04.jpg"},
  {"index":0,no:105,type:1,name:"FIVE of WANDS",name_ja:"こん棒の5",meaning:[["欲張り","模倣","欲張り"],["利己主義","悪だくみ","混乱","事件"]],image:"img/tarot/RWS_Tarot_Wands05.jpg"},
  {"index":0,no:106,type:1,name:"SIX of WANDS",name_ja:"こん棒の6",meaning:[["勝利","自信","方法を変えて吉"],["誤った情報に注意","待てば好転","敗北"]],image:"img/tarot/RWS_Tarot_Wands06.jpg"},
  {"index":0,no:107,type:1,name:"SEVEN of WANDS",name_ja:"こん棒の７",meaning:[["積極性","交渉は強気で"],["損をする","優柔不断","軽率注意"]],image:"img/tarot/RWS_Tarot_Wands07.jpg"},
  {"index":0,no:108,type:1,name:"EIGHT of WANDS",name_ja:"こん棒の8",meaning:[["勝利に近づく","意見を聞く","地道に行動"],["手抜き注意","目上とのトラブル","思惑通りいかず"]],image:"img/tarot/RWS_Tarot_Wands08.jpg"},
  {"index":0,no:109,type:1,name:"NINE of WANDS",name_ja:"こん棒の9",meaning:[["予定が遅れる","作成失敗","失恋","意見無視"],["裏切り","先手必勝","作業進まず"]],image:"img/tarot/RWS_Tarot_Wands09.jpg"},
  {"index":0,no:110,type:1,name:"TEN of WANDS",name_ja:"こん棒の10",meaning:[["直感","友人の協力","地道"],["悪い知らせ","実力解決で吉","無援"]],image:"img/tarot/RWS_Tarot_Wands10.jpg"},
  {"index":0,no:111,type:1,name:"PAGE of WANDS",name_ja:"こん棒の見習",meaning:[["情報収集","親切心","意思疎通","訪れる"],["問題","連絡ミス","苦労"]],image:"img/tarot/RWS_Tarot_Wands11.jpg"},
  {"index":0,no:112,type:1,name:"KNIGHT of WANDS",name_ja:"こん棒の騎士",meaning:[["元気で勝利","愛が来る","旅行"],["旅行は万全の準備","がっかり","愛被略奪"]],image:"img/tarot/RWS_Tarot_Wands12.jpg"},
  {"index":0,no:113,type:1,name:"女王 of WANDS",name_ja:"こん棒の女王",meaning:[["女性からの助け","努力成就","友情から愛","報酬アップ"],["誠意認定","嫉妬心","女友達に相談"]],image:"img/tarot/RWS_Tarot_Wands13.jpg"},
  {"index":0,no:114,type:1,name:"KING of WANDS",name_ja:"こん棒の王",meaning:[["男性に頼る","成功と勝利","努力成就","慎重に"],["他人に意見を聞く","態度に注意","頼りにならない男性"]],image:"img/tarot/RWS_Tarot_Wands14.jpg"},
  {"index":0,no:201,type:1,name:"ACE of SWORDS",name_ja:"剣のＡ",meaning:[["反感","勇気","努力","鮮明"],["憂鬱","災難","地道","疲労"]],image:"img/tarot/RWS_Tarot_Swords01.jpg"},
  {"index":0,no:202,type:1,name:"TOW of SWORDS",name_ja:"剣の２",meaning:[["行き止まり","二重人格","マイペースが吉"],["友情と愛情の相違","相手を信じられない","二分する"]],image:"img/tarot/RWS_Tarot_Swords02.jpg"},
  {"index":0,no:203,type:1,name:"THERR of SWORDS",name_ja:"剣の３",meaning:[["トラブル","友情の崩れ","年長者の助け","口論","三角関係"],["混乱","事柄がうまくいかない","文句","勉強不足"]],image:"img/tarot/RWS_Tarot_Swords03.jpg"},
  {"index":0,no:204,type:1,name:"FOUR of SWORDS",name_ja:"剣の4",meaning:[["停滞","気疲れ","孤独感"],["活動開始","用心して行動","体力をつける","慎重な態度"]],image:"img/tarot/RWS_Tarot_Swords04.jpg"},
  {"index":0,no:205,type:1,name:"FIVE of SWORDS",name_ja:"剣の5",meaning:[["信頼関係の崩壊","嘘","中傷","健康状態悪し","悪い誘惑"],["盲目の恋","無茶な勇気","危険な誘い","見通し悪し"]],image:"img/tarot/RWS_Tarot_Swords05.jpg"},
  {"index":0,no:206,type:1,name:"SIX of SWORDS",name_ja:"剣の6",meaning:[["水が吉","良き師","協力者が必要"],["積極的な求愛","争いごと","未解決"]],image:"img/tarot/RWS_Tarot_Swords06.jpg"},
  {"index":0,no:207,type:1,name:"SEVEN of SWORDS",name_ja:"剣の7",meaning:[["全力挑戦成功","将来","信頼関係","希望"],["思い違いの忠告","被暴露","言動でモメる"]],image:"img/tarot/RWS_Tarot_Swords07.jpg"},
  {"index":0,no:208,type:1,name:"EIGHT of SWORDS",name_ja:"剣の8",meaning:[["後悔","八方塞","混乱","孤独"],["救世主現る","新たな気持ちで出発","新な友人ができる"]],image:"img/tarot/RWS_Tarot_Swords08.jpg"},
  {"index":0,no:209,type:1,name:"NINE of SWORD",name_ja:"剣の9",meaning:[["別れ","弱虫","不幸","些細な事"],["怖い出来事","劣等感","巻き込まれる","人間不信"]],image:"img/tarot/RWS_Tarot_Swords09.jpg"},
  {"index":0,no:210,type:1,name:"TEN of SWORD",name_ja:"剣の10",meaning:[["悲しみ","みじめ","立場が悪い","身動きが取れない"],["微速前進","友情からの恋","収入上昇"]],image:"img/tarot/RWS_Tarot_Swords10.jpg"},
  {"index":0,no:211,type:1,name:"PAGE of SWORDS",name_ja:"剣の見習",meaning:[["用心深い","直感","細かい調査が必要","深入り危険"],["事件","準備不足","無気力"]],image:"img/tarot/RWS_Tarot_Swords11.jpg"},
  {"index":0,no:212,type:1,name:"KNIGHT of SWORDS",name_ja:"剣の騎士",meaning:[["気力十分","前向き","勇敢"],["うぬぼれ","図太い","トラブル","衝動買い"]],image:"img/tarot/RWS_Tarot_Swords12.jpg"},
  {"index":0,no:213,type:1,name:"女王 of SWORDS",name_ja:"剣の女王",meaning:[["良いアイディア","強い個性","強い感受性"],["心が狭い","怖がらせる","非常識","復讐する"]],image:"img/tarot/RWS_Tarot_Swords13.jpg"},
  {"index":0,no:214,type:1,name:"KING of SWORDS",name_ja:"剣の王",meaning:[["支配好きの男性","リーダーシップ","恋成就","発言"],["乱暴な男性","強引に迫られる","近寄らないが吉","愛離別"]],image:"img/tarot/RWS_Tarot_Swords14.jpg"},
  {"index":0,no:301,type:1,name:"ACE of PENTACLES",name_ja:"金貨のＡ",meaning:[["豊かな気持ち","収入","美の憧れ","成就"],["お金に執着","無駄遣い","頑固は損"]],image:"img/tarot/RWS_Tarot_Pents01.jpg"},
  {"index":0,no:302,type:1,name:"TOW of PENTACLES",name_ja:"金貨の２",meaning:[["金銭トラブル","結論は少し先","恋人に会えない","困った事態"],["誤解","不安定","前進しない","意見の食い違い"]],image:"img/tarot/RWS_Tarot_Pents02.jpg"},
  {"index":0,no:303,type:1,name:"THREE of PENTACLES",name_ja:"金貨の３",meaning:[["勉強はかどる","良評判","プレゼントする","信用される"],["平凡","未完了","お金をなくす","追及しすぎ"]],image:"img/tarot/RWS_Tarot_Pents03.jpg"},
  {"index":0,no:304,type:1,name:"FOUR of PENTACLES",name_ja:"金貨の4",meaning:[["貯金増","ケチ","健康運上昇"],["問題先延ばし","対立","ケチ","意思疎通が困難"]],image:"img/tarot/RWS_Tarot_Pents04.jpg"},
  {"index":0,no:305,type:1,name:"FIVE of PENTACLES",name_ja:"金貨の5",meaning:[["友人関係注意","行動を中断が無難","ミス多発"],["トラブル難解","問題が多い"]],image:"img/tarot/RWS_Tarot_Pents05.jpg"},
  {"index":0,no:306,type:1,name:"SIX of PENTACLES",name_ja:"金貨の6",meaning:[["寛大","情け","親切を受ける","感謝を表すと吉"],["欲張り","嫉妬心","エゴイスト"]],image:"img/tarot/RWS_Tarot_Pents06.jpg"},
  {"index":0,no:307,type:1,name:"SEVEN of PENTACLES",name_ja:"金貨の7",meaning:[["進展あり"],["短気","お金を貸すのは注意","心配事"]],image:"img/tarot/RWS_Tarot_Pents07.jpg"},
  {"index":0,no:308,type:1,name:"EIGHT of PENTACLES",name_ja:"金貨の8",meaning:[["恋は要努力","勉強に工夫","疑い深い","準備は吉"],["幻滅感","孤独","目先の利益にとらわれる"]],image:"img/tarot/RWS_Tarot_Pents08.jpg"},
  {"index":0,no:309,type:1,name:"NINE of PENTACLES",name_ja:"金貨の9",meaning:[["安心","安定感","協力者出現","直感冴える","用心深い"],["怠惰","悪い噂","無計画","無駄遣い","裏工作"]],image:"img/tarot/RWS_Tarot_Pents09.jpg"},
  {"index":0,no:310,type:1,name:"TEN of PENTACLES",name_ja:"金貨の10",meaning:[["臨時収入","家族関係良好","旅行が吉"],["忘れ物","ミスが多い","悪い予感","遊びに注意"]],image:"img/tarot/RWS_Tarot_Pents10.jpg"},
  {"index":0,no:311,type:1,name:"PAGE of PENTACLES",name_ja:"金貨の見習",meaning:[["勉強欲求","知的好奇心","強い反省心"],["冗談が通じない","一方通行の恋","自分の考えを押し付けたがる"]],image:"img/tarot/RWS_Tarot_Pents11.jpg"},
  {"index":0,no:312,type:1,name:"KNIGHT of PENTACLES",name_ja:"金貨の騎士",meaning:[["決まりを守る","忍耐強く","成績上昇","物質運上昇"],["独りよがり","停滞","迷い"]],image:"img/tarot/RWS_Tarot_Pents12.jpg"},
  {"index":0,no:313,type:1,name:"女王 of PENTACLES",name_ja:"金貨の女王",meaning:[["派手好きに","作業が進む","趣味を持つ","浪費"],["責任逃れ","病気","正解がない","嘘をつく"]],image:"img/tarot/RWS_Tarot_Pents13.jpg"},
  {"index":0,no:314,type:1,name:"KING of PENTACLES",name_ja:"金貨の王",meaning:[["頼りになる","強力な味方","嫌みな人","ライバル出現"],["ケチな男性","自己中心的な男性","おとなしい協力者","腐れ縁"]],image:"img/tarot/RWS_Tarot_Pents14.jpg"},
  {"index":0,no:401,type:1,name:"ACE of CUPS",name_ja:"聖杯のＡ",meaning:[["誠実","正義","誠意","慈悲","愛の成就","不安","努力達成"],["無用な忠告","誤解","不安","忍耐の後に幸福"]],image:"img/tarot/RWS_Tarot_Cups01.jpg"},
  {"index":0,no:402,type:1,name:"TWO of CUPS",name_ja:"聖杯の２",meaning:[["発展","進展"],["軽はずみ","無駄な努力","行き詰まり","離別"]],image:"img/tarot/RWS_Tarot_Cups02.jpg"},
  {"index":0,no:403,type:1,name:"THREE of CUPS",name_ja:"聖杯の３",meaning:[["頭が冴える","仲間をまとめる","成功"],["取り越し苦労","迷う","親切があだになる"]],image:"img/tarot/RWS_Tarot_Cups03.jpg"},
  {"index":0,no:404,type:1,name:"FOUR of CUPS",name_ja:"聖杯の４",meaning:[["心が重く","勘が外れる","公平な判断","秘密にする"],["立場が悪くなる発言","頑固は不運","望み"]],image:"img/tarot/RWS_Tarot_Cups04.jpg"},
  {"index":0,no:405,type:1,name:"FIVE of CPUS",name_ja:"聖杯の５",meaning:[["失われた勇気","出端を挫かれる","許す心","拾い物"],["時間の浪費","不安定な気分","嘘は不運","先輩に相談"]],image:"img/tarot/RWS_Tarot_Cups05.jpg"},
  {"index":0,no:406,type:1,name:"SIX of CUPS",name_ja:"聖杯の６",meaning:[["過去にこだわると失敗","イエス","ノーをはっきり","嫌なことあり"],["気が散る","援助者はこない","思わぬ情報が入る"]],image:"img/tarot/RWS_Tarot_Cups06.jpg"},
  {"index":0,no:407,type:1,name:"SEVEN of CUPS",name_ja:"聖杯の７",meaning:[["好奇心が裏目にでる","美しいものに魅せられる","不思議な出来事"],["自信が揺らぐ","信頼感の薄れ","秘密が漏れる","話題の中心になる"]],image:"img/tarot/RWS_Tarot_Cups07.jpg"},
  {"index":0,no:408,type:1,name:"EIGHT of CUPS",name_ja:"聖杯の８",meaning:[["自分の心に忠実に行動して吉","探し物が見つかる","耳寄りな情報"],["独断が争いの原因になる","礼儀正しくして吉","好転の暗示"]],image:"img/tarot/RWS_Tarot_Cups08.jpg"},
  {"index":0,no:409,type:1,name:"NINE of CUPS",name_ja:"聖杯の9",meaning:[["友情","成功する兆し","勝つ","好成績"],["わがままで嫌われる","邪魔が入る","準備不足で不運"]],image:"img/tarot/RWS_Tarot_Cups09.jpg"},
  {"index":0,no:410,type:1,name:"TEN of CUPS",name_ja:"聖杯の10",meaning:[["穏やか","正しい判断","着実に発展","家庭の平和","ほめられる"],["争いがおこる","腕力にものをいわせる","家庭に問題","叱られる"]],image:"img/tarot/RWS_Tarot_Cups10.jpg"},
  {"index":0,no:411,type:1,name:"PAGE of CUPS",name_ja:"聖杯の見習",meaning:[["自発的な態度","つつましさ","ビックニュース"],["つまらない原因の喧嘩","くよくよして損をする","待てば幸運来る"]],image:"img/tarot/RWS_Tarot_Cups11.jpg"},
  {"index":0,no:412,type:1,name:"KNIGHT of CUPS",name_ja:"聖杯の騎士",meaning:[["友人の訪問","話し合えば解決","希望は暫くのうちに叶う"],["悪知恵が働く","嫌な奴と出会う","騙される"]],image:"img/tarot/RWS_Tarot_Cups12.jpg"},
  {"index":0,no:413,type:1,name:"女王 of CUPS",name_ja:"聖杯の女王",meaning:[["正直が吉","女性の援助","着実な成功","幸福","ボランティア活動"],["いじわるされる","告げ口に用心","やる気をなくす","愛は薄れる"]],image:"img/tarot/RWS_Tarot_Cups13.jpg"},
  {"index":0,no:414,type:1,name:"KING of CUPS",name_ja:"聖杯の王",meaning:[["信頼度が高まる","良き相談相手","勉強は進む","公平な考え方をする男性"],["嘘つきの男性","不公平なことをする人","障害が生まれる","愛壊れる"]],image:"img/tarot/RWS_Tarot_Cups14.jpg"},
];

//let worker = new Worker('doShuffleWork.js')

// 0:初期
// 1:シャッフル中
// 2:カット待ち
// 3:リセット
// 99:無効中
let btn_push = 0;
let tarotIndex = new Array();

document.getElementById("btn_shuffle").onclick = function() {

if (btn_push == 0){
    btn_push = 1;

    /*
    worker = new Worker('doShuffleWork.js')
    worker.addEventListener('message', function(e) {
//      console.log('Worker said: ', e.data)
      tarotIndex = e.data

    }, false)
    */


    // シャッフルする
    // ①カードを全部返して一つの山にまとめる
    // ②かき混ぜる（念じる）ユーザに開始と終了を指定する
    // ③④カードを二つにカット（カットする位置はランダム）
    // ⑤もう一度戻す。（カットした方を下になるようにする）
//    worker.postMessage('Hello World')
    // ワーカーを開始します
//    worker.postMessage(tarot);


    // worker.postMessage(null);

    // 初期処理
    drowShuffleInit();

    // シャッフルするアニメーション開始
    window.requestAnimationFrame(loopShuffle);
    this.innerHTML = 'ストップ';
    
  }  else if (btn_push == 1) {
    btn_push = 99; // ボタン無効
//    this.innerHTML = 'シャッフル';

    //worker.terminate();
    shuffleStop(); // シャッフルストップ
    //this.style.visibility ="hidden";
    
  } else if (btn_push == 2) {
    // 2:カット待ち
    btn_push = 99;
    catIndex = Math.floor(Math.random() * 100) % 70 + 1;

    // カットする位置を決定する
    window.requestAnimationFrame(loopCat);
    
    //this.style.visibility ="hidden";
  } else if (btn_push == 3) {
    // ページを初期化
    //document.location.reload();
    //window.location.reload();
    window.location.href = "talot.html";
  }
};

// android からの呼び出し
function androidResume() {
  // clientHeightが取得できない場合
  if (clientHeight == 0) {
    // シャッフルや配る描画がずれるのを防ぐため再ロードする
    window.location.reload();
  }
}

// async function shuffle(x) {


//   return new Promise (resolve => {

//     i = 1;
//     while(btn_push) {

//       if (btn_push == false) {
//         return;
//       }

//       _sleep(10000);
//       console.log(i);
//       i = i + 1
//     }

//     resolve(x);
//   });  
// }


const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// モーダル参初期画面
let modalindex = document.getElementById('modalindex');

// モーダル　占い結果、カード参照
let modalResult = document.getElementById('modalResult');

// モーダル参照画面１
let modalSansyou1 = document.getElementById('modalSansyou1');

// モーダル大アルカナ
let modalMajorArcana = document.getElementById('modalMajorArcana');

// モーダル小アルカナ
let modalMinorArcana1 = document.getElementById('modalMinorArcana1');

// モーダル小アルカナ数字選択
let modalMinorArcana2 = document.getElementById('modalMinorArcana2');

// モーダルタロット表示
let modalTarot = document.getElementById('modalTarot');

// 参照ボタンモード
// 0 = 参照
// 1 = 結果
let bunSansyouMode = 0;

// 参照ボタンクリック処理
document.getElementById("btn_sansyou").onclick = function() {

  if (bunSansyouMode == 0) {
    modalSansyou1.style.display = 'block';
  } else {
    modalResult.style.display = 'block';
  }
}

// 大アルカナボタンクリック処理
document.getElementById("btnMajorArcana").onclick = function() {
  modalMajorArcana.style.display = 'block';
}

// 小アルカナボタンクリック処理
document.getElementById("btnMinorArcana").onclick = function() {
  modalMinorArcana1.style.display = 'block';
}

// 大アルカナ種類クリック処理
function onBtnMajorArcanaSyuruiClick(e) {

  var tarot;

  // 押したボタンで判断する
  if (e.id == "btnFool") {
    tarot = tarots[0];
  } else if (e.id == "btnMagican") {
    tarot = tarots[1];
  } else if (e.id == "btnPriestess") {
    tarot = tarots[2];
  } else if (e.id == "btnEmpress") {
    tarot = tarots[3];
  } else if (e.id == "btnEmperor") {
    tarot = tarots[4];
  } else if (e.id == "btnHierophant") {
    tarot = tarots[5];
  } else if (e.id == "btnLovers") {
    tarot = tarots[6];
  } else if (e.id == "btnChariot") {
    tarot = tarots[7];
  } else if (e.id == "btnStrength") {
    tarot = tarots[8];
  } else if (e.id == "btnHermit") {
    tarot = tarots[9];
  } else if (e.id == "btnFortune") {
    tarot = tarots[10];
  } else if (e.id == "btnJustice") {
    tarot = tarots[11];
  } else if (e.id == "btnHangedMan") {
    tarot = tarots[12];
  } else if (e.id == "btnDeath") {
    tarot = tarots[13];
  } else if (e.id == "btnTemperance") {
    tarot = tarots[14];
  } else if (e.id == "btnDevil") {
    tarot = tarots[15];
  } else if (e.id == "btnTower") {
    tarot = tarots[16];
  } else if (e.id == "btnStar") {
    tarot = tarots[17];
  } else if (e.id == "btnMoon") {
    tarot = tarots[18];
  } else if (e.id == "btnSun") {
    tarot = tarots[19];
  } else if (e.id == "btnJudgement") {
    tarot = tarots[20];
  } else if (e.id == "btnWorld") {
    tarot = tarots[21];
  }

  // タロットモーダルを開く処理
  displayTarotModal(tarot);
}

// 遷移元
// 1=こん棒
// 2=剣
// 3=金貨
// 4=聖杯
let seniMinorMoto = 0;

// どのカードを選択したかを保持
// seniMinorMotoが=0の場合は小アルカナ 0以外の場合は大アルカナとなる
let minorNum = 0;

// 小アルカナの種類クリック処理
function onBtnMinorArcanaSyuruiClick(e) {
// onclick = "onBtnMinorArcanaSyuruiClick();"

  let syurui = "";

  // クリックしたボタンで表示文字列等を変更する
  if (e.id == "btnWands") {
    seniMinorMoto = 1;
    syurui = "こん棒";
  } else if (e.id == "btnSwords") {
    seniMinorMoto = 2;
    syurui = "剣";
  } else if (e.id == "btnPentacles") {
    seniMinorMoto = 3;
    syurui = "金貨";
  } else if (e.id == "btnCups") {
    seniMinorMoto = 4;
    syurui = "聖杯";
  }

  document.getElementById("btnMajor1").innerHTML = syurui + "<br/>" + "の１" ;
  document.getElementById("btnMajor2").innerHTML = syurui + "<br/>" + "の２" ;
  document.getElementById("btnMajor3").innerHTML = syurui + "<br/>" + "の３" ;
  document.getElementById("btnMajor4").innerHTML = syurui + "<br/>" + "の４" ;
  document.getElementById("btnMajor5").innerHTML = syurui + "<br/>" + "の５" ;
  document.getElementById("btnMajor6").innerHTML = syurui + "<br/>" + "の６" ;
  document.getElementById("btnMajor7").innerHTML = syurui + "<br/>" + "の７" ;
  document.getElementById("btnMajor8").innerHTML = syurui + "<br/>" + "の８" ;
  document.getElementById("btnMajor9").innerHTML = syurui + "<br/>" + "の９" ;
  document.getElementById("btnMajor10").innerHTML = syurui + "<br/>" + "の１０" ;
  document.getElementById("btnMajorPage").innerHTML = syurui + "<br/>" + "のペイジ" ;
  document.getElementById("btnKnight").innerHTML = syurui + "<br/>" + "のナイト" ;
  document.getElementById("btnQueen").innerHTML = syurui + "の<br/>" + "クイーン" ;
  document.getElementById("btnKing").innerHTML = syurui + "<br/>" + "のキング" ;

  modalMinorArcana2.style.display = 'block';


}

// モーダル　小アルカナカード選択を開く
function onBtnMinorArcanaNumClick(e) { 
  
  let no = 0
  if (e.id == "btnMajor1") {
    no = syuruiHandan() + 1;
  } else if (e.id == "btnMajor2") {
    no = syuruiHandan() + 2;
  } else if (e.id == "btnMajor3") {
    no = syuruiHandan() + 3;
  } else if (e.id == "btnMajor4") {
    no = syuruiHandan() + 4;
  } else if (e.id == "btnMajor5") {
    no = syuruiHandan() + 5;
  } else if (e.id == "btnMajor6") {
    no = syuruiHandan() + 6;
  } else if (e.id == "btnMajor7") {
    no = syuruiHandan() + 7;
  } else if (e.id == "btnMajor8") {
    no = syuruiHandan() + 8;
  } else if (e.id == "btnMajor9") {    
    no = syuruiHandan() + 9;
  } else if (e.id == "btnMajor10") {    
    no = syuruiHandan() + 10;
  } else if (e.id == "btnMajorPage") {
    no = syuruiHandan() + 11;
  } else if (e.id == "btnKnight") {
    no = syuruiHandan() + 12;
  } else if (e.id == "btnQueen") {
    no = syuruiHandan() + 13;
  } else if (e.id == "btnKing") {
    no = syuruiHandan() + 14;
  }

  var tarot = tarots.filter(function(item, index){
    if (item.no == no) return true;
  });

  // タロットモーダルを開く処理
  displayTarotModal(tarot[0]);
}

// 選択された小アルカナ種類によってtarotsに対応する番号を返す
function syuruiHandan() {
  
  if (seniMinorMoto == 1) {
    return 100;
  } else if (seniMinorMoto == 2) {
    return 200;
  } else if (seniMinorMoto == 3) {
    return 300;
  } else if (seniMinorMoto == 4) {
    return 400;
  }    
}

// タロットカードの説明表示　（ロジックの改善案があれば直す）
function displayTarotModal(tarot) {
    
  let msg = "";

  msg += "<table><tr> <th>";
  msg += "<tr><td>" + tarot.name_ja + "</td></tr>";
  msg += "<tr><td class='kekka-img'><img src='" + tarot.image + "' class='kekka-img' /> </td></tr>";
  msg += "<tr><th>正位置</td></tr>";

  sei = '';
  tarot.meaning[0].forEach(function(element){
    sei += element + ","
  });

  msg += "<tr><td>" + sei.slice(0, sei.length - 1) + "</td></tr>";
  msg += "<tr><th>逆位置</td></tr>";

  gyaku = '';
  tarot.meaning[1].forEach(function(element){
    gyaku += element + ","
  });

  msg += "<tr><td>" + gyaku.slice(0, gyaku.length - 1) + "</td></tr>";

  let tarotContent = document.getElementById("tarotContent");
  tarotContent.innerHTML = msg;

  modalTarot.style.display = 'block';
}

// モーダル閉じるボタン

// 初期画面ボタン　参照
document.getElementById("btnCloseIndex").onclick = function() {
  modalindex.style.display = 'none';
}

// 結果窓を閉じる
document.getElementById("btnCloseResult").onclick = function() {
  document.getElementById("modalResultScroll").scrollTo(0, 0);
  modalResult.style.display = 'none';
}

// モーダル閉じるボタン　参照
document.getElementById("btnCloseSansyou1").onclick = function() {
  modalSansyou1.style.display = 'none';
}

// モーダル閉じるボタン 大アルカナ
document.getElementById("btnCloseMajorArcana").onclick = function() {
  document.getElementById("modalMajorArcanaScroll").scrollTo(0, 0);
  modalMajorArcana.style.display = 'none';
}

// モーダル閉じるボタン 小アルカナ
document.getElementById("btnCloseMinorArcana1").onclick = function() {    
  modalMinorArcana1.style.display = 'none';
}

// モーダル閉じるボタン 小アルカナカード選択
document.getElementById("btnCloseMinorArcana2").onclick = function() {    
  
  // スクロールを戻す
  document.getElementById("modalMinorArcana2Content").scrollTo(0, 0);
  // 表示位置戻す
  modalMinorArcana2.style.display = 'none';

  seniMinorMoto = 0;
}

// モーダル閉じるボタン 　タロット表示
document.getElementById("btnCloseTarot").onclick = function() {    
  minorNum = 0; // 選択値を初期化
  modalTarot.style.display = 'none';
}

// 初期モーダル開く
modalindex.style.display = 'block';