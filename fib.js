const fib = n => {
    const numbers = [0,1];
    let i=2;
    while(i<=n){
        numbers.push(
            numbers[i-2]+numbers[i-1]
        );
        i++;
    }
    return numbers[n];
}