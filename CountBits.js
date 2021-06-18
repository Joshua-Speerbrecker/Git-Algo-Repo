var countBits = function(n) {
    let temp = 1
    let bitArr = []
    while(temp <= n){
        bitArr.push(temp)
        temp*=2
    }
    let count = 0
    for(let i = bitArr.length-1; i >=0 ; i--) {
        if(n - bitArr[i] >= 0 ){
            n-=bitArr[i]
            count++
        }
    }
    return count;
}
console.log(countBits(45));