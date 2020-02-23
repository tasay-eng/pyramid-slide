var inp = document.getElementById('vol')
var pyrm = document.getElementById('pyramid')
var sel = document.getElementById('symbol')
inp.addEventListener('click' , change);
sel.addEventListener('click' , change);
var chil = null
var h = null
var s = null
var m = null
console.log(inp)
console.log(sel)

function parag(){
    m = document.createElement("p")
    m.setAttribute("id", "newSpan")
    var arr = pyrm.children
    if (arr.length < 3){
        pyrm.appendChild(m)
    }
    else{
        pyrm.replaceChild(m, arr[2])
    }

}


function render(){
    for (var i = 2; i <= h; i++) {
        var t = document.createElement("pre")
        var str = " ".repeat(h - i) + s.repeat(i)
        var text = document.createTextNode(str);
        t.appendChild(text)
        m.appendChild(t)
    }
    console.log(pyrm.childNodes)
}

function change() {
    parag()
    h = inp.value
    s = sel.value
    return render();
}


