// All ID is here
const smallButton = document.getElementById('sm-memory');
const largeMemory = document.getElementById('lg-memory');

const smallStorage = document.getElementById('sm-storage');
const mediumStrage = document.getElementById('md-storage');
const largeStorage = document.getElementById('lg-storage');

const lateDalavery = document.getElementById('late-delevery');
const urlyDelevery = document.getElementById('urly-delevery');

const normalPrice = document.getElementById('normal-price');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalCost = document.getElementById('total-cost');
const bouturePrice = document.getElementById('bouture-total');
const inputBoutureCode = document.getElementById('input_bouture')

// Event Handler For Memory 
function getMemoryPrice() {
    const totalMemoryCost = parseInt(normalPrice.innerText) + parseInt(memoryCost.innerText);
    totalCost.innerText = totalMemoryCost;
    return totalMemoryCost;

}
smallButton.addEventListener('click', function () {
    memoryCost.innerText = 0;
    getMemoryPrice()
    updateTotalPrice()
})
largeMemory.addEventListener('click', function () {
    memoryCost.innerText = 180;
    getMemoryPrice()
    updateTotalPrice()
})

// Event Handler For Storage 
function getStoragePrice() {
    const totalStorageCost = parseInt(normalPrice.innerText) + parseInt(storageCost.innerText);
    totalCost.innerText = totalStorageCost;
    return totalStorageCost;

}

smallStorage.addEventListener('click', function () {
    storageCost.innerText = 0;
    getStoragePrice()
    updateTotalPrice()
})
mediumStrage.addEventListener('click', function () {
    storageCost.innerText = 100;
    getStoragePrice()
    updateTotalPrice()
})
largeStorage.addEventListener('click', function () {
    storageCost.innerText = 180;
    getStoragePrice()
    updateTotalPrice()
})

// Event Handler For Delivery Option
function getDeliveryPrice() {
    const totalDeliveryCost = parseInt(normalPrice.innerText) + parseInt(deliveryCost.innerText);
    totalCost.innerText = totalDeliveryCost;
    return totalDeliveryCost;

}

lateDalavery.addEventListener('click', function () {
    deliveryCost.innerText = 0;
    getDeliveryPrice()
    updateTotalPrice()
})
urlyDelevery.addEventListener('click', function () {
    deliveryCost.innerText = 20;
    // getDeliveryPrice()
    updateTotalPrice()
})

// TOtal price
function updateTotalPrice() {
    const bestPrice = parseInt(normalPrice.innerText);
    const memoryPrice = parseInt(memoryCost.innerText);
    const storagePrice = parseInt(storageCost.innerText);
    const deliveryPrice = parseInt(deliveryCost.innerText);
    const boutureAmount = parseInt(bouturePrice.innerText);
    const totalprice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    totalCost.innerText = totalprice;
    bouturePrice.innerText = totalprice;
    return totalprice;
}

document.getElementById('buture-apply').addEventListener('click', function () {
    if (inputBoutureCode.value == 'stevekaku') {
        function percentage(num, per) {
            return (num / 100) * per;
        }
        bouturePrice.innerText = percentage(parseInt(bouturePrice.innerText), 80);
    }
    inputBoutureCode.value = '';
})