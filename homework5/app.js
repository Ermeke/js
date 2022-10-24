var arr =[]
var inp = document.querySelector('input')
var btn = document.querySelector('button')

btn.addEventListener('click',()=>{
   if(inp.value.trim()!==''){
    arr.push(inp.value)
    console.log(arr)
    var h1 = document.createElement('h1')
    h1.style.background = 'red'
    h1.style.color = 'blue'
    h1.style.fontSize = '25px'
    h1.innerHTML=inp.value
    document.body.insertBefore(h1,inp)
   }
    inp.value=''
})