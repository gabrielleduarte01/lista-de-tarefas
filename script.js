// selecionar os elementos de ação 
const inputElement = document.querySelector(".new-task-input")
const addTaskButton = document.querySelector(".new-task-button")

const validateInput = () => inputElement.value.trim().length > 0 //se for maior que 0 true (trim espaços em branco)
const handleAddTask = () => {
    const inputIsValid = validateInput() // checar se o input é valido
    if(!inputIsValid) { // se o input n for valido
        return inputElement.classList.add("error") //validação input
    }
}

const handleInputChange = () => { // remover erro
    const inputIsValid = validateInput()
    if(inputIsValid) {
        return inputElement.classList.remove("error") 
    }
}
addTaskButton.addEventListener("click", () => handleAddTask()) // validação input
inputElement.addEventListener("change", () => handleInputChange()) // remover erro