const allInputs = document.querySelectorAll('input')
const btn = document.querySelector('.btn')

const users = JSON.parse(localStorage.getItem('users'))

btn.addEventListener('click', (e) => {
    if(allInputs[1].checkValidity()){
        e.preventDefault();
        let newUser = {
            name: allInputs[0].value,
            phone: allInputs[1].value,
            password: allInputs[2].value,
            computers: []
        };

        let userAveiable = users.some(user => user.name === allInputs[0].value)

        if(!userAveiable){
            users.push(newUser);

            localStorage.setItem('users', JSON.stringify(users))
    
            location.href = '../login/login.html'
        } else {
            alert('This user already registered!')
        }
    } else {
        alert('Phone number is wrong')
    }
}); 