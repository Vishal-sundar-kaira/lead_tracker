
// let inputBtn=document.getElementById("input-btn")
// inputBtn.addEventListener("click",function(){
//     console.log("Button clicked by event listener")
// })
//in add eventlistener write inside first("what you need to perform eg.click",write function()then write what is function in curly brackets{fucntion performance})
// let boxup=document.getElementById("box")
// boxup.addEventListener("click",function(){
//     console.log("yepeee!you won 10rs")
// })ss
let myleads=[]
const inputEl=document.getElementById("input-el")
console.log(inputEl)
//difference between let and const is that we cant assign same variable again or make change in const.we cant do const=const+something.we use const to make reader of code aware that we will not change this variable.
// localStorage.setItem("vishal","www.vishal.com")
// console.log(localStorage.getItem("vishal"))
// localStorage.clear()
const ulEl=document.getElementById("ul-el")
console.log(ulEl)
let inputBtn=document.getElementById("input-btn")
const leadsfromlocalstorage=JSON.parse(localStorage.getItem("myleads"))
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url=tabs[0].url
        myleads.push(url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        renderleads(myleads)
        // use `url` here inside the callback because it's asynchronous!
    })
    
})
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myleads=[]
    renderleads(myleads)
})
if(leadsfromlocalstorage){
    myleads=leadsfromlocalstorage
    renderleads(myleads)
}
function renderleads(leads){
    let listitems=""
for(let i=0;i<leads.length;i++){
    // listitems+="<li><a target='_blank' href='"+myleads[i]+"'>"+myleads[i]+"</a></li>" //inner html use to apply html elements with javascript.

    //other way to get html element in javascript instead of using innerhtml
    // const li=document.createElement("li") //create element
    // li.textContent=myleads[i]  //write its content
    // ulEl.append(li)//append or link with id
    //inner.html is prefered.
    listitems+=`        
    <li>
    <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
    </li>`
    
}
//(template string):this was the new way to write complicated string of html in javascript just make them string using'`'and then use ${javascript var}(printf of python)
ulEl.innerHTML=listitems

}

inputBtn.addEventListener("click",function(){
    myleads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    renderleads(myleads)
    
})



// const buyEl=document.getElementById("buy")   //way to use innerhtml
// buyEl.innerHTML="<button onclick='buy()'>BUY!</button>"
// function buy(){
//     buyEl.innerHTML+="<p>Thank you for buying</p>"
// }
//other way to get html element in javascript instead of using innerhtml
// const recipient="james"
// const email=`hey ${recipient}!
//  How its going? 
//  cheers per`              you can put in new line also in template string
// console.log(email)

//using parameters on function
// function getfirst(arr){
//      console.log(arr[1])
// }
// let arrayy=["vishal","kaira"]
// getfirst(arrayy)


