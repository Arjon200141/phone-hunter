function loadPhone(searchText , isShowAll){
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then(res => res.json())
    .then(data => displayPhone(data.data ,isShowAll))
}

function displayPhone(data ,isShowAll){
    const phoneContainer = document.getElementById('phone-container')
    //clear data
    phoneContainer.textContent ='';

    const showContainer =document.getElementById('show-all-container')

    

    //display show all button if result>12
    if(data.length>12 && !isShowAll){
        showContainer.classList.remove('hidden');
    }
    else{
        showContainer.classList.add('hidden');
    }

    console.log('Is ShowAll' , isShowAll);

    //display limited phones
    if(!isShowAll){
        data = data.slice(0,12);
    }

    for(phone of data){
        console.log(phone);
        const divPhone = document.createElement('div')
        divPhone.classList = `card p-4 bg-gray-100 shadow-xl`;
        divPhone.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="text-4xl font-semibold text-center">${phone.phone_name}</h2>
            <p class='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsam adipisci saepe perspiciatis praesentium at culpa fuga nihil deleniti id</p>
            <p class='text-4xl font-bold text-center' >$999</p>
            <button onclick="showDetails('${phone.slug}')" class="btn btn-primary text-center">Show Details</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(divPhone);
    }
    //Remove Loader
    loader(false)
}


//Show Details
function showDetails(id){
    // console.log("Clicked Show Details" , id)
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then(res => res.json())
    .then(data => showModals(data.data))
    
}

//Show Phone Details
function showModals(phone){
    console.log(phone)
    modal_details_show.showModal()
    const phoneDetailsContainer = document.getElementById('show-details-container')
    phoneDetailsContainer.innerHTML = `
    <figure class='flex justify-center'><img src="${phone.image}" alt="Shoes" /></figure>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    <h2 class="text-5xl font-semibold text-center my-2">${phone.name}</h2>
    <p><span class="text-lg font-semibold text-center">Storage : </span>${phone.mainFeatures.storage}</p>
    <p><span class="text-lg font-semibold text-center">Display Size : </span>${phone.mainFeatures.displaySize}</p>
    <p><span class="text-lg font-semibold text-center">ChipSet : </span>${phone.mainFeatures.chipSet}</p>
    <p><span class="text-lg font-semibold text-center">Memory : </span>${phone.mainFeatures.memory}</p>
    <p><span class="text-lg font-semibold text-center">Slug : </span>${phone.slug}</p>
    <p><span class="text-lg font-semibold text-center">Release Date : </span>${phone.releaseDate}</p>
    <p><span class="text-lg font-semibold text-center">Brand : </span>${phone.brand}</p>
    <p><span class="text-lg font-semibold text-center">Sensors : </span>${phone.mainFeatures.sensors}</p>

    <p><span class="text-lg font-semibold text-center">Bluetooth : </span>${phone.others.Bluetooth}</p>
    <p><span class="text-lg font-semibold text-center">GPS : </span>${phone.others.GPS}</p>
    <p><span class="text-lg font-semibold text-center">NFC : </span>${phone.others.NFC}</p>
    <p><span class="text-lg font-semibold text-center">Radio : </span>${phone.others.Radio}</p>
    <p><span class="text-lg font-semibold text-center">USB : </span>${phone.others.USB}</p>
    <p><span class="text-lg font-semibold text-center">WLAN : </span>${phone.others.WLAN}</p>
    `
}

//Handle Search
function searchHandle(isShowAll){
    loader(true);
    const searchInput = document.getElementById('search-feild');
    const searchText = searchInput.value;
    loadPhone(searchText , isShowAll);
}

//Loader
function loader(isLoading){
    const toggleLoader = document.getElementById('spin-loader');
    if(isLoading){
        toggleLoader.classList.remove('hidden');
    }
    else{
        toggleLoader.classList.add('hidden');
    }
}

//isShowAll
function ShowAll(){
    searchHandle(true)
}

