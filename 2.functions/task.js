
function getArrayParams(...arr) { // Создаём функцию, которая принимает на ввод массив.
  let min = arr[0];                 // Внутри функции задаём переменные.
  let max = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {  // Проходим циклом  for.
    if (arr[i] > max) {                //если элемент больше предыдущего максимума, то максимум становится равен элементу
      max = arr[i];
    }
    if (arr[i] < min) {            //если элемент меньше предыдущего минимума, то минимум становится равен элементу
      min = arr[i];
    }
    sum += arr[i];              // добавляем элемент к сумме sum для последующего вычисления среднего
  }

  let avg = (sum / arr.length).toFixed(2); //делим сумму элементов поделить на их количество.

  return { min, max, avg: Number(avg) };      //возвращаем.    
}


function summElementsWorker(...arr) {
let sum = 0;         // задаём для хранения суммы элементов
for(let i = 0; i < arr.length; i++) {// находим максимальный и минимальный элементы
sum += arr[i];
}
return sum;// возвращаем общую сумму
}



function differenceMaxMinWorker(...arr) {
if (arr.length === 0) {
return 0; // возвращаем 0 для пустого массива
}

let max = arr[0]; // предполагаем, что первый элемент массива является максимальным
let min = arr[0]; // предполагаем, что первый элемент массива является минимальным

// находим максимальный и минимальный элементы
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) { 
        max = arr[i];
    }
    if (arr[i] < min) { 
       min = arr[i];
    }
}function getArrayParams(...arr) { // Создаём функцию, которая принимает на ввод массив.
  let min = arr[0]; // Внутри функции задаём переменные.
  let max = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) { // Проходим циклом  for.
    if (arr[i] > max) { //если элемент больше предыдущего максимума, то максимум становится равен элементу
      max = arr[i];
    }
    if (arr[i] < min) { //если элемент меньше предыдущего минимума, то минимум становится равен элементу
      min = arr[i];
    }
    sum += arr[i]; // добавляем элемент к сумме sum для последующего вычисления среднего
  }

  let avg = (sum / arr.length).toFixed(2); //делим сумму элементов поделить на их количество.

  return {
    min,
    max,
    avg: Number(avg)
  }; //возвращаем.    
}


function summElementsWorker(...arr) {
  let sum = 0; // задаём для хранения суммы элементов
  for (let i = 0; i < arr.length; i++) { // находим максимальный и минимальный элементы
    sum += arr[i];
  }
  return sum; // возвращаем общую сумму
}



function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0; // возвращаем 0 для пустого массива
  }

  let max = arr[0]; // предполагаем, что первый элемент массива является максимальным
  let min = arr[0]; // предполагаем, что первый элемент массива является минимальным

  // находим максимальный и минимальный элементы
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return max - min; // возвращаем разницу между максимальным и минимальным элементами


}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0; // возвращаем 0 для пустого массива
  }

  let sumEven = 0; // сумма чётных элементов
  let sumOdd = 0; // сумма нечётных элементов

  // вычисляем сумму чётных и нечётных элементов
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEven += arr[i];
    } else {
      sumOdd += arr[i];
    }
  }

  return sumEven - sumOdd; // возвращаем разницу сумм чётных и нечётных элементов
}




function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0; // переменная для накопления суммы четных элементов
  let sumOddElement = 0; // переменная для накопления суммы нечетных элементов

  // проверка наличия элементов в массиве
  if (arr.length === 0) {
    return 0;
  }

  // цикл для перебора всех элементов массива
  for (let i = 0; i < arr.length; i++) {
    // проверка четности элемента
    if (arr[i] % 2 === 0) {
      // увеличение переменной sumEvenElement на четный элемент
      sumEvenElement += arr[i];
    } else {
      // увеличение переменной sumOddElement на нечетный элемент
      sumOddElement += arr[i];
    }
  }

  // возвращение разницы суммы четных и нечетных элементов
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0; // переменная для накопления суммы четных элементов
  let countEvenElement = 0; // переменная для подсчета количества четных элементов

  // проверка наличия элементов в массиве
  if (arr.length === 0) {
    return 0;
  }

  // цикл для перебора всех элементов массива
  for (let i = 0; i < arr.length; i++) {
    // проверка четности элемента
    if (arr[i] % 2 === 0) {
      // увеличение переменной sumEvenElement на четный элемент
      sumEvenElement += arr[i];
      // увеличение переменной countEvenElement на единицу
      countEvenElement++;
    }
  }

  // возвращение среднего значения четных элементов
  return sumEvenElement / countEvenElement;
}






