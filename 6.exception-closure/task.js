﻿function parseCount(value) {
    const result = Number.parseFloat(value);
    if (Number.isNaN(result)) {
      throw new Error("Невалидное значение");
    }
    return result;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }

  
  
  class Triangle {
    constructor(side1, side2, side3) {
      if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
      
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
    
    get perimeter() {
      return this.side1 + this.side2 + this.side3;
    }
    
    get area() {
      const p = this.perimeter / 2;
      
      const area = Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
      
      return parseFloat(area.toFixed(3));
    }
  }
  
  function getTriangle(side1, side2, side3) {
    try {
      const triangle = new Triangle(side1, side2, side3);
      return triangle;
    } catch (error) {
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        }
      };
    }
  }
  
  // Пример использования:
  const triangle1 = getTriangle(3, 4, 5);
  console.log(`Периметр треугольника: ${triangle1.perimeter}`);
  console.log(`Площадь треугольника: ${triangle1.area}`);
  
  const triangle2 = getTriangle(1, 1, 3);
  console.log(`Периметр треугольника: ${triangle2.perimeter}`);
  console.log(`Площадь треугольника: ${triangle2.area}`);