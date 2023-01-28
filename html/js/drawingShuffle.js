// カード情報　シャッフル時のカードの並びや裏表、描画位置を保持
let cards = [
  {"index": 0, "ID" :"0", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},  
  {"index": 0, "ID" :"1", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"2", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"3", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"4", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"5", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"6", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"7", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"8", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"9", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"10", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"11", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"12", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"13", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"14", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"15", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"16", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"17", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"18", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"19", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"20", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"21", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"22", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"23", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"24", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"25", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"26", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"27", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"28", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"29", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"30", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"31", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"32", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"33", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"34", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"35", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"36", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"37", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"38", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"39", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"40", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"41", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"42", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"43", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"44", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"45", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"46", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"47", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"48", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"49", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"50", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"51", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"52", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"53", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"54", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"55", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"56", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"57", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"58", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"59", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"60", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"61", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"62", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"63", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"64", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"65", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"66", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"67", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"68", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"69", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"70", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"71", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"72", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"73", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"74", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"75", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"76", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0},
  {"index": 0, "ID" :"77", "DURATION": Math.random() * 10 + "s", "FROM_CENTER": 200 + Math.random() * 10, "x" : 200 + Math.random() * 10, "y": 200 + Math.random() * 10, "sin" : Math.random(), "ANGLE_RADX": Math.random() * 10 % 5 + 1, "angleRad" : 0, "ForwardReverse":0}
];

// 円運動の中心座標。
// 今回はcanvasの真ん中を中心に移動する。
//const centerX = 250;
//let centerX = 400; 
let centerX = 0;

//const centerY = 250;
// let centerY = 150;
let centerY = 0;
//const centerY = 350;

// 画面幅
let clientWidth = document.documentElement.clientWidth;

// 画面高さ
let clientHeight = document.documentElement.clientHeight;


// ２：１の比率にしたい　カードを配る位置で使用する
let withHiritu = 0;
// もし横領域が狭く2：1にできない場合は、画像横サイズを使用する
if ((document.documentElement.clientHeight / 2) > clientWidth) {
  // 画面のサイズを使用する
  withHiritu = document.documentElement.clientWidt;
} else {
  // 縦画面と2：1となる幅を使用する
  withHiritu = document.documentElement.clientHeight / 2;
}

// デバイスのピクセル数の取得
// let clientWidth = window.devicePixelRatio * screen.width;
// let clientHeight = window.devicePixelRatio * screen.height;

// let clientWidth = window.devicePixelRatio * window.innerWidth;
// let clientHeight = window.devicePixelRatio * window.innerHeight;


// let clientWidth = window.innerWidth;
// let clientHeight = window.innerHeight;

// document.getElementById("debug").innerHTML = "window.devicePixelRatio * screen.Widht :" +  window.devicePixelRatio * screen.width;

// シャッフルを停止するかどうかの判断
let isShuffleStop = false;

// シャッフル前の初期化処理
function drowShuffleInit() {

  // centerX = clientWidth * 0.50;
  // centerY = clientHeight * 0.05;
  // centerX = 145;

  // 円運動の中心座標を決定
  centerX = document.body.clientWidth / 2 - (document.body.clientWidth * 0.08);
  centerY = 100;

  // タロットカードの枚数分ループ
  for (let i in cards) {

    // カードを生成
    let canvas
    if (document.getElementById(cards[i].ID) == null) {
      // カードがない場合生成する
      canvas = document.createElement('span');

//      canvas.className = "circle1";
      canvas.className = "card card_ura";
      canvas.id = cards[i].ID;
      
      document.body.appendChild(canvas);
    } else{
      canvas = document.getElementById(cards[i].ID);
    }

    // 各スタイルの設定
    canvas.style.animationName  = "rotation";
    canvas.style.animationDuration = cards[i].DURATION;
  //  canvas.style.animationDuration = "5s";
    canvas.style.animationTimingFunction = "linear"
    canvas.style.animationIterationCount = "infinite"; 

    // 幅の変更 高さに対して1/2の関係にする
    canvas.style.width = canvas.clientHeight * 0.572 + "px";
  };

  // シャッフルのストップフラグの初期化
  isShuffleStop = false;
  countShuffleEnd = 0;
}

