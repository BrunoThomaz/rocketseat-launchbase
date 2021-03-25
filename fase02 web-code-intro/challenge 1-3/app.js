function init () {
    let newFieldButton = document.querySelector ('button#newField');
    newFieldButton.onclick = (event) => addField(event);

    let devButton = document.querySelector ('button#devData');
    devButton.onclick = () => devData();

}

users = [];
function devData () {
    let name = document.getElementById('developer').value || 'Bruno Thomaz';
    users.nome = name;
    let count = 0;
    users.tecnologia = {};
    for (knowledge of document.getElementsByClassName('knowledge')) {
        users.tecnologia[count] = knowledge.value;
        count++;
    }
    console.log(users);
}


//function to create a new knowledge field
function addField (element) {
    //create an add button.
    let el = element.target;
    let button = document.createElement("button");
    button.id = "newField";
    button.innerText = "+";
    button.onclick = (event) => addField(event);
    el.parentElement.insertBefore(button, el);
    // end add button.

    //create an input:text name.
    let name = document.createElement("input");
    name.type = "text";
    name.name = "name";
    name.className = "knowledge";
    name.placeholder = "Name";
    el.parentElement.insertBefore(name, el);
    // end input:text name.

    //create a remove button.
    let buttonRemove = document.createElement("button");
    buttonRemove.id = "removeField";
    buttonRemove.innerText = "-";
    buttonRemove.onclick = () => removeField (event);
    el.parentElement.insertBefore(buttonRemove, el);
    // end remove button.
    el.remove();
}

//function to remove the knowledge field
function removeField (event) {
    let previous1 = event.target.previousElementSibling;
    let element = event.target;
    previous1.remove();
    element.remove();
}

window.onload = init();