let arr = [];
let obj ={};



let quest=()=>{
    let q = +prompt("Введите число", "");
    if(q === 0 || q ===null ||q==="" ||isNaN(q) ||q > 99 ){
        alert("Ошибка!");
        quest();
    } else{
        obj.n = q;
    }
};


let chek=()=>{
let a=0;
let b=1;
for(let i=0; i <= obj.n - 1; i++){
let c = a+b;
a=b;
b=c;
arr.push(c);
}
};

let show=()=>{
    alert(arr.join("  "));
};

let clear=()=>{
    arr.length = 0;
};


let start=()=>{
    quest();
    chek();
    show();
    clear();
    start();
};

start();