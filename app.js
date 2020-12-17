const button = document.getElementById('Roll');
const sum = document.getElementById('sum');
let sumtotal = 0;


button.addEventListener('click',()=>{
    let randomnum = Math.floor(Math.random() * 6) + 1;
    if (sumtotal < 40 ){
        if (randomnum == "1") {
            document.querySelector("img").setAttribute("src","./assets/dice" + randomnum + ".svg") ;
            sum.innerHTML = 'You lost';
            sumtotal = 0;
            return sumtotal;
        }
        else if (randomnum == "2") {
            document.querySelector("img").setAttribute("src","./assets/dice" + randomnum + ".svg") ;
            sumtotal = 2 + sumtotal;
            sum.innerHTML = sumtotal;
            return sumtotal;
        }
        else if (randomnum == "3") {
            document.querySelector("img").setAttribute("src","./assets/dice" + randomnum + ".svg") ;
            sumtotal = 3 + sumtotal;
            sum.innerHTML = sumtotal;
            return sumtotal;
        }
        else if (randomnum == "4") {
            document.querySelector("img").setAttribute("src","./assets/dice" + randomnum + ".svg") ;
            sumtotal = 4 + sumtotal;
            sum.innerHTML = sumtotal;
            return sumtotal;
        
        }
        else if (randomnum == "5") {
            document.querySelector("img").setAttribute("src","./assets/dice" + randomnum + ".svg") ;
            sumtotal = 5 + sumtotal;
            sum.innerHTML = sumtotal;
            return sumtotal;
        }
        else   {
            document.querySelector("img").setAttribute("src","./assets/dice" + randomnum + ".svg") ;
            sumtotal = 6 + sumtotal;
            sum.innerHTML = sumtotal;
            return sumtotal;
        }
    }
    else {
        sum.innerHTML = "You won"
        sumtotal = 0 ;
        return sumtotal;
    }
    

})  