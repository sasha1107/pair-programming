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
    if (입금액입력.value > 소지금액){
        alert("소지금 부족!");
        return;
    }
    let 입금액 = +입금액입력.value;
    잔액 += 입금액;
    소지금액 -= 입금액;
    자금셋팅();
    입금액입력.value=""; 
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

let 음료 = [{
    "이름": "Original_Cola",
    "가격": 1000,
    "이미지":"./src/img/Original_Cola.png",
    "선택개수":0,
    "재고":3, 
},
{
    "이름": "Violet_Cola",
    "가격": 1000,
    "이미지": "./src/img/Violet_Cola.png",
    "선택개수": 0,
    "재고": 3, 
},
{
    "이름": "Yello_Cola",
    "가격": 1000,
    "이미지":"./src/img/Yellow_Cola.png",
    "선택개수": 0,
    "재고": 3, 
},
{
    "이름": "Cool_Cola",
    "가격": 1000,
    "이미지":"./src/img/Cool_Cola.png",
    "선택개수": 0,
    "재고": 3, 
},{
    "이름": "Green_Cola",
    "가격": 1000,
    "이미지":"./src/img/Green_Cola.png",
    "선택개수": 0,
    "재고": 3, 
},{
    "이름":"Orange_Cola",
    "가격":1000,
    "이미지": "./src/img/Orange_Cola.png",
    "선택개수":0,
    "재고":3 , 
}];

const 장바구니 = document.querySelector(".Cola_Select");
const 상품 = 장바구니.querySelectorAll(".Cola_label_cont");
const 가격표 = 장바구니.querySelectorAll(".Cola_Price");
const 상품이미지 = 장바구니.querySelectorAll(".Cola_List_img");

for (let i=0; i < 음료.length; i++){
    let 임시상품이미지 = 음료[i].이미지;
    let 임시이름 = 음료[i].이름;
    let 임시가격표 = 음료[i].가격;
    상품[i].textContent = 임시이름;
    가격표[i].textContent = 임시가격표 + "원";
    상품이미지[i].src = 음료[i].이미지;
    상품이미지[i].alt = 음료[i].이름;
}

//클릭이벤트
// 콜라들 -> querySelectorAll로 받아오고 -> click event
const 상품목록 = 장바구니.querySelectorAll(".Cola_List");
상품목록.forEach((i,index)=>{
    i.addEventListener("click",()=>{
        상품선택(index);
        // console.log(index);
    })
})

function 상품선택(index){
    if(음료[index].재고<1){
        alert("재고없음!");
        return;
    }
    음료[index].선택개수 += 1;
    // 이미 선택돼서 카운트만 늘려줘야 할 때
    
    if (음료[index].선택개수 > 1){
        document.getElementById(음료[index].이름).innerHTML = 음료[index].선택개수;
        음료[index].재고 -= 1;
    }
    else {
        선택상품추가(index);
        음료[index].재고 -= 1;
    }
    
    for (let i=0; i<상품목록.length; i++){
        if (음료[i].재고 === 0){
            상품목록[i].classList.add("sold_out");
        }
    }
}
function 선택상품추가(index){
    const 부모태그 = document.querySelector(".Coke_list");
    /* <li>
    <img src="./src/img/Original_Cola_s.png" alt="">
    <span class="Cola_label">Original_Cola</span>
    <span class="choice">0</span>
    </li> */
    const 상품태그 = document.createElement("li");
    const 상품이미지태그 = document.createElement("img");
    const 스팬태그1 = document.createElement("span");
    const 스팬태그2 = document.createElement("span");
    상품이미지태그.setAttribute('src', 음료[index].이미지);
    상품이미지태그.setAttribute('alt', 음료[index].이름);
    스팬태그1.textContent = 음료[index].이름;
    스팬태그2.textContent = 음료[index].선택개수;
    스팬태그1.setAttribute("class", "Cola_label");
    스팬태그2.setAttribute("class", "choice");
    스팬태그2.setAttribute("id", 음료[index].이름);
    상품태그.appendChild(상품이미지태그);
    상품태그.appendChild(스팬태그1);
    상품태그.appendChild(스팬태그2);
    부모태그.appendChild(상품태그);
}

//획득으로 옮기기
//자금계산 최종
//취소기능?
//
