const pianokeys = document.querySelectorAll(".key-container .key");
const volumecontrol = document.getElementById("volume");
//mouse click press
for (var i=0; i<pianokeys.length;i++){
    document.querySelectorAll(".key-container .key")[i].addEventListener("click", function (){
        var charval = this.innerHTML;
        makesound(charval);
        animate(charval);

    });
    
}

 //keyboard key button press   
document.addEventListener("keydown", function(event){
    makesound(event.key);
    animate(event.key);
});


function makesound(key){
    switch (key){
        case "a":
            var a =  new Audio("audio/a.mp3");
            a.play();
            break;
        case "b":
            var b =  new Audio("audio/b.mp3");
            b.play();
            break;
        case "c":
            var c =  new Audio("audio/c.mp3");
            c.play();
            break;
        case "d":
            var d =  new Audio("audio/d.mp3");
            d.play();
            break;
        case "e":
            var e =  new Audio("audio/e.mp3");
            e.play();
            break;
        case "f":
            var f =  new Audio("audio/f.mp3");
            f.play();
            break;
        case "g":
            var g =  new Audio("audio/g.mp3");
            g.play();
            break;
        case "j":
            var j =  new Audio("audio/j.mp3");
            j.play();
            break;
        
        case "k":
            var k =  new Audio("audio/k.mp3");
            k.play();
            break;
        case "l":
            var l =  new Audio("audio/l.mp3");
            l.play();
            break;
        case "m":
            var m =  new Audio("audio/m.mp3");
            m.play();
            break;
        case "n":
            var n =  new Audio("audio/n.mp3");
            n.play();
            break;
        case "o":
            var o =  new Audio("audio/o.mp3");
            o.play();
            break;
        case "q":
            var q =  new Audio("audio/q.mp3");
            q.play();
            break;
        case "r":
            var r =  new Audio("audio/r.mp3");
            r.play();
            break;
        case "s":
            var s =  new Audio("audio/s.mp3");
            s.play();
            break;
        case "t":
            var t =  new Audio("audio/t.mp3");
            t.play();
            break;
        case "v":
            var v =  new Audio("audio/v.mp3");
            v.play();
            break;
        case "w":
            var w =  new Audio("audio/w.mp3");
            w.play();
            break;
        case "x":
            var x =  new Audio("audio/x.mp3");
            x.play();
            break;
        case "y":
            var y =  new Audio("audio/y.mp3");
            y.play();
            break;
        case "z":
            var z =  new Audio("audio/z.mp3");
            z.play();
            break;
        case ";":
            var col =  new Audio("audio/;.mp3");
            col.play();
            break;
        case ".":
            var aa =  new Audio("audio/aa.mp3");
            aa.play();
            break;
    }
}

function animate(key){
    const pressedkey = document.querySelector(`[data-key="${key}"]`);
    pressedkey.classList.add("active");
    setTimeout(() => {
        pressedkey.classList.remove("active");
    }, 150);
}
const controlvolume = (e) => {
    s.volume = e.target.value;
}

volumecontrol.addEventListener("input", controlvolume);