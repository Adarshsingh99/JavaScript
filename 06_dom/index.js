const title = document.getElementById('title')
title.style.backgroundColor = "#e00f0f";
title.style.borderRadius='10px'


// title.innerText : which is actual visible
// title.innerHTML : Whole html value
// title.textContent : all text

// document.getElementsByClassName('heading')
// HTMLCollection(2) [div#title.heading, h1.heading, title: div#title.heading]
// 0
// : 
// div#title.heading
// 1
// : 
// h1.heading
// title
// : 
// div#title.heading
// length
// : 
// 2
// [[Prototype]]
// : 
// HTMLCollection


//querySelector
document.querySelector('h1') // select one value
// document.querySelector('')// it select all value and return as nodeList
// nodeList - use for each to do action



// document.getElementsByClassName('list')
// HTMLCollection(3) [li.list, li.list, li.list]0: li.list1: li.list2: li.listlength: 3[[Prototype]]: HTMLCollection
// const tempClass = document.getElementsByClassName('list')
// undefined
// tempClass
// HTMLCollection(3) [li.list, li.list, li.list]
// // convert HTMLCollection to array
// undefined
// Array.from(tempClass)
// (3) [li.list, li.list, li.list]

//use for each