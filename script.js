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

    for (name1 in names) {
        if (names.hasOwnProperty('name1')) {
            names['name1'].classList.add('mark-toggle');
            delete names['name1'];
        }
    }
    
    for (name2 in names) {
        if (names.hasOwnProperty('name2')) {
            names['name2'].classList.add('angela-toggle');
            delete names['name2'];
        }
    }

    for (name3 in names) {
        if (names.hasOwnProperty('name3')) {
            names['name3'].classList.add('jacob-toggle');
            delete names['name3'];
        }
    }


    notificationNumber.innerHTML = Object.keys(names).length

})
