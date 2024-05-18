/** ===================== @object ========================== */

/** 在 JS 中所有東西都可能等於物件，通常不使用 @object */
let obj: object;
obj = {};
obj = () => {};

/** ===================== @{} ========================== */

/** {} 用來指定物件中可以包含哪些屬性
 *  語法: {key:keyType, ...}
 *  @問號 代表此屬性可有可無 */
let obj2: { name: string; age?: number };

/** 類型 '{}' 缺少屬性 'name'，但類型 '{ name: string; }' 必須有該屬性 */
// obj2={}

obj2 = { name: "寶" };
obj2 = { name: "寶", age: 2 };

/** 代表除了 @name 為必填外 , 後面的屬性可以隨意加 */
let obj3: { name: string; [key: string]: unknown };
obj3 = { name: "寶", age: 2, gender: "男", phone: "0923685595" };

/** ===================== @()=>{} ========================== */

/** 定義一個變數為函數時，定義函數的類型 */
let fn4: (a: number, b: number) => number;

fn4 = function (a: number, b: number): number {
  return 2 + 5;
};

/** 多傳了一個參數 */
// fn4 = function (a: number, b: number, c:number): number {
//     return 2 + 5;
//   };

/** ===================== @array ========================== */

/** 代表值只能是 @string 的 @陣列 */
let strArr: string[];
strArr = ["你好", "我好"];

let numArr: Array<number>;
numArr = [1, 2, 3];

/** ===================== @元祖 ========================== */

/** 代表固定長度的陣列 */
let numArr2: [number, number];

// 來源具有 3 個元素，但目標只允許 2 個
// numArr2=[2,2,2]
numArr2 = [2, 2];

/** ===================== @enum枚舉 ========================== */

/** 枚舉可以給值類似 object ，但是通常不這樣用 */
// enum Gender {
//   Male="男",
//   Female="女",
// }

/** 枚舉沒給值是以 0,1,2,3 .. 依序排序 */
enum Gender {
  Male, //0
  Female, //1
}

/** @gender 可以是 Gender.Male | Gender.Female */
let obj4: { name: string; gender: Gender.Male | Gender.Female };
obj4 = { name: "寶", gender: Gender.Male };

/** ===================== @& (且) ========================== */

/** 一定要包含兩個屬性 (通常用在 arr 或是 obj) */
let obj5: { name: string } & { age: number };
obj5 = { name: "寶", age: 20 };

/** ===================== @type ========================== */

type myType = 1 | 2 | 3 | 4 | 5;
let type: myType;

type = 5;
type = 3;

/** 類型 '6' 不可指派給類型 'myType' */
// type = 6;
