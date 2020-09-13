function clearTextLeft() {
    const clearLeft = document.querySelectorAll(".text-area")[0]
    const textLeft = clearLeft.querySelector("textarea")
  
    clearLeft.removeChild(textLeft)
  
    const newText = document.createElement("textarea")
    clearLeft.appendChild(newText)
  }


  function convertTextButton(){
  const pElement = document.createElement("p")
    const convertElement = document.getElementById('textarea').value

     pElement.innerHTML = convertElement;

    const mainElement = document.querySelectorAll('.convert-text')[0]

    if(!mainElement){
        return;
     }
     mainElement.appendChild(pElement)
  }
  
function clearTextRight(){
    const clearRight = document.querySelectorAll('.convert-text')
    const convertText = clearRight.querySelector('span')
    clearRight.removeChild(convertText)

    const spanText = document.createElement('span')
    convertText.appendChild(spanText)
}
