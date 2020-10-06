var numeros = new Array

for (let i = 0; i < 1000; i++){
    numeros[i] = 1
}

for(let i = 1; i < 1000; i++){
    let num = i + 1
    if (numeros[i] === 1){
        for (let c = i + 1; c < 1000; c++){
            if ( (c + 1) % num === 0){
                numeros[c] = 0
            }
        }
    }
} 

for (let i = 0; i < 1000; i++){
    if(numeros[i] === 1){
        console.log(i + 1)
    }
}