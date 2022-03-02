// document.addEventListener("DOMContentLoaded", () => {
//   const input1 = document.getElementById('new-task-description')
//   //console.log(input1)

//   const form = document.querySelector('#create-task-form')

//   const divList = document.getElementById('list')

//   //event listener with arrow function to listen for the submit 
//   form.addEventListener('submit', (e) => {

//     //prevent page from loading
//     e.preventDefault()
  
//     //assigning text box text a veriable.
//     const textValue = input1.value;

//     //creating LI tags
//     let li = document.createElement(`li`)
//     divList.append(li);

//     //appending text value in the LI
//     li.append(textValue)

//     // create delete button
//     let erase = document.createElement('button')
//     erase.textContent = ' X ';
//     //append the button
//     li.append(erase);

//     //erase something
//     erase.addEventListener("click", () => {
//       li.remove()
//     })

//     //create drop-down list
//     let list = document.createElement('select')
//     li.append(list)

//     let dropblank = document.createElement('option')
//     dropblank.value = 'none'
//     dropblank.text = 'Pick Priority'
//     list.append(dropblank)

//     //drop down green
//     let dropDown = document.createElement('option')
//     dropDown.value = 'greenID'
//     dropDown.text = 'Low Priority'
//     list.append(dropDown)

//     //drop down yellow
//     let dropDown1 = document.createElement('option')
//     dropDown1.value = 'yellowID'
//     dropDown1.text = 'Medium Priority'
//     list.append(dropDown1)

//     //drop down red
//     let dropDown2 = document.createElement('option')
//     dropDown2.value = 'redID'
//     dropDown2.text = 'High Priority'
//     list.append(dropDown2)

//     list.addEventListener('change', (e) => {
//       const colorValue = e.target.value;
//       console.log(list)
//       if (colorValue === 'redID') {
//         e.target.parentNode.style.color = "red"
//         // console.log(e.target.parentNode)
//         // console.log(e.target.parentNode.style)
//       }
//       if (colorValue === 'yellowID') {
//         e.target.parentNode.style.color = "yellow"
//       }
//       if (colorValue === 'greenID') {
//         e.target.parentNode.style.color = "green"
//       }
//       if (colorValue === 'none') {
//         e.target.parentNode.style.color = "black"
//       }

//     } )

//     //console.log(list)
//     //append list
//   });
// });


document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('#create-task-form')
  const text1 = document.querySelector('#new-task-description')
  const list = document.querySelector('#list')
  
  form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    //name input, text
    const actualText = text1.value;

    //create li for the different names.
    const li = document.createElement('li')
    list.append(li)
    li.append(actualText)
    

    //create delete button
    const deleteBttn = document.createElement('button')
    deleteBttn.textContent = ' X '
    li.append(deleteBttn);

    //create a list
    const createSelector = document.createElement('selector')
    li.append(createSelector)

    //create delete event listener and delete name
    deleteBttn.addEventListener('click', (e) => { 
      li.remove()
    } )

    





    


    })
});