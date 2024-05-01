const loadPhones = async (searchText = "iphone", isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    console.log(phones);
    displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {
    const phonesContainer = document.getElementById("phone-container");
    phonesContainer.textContent = '';
    const showAllContainer = document.getElementById("show-all-container");
    if(phones.length > 12 && !isShowAll) {
      showAllContainer.classList.remove("hidden");
    } else {
      showAllContainer.classList.add("hidden");
    }

    if(!isShowAll) {
      phones = phones.slice(0, 12);
    }

    if(phones.length === 0) {
      document.getElementById("not-found").innerText = "No phones found";
    } else {
      document.getElementById("not-found").innerText = "";
    }

    phones.forEach(phone => {
        const phoneCard = document.createElement("div");
        phoneCard.classList.add = `card w-96 bg-base-100 border-2 border-[#CFCFCF] p-4`;
        phoneCard.innerHTML = `
        <figure class="">
          <img src="${phone.image}" alt="${phone.phone_name}" class="rounded-xl mx-auto" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>There are many variations of passages of available, but the majority have suffered</p>
          <h3 class="text-2xl font-bold">$999</h3>
          <div class="card-actions">
            <button onclick = "handleShowDetails('${phone.slug}'); show_details_modal.showModal()" class="btn btn-primary">Show Details</button>
          </div>
        </div>
        `;
        phonesContainer.appendChild(phoneCard);
    });

    toggleLoadingSpinner(false);

}

const searchHandler = (isShowAll) => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhones(searchText, isShowAll);
}

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if(isLoading) {
    loadingSpinner.classList.remove("invisible");
  } else {
    loadingSpinner.classList.add("invisible");
  }
}

const handleShowDetails = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  const phone = data.data;
  showPhoneDetails(phone);
}

const showPhoneDetails = (phone) => {
  show_details_modal.showModal();
  console.log(phone);
  const showModalsContainer = document.getElementById("show-modals-container");
  showModalsContainer.innerHTML = `
    <img src="${phone.image}" alt="" class = "mx-auto" />
    <h2 class="font-bold text-3xl">${phone.name}</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    <p><span class = "font-bold">Storage: </span>${phone?.mainFeatures?.storage}</p>
    <p><span class = "font-bold">Display Size: </span>${phone.mainFeatures?.displaySize}</p>
    <p><span class = "font-bold">Chipset: </span>${phone.mainFeatures?.chipSet}</p>
    <p><span class = "font-bold">Memory: </span>${phone.mainFeatures?.memory || 'Data Unavailable'}</p>
    <p><span class = "font-bold">Slug: </span>${phone.slug}</p>
    <p><span class = "font-bold">Release Data: </span>${phone.releaseDate ? phone.releaseDate : "Unavailable"}</p>
    <p><span class = "font-bold">Brand: </span>${phone.brand}</p>
    <p><span class = "font-bold">GPS: </span>${phone.others?.GPS ? phone.others.GPS : 'No GPS available in this device'}</p>
  `
}

const handleShowAll = () => {
  searchHandler(true);
}


loadPhones();