//let angleRad = 0;

// シャッフルするタイミングを図るための変数
let chageZIndexCount = 0;



const SHUFFLE_HINDO = 25;

// カードシャッフル
function loopShuffle(timestamp) {

  if (isShuffleStop) {

    return;
  }

  // カード情報分ループ
  for (let i in cards) {

    // if (i != 0) {
    //   continue;
    // }

    // シャッフルする　常にシャッフルすると重くなる為
    if (chageZIndexCount == SHUFFLE_HINDO) {
        // ランダムな値を設定してそれを並び替えの材料にする
        cards[i].index = Math.floor(Math.random() * 100);
        cards[i].ForwardReverse = Math.floor(Math.random() * 10) % 2;
    }

    // angleRadを1度ずつ変化させていく。
    // 1度はMath.PI/180ラジアン。
    cards[i].angleRad += cards[i].ANGLE_RADX * Math.PI / 180;
    //    cards[i].angleRad += 1 * Math.PI / 180;
    // ここで座標を変化させていく。
    // cards[i].x = cards[i].FROM_CENTER * Math.cos(cards[i].angleRad) * 1.0          + centerX;
    // cards[i].y = cards[i].FROM_CENTER * Math.sin(cards[i].angleRad) * cards[i].sin + centerY;
    //  this.x = this.centerX + this.radius * Math.cos(angle);
    //  this.y = this.centerY + this.radius * 0.8 * Math.sin(angle);

    //          半径            半径×cos(現行角度) + 水平中心座標
    cards[i].x = 80 * Math.cos(cards[i].angleRad)  + centerX;
    cards[i].y = 80 * Math.sin(cards[i].angleRad)  + centerY;

    card = document.getElementById(cards[i].ID);
    if ( !card.style.left ) {
      var style = window.getComputedStyle(card);
      card.style.left = style.left;
    }

    if (chageZIndexCount == SHUFFLE_HINDO) {
      card.style.zIndex = cards[i].index;
    }

    card.style.left = cards[i].x + "px";
    card.style.top  = cards[i].y + "px";
  }

  if (chageZIndexCount == SHUFFLE_HINDO) {
    chageZIndexCount = 0;
  }
  chageZIndexCount++;

  window.requestAnimationFrame(loopShuffle);
}

// シャッフルストップ
function shuffleStop() {
  for (let i in cards) {
   card = document.getElementById(cards[i].ID);
  //  animation-play-state: paused;
//    let canvas = document.createElement('span');
//    canvas.className = "circle1";
//    canvas.id = cards[i].ID;
//    document.body.appendChild(canvas);
//    canvas.style.animationName  = "rotation";
//    canvas.style.animationDuration = cards[i].DURATION;
    card.style.animationPlayState = "paused";
    // animationDuration = "0s";
//    canvas.style.animationTimingFunction = "linear"
//    canvas.style.animationIterationCount = "infinite"; 
  };

  isShuffleStop = true;

 window.requestAnimationFrame(loopShuffleEnd);
}

// シャッフル中にカードを収縮、下に徐々に移動させるために使用
let countShuffleEnd = 0;

// シャッフル中にカードを収縮、下に徐々に移動させるために使用
let sukosiSageruY = 0;

// シャッフル中にカードを収縮、下に徐々に移動させるために使用
let sukosiSageruX = 0;

// true:シャッフル終了中
let loopShuffleEndFlg = false;

