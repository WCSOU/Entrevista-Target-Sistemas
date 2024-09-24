function inverter(stg) {
    ret = ''

    for(i = stg.length -1; i>=0;i--)
    {
        ret += stg[i]
    }
    return ret
}


console.log(inverter("Target"))