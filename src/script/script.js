let 입금액 = 0;
let 소지금액 = 25000;
let 잔액 = 0;
let 총금액 = 0;

const 입금액입력 = document.querySelector('.Deposit');
const 입금버튼 = document.querySelector('.Deposit_btn');
const 잔액디스플레이 = document.querySelector('.won');
const 소지금디스플레이 = document.querySelector('.fund_won');

소지금디스플레이.textContent = `${소지금액.toLocaleString()}원`

function 자금셋팅() {
    소지금디스플레이.textContent = `${소지금액.toLocaleString()}원`
}

입금버튼.addEventListener('click', () => {
    let 입금액 = +입금액입력.value
    잔액디스플레이.textContent = `${입금액.toLocaleString()}원`
    // 소지금액 - 입금액
    자금셋팅()
})