// シャッフル中断処理
function loopShuffleEnd(timestamp) {

  for (let i in cards) {

    // let end = Math.floor(cards[i].FROM_CENTER) - countShuffleEnd;
    let end = 80 - countShuffleEnd;

    if (end < 0) {
      // continue;
      loopShuffleEndFlg = true;
      break;
    }

    // angleRadを1度ずつ変化させていく。
    // 1度はMath.PI/180ラジアン。
    cards[i].angleRad += cards[i].ANGLE_RADX * Math.PI / 180;
    
    // ここで座標を変化させていく。
    // cards[i].x = (end * Math.cos(cards[i].angleRad) * 1.0 + centerX)- sukosiSageruX;
    // cards[i].y = (end * Math.sin(cards[i].angleRad) * cards[i].sin + centerY) + sukosiSageruY;

    // カードの座標を設定
    cards[i].x = end * Math.cos(cards[i].angleRad)  + centerX - sukosiSageruX;
    cards[i].y = end * Math.sin(cards[i].angleRad)  + centerY + sukosiSageruY;

    // ちょっと下に下げる
    if (countShuffleEnd % 4 == 0) {

//      document.getElementById("debug").innerHTML = "clientHeight:" +  clientHeight;

      // ある程度下げたらストップ
     if (cards[i].y < (clientHeight * 0.85)) {
      // if (cards[i].y < (clientHeight * 0.55)) {
        // sukosiSageruY += 0.18;
        sukosiSageruY +=  document.documentElement.clientHeight * 0.000250;
      }

      // document.getElementById("debug").innerHTML = "sukosiSageruY:" +  sukosiSageruY;

      // if (sukosiSageruX < 375) {
      //   sukosiSageruX += 0.1;
      // }
    }

    card = document.getElementById(cards[i].ID);
    if ( !card.style.left ) {
      var style = window.getComputedStyle(card);
      card.style.left = style.left;
    }

    card.style.left = cards[i].x + "px";
    card.style.top  = cards[i].y + "px";
    card.style.zIndex = cards[i].index;
  }
  countShuffleEnd++;

  
  // for (let i in cards) {

  //   let end = Math.floor(cards[i].FROM_CENTER) - countShuffleEnd;

  //   if (end < 0) {
  //     endFlg = true;
  //   }
  // }

  //  シャッフル終了処理が完了したかで続行するかの判断をする
  if (loopShuffleEndFlg == false) {
    window.requestAnimationFrame(loopShuffleEnd);
  } else {
    // 横位置にする
    for (let i in cards) {
      card = document.getElementById(cards[i].ID)
      card.style.animationDuration = "0s";
      card.style.transform = "rotate(" + 90 + "deg)";
    }

    // 2:カット待ち
    btn_push = 2;
    btnShuffle = document.getElementById("btn_shuffle");
    btnShuffle.style.visibility ="visible";
    btnShuffle.innerHTML = 'カット ＆ 配る';
    cards.sort(catCompare);

    loopCatY = centerY + sukosiSageruY; // Y位置を調整

    // 初期化
    countShuffleEnd = 0;
//    sukosiSageru = 0;
    // endFlg = true;
  }
}

//　カットしたカードのアニメーション true = 上がる　false = 下がる
let loopCatMode = true;

// カットしたカードの枚数
let loopCatCount = 0;

// アニメーションの移動Y位置
let loopCatY = 0;


// let loopCatMotoY = 0;

// カードをカットする位置
let catIndex = 0;

// カットしたカードの束
let catArray = [];

