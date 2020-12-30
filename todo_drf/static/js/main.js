// Selection
headingEl = document.getElementById("heading")
listEl = document.getElementById("list")

// Render list
const xhr = new XMLHttpRequest()
xhr.open('GET', "http://localhost:8000/api/task-list/")
xhr.onload = function(){
    xhr.status !== 200 && alert("Couldn't get data from "+xhr.url)
    renderList(JSON.parse(xhr.response))
}
xhr.send()

function renderList(data){
    !data && alert("Didn't receive data in renderList")
    listEl.innerHTML = ''
    data.map(item=>listEl.innerHTML+=_listItem(item))
}

function _listItem(item){
    console.log(item)
    return (
        `<div class='item mx-auto'>
        <span style="width:400px;display:inline-block;">${item.title} </span><input type='checkbox' ${item.completed?"checked":""}/>
        </div>
        `
    )
}