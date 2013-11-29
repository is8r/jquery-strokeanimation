
//----------------------------------------------------------------------
//グローバル領域の関数の拡張

//trace,log

function log(){
  if(typeof console == "undefined") return;
  console.log.apply(console, jQuery.makeArray(arguments));
}
trace = log;