// 束ねてあるカードのある位置からカットしてそれを下側に移動する
function loopCat() {

    // 大きい程前面になる
//  card.style.zIndex = cards[i].index;
  // ソートする
//  cards.sort(catCompare);
  // カードを上に移動しているか同課の判断
  if (loopCatMode == true) {

    // カードのY位置上昇仕切ったかの判断
    if (loopCatY < parseInt(document.getElementById(cards[catIndex + 1].ID).style.top) - (clientHeight * 0.2)) {

      // 上昇しきったからフラグを変更
      loopCatMode = false;

      // 並び替え カットしたカードを下にする
      for (let i = catIndex; i < 78; i++) {
        // もともと下にあったカードを上に移動する
        cards[i].index += 100;

        let card = document.getElementById(cards[i].ID);
        card.style.zIndex = cards[i].index; // 実態を反映させる
      }

      // 並び替え
      cards.sort(catCompare);
    } else {
      loopCatY -= 10;

      for (let i =0; i < catIndex; i++) {
        let card = document.getElementById(cards[i].ID);

        // // styleが取得できない場合のおまじない
        // if ( !card.style.left ) {
        //   var style = window.getComputedStyle(card);
        //   card.style.left = style.left;
        // }
        // カットしたカードを保持
        catArray.push(cards[i]);
    
      //    card.style.left = cards[i].x + "px";
      //  card.style.top  =  "20px";
        // loopCatMotoY = loopCatY;
        card.style.top  =  loopCatY + "px";
      }
      loopCatCount++;
    }

  } else {

    // loopCatCount
    // if (loopCatY <= sukosiSageruY + 150) {

    if (loopCatCount > 0) {
      // カットしたカードを下に置く
      loopCatY += 10;
      for (let i in catArray) {
        let card = document.getElementById(catArray[i].ID);

        // styleが取得できない場合のおまじない
        if ( !card.style.left ) {
          var style = window.getComputedStyle(card);
          card.style.left = style.left;
        }
        card.style.top  =  loopCatY + "px";
      }
      loopCatCount--;
    } else {
      // カット終了後

      // 変数を元に戻す
      loopCatMode == true;
      loopCatY = 150;
      catArray = [];

//      btnShuffle = document.getElementById("btn_shuffle");
//      btnShuffle.style.visibility ="visible";
//      btnShuffle.innerHTML = 'とちゅう';

      sukosiSageru = 0; // 初期化

      // カードを縦置きにする処理
      window.requestAnimationFrame(loopCatTateoki);
      return; // アニメーション終了
    }
  }

  // カットアニメーション続行
  window.requestAnimationFrame(loopCat);
}

// カード配列の並び替え indexの降順
function catCompare( a, b ){
  var r = 0;
  if( a.index < b.index ){ r = 1; }
  else if( a.index > b.index ){ r = -1; }

  return r;
}

// カードを縦に向きを変更
let loopSyoumeiCount = 90;
function loopCatTateoki() {

  // アニメーション途中か？
  if (loopSyoumeiCount > 180) {

    // 終了している場合は変数を初期化
    loopSyoumeiCount = 90;

    // 配る処理開始
    kubaru();
    return;
  }

  // タロットカードの枚数分処理
  for (let i in cards) {
    card = document.getElementById(cards[i].ID)
    card.style.transform = "rotate(" + loopSyoumeiCount + "deg)";
  }

  loopSyoumeiCount += 10;

  // 向きを変えるアニメーションを続行
  window.requestAnimationFrame(loopCatTateoki);
}
// ------------ ヘキサグラム法 -------------------

// 各カードを代入するため用意
let card1;
let card2;
let card3;
let card4;
let card5;
let card6;
let card7;

// ai に渡す引数
let argsai = '';

let uranaiKekka = '';

// 結果表示するhtmlを格納(やり方が良くない。ほかに方法があれば変更)
let resultMassage = [];

