/*
    JavaScript Display Possibilities
    JavaScript can "display" data in different ways:

        Writing into an HTML element, using innerHTML.
        更改 HTML 元素顯示的資料

        Writing into the HTML output using document.write().
        僅 開發測試可用 " 載入 HTML 文件後使用 document.write() 將刪除所有現有的 HTML "
        
        Writing into an alert box, using window.alert().


        Writing into the browser console, using console.log().
        F12 on your keyboard will activate debugging. Then select "Console" in the debugger menu.
*/

/*
    命名規則:
            不能數字開頭
            可以包含字母、數字、美元符號($)、底線
            缺分大小寫
*/

/*
    變數:
            var:全域，同區塊內可以重複宣告，可以更改值 (*淘汰)
            let:區域，同區塊內不能重複宣告，可以更改值
                let x = 10;
                // Here x is 10
                {
                let x = 2;
                // Here x is 2
                }
                // Here x is 10
            const:常數，不能更改值，在宣告時就要賦值
                // const PI = 3.1415926 ; (O)
                // const PI;
                   PI= 3.1415926; (X) 
*/

/*
    運算子的類型:
            算術運算子:除法(/)、餘數(%)、次方(**)
            必較運算子:值相等(==)、型態和值相等(===)、不等於(!=)、(!==)
            位元運算子:位元AND(&)、 位元OR(|)、位元XOR(^)、位於NOT(~a)、左移(a<<b)、右移(a>>b)
            邏輯運算子:
            三元運算子:
            Type Operators 類型運算子:

*/

!!!運算子的類型要去確認

// 資料型別 Data type

/*  1. String
        let color = "Yellow";
        let lastName = "Johnson";

    2. Number:
        All JavaScript numbers are stored as decimal numbers十進制 (floating point).
        Javascript numbers are always one type: double (64-bit floating point).雙精度浮點數
        let length = 16;
        let weight = 7.5;

    3. bigint
        JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values 
        that are too big to be represented by a normal JavaScript Number.

    4. Boolean
        let x = true;
        let y = false;

    5. Undefined:
        ▪️ In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
            let car;    // Value is undefined, type is undefined
        ▪️ Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
            car = undefined;    // Value is undefined, type is undefined


    6. Null
        An empty value has nothing to do with undefined.
            let car = "";    // The value is "", the typeof is "string"

    7. Symbol

    8. Object
        ▪️ An object
            const person = {firstName:"John", lastName:"Doe"}; 用 { }
        ▪️ An array 
            const cars = ["Saab", "Volvo", "BMW"]; 用 [ ]
        ▪️ A date
            const date = new Date("2022-03-25"); 用 ( )
*/


// 函數 Function

    /* function name(parameter1, parameter2, parameter3) {
         // code to be executed
        }
    */    

// 物件 Obgects
/*
    ▪️ Object Definition
        const person = {
            firstName: "John",
            lastName : "Doe",
            id       : 5566,
            fullName : function() {
            return this.firstName + " " + this.lastName;
            }//物件方法
        };
    ▪️ Accessing存取 Object Properties屬性
        objectName.propertyName OR objectName["propertyName"]
    
    🔸this 關鍵字
*/

//事件 Event
/*
    <element event="some JavaScript">
    <button onclick="alert(3+4)">
    <div onmouseover="this.style.backgroundColor='red'">myDIV.</div>
*/

//string 雜燴
/*
    字串長度   變數名.length
    跳脫字元   \'-> ' , \" -> " , \\ -> \
    程式太長   可以用 + 來連接兩行
    模板字串 let text = `The quick
                         brown fox
                         jumps over
                         the lazy dog`; //IE no support/

*/