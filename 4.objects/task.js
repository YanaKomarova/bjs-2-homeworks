// Создаём функцию-конструктор Student
function Student(name, gender, age) {
	// Инициализация свойств объекта Student
	this.name = name; // Имя студента
	this.gender = gender; // Пол студента
	this.age = age; // Возраст студента
	this.marks = []; // Создаём пустой массив для хранения оценок

	// Метод для установки предмета
	this.setSubject = function(subjectName) {
		this.subject = subjectName; // Устанавливаем значение свойства subject равным значению аргумента subjectName
	};

	// Метод для добавления оценок
	this.addMarks = function(...marksToAdd) {
		// Добавляем оценки из массива marksToAdd в массив оценок marks, если он существует
		if (this.marks) {
			this.marks.push(...marksToAdd);
		}
	};

	// Метод для расчета среднего значения оценок
	this.getAverage = function() {
		// Если массив оценок пуст или отсутствует, возвращаем 0
		if (!this.marks || this.marks.length === 0) {
			return 0;
		}

		// Вычисляем сумму оценок
		const sum = this.marks.reduce((total, mark) => total + mark, 0);
		// Возвращаем среднее значение оценок, деление суммы на количество
		return sum / this.marks.length;
	};

	// Метод для исключения студента 
	this.exclude = function(reason) {
		// Удаление свойств subject и marks
		delete this.subject;
		delete this.marks;

		// Добавление свойства excluded, равного причине исключения
		this.excluded = reason;
	};
}