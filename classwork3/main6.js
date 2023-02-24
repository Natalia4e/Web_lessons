//Задача 6. Функцияя getMaxEvenElement принимает массив с целыми числами 
//Необходимо реализовать функциб так ,чтобы она возвращала значение
// большего жэлемента массива, который записан в четном индексе включая 0

function getMaxEvenElement(arr) {
    let maxx = arr[0];
    for (let i = 2; i < arr.length; i += 2) {
        if (arr[i] > maxx) {
            maxx = arr[i];
        }
    }
    return maxx;
}

console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0]));
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50]));
