
let arr =JSON.parse(localStorage.getItem("tabsMem"))||[]
const inEl = document.getElementById("in")
const but = document.getElementById("in-but")
const unorder = document.getElementById("uorder")
const clear = document.getElementById("clear")
const tab = document.getElementById("tab")

function render() {
    unorder.innerHTML = ""; 
    for (let i = 0; i < arr.length; i++) {
        unorder.innerHTML += `
            <li>
                <a href="${arr[i]}" target="_blank">${arr[i]}</a>
            </li>`
    }
}
render();
but.addEventListener("click", function(){
    arr.push(inEl.value)
    localStorage.setItem("tabsMem",JSON.stringify(arr));
    inEl.value= ""
    render()
   
})
tab.addEventListener("click",function(){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if(tabs.length > 0){
        arr.push(tabs[0].url)
        localStorage.setItem("tabsMem",JSON.stringify(arr));
        inEl.value= ""
        render()}
      });
   
})

clear.addEventListener("click", function(){
    arr=[]
    unorder.textContent = "";
    localStorage.clear()
  
})

