const users = [
    {
        name: "u1",
        password: "p1",
        phone: "000-000-0000",
        computers: [
            {
                id: 1,
                mark: 'Acer',
                img: 'https://www.compex.com.ph/cdn/shop/products/Acer-Aspire-3_A315-23-23G_Non-FP_Black_gallery_01_300x300.png?v=1652855823',
                cpu: 'intel core i7',
                gpu: 'gtx 1650'
            }
        ]
    }
]

if(!localStorage.getItem('users')){
    localStorage.setItem('users', JSON.stringify(users))
}

const allInputs = document.querySelectorAll('input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    const localUsers = JSON.parse(localStorage.getItem('users'))

    e.preventDefault()
    let userAveiable = localUsers.some(user => user.name == allInputs[0].value && user.password == allInputs[2].value)

    if(userAveiable){
        location.href= '../main/main.html'
        localStorage.setItem('currentUser', allInputs[0].value)
    } else{
        alert('такого пользователя нет')
    }
}) 