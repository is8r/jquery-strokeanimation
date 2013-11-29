
//----------------------------------------------------------------------
// プロトタイプの拡張

//全文置換を追加
String.prototype.replaceAll = function (org, dest){  
  return this.split(org).join(dest);  
}  

//Fisher-Yates シャッフル
Array.prototype.shuffle = function() {
  var i = this.length;
  while(i){
      var j = Math.floor(Math.random()*i);
      var t = this[--i];
      this[i] = this[j];
      this[j] = t;
  }
  return this;
}

//配列の複製
Array.prototype.clone = function(){
  return Array.apply(null,this)
}

//IEのArrayにはindexOfが無いので追加
if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length;
    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}



