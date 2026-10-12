import $ from 'jquery'

//짝꿍을 찾았다
export function FairComputer(ComputerCountBrain){
    const firstElementWithLengthTwo = Object.entries(ComputerCountBrain)
    .filter(([key, value]) => value.length === 2)
    .map(([key, value]) => value)[0]
    return firstElementWithLengthTwo ? firstElementWithLengthTwo : false
}

//무작위 카드로 선택되었다.
export function randomComputer(CardList){
    var twocards=[];
    const zeroIndices = CardList.map((value, index) => value === 0 ? index : -1)
                                .filter(index => index !== -1);

    const selectedIndices = new Set();
    for (var i=0;i<2;i++){
        
        const randomIndex = Math.floor(Math.random() * zeroIndices.length);
        const selectedIndex = zeroIndices[randomIndex];
        if(twocards[0]===selectedIndex){i--}
        else{twocards.push(selectedIndex)}
    }
    console.log("---컴퓨터가 무작위카드로 선택됨");
    return twocards
}


export function SmartComputer(intelligence){
    const randomValue = Math.random()
    if(randomValue <= intelligence){
        console.log("---컴퓨터가 쌍을 찾았습니다.")
        return true
    }
    else{
        console.log("---컴퓨터가 멍청한 행동을 합니다.")
        return false
    }

}