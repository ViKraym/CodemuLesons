
const A = document.getElementById('numberA');
const B = document.getElementById('numberB');
const C = document.getElementById('numberC');
const resultRoot = document.getElementById('root');
const resultRoot2 = document.getElementById('root2');
const myButton = document.getElementById('hideButtonRoot');

 myButton.addEventListener("click", function() {
  let AA = Number(A.value);
  let BB = Number(B.value);
  let CC = Number(C.value);
  
  let D = (Math.pow(BB, 2))-4*(AA*(-CC));

    if (D > 0) {
    //  alert(D);
        resultRoot.innerText = (-BB - Math.sqrt(D))/(AA*2);
        resultRoot2.innerText = (-BB + Math.sqrt(D))/(AA*2);

  } else if (D == 0) {
    resultRoot.innerText = -BB/(AA*2);
    resultRoot2.innerText = "Уравнение имеет единственный корень";
  } else {
    resultRoot.innerText = "Корней нет";
    resultRoot2.innerText = "Корней нет";
  }
});

const A1 = document.getElementById('numberA1');
const B1 = document.getElementById('numberB1');
const C1 = document.getElementById('numberC1');
const resultRoot1 = document.getElementById('root1');
const resultRoot21 = document.getElementById('root21');
const myButton1 = document.getElementById('hideButtonRoot1');


 myButton1.addEventListener("click", function() {

  let AA = Number(A1.value);
  let BB = Number(B1.value);
  let CC = Number(C1.value);
  let maxNumber = Math.max(AA,BB,CC);

  
  resultRoot1.innerText = maxNumber;

if (Math.sqrt(maxNumber) == AA) {
        let maxis = AA;

        if (Math.sqrt(maxis)==(Math.sqrt(BB)+Math.sqrt(CC))){
        resultRoot21.innerText = "Да числа являются тройкой"
        }

} else if (Math.sqrt(maxNumber) == BB){
        let maxis = BB;

        if (Math.sqrt(maxis)==(Math.sqrt(AA)+Math.sqrt(CC))){
        resultRoot21.innerText = "Да числа являются тройкой"
        }


} else if (Math.sqrt(maxNumber) == CC) {
        let maxis = CC;

        if (Math.sqrt(maxis)==(Math.sqrt(AA)+Math.sqrt(BB))){
        resultRoot21.innerText = "Да числа являются тройкой"
        }

} else {
        resultRoot21.innerText = "Нет числа не являются тройкой"
}

});
// for (let i = 0; i < arr.length, i++;) {
//     if (arr[i] != arr[i+1] && arr[i] != arr[i-1]) {
//       let maxis = arr[i];
//       alert(arr[i]);
//         // if ((maxis)**2 == (arr[(i+1)**2])+(arr[(i-1)**2])) {
//         //   resultRoot21.innerText = "Да числа являются тройкой"
//         // } else {
//         //   resultRoot21.innerText = "Нет числа не являются тройкой"
//         // }
//     }
// }
//  })

const A2 = document.getElementById('numberA2');
const resultRoot12 = document.getElementById('root12');
const myButton12 = document.getElementById('hideButtonRoot2');

 myButton12.addEventListener("click", function() {

  let delNumber = Number(A2.value);
  const arr = [];
  
  for (let i = 1; i <= delNumber; i++) {
    if (delNumber % i === 0) {
      arr.push(i);
    }
  }
  console.log(arr);
  resultRoot12.innerText = arr;
});