const tbody = document.querySelector('tbody')
const currentUser = localStorage.getItem('currentUser')
const users = JSON.parse(localStorage.getItem('users'))
const addBtn = document.querySelector('#addBtn')
const table = document.querySelector('table')

let myComputers = users.find((user) => user.name === currentUser).computers
let change = false

function updateTable(){
    tbody.innerHTML = ''

    for(let computer of myComputers){
        tbody.innerHTML += `<tr>
                            <td>${computer.id}</td>
                            <td>${computer.mark}</td>
                            <td>
                                <img src="${computer.img}" alt="">
                         </td>
                            <td>
                                <button id='${computer.id}d' class="btn btn-danger">Delete</button>
                                <button class="btn btn-primary">Change</button>
                            </td>
                        </tr>`
    }
}

updateTable();

const allInputs = document.querySelectorAll('input')
                    
function addComputer(){
    if(!change){
        const newComputer = {
            id: myComputers.length === 0 ? 1 : myComputers.at(-1).id +1,
            mark: allInputs[0].value,
            ram: allInputs[1].value,
            gpu: allInputs[2].value,
            img: allInputs[3].value,
            cpu: allInputs[4].value,
            rom: allInputs[5].value,
            os: allInputs[6].value,
            new: allInputs[7].value,
        }

        myComputers.push(newComputer)
        for(let input of allInputs){
            input.value = ''
        }
        for(let user of users){
            if(user.name === currentUser){
                user.computers = myComputers
            }
        }
        localStorage.setItem('users', JSON.stringify(users))
        updateTable()
    }
}

function deleteComputer(id){
    myComputers = myComputers.filter((comp) => comp.id !== id)

    for(let user of users){
        if(user.name === currentUser){
            user.computers = myComputers
        }
    }
    localStorage.setItem('users', JSON.stringify(users))
    updateTable()
}

table.addEventListener('click', (e) => {
    if(e.target.innerHTML === 'Delete'){
        deleteComputer(parseInt(e.target.id));
    } else if (e.target.innerHTML === 'Change'){
        console.log('change')
    }
}) 

addBtn.addEventListener('click', addComputer)