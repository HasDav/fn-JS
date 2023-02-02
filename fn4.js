//1Երկու  մառաններում 1183 շիշ գինի կա,առաջինում երկրորդինից 183-ով ավեի է; Քանի 
//շիշ գինի կա երկրորդում;

function resulve1(s,t,) {
    let gumar=s;
    let avel=t;
    let erkrordMaran=(s-t)/2
    
    return (s-t)/2
}
console.log(resulve1(1183,183));

//  2 Պապս ինձնից  65 տարով մեծ է ,իսկ հորիցս՝ 26 տարով Քանի տարեկան էր հայրս երբ ես ծնվեցի;//
function resulve2(x,y) {
    
    let pap=x;
    let hayr=y;
    let es=x-y;
    return x-y;
}
console.log(resulve2(65,26));


//3 Աշոտը ստացավ 66000դր աշխատավարձ,Բաբկենը 120000,իսկ Գուրգենի աշխատավարձը
//  կազմում է Աշոտի և Բաբկենի աշխատավարձի գումարի կրկնապատիկը; Որքան է Գուրգենի աշխատավարձը;

function resulve3(k,z,) {
    let ashot=k;
    let babken=z;
    let gurgen=2*(k+z);
     return 2*(k+z)

}
console.log(resulve3(66000,120000));

//  5 Խանութ  բերեցին որոշ քանակությամբ նարինջ,հաջորդ օրը՝ 3անգամ շատ որը 80կգ ավել էր քան առաջին օրը
//որքան նարինջ բերեցին առաջին օրը;
function resulve4(u,a,) {
let avelQanak=u;
let angamShat=a;
let qanak=u/(a-1);
return u/(a-1)

}
console.log (resulve4 (80,3));

// Հաշվել 1-10 թվերի արտադրյալը//

function factorial(num) {
    if (num<=1) {
        return 1
        
    }
    return num*factorial(num-1);

}
  console.log(factorial(10));

  // Հաշվել Ֆիբոնաչիի հաջորդականությունը ռեկուրսիայի միջոցով//


function fibonacci(n) {
    if (n <2) {
        return n
    }
        return fibonacci(n-1)+fibonacci(n-2);
    
}
   console.log(fibonacci(10));