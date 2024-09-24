//function to get input value
function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
};

//function to get text value
function getTextValueByID(id){
    return parseFloat(document.getElementById(id).innerText);
};


//function for error handaling
function error(id, amount){
    if(id <=0 || isNaN(id) || id > amount || id == ""){
        alert('Invalid Donation amount');
        return false;
    }
    return true;
}

//CARD -1 - NOAKHALI

const calculateNoakhali = document.getElementById('btn-donate-noakhali');

calculateNoakhali.addEventListener('click', function(){
    const donationNoakhali = getInputValueById('donation-noakhali');
    const totalDonationNoakhali = getTextValueByID('total-donation-noakhali');
    const amount = getTextValueByID('amount');

    // if(donationNoakhali<=0 || isNaN(donationNoakhali) || donationNoakhali > amount || donationNoakhali == ""){
    //     alert('Invalid Donation amount');
    //     return;
    // }
    // error(donationNoakhali); (wrong way, rectified below)
    if(error(donationNoakhali, amount)){

    GtotalDonationNoakhali = donationNoakhali + totalDonationNoakhali;
    FinalAmount = amount - donationNoakhali;

    const totalDonationNoakhaliEl = document.getElementById('total-donation-noakhali');
    totalDonationNoakhaliEl.innerText = GtotalDonationNoakhali;

    const amountEl = document.getElementById('amount');
    amountEl.innerText = FinalAmount;
    // History part 2 start

    const historyItem = document.createElement('div');
    historyItem.className = " bg-white p-3 rounded-md border-2 border-gray-300"
    historyItem.innerHTML = `
    <p text-xl font-bold text-black>${donationNoakhali} Taka is Donated for Flood relief in Noakhali, Bangladesh </p>
    
    <p text-xs text-gray-500>${new Date()} </p>
    `
    const historyContainer = document.getElementById('history-section');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);


// Modal show

document.getElementById('modal').classList.remove('hidden');
    }
    
    // History part 1 start

    // const p = document.createElement('p');
    // p.innerText = `${donationNoakhali} Taka is Donated for Flood relief in Noakhali, Bangladesh`;
    // console.log(p);
    // document.getElementById('history-section').appendChild(p);

    //date include
    // const d = new Date();
    // const h1 = document.createElement('h1');
    
    // h1.innerText = d;
    // document.getElementById('history-section').appendChild(h1);
       // History part 1 end


})

//CARD - 2 - FENI

const calculateFeni = document.getElementById('btn-donate-feni');

calculateFeni.addEventListener('click', function(){
    const donationFeni = getInputValueById('donation-feni');
    const totalDonationFeni = getTextValueByID('total-donation-feni');
    const amount = getTextValueByID('amount');

    if(donationFeni<=0 || isNaN(donationFeni) || donationFeni > amount || donationFeni == ""){
        alert('Invalid Donation amount');
        return;
    }

    GtotalDonationFeni = donationFeni + totalDonationFeni;
    FinalAmount = amount - donationFeni;
    console.log(GtotalDonationFeni);

    const totalDonationFeniEl = document.getElementById('total-donation-feni');
    totalDonationFeniEl.innerText = GtotalDonationFeni;

    const amountEl = document.getElementById('amount');
    amountEl.innerText = FinalAmount;

          // History part 2 start

          const historyItem = document.createElement('div');
          historyItem.className = " bg-white p-3 rounded-md border-2 border-gray-300"
          historyItem.innerHTML = `
          <p text-xl font-bold text-black>${donationFeni} Taka is Donated for Flood Relief in Feni,Bangladesh </p>
          
          <p text-xs text-gray-500>${new Date()} </p>
          `
          const historyContainer = document.getElementById('history-section');
          historyContainer.insertBefore(historyItem, historyContainer.firstChild);


    // Modal show
    // let modalEl = document.getElementById('modal');
    document.getElementById('modal').classList.remove('hidden');

})

//CARD - 3 - quota

const calculatequota = document.getElementById('btn-donate-quota');

calculatequota.addEventListener('click', function(){
    const donationquota = getInputValueById('donation-quota');
    const totalDonationquota = getTextValueByID('total-donation-quota');
    const amount = getTextValueByID('amount');

    if(donationquota<=0 || isNaN(donationquota) || donationquota > amount || donationquota == ""){
        alert('Invalid Donation amount');
        return;
    }

    GtotalDonationquota = donationquota + totalDonationquota;
    FinalAmount = amount - donationquota;
    console.log(GtotalDonationquota);

    const totalDonationquotaEl = document.getElementById('total-donation-quota');
    totalDonationquotaEl.innerText = GtotalDonationquota;

    const amountEl = document.getElementById('amount');
    amountEl.innerText = FinalAmount;

          // History part 2 start

          const historyItem = document.createElement('div');
          historyItem.className = " bg-white p-3 rounded-md border-2 border-gray-300"
          historyItem.innerHTML = `
          <p text-xl font-bold text-black>${donationquota} Taka is Donated for Aid for Injured in the Quota Movement,Bangladesh </p>
          
          <p text-xs text-gray-500>${new Date()} </p>
          `
          const historyContainer = document.getElementById('history-section');
          historyContainer.insertBefore(historyItem, historyContainer.firstChild);


    // Modal show
    // let modalEl = document.getElementById('modal');
    document.getElementById('modal').classList.remove('hidden');

})
// history tab

const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');

historyTab.addEventListener('click', function(){
    historyTab.classList.add(
        // 'text-black',
        'bg-green-400'
    );

    donationTab.classList.remove(
        'bg-green-400'
    );

    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
})

donationTab.addEventListener('click', function(){
    historyTab.classList.remove(
        'bg-green-400'
    );

    donationTab.classList.add(
        'bg-green-400'
    );

    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
})

// function to close modal- popup
const btnCloseModal = document.getElementById('btn-close-modal')
btnCloseModal.addEventListener('click', function(){
    document.getElementById('modal').classList.add('hidden');
    // console.log('button modal clicked');
})
