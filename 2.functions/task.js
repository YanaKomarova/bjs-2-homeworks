
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


function summElementsWorker(...arr) {   // создаём функцию

        let sum = 0;                      //находим сумму элементов массива
        for (let i = 1; i < arr.length; i++) {// Проходим циклом  for.
            sum += arr[i];
        }
        return sum;                         //возвращаем
    }



function differenceMaxMinWorker(...arr) {
 let min = arr[0];
        let max = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        let difference = max - min;
        return difference;
    }


function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}