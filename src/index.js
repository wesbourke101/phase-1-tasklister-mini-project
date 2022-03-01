document.addEventListener("DOMContentLoaded", () => {
  const input1 = document.getElementById('new-task-description')
  //console.log(input1)

  const form = document.querySelector('#create-task-form')
  console.log(form)

  const divList = document.getElementById('list')
  console.log(divList);

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    //console.log(e)

    const textValue = input1.value;


    let li = document.createElement(`li`)
    divList.append(li);
    console.log(divList)

    li.append(textValue)
    
  });


});
