function loadPhone(searchText){
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
}

function displayPhone(data){
    const phoneContainer = document.getElementById('phone-container')
    //clear data
    phoneContainer.textContent ='';

    const showContainer =document.getElementById('show-all-container')
    //display show all button if result>12
    if(data.length>12){
        showContainer.classList.remove('hidden');
    }
    else{
        showContainer.classList.add('hidden');
    }

    //display limited phones
    data = data.slice(0,12);

    for(phone of data){
        console.log(phone);
        const divPhone = document.createElement('div')
        divPhone.classList = `card p-4 bg-gray-100 shadow-xl`;
        divPhone.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>"slug${phone.slug}"</p>
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(divPhone);
    }
}

//Handle Search
function searchHandle(){
    const searchInput = document.getElementById('search-feild');
    const searchText = searchInput.value;
    loadPhone(searchText);
}

