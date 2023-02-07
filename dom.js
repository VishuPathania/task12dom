function savetoLocalStorage(event){
    event.preventDefault();
    const name= event.target.username.value;
    const phone= event.target.contact.value;
    const email= event.target.email.value;
    
    const obj= {
        name:name ,
        phone:phone ,
        email:email
    }

    //store in local storage with key as email
    localStorage.setItem(obj.email, JSON.stringify(obj))

    showuseronScreen(obj) 
}

function showuseronScreen(obj) {
    const parentElem = document.getElementById('listofitems') //create li tag also for new details
    const childElem = document.createElement('li')
    childElem.textContent= obj.name+ ' - ' + obj.phone + ' - ' + obj.email 
    parentElem.appendChild(childElem)
    
}