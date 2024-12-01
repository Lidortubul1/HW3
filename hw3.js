//כתבו תוכנית המגדירה מערך של מספרים שלמים ומחשבת כמות אפסים בעזרת ביטוי מותנה (ללא שימוש ב-if).
const numbers = [0, 1, -3, 0, 5, 0, 7, -2];
const zeroCount = numbers.reduce( (count,num) => count +(num === 0 ? 1:0) ,0 );

// הדפסת התוצאה
console.log(zeroCount);