// カードを配る処理
// card = 配られるカード
// ms = 過去～結果
function kubaruSub(card, ms) {

  // 各結果を保持
  let rm = [];

//  ichi = card;
  zittai = document.getElementById(card.ID); // 描画するカード
  tarot = tarots[card.ID]; // タロットカード情報

  // 保持情報を格納
  rm.zyoukyou = ms;
  rm.name = tarot.name_ja;
  rm.img = "url('" + tarot.img +"')";
  zittai.style.backgroundImage = "url('" + tarot.image +"')";
  zittai.className  = "card card_omote";

  // カードが表裏で処理を変更
  // maeTop = zittai.style.top;
  if (card.ForwardReverse == 0) {
    // 表の場合
    zittai.style.transform = "rotate(0deg)";
    rm.ichi = "正位置";

    sei = '';
    tarot.meaning[0].forEach(function(element){
      sei += element + ","
    });

    rm.imi = sei.slice(0, sei.length - 1);

    k = tarot.meaning[1][getRandam(0, tarot.meaning[1].length - 1)];
    argsai += ms + "は" + k + "、";

    if (ms == '結論') {
      uranaiKekka = k;
    }

  } else {
    // 裏の場合　裏返す
    // zittai.style.transform = "rotate(180deg)";
    zittai.style.transform = "scale(-1, -1)";
    // zittai.style.margin = "30%";
    rm.ichi = "逆位置";

    gyaku = '';
    tarot.meaning[1].forEach(function(element){
      gyaku += element + ","
    });

    rm.imi = gyaku.slice(0, gyaku.length - 1);

    k = tarot.meaning[1][getRandam(0, tarot.meaning[1].length - 1)];
    argsai += ms + "は" + k + "、";

    if (ms == '結論') {
      uranaiKekka = k;
    }
  }
  // card1.innerHTML = t.name_ja;  
  // zittai.style.top = maeTop + 50;

  // rm.image = "url('" + tarot.image +"')";
  rm.image = tarot.image;

  // 結果のリストに追加
  resultMassage.push(rm);

  return zittai;
}

// let kitenTop;

// カードの横位置（画面中央位置）を保持
let kitenLeft;

// 配る
function kubaru() {

  // 結果をまとめる
  let rm1 = [];

  argsai = '';

  // style、画像の設定等を行う
  card1 = kubaruSub(cards[7-1], "過去");
  card2 = kubaruSub(cards[8-1], '現在');
  card3 = kubaruSub(cards[9-1], '未来');
  card4 = kubaruSub(cards[10-1], '対応策');
  card5 = kubaruSub(cards[11-1], '対人関係');
  card6 = kubaruSub(cards[12-1], '願望');
  card7 = kubaruSub(cards[13-1], '結論');

  // kitenTop = parseInt(document.getElementById(cards[0].ID).style.top);

  // カードがおいてある画面の中央位置を取得k
  kitenLeft = parseInt(document.getElementById(cards[0].ID).style.left);

  // 結果モーダルの作成
  let msg = "";

  // ☆この辺か？
  msg += "<div id='ai-result'>しばらくおまちを</div>"

  // aiHantei(argsai, uranaiKekka, 20, 50)
  aiHantei(argsai, 100, 200)

  for(let i in resultMassage) {
    msg += "<table><tr> <th>";
    msg += resultMassage[i].zyoukyou + "</th></tr>"
    msg += "<tr><td>" + resultMassage[i].name + "&ensp;" + resultMassage[i].ichi + "</td></tr>";

    if (resultMassage[i].ichi == "正位置") {
      msg += "<tr><td class='kekka-img'><img src='" + resultMassage[i].image + "' class='kekka-img' /> </td></tr>";
    } else {
      msg += "<tr><td class='kekka-img'><img src='" + resultMassage[i].image + "' class='kekka-img gyakuiti' /> </td></tr>";
    }
    
    msg += "<tr><td>" + resultMassage[i].imi + "</td></tr>";
  }
  let resultContent = document.getElementById("resultContent");
  resultContent.innerHTML = msg;

  // カードを描画、移動
  kubaruMove1();

  //  card5.style.top  =  "200px";
  //  card2.style.left  =  "600px";
  //kubaruMove7();

}

  // 過去となるカードを描画、移動
function kubaruMove1() {

  let top = 0;
  let left = 0;

  // 移動が終了しているか判定
  if (parseInt(card1.style.top) > 0) {

    card1.style.top = parseInt(card1.style.top) - 30 + "px";
    // card1.style.top = parseInt(card1.style.top) - (clientHeight / 54) + "px";

    window.requestAnimationFrame(kubaruMove1);
  } else {
    // 移動が終了していたら次のカードの移動処理開始
    card1.style.top = "5px"; // 上部分にかかってしまうので補正する

    kubaruMoveTopKiten = parseInt(card2.style.top);
    topKeisan = parseInt(card2.style.left);
    // kubaruMove2(parseInt(card2.style.top));

    // window.requestAnimationFrame(kubaruMove2);
    window.requestAnimationFrame(kubaruMove2.bind(null, kubaruMoveTopKiten, topKeisan));
  }
}

