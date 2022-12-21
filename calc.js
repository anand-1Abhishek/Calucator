function cal(){
    let a=document.getElementById("n1").value;
    let b=document.getElementById("n2").value;
    let c=document.getElementById("result");
    let d=document.getElementById("Operation").value;
    let res="";
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    

    switch(d){
        case 'add':add=a+b
            res=("The Answer is " + add);
            break;
        case 'sub':sub=a-b
            res=("The Answer is " + sub);
            break;
        case 'mul':mul=a*b
            res=("The Answer is " + mul);
            break;
        case 'div':div=a/b
            res=("The Answer is " + div);
            break;
        default:
            res = "Sorry it not exist!";

    }

    c.innerHTML=res;
    console.log(typeof a);
    console.log(a);
    

}