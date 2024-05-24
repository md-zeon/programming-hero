const getStoredDonations = ()=> {
    const storedDonation = localStorage.getItem('donations');
    if(storedDonation) {
        return JSON.parse(storedDonation);
    }
    return [];
}

const saveDonationData = (id) => {
    const storedDonations = getStoredDonations();
    const exist = storedDonations.find(donationId => donationId === id);
    if(!exist) {
        storedDonations.push(id);
        localStorage.setItem('donations', JSON.stringify(storedDonations));
    } 
}

export {getStoredDonations, saveDonationData}