// let kubaruMove2TopKiten = 0;
// let topKeisan = 0;
  // 現在となるカードを描画、移動
function kubaruMove2(kubaruMoveTopKiten, topKeisan) {
  // function kubaruMove2() {  
  let top = 0;
  let left = 0;

  // if (parseInt(card2.style.top) > (clientHeight * 0.45)) {
    // if (parseInt(card2.style.left) < (kitenLeft +  (clientWidth * 0.33))) {
  if (parseInt(card2.style.left) < (kitenLeft +  (withHiritu * 0.45))) {

    // card2.style.top = (left) * (-1.2)  + "px";
    // card2.style.top = (left) * (-1.0) + kubaruMove2TopKiten + (clientHeight * 0.25)  + "px";
    card2.style.top = ( parseInt(card2.style.left) - topKeisan) * (-0.5) + kubaruMoveTopKiten  + "px";
    left = parseInt(card2.style.left) + 10;
    card2.style.left = left + "px";
    // y=−x2+6x−10

  // card2.style.top = top + "px";
  // card2.style.left = top * (-1.1) + 1350 + "px"
    
//    card2.style.left = top * (-1.2) + (clientWidth * 0.61) + "px"

    window.requestAnimationFrame(kubaruMove2.bind(null, kubaruMoveTopKiten, topKeisan));
    // window.requestAnimationFrame(kubaruMove2);
  } else {
    
    // はみ出してしまっていないか確認
    if (clientWidth < parseInt(card2.style.left) + parseInt(card2.style.width)) {
      // 表示する
      card2.style.left = clientWidth - parseInt(card2.width) +  "px";
    }

    // 移動が終了していたら次のカードの移動処理開始
    kubaruMoveTopKiten = parseInt(card3.style.top);
    topKeisan = parseInt(card3.style.left);
    // kubaruMove2(parseInt(card2.style.top));

    // window.requestAnimationFrame(kubaruMove2);
    window.requestAnimationFrame(kubaruMove3.bind(null, kubaruMoveTopKiten, topKeisan));
  }
} 

// 未来となるカードを描画、移動
function kubaruMove3(kubaruMoveTopKiten, topKeisan) {
  let top = 0;
  let left = 0;
//  if (parseInt(card3.style.top) > 520) {
  // if (parseInt(card3.style.left) < (kitenLeft -  (withHiritu * 0.33))) {
    if (parseInt(card3.style.left) >  (kitenLeft -  (withHiritu * 0.45) )) {    

//    card3.style.top = ( parseInt(card3.style.left) - topKeisan) * (-0.5) + kubaruMove2TopKiten  + "px";

    // top = parseInt(card3.style.top) - 50;
    // card3.style.top = top + "px";
    // card3.style.left = top * (1.2) - 600 + "px";
    card3.style.top = ( parseInt(card3.style.left) - topKeisan) * (0.5) + kubaruMoveTopKiten  + "px";
    left = parseInt(card3.style.left) - 10;
    card3.style.left = left + "px";


    window.requestAnimationFrame(kubaruMove3.bind(null, kubaruMoveTopKiten, topKeisan));
  } else {
    // はみ出してしまった場合
    if (parseInt(card3.style.left) < 0) {
      card3.style.left = "0px"; // 0pxにして表示する
    }

    // 移動が終了していたら次のカードの移動処理開始
    kubaruMove4();
  }
} 

// 対応策となるカードを描画、移動
function kubaruMove4() {

  if (parseInt(card4.style.top) > 700) {
    card4.style.top = parseInt(card4.style.top) - 30 + "px";
    
    window.requestAnimationFrame(kubaruMove4);
  } else {

    // 移動が終了していたら次のカードの移動処理開始
    kubaruMoveTopKiten = parseInt(card5.style.top);
    topKeisan = parseInt(card5.style.left);
    window.requestAnimationFrame(kubaruMove5.bind(null, kubaruMoveTopKiten, topKeisan));
  }
}

