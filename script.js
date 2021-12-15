let num = document.getElementById("txtn")
let lista = document.getElementById("txtop")
let res = document.getElementById("res")
let valores = []

function isNumero (n)
    {
    if (Number(n) >=1 && (Number(n)<=100)){
        return true
        } else
        {
        return false
        }
    }

function inLista (n,l) //função com parametros
    {
    if(l.indexOf(Number(n)) != -1){
        return true
        }else 
        {
        return false
        }
    }

function adicionar()
{
    if (isNumero(num.value) && !inLista(num.value, valores))
    {
        valores.push(Number(num.value)) 
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        num.value = ''
        num.focus()         //onde esta clicado, irá apagar 
    } else if (num.value == 0)
    {
        window.alert ('Por favor, digite um número!')
    } else  if (inLista(num.value, valores))
    {
        window.alert ('Valor já encontrado na lista, por favor digite outro número!')
    } else {
        window.alert('Digite um número entre 1 e 100!')
    }
}

function finalizar(){        
    if (valores.length == 0){
        alert ('Adicione números antes de finalizar!')
    } else {      
        let somavet = 0    
        let mediavet = 0    
        for (let pos in valores){ 
            somavet += valores[pos]
        }
        mediavet = (somavet / valores.length)
        res.innerHTML = ''
        valores.sort()
        res.innerHTML += `Ao todo, temos ${valores.length} números cadastrados. <br>
        O maior valor informado foi ${(valores[valores.length-1])}. <br>
        O menor valor informado foi ${valores[0]}. <br>
        Somando todos os valores, temos ${somavet}. <br>
        A média dos valores informados foi ${mediavet}.`
       
        }
    }