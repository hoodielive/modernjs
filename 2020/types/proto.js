let f = function() {
    this.a = 1;
    this.b = 2;
}

let o = new f();

f.prototype.b = 3;
f.prototype.c = 4; 

console.log(o.a);
console.log(o.b);
console.log(o.c);
console.log(o.d);

var art = {
    a: 2, 
    m: function() {
        return  this.a + 1;
    }
}

console.log(art.m())

var p = Object.create(art);

p.a = 4

console.log(p.m())
console.log(p.a)