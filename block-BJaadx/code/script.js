// 1. Change the title of the page to `Hello AltCampus!`
document.title.innerHTML=(`Hello AltCampus!`)

// 2. Select the element using the children property:

//    - Select the `h1` element and change the value to `Learning DOM`
document.body.firstElementChild.innerHTML=`Learning DOM`;

//    - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`
document.body.querySelector('.topics').firstElementChild.innerHTML=`all about document`
//    - Select the input element with name `email`
document.bdy.bodyquerySelector('.email')

// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`
let li=document.body.querySelector('.topics').querySelectorAll('li');
console.log(li)

// 4. Select the first input using the `type` selector and store them in variable named `emailInput`
let emailInput=document.body.querySelector('input');

// 5. Select the ul element using class selector and store in `topics`
let topics=document.body.getElementsByClassName('topics')

// 6. Select the first label element and store in `label`
let label=document.body.querySelector('label');

// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`

 let inputCheckbox=document.getElementById('remember')
// 8. Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in `password`
document.body.querySelector('input[type="password"]');

// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`
  let attrPassword =document.body.querySelector('input[placeholder="password"]')

// 10. Select all the `li` element and store in `allTopics`
let allTopics=document.body.querySelectorAll('li')

// 11. Select all the input element of any type and store in `allInput`
let allInput=document.body.querySelectorAll('input')

// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.
allTopics.forEach((ele)=>{
   console.log( ele.innerHTML);
})

// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`
let listOfSelectedTopics=document.body.getElementsByClassName('list')

// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`
  let firstLi=document.body.querySelector('.topics').firstElementChild

// 15. Select all the img element and log the number of element saying `The total number of img element is ---`
    let img=document.body.querySelector('img')
    console.log()

// 16. Select all the `p` element and store in `allPElement`
let allPElement=document.body.querySelector('p')

// 17. Select all the buttons and log the count of buttons.

// 18. Select all the `label` element and log the count.
let count =0
let allLAbel=document.body.querySelectorAll('label');
 allLAbel.forEach((ele)=>{
    count++
 })
 console.log(count)
// 19. Select all the elements with `id` of `test`
  document.body.querySelectorAll('test')
// 20. Select the first element with id `test` using `getElementById`
document.getElementById('test')

// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.
     document.body.querySelector('.topics').parentElement

// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.
document.body.querySelector('.topics').nextElementSibling
// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.
document.body.querySelector('.topics').previousElementSibling
// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.
document.body.querySelector('.topics').firstElementChild.innerHTML='This is the first child element'
// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.
console.log(typeof document.body.querySelector('.topics').lastElementChild)
// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.
let fieldsetElm=document.body.querySelector('fieldset');
console.log(fieldsetElm)
// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.
console.log(typeof document.body.querySelector('fieldset').parentElement)