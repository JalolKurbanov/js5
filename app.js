var a = +prompt('Введите 1 число');
var b = +prompt('Введите 2 число');
var c = +prompt('Введите 3 число');

if((a>b && a<c)|| (a<b && a>c)){
    alert(a);
}else if((b>a && b<c)|| (b<a && b>c)){
    alert(b);
}else if((c>b && c<a)|| (c<b && c>a)){
    alert(c);
}else{
    alert('Error')
}