document.getElementById("1").onclick=function(){
    // каждому элементу "массива" Array(10) возвращается случайное значение от 0 до 20
    let arr = Array.from(Array(10), () => Math.round(Math.random()*20));
    console.log(arr.toString());

    let newArr = arr.filter(elem=>elem>0 && elem<10);
    let sum  = newArr.reduce((sum,elem) => sum+elem, 0);
    console.log(sum);
}

document.getElementById("2").onclick=function(){

    function isChet(arr){
        return arr.every((elem)=>elem%2==0);
    }
    
    let arr = [1,2,3,4,5,6,7,8,9];
    let arr1 = [2,12,40,4,22,6,10];
    console.log(arr.toString());
    console.log(isChet(arr));
    console.log(arr1.toString());
    console.log(isChet(arr1));

}

document.getElementById("3").onclick=function(){
    function isToFive(arr){
        let newArr=arr.filter((elem)=>elem%5==0);
        return newArr;
    }
    let arr = [5,10,15,123,33,12,20,25];

    let arr1 = Array.from(arr, function(elem){
        if(elem%5==0)
            return elem;
    }) 
    console.log(isToFive(arr));
    console.log(arr1);
}

document.getElementById("4").onclick=function(){
    let arrAv = function(array){
        let summa = array.reduce((sum,elem) => sum+elem,0);
        return summa/array.length;
    }

    let arr = Array.from(Array(10), () => Math.round(Math.random()*20));
    console.log(arr.toString());
    let avarege = arrAv(arr);
    console.log(avarege.toFixed(1));
}

document.getElementById("5").onclick=function(){
    let arr = ["https://ya.ru", "http://unnet.unn.ru/auth/login","a.com","http://vk.com/feed"];
    arr = arr.filter(elem=>elem.startsWith("http://"));
    console.log(arr.toString());
}


document.getElementById("6").onclick=function(){
    let data = [
        { 
            1: 11,
            2: 12,
            3: 13,
        },
        {
            1: 21,
            2: 22,
            3: 23,
        },
        {
            1: 24,
            2: 25,
            3: 26,
        },
    ];  //массив с элементами, которые являются объектами
    
    let keys = new Array();
    data.forEach(elem =>{
        keys.push(Object.keys(elem));
    });
    console.log(keys.flat(1));

    let v = new Array();
    data.forEach(elem =>{
        v.push(Object.values(elem));
    })
    console.log(v.flat(1));

    let summa = v.flat(1).reduce((sum,elem) => sum + +elem,0);
    console.log(`Сумма равна ${summa}`);
}