/** 聲明數字類型變數 */
let aa: number;
aa = 5;

/** 只能賦值數字，否則報錯 */
// a = true;

/** 聲明數字類型變數 */
let b: number = 6;

/** 聲明布林類型變數 */
let c: boolean = true;

/** 如果變數聲明跟賦值同時進行，會自動進行變數檢測 */
let d = false;

/** 報錯 : 類型 'number' 不可指派給類型 'boolean' */
// d = 5

/** 函數聲明，
 *  為 @形參定義類型
 *  為 @returns定義類型 */
function sum(a: number, b: number): number {
  return a + b;
}

/** 類型 'string' 的引數不可指派給類型 'number' 的參數 */
// sum(5, "6");
sum(5, 6);
