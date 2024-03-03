const inputBox =  document.getElementById("input-box");
const listContainer =  document.getElementById("list-container");

function addtask(){
    if(inputBox.value === '')
    {
        alert('you must writing something');
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; // 將 <span> 元素的內容設置為 '×'
        li.appendChild(span); // 在列表項目中添加這個新的 <span> 元素
    }
    inputBox.value = ""; //在新增後刪除輸入欄位的值
    savaData();
}


/* 事件監聽器（Event Listener） -> addEventListener
    listContainer.addEventListener("click", function(e) {...}, false);
    "click" 是事件的類型，表示當元素被點擊時觸發該事件。
    function(e) {...} 是一個匿名函數，它是事件處理器，當點擊事件發生時將被執行。
    false 表示使用事件冒泡（bubbling）方式，即事件由內層元素向外層元素傳播。 */
listContainer.addEventListener("click" ,function(e){ //addEventListener 方法將點擊事件綁定到 listContainer 元素上。
    if(e.target.tagName === "LI"){ // tagName 屬性返回的是大寫字母形式的 HTML 標籤名稱
        e.target.classList.toggle("checked") ; //在點擊的列表項目上切換一個名為 "checked" 的 CSS class
        savaData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove() ;
        savaData();
    }
},false)

/*使用了 localStorage 物件來在瀏覽器中存儲和檢索數據，
    以實現在瀏覽器重載或重新打開頁面時保留任務列表的功能 */
function savaData(){
    localStorage.setItem("data" , listContainer.innerHTML) // localStorage.setItem ，將 listContainer 元素的內容存儲在名為 "data" 的 localStorage 鍵中。
}
//localStorage 是一個用於在瀏覽器中存儲鍵/值對的 API。在這裡，它用來保存整個任務列表的 HTML 結構。

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data") // 使用 localStorage.getItem 方法，獲取名為 "data" 的 localStorage 鍵的值
}
showTask();