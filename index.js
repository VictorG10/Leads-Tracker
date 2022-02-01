let myLeads = [];
const inputEL = document.getElementById("input-el"); 
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn =document.getElementById("delete-btn")
const tabsBtn = document.getElementById("tabs-btn");

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

console.log(leadsFromLocalStorage);


function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li><a target ='_blank' href='" + myLeads[i] +"'>" + myLeads[i] + "</a></li>";
         listItems += `
         <li>
         <a target ='_blank' href='${myLeads[i]}'>
         ${myLeads[i]}
         </a>
         </li>`;
        //const li = document.createElement("li");
       //li.textContent = myLeads[i]
       //ulEl.append(li);
    }
    
    ulEl.innerHTML = listItems
}

tabsBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
       console.log(tabs);

       myLeads.push(save[0].url);
       localStorage.setItem("myLeads", JSON.stringify(myLeads));
       renderLeads();
       //console.log( localStorage.getItem("myLeads") );
       //console.log(save[0].url);

  });

})
inputBtn.addEventListener("click", function (){
    myLeads.push(inputEL.value);
    inputEL.value ="";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
    console.log( localStorage.getItem("myLeads") );
})

deleteBtn.addEventListener("dblclick", function (){
    console.log("double clicked!");
    localStorage.clear();
    myLeads = [];
    renderLeads();
    console.log( localStorage.getItem("myLeads") );
})



