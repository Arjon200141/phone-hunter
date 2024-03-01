function phone(){
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res => res.json())
    .then(data => displayPhone(data.data))
}

function displayPhone(data){
    const phoneContainer = document.getElementById('phone-container')
    for(phone of data){
        console.log(phone);
        const divPhone = document.createElement('div')
        divPhone.classList = `card p-4 bg-gray-100 shadow-xl`;
        divPhone.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(divPhone);
    }
}
phone();