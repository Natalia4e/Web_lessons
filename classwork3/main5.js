//Задача 5. Перепишите код,используя конструкцию switch-case, запрашивая 
//продукт через диалоговое окно
// без break не будет выходить в свич поэтому брэйк обяз !!

const product = prompt("Введите название продукта").toLowerCase();

switch(product) {
    case "мандарины":
        alert ('Мандарины стоят 100 руб/кг');
        break;
    case "бананы":
    case "груши":
        alert ('Бананы и Груши стоят 70 руб/кг');
        break;
    default:
        alert('Нет такого продукта')
}