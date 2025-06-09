import React from 'react'

// filter()
// - 배열 내 요소 중 조건에 부합한 요소를 새로운 배열로 묶어서 반환하는 함수
// - map() 처럼 출력하는 것은 아니기 때문에 조건을 확인할 때 filter()로 처리하고 
// 출력은 map()로 활용
const FilterExam = () => {

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = numbers.filter((number)=>number%2===1);

   

  return (
    <div>
        {result.map((number)=>{
                <div>{number % 2 == 1}</div>
        })}
    </div>
  )
}

export default FilterExam