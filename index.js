const inp = document.querySelector("#inp")
const wrk = document.querySelector("#wrk")
const total = document.querySelector("#total")
const complete = document.querySelector("#complete")
// CODE FOR ADD NEW ITEM WHEN CLICK ON ADD OR PRESS ENTER 
inp.addEventListener("keypress", (e)=> {
    e.preventDefault;
    if (e.key === "Enter" && inp.value.trim()!="") {
        const newElem = document.createElement("div")
        newElem.classList.add("item");
        newElem.style= `width: 50rem;`
        newElem.innerHTML =`<input type="checkbox" name="name" class="check"> <li>${inp.value}</li> <button class="dlt">Delete</button>`;
        wrk.appendChild(newElem);
        inp.value= "";
        total.innerHTML = parseInt(total.innerHTML) +1;
    }
});
document.querySelector("#btn").addEventListener("click",(e) =>{
    e.preventDefault;
    if(inp.value.trim()!=""){
        const newElem = document.createElement("div")
        newElem.classList.add("item");
        newElem.innerHTML =`<input type="checkbox" name="name" class="check"> <li>${inp.value}</li> <button class="dlt">Delete</button>`;
        wrk.appendChild(newElem);
        inp.value= "";
        total.innerHTML = parseInt(total.innerHTML) +1;
    }
})
// DELETE AND UPDATE CODE 
wrk.addEventListener("click", (e) => {
    if (e.target.classList.contains("dlt")) {
        e.target.parentElement.remove();
        total.innerHTML = parseInt(total.innerHTML) -1;
        if(parseInt(complete.innerHTML)>0){
            complete.innerHTML = parseInt(complete.innerHTML) - 1;
        }
    }
});
//CODE FOR CHECKBOX
wrk.addEventListener("click", (e) => {
    if (e.target.classList.contains("check")&& parseInt(complete.innerHTML)<parseInt(total.innerHTML)) {
        complete.innerHTML = parseInt(complete.innerHTML) + 1;
        
    }
});