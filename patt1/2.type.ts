/** ===================== @聯合類型 ========================== */
/** 可以接受兩個值  "male"/ "female" (聯合類型)*/
let sex: "male" | "female";

sex = "male";
sex = "female";

/** 類型 '"hello"' 不可指派給類型 '"male" | "female"' */
// sex="hello"

/** 可以接受兩個值  boolean/ number (聯合類型)*/
let booleanOrNumber: boolean | number;
booleanOrNumber = true;
booleanOrNumber = 4;

/** ===================== @any ========================== */

/** 任意類型，設置 any 等於關閉 TS (不要使用) */
let any: any;
any = 5;
any = "2";
any = true;

/** @any 類型會導致其他已經聲明型別的變數也變 @any */
sex = any;

/** ===================== @unknown ========================== */

/** unknown 表示未知類型 (安全版的 any) */
let unknown: unknown;
unknown = 5;
unknown = true;
unknown = "2";

/** 類型 'unknown' 不可指派給類型 '"male" | "female"'
 *  @unknown 類型不會導致其他已經聲明型別的變數也變 @unknown */
// sex = unknown;

let srt: string;

/** 可以使用 @判斷式 或是 @斷言 */
if (typeof unknown === "string") {
  srt = unknown;
}

/** 類型斷言，可以告訴編譯器 @unknown 就是 @string
 *  語法:
 *  1.變數 as 類型
 *  2.<類型>變數 */
srt = unknown as string;
srt = <string>unknown;

/** ===================== @void ========================== */

/** 使用 @void 代表函數沒有返回值 @return_undefined */
function fn(): void {
  console.log("你好");
}

/** ===================== @never ========================== */

/** 使用 @never 表示永遠不會有結果，通常處理報錯 */
function fn2(): never {
   throw new Error("報錯了")
  }
  