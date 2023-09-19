"use strict";

function solveEquation(a, b, c) { // реализуем функцию

  let arr = []; // создаём массив
  let d = Math.pow(b, 2) - (4 * a * c); // считаем d = дискриминант квадратного уравнения
  let f = 2 * a;
  if (d == 0) { //КОГДА 0=дискриминант, ТОГДА корень 1шт
    arr.push(-b / f); //Пушим значение корня в массив arr
  } else if (d > 0) { //А КОГДА >0 ТОГДА корень 2шт
    let e = Math.sqrt(d);
    arr.push((-b + e) / f, (-b - e) / f);
  }
  return arr; // возвращаем массив 
}






function calculateTotalMortgage(percent, contribution, amount, countMonths) { //реализуем функцию 
  let newPercent = percent / 100; //Преобразуем процентную ставку из диапазона от 0 до 100 
  let monthsPercent = newPercent / 12; //  в диапазон от 0 до 1 и из годовой ставки — в месячную.
  let bodyCredit = amount - contribution; //Высчитываем тело кредита 
  let onlyPayment = bodyCredit * (monthsPercent + (monthsPercent / ((Math.pow((1 + monthsPercent), countMonths)) - 1))); // расчёт по формуле                                      
  let totalPayment = Math.round(totalPayment * 100.0) / 100.0; //Считаем общую сумму, которую придётся заплатить клиенту. Округляем результат до двух значений после запятой. Возвращаем результат из функции. 
}
