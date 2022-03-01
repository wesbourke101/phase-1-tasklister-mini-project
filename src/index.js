document.addEventListener("DOMContentLoaded", () => {
  const input1 = document.getElementById('new-task-description')
  //console.log(input1)

  const form = document.querySelector('#create-task-form')

  const divList = document.getElementById('list')

  //event listener with arrow function to listen for the submit 
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    //console.log(e)

    //assigning text box text a veriable.
    const textValue = input1.value;

    //creating out LI tags
    let li = document.createElement(`li`)
    divList.append(li);
    console.log(divList)

    //appending text value in the LI
    li.append(textValue)

    // create delete button
    let erase = document.createElement('button')
    erase.textContent = 'X';
    //append the button
    li.append(erase);

    //erase something
    erase.addEventListener("click", () => {
      li.remove()
    })

    //create drop-down list
    let list = document.createElement('select')
    li.append(list)

    //drop down red
    let dropDown = document.createElement('option')
    dropDown.value = 'redID'
    dropDown.text = 'Red'
    list.append(dropDown)

    //drop down blue
    let dropDown1 = document.createElement('option')
    dropDown1.value = 'blueID'
    dropDown1.text = 'Blue'
    list.append(dropDown1)

    //drop down yellow
    let dropDown2 = document.createElement('option')
    dropDown2.value = 'yellowID'
    dropDown2.text = 'Yellow'
    list.append(dropDown2)

    console.log(list)
    //append list
  });
});
