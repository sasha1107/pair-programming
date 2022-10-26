let 입금액 = 0;
let 소지금액 = 25000;
let 잔액 = 0;
let 총금액 = 0; // 선택한 음료 * 가격의 합

const 입금액입력 = document.querySelector('.Deposit');
const 입금버튼 = document.querySelector('.Deposit_btn');
const 잔액디스플레이 = document.querySelector('.won');
const 소지금디스플레이 = document.querySelector('.fund_won');
const 거스름돈버튼 = document.querySelector('.Change_btn');

function 자금셋팅() {
    소지금디스플레이.textContent = `${소지금액.toLocaleString()}원`;
    잔액디스플레이.textContent = `${잔액.toLocaleString()}원`;
}

자금셋팅();
입금버튼.addEventListener('click', () => {
    if (+입금액입력.value > 소지금액){
        alert("소지금 부족!");
        return;
    }
    let 입금액 = +입금액입력.value
    잔액 += 입금액;
    소지금액 -= 입금액;
    자금셋팅();
})

거스름돈버튼.addEventListener('click', ()=>{
    if (잔액 === 0){
        alert("거스름돈없어!");
        return;
    }
    소지금액+=잔액;
    잔액 = 0;
    자금셋팅();
})