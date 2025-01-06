```
## 1. 빈칸 채우기 문제

아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지
본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

```

1. 
let uninitialized;
console.log(uninitialized); // undefined 초기화 시키지 않았기 때문에 컴퓨터가 지정하는 빈 값인 undefined가 출력 될 것


2. 
const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
//이미 사과로 할당된 const에 바나나로 다시 재할당하려고 해서 생기는 에러


3. 
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// 배열의 인덱스는 0부터 시작


4.
let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // <false>
// mySchedule이 false일경우 false를 출력해
// mySchedule을 불리언 값으로 바꿨을 때 ""는 false
