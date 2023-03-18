
function contar(){

  var start = document.getElementById("txti")
  var end = document.getElementById("txtf")
  var skip = document.getElementById("txtp")
  var res = document.getElementById("res")

  // Verificar se os valores são válidos
  if (start.value.length ==0 || end.value.length ==0 || skip.value.length ==0){
    res.innerHTML ='Impossivel contar'
    //alert("Por favor, insira valores válidos!")

  } else{
    res.innerHTML = `Contando: <br>`
    let i=Number(start.value)
    let e=Number(end.value)
    let s=Number(skip.value)
    if(s <=0){
      alert("Por favor, verifique as informações, considerando 1")
      s =1
    }
    if (i < e){
       for(let c = i; c <= e; c += s){
        res.innerHTML += ` ${c} \u{1F449}`
    }
  } else{ 
    for(let c = i; c >=e; c -= s){
      res.innerHTML += ` ${c} \u{1F449}`
    }

  }
  res.innerHTML += `\u{1f3c1}`
}

}