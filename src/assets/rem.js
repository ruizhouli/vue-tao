(function(win) {
    var doc = win.document ; 
    var docEl = doc.documentElement;
    var tid;
    function refreshRem() {
        console.log(1234569879)
    var width = docEl. getBoundingClientRect().width;
    if (width) { //最大宽度
    let tsWidth = 320
    var rem = width / tsWidth*100;
    docEl.style.fontSize = rem + 'px' ;
    win.addEventListener('resize',function() {
        console.log(1111111111)
    clearTimeout(tid);
    tid = setTimeout (refreshRem, 300); 
    },false);
    win . addEventListener( 'pageshow',function(e){ 
    if (e. persisted) {
    clearTimeout(tid);
    tid = setTimeout (refreshRem, 300); 
    }},false)}};
refreshRem()}(window))