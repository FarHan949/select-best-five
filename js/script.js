// console.log(document.getElementById('btn-fade'))
function setUlLi (elementId, elementBtn){
    const ElementById = document.getElementById(elementId)
    const ulText = ElementById.innerText

    let li = document.createElement('li')
    li.setAttribute("class", "fs-2 sans-serif")
    li.innerText = ulText
    document.querySelector('#ul').append(li)
    const btn =  document.getElementById(elementBtn)
    btn.setAttribute("disabled",true)
}
document.getElementById('btn-fade').addEventListener('click',function(){
    setUlLi('fade','btn-fade')
})

document.getElementById('btn-jett').addEventListener('click',function(){
    setUlLi('jett', 'btn-jett')
})
document.getElementById('btn-kj').addEventListener('click',function(){
    setUlLi('kj','btn-kj')
})
document.getElementById('btn-gekko').addEventListener('click',function(){
    setUlLi('gekko','btn-gekko')
})
document.getElementById('btn-phinex').addEventListener('click',function(){
    setUlLi('phinex','btn-phinex')
})
document.getElementById('btn-rayna').addEventListener('click',function(){
    setUlLi('rayna','btn-rayna')
})