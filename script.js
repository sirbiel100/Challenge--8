const allRead = document.querySelector('#allread');
const mark = document.querySelector('.mark');
const angela = document.querySelector('.angela');
const jacob = document.querySelector('.jacob');
const notificationNumber = document.querySelector('#notifications-number');


let names = {
    name1: mark ,
    name2: angela ,
    name3: jacob ,
}

//-----------<>----------//




mark.addEventListener('click', () =>{   

    names.name1.classList.add("mark-toggle");
    delete names.name1;

    notificationNumber.innerHTML = Object.keys(names).length

})

angela.addEventListener('click', () =>{

    names.name2.classList.add("angela-toggle");
    delete names.name2;

    notificationNumber.innerHTML = Object.keys(names).length
        
})

jacob.addEventListener('click', () =>{

    names.name3.classList.add("jacob-toggle");
    delete names.name3;

    notificationNumber.innerHTML = Object.keys(names).length
        
})


allRead.addEventListener('click', () =>{
        
    names.name1.classList.add("mark-toggle");
    names.name2.classList.add("angela-toggle");
    names.name3.classList.add("jacob-toggle");
    delete names.name1;
    delete names.name2;
    delete names.name3;

    notificationNumber.innerHTML = Object.keys(names).length

})

/*function allReadClickHandler() {
    for (let propName in names) {
        if (names.hasOwnProperty(propName)) {
            names[propName].classList.add(`${propName}-toggle`);
            delete names[propName];
        }
    }
    notificationNumber.innerHTML = Object.keys(names).length;
}


allRead.addEventListener('click', allReadClickHandler) */