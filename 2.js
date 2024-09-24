function fibonacci(n)
{
    if(n<0)
        return `${n} não está na sequência de Fibonacci`
    
    let a=0,b=1;
    while (a<n) {
        [a,b] =[b,a+b]
    }
    if(a != n)
        return `${n} não está na sequência de Fibonacci`
    return `${n} está na sequência de Fibonacci`

}




console.log(fibonacci(7))