function makeWork(arrOfArr, func) {
  // переменная для для хранения максимального результата
  let maxWorkerResult = -Infinity; // Используем -Infinity как начальное значение

  // Перебор всех элементов в массиве arrOfArr
  for (const dataArr of arrOfArr) {
    // Передача элементов массива в функцию с помощью spread-оператора
    const result = func(...dataArr);

    // Проверка, является ли полученный результат больше текущего максимума
    if (result > maxWorkerResult) {
      // Если да, обновляем значение переменной максимума
      maxWorkerResult = result;
    }
  }

  // возвращение максимального результата
  return maxWorkerResult;
}

return max - min; // возвращаем разницу между максимальным и минимальным элементами


}

function differenceEvenOddWorker(...arr) {
if (arr.length === 0) {
return 0; // возвращаем 0 для пустого массива
}

let sumEven = 0; // сумма чётных элементов
let sumOdd = 0; // сумма нечётных элементов

// вычисляем сумму чётных и нечётных элементов
for (let i = 0; i < arr.length; i++) {
if (arr[i] % 2 === 0) {
sumEven += arr[i];
} else {
sumOdd += arr[i];
}
}

return sumEven - sumOdd; // возвращаем разницу сумм чётных и нечётных элементов
}




function averageEvenElementsWorker(...arr) {
let sumEvenElement = 0; // переменная для накопления суммы четных элементов
let sumOddElement = 0; // переменная для накопления суммы нечетных элементов

// проверка наличия элементов в массиве
if (arr.length === 0) {
return 0;
}

// цикл для перебора всех элементов массива
for (let i = 0; i < arr.length; i++) {
// проверка четности элемента
if (arr[i] % 2 === 0) {
// увеличение переменной sumEvenElement на четный элемент
sumEvenElement += arr[i];
} else {
// увеличение переменной sumOddElement на нечетный элемент
sumOddElement += arr[i];
}
}

// возвращение разницы суммы четных и нечетных элементов
return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
let sumEvenElement = 0; // переменная для накопления суммы четных элементов
let countEvenElement = 0; // переменная для подсчета количества четных элементов

// проверка наличия элементов в массиве
if (arr.length === 0) {
return 0;
}

// цикл для перебора всех элементов массива
for (let i = 0; i < arr.length; i++) {
// проверка четности элемента
if (arr[i] % 2 === 0) {
// увеличение переменной sumEvenElement на четный элемент
sumEvenElement += arr[i];
// увеличение переменной countEvenElement на единицу
countEvenElement++;
}
}

// возвращение среднего значения четных элементов
return sumEvenElement / countEvenElement;
}






function makeWork(arrOfArr, func) {
  // переменная для для хранения максимального результата
  let maxWorkerResult = -Infinity; // Используем -Infinity как начальное значение

  // Перебор всех элементов в массиве arrOfArr
  for (const dataArr of arrOfArr) {
    // Передача элементов массива в функцию с помощью spread-оператора
    const result = func(...dataArr);

    // Проверка, является ли полученный результат больше текущего максимума
    if (result > maxWorkerResult) {
      // Если да, обновляем значение переменной максимума
      maxWorkerResult = result;
    }
  }

  // возвращение максимального результата
  return maxWorkerResult;
}