// 対人関係となるカードを描画、移動
function kubaruMove5(kubaruMoveTopKiten, topKeisan) {
  let top = 0;
  let left = 0;

  // if (parseInt(card5.style.top) > 200) {
  //   top = parseInt(card5.style.top) - 80;

  //   card5.style.top = top + "px";
  //   card5.style.left = top * 0.5 - 100 + "px"
  if (parseInt(card5.style.left) >  (kitenLeft -  (withHiritu * 0.45) )) {    

        card5.style.top = ( parseInt(card5.style.left) - topKeisan) * (2.0) + kubaruMoveTopKiten  + "px";
        left = parseInt(card5.style.left) - 10;
        card5.style.left = left + "px";
    
    window.requestAnimationFrame(kubaruMove5.bind(null, kubaruMoveTopKiten, topKeisan));
  } else {

    // 移動が終了していたら次のカードの移動処理開始
    kubaruMoveTopKiten = parseInt(card6.style.top);
    topKeisan = parseInt(card6.style.left);
    window.requestAnimationFrame(kubaruMove6.bind(null, kubaruMoveTopKiten, topKeisan));
  }
}

// 願望なるカードを描画、移動
function kubaruMove6(kubaruMoveTopKiten, topKeisan) {
  let top = 0;
  let left = 0;

  if (parseInt(card6.style.left) < (kitenLeft +  (withHiritu * 0.45))) {

    card6.style.top = ( parseInt(card6.style.left) - topKeisan) * (-2.0) + kubaruMoveTopKiten  + "px";
    left = parseInt(card6.style.left) + 10;
    card6.style.left = left + "px";
  
    window.requestAnimationFrame(kubaruMove6.bind(null, kubaruMoveTopKiten, topKeisan));
  } else {

    // 移動が終了していたら次のカードの移動処理開始
    kubaruMove7();
  }
}

// 結論なるカードを描画、移動
function kubaruMove7() {

  if (parseInt(card7.style.top) > clientHeight * 0.30) {
    card7.style.top = parseInt(card7.style.top) - 30 + "px";
    window.requestAnimationFrame(kubaruMove7);
  } else {
    // 全カードの移動が終わったら

    // card4.style.zIndex = 999;

    // シャッフルボタンの役割変更
    btnShuffle = document.getElementById("btn_shuffle");
    // btnShuffle.style.visibility ="visible";
    btnShuffle.innerHTML = 'リセット';
    btnShuffle.href = 'talot.html';
    btn_push = 3 // 3:リセット

    // 参照ボタンをタロット結果表示に変更
    btnSansyou = document.getElementById("btn_sansyou");
    btnSansyou.innerHTML = "結果";
    bunSansyouMode = 1; // ボタンモードを結果に変更

    // 残ったカードを隠す
    for (let i in cards) {
      let card = document.getElementById(cards[i].ID);

      if (card != card1 &&
        card != card2 &&
        card != card3 &&
        card != card4 &&
        card != card5 &&
        card != card6 &&
        card != card7) {

        card.style.visibility ="hidden";
      }
    }
  }
}

function aiHantei(a, min, max) {
  var jsondata = JSON.stringify({'msg': a + '占いの結果です。', 'min' : min, 'max' : max});

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
    airesult.innerHTML = data['msg'];
    // airesult.innerHTML = data['msg'] +  "<br/>ラッキーアイテム：" +  data['item'];
    // airesult.innerHTML = 'おくら';
  })
  // 検索失敗時には、その旨をダイアログ表示
  .fail(function() {
    window.alert('正しい結果を得られませんでした。');
  });
}

function getRandam(n, m){
  let num = Math.floor(Math.random() * (m + 1 - n)) + n;
  return num
};