
let inputValue = () => {
    let currentValue = document.querySelector('.form-control').value;
    if(currentValue !== '') {
       return Number(currentValue);
    } else if(currentValue === '') {
       return currentValue = 0;
    }
}

//const inputValue = () => document.querySelector('.inputData').value;
const clearInput = () => {
    document.querySelector('.form-control').value = '';
    document.querySelector('.ans').innerHTML = '';
}

let AnsArr = [0];

const plusAns = () => {
    const dataPlus = inputValue();
    let plusTotal = 0;
    AnsArr.push(dataPlus);
    for(let el of AnsArr) {
        plusTotal += el;
    }
    AnsArr = [];
    AnsArr.push(plusTotal);
    clearInput();
    console.log(AnsArr); 
    document.querySelector('.ans').insertAdjacentHTML('afterbegin', AnsArr); 
}

const minusAns = () => {
    const dataMinus = inputValue();
    let minusTotal = 0;
    AnsArr.push(dataMinus);
    for(let el of AnsArr) {
        minusTotal = minusTotal + el - dataMinus;
    }
    AnsArr = [];
    AnsArr.push(minusTotal);
    clearInput();
    console.log(AnsArr);
    document.querySelector('.ans').insertAdjacentHTML('afterbegin', AnsArr);
}

const timesAns = () => {
    const dataTimes = inputValue();
    let timesTotal;
    AnsArr.push(dataTimes);
    if(AnsArr[0] === 0) {
        AnsArr[0] += 1;
        timesTotal = AnsArr[0] * AnsArr[1];
    } else {
        timesTotal = AnsArr[0] * AnsArr[1];
    }
    
    AnsArr = [];
    AnsArr.push(timesTotal);
    clearInput();
    console.log(AnsArr);
    document.querySelector('.ans').insertAdjacentHTML('afterbegin', AnsArr);
}

const percentageAns = () => {
    const dataPercentage = inputValue();
    let percentageTotal; 
    if(AnsArr[0] === 0) {
        percentageTotal = dataPercentage;
    } else {
        AnsArr.push(dataPercentage);
        percentageTotal = AnsArr[0] / AnsArr[1];
    }

    // if(AnsArr === [0]) {
    //     percentageTotal = dataPercentage;
    // } else {
    //     
    // }
    
    AnsArr = [];
    AnsArr.push(percentageTotal);
    clearInput();
    console.log(AnsArr);

    document.querySelector('.ans').insertAdjacentHTML('afterbegin', AnsArr);
}

document.querySelector('.plus').addEventListener('click', plusAns);
document.querySelector('.minus').addEventListener('click', minusAns);
document.querySelector('.times').addEventListener('click', timesAns);
document.querySelector('.percentage').addEventListener('click', percentageAns);
document.querySelector('.clearData').addEventListener('click', () => {
    clearInput();
    AnsArr = [0];
});

$(".inputData").keyup((event) => {
    if (event.keyCode === 13) {
        $(".clearData").click();
    }
});



// document.querySelector('.plus').addEventListener('click', () => {
//     const num1 = inputValue();
//     AnsArr.push(num1);
//     clearInput();
//     plusAns();
//     //document.querySelector('.ans').insertAdjacentHTML('afterbegin', );
//     console.log(AnsArr);
//     console.log(ans);
// })

