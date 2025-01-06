```
## 2. 객체 선언해보기

지난 시간에 배웠던 객체(object)를 다시 복습해보며, 아래의 조건을 충족하는 객체를 직접 선언해보세요.

- 자기 자신을 소개하는 객체입니다.
- 이름, 나이, MBTI 세 가지 키와 값이 포함되어 있어야 합니다.
- 콘솔 창에 이름, 나이, MBTI가 나오도록 console.log() 를 찍어보세요.

예시

```

const minju = {
    name: '이민주',
    age: '27',
    MBTI: 'ENTP'
};

console.log(minju.name);
console.log(minju.age);
console.log(`${minju.MBTI}`);