let passwordForm = document.getElementById("passwordForm");

passwordForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    let website = document.getElementById('website').value
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    let container = document.getElementById('box')

    let formElem = document.createElement('div')
    formElem.classList.add('content')

    let sp1 = document.createElement('span')
    sp1.innerText = website
    formElem.appendChild(sp1)

    let sp2 = document.createElement('span')
    sp2.innerText = username
    formElem.appendChild(sp2)

    let sp3 = document.createElement('span')
    sp3.innerText = password
    formElem.appendChild(sp3)

    let sp4 = document.createElement('span')
    sp4.innerText = 'Delete'
    formElem.appendChild(sp4)

    container.appendChild(formElem)

    passwordForm.reset();

       
    

})



// const messageElement = document.createElement('div');
//     messageElement.innerText = message;
//     messageElement.classList.add('message');
//     messageElement.classList.add(position);
//     messageContainer.append(messageElement);