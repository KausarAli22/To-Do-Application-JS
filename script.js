(function(){
    var addButton;

    // select "Add To-DO" button and add click event listner to it 
    addButton=document.querySelector(".add-button");
    addButton.addEventListener("click",function(){
        // crete a new <li> tag as to-do and append it
        var addInput,toDoList,toDoLi,toDoCheckBox,toDoSpan,toDoEdit,toDoDelete;
        addInput=document.querySelector(".add-input");
        toDoList=document.querySelector(".to-do-list");

        //check if the value is valid or not
        if(!addInput.value.trim()){
            return;
        }
        
        // create a <li> tag node object and fill it up with user input
        toDoLi=document.createElement("li");
        toDoCheckBox=document.createElement("input");
        toDoCheckBox.setAttribute("type","checkbox");
        toDoSpan=document.createElement("span");
        toDoSpan.textContent = addInput.value.trim();

        //Add an "Edit To-Do" button
        toDoEdit=document.createElement("button");
        toDoEdit.textContent="Edit";
        toDoEdit.setAttribute("class","edit-button");

        //Add "Delete To-Do" button
        toDoDelete=document.createElement("button");
        toDoDelete.textContent="Delete";
        toDoDelete.setAttribute("class","delete-button")

        //append all tag to <li> and <li> tag to the HTML document
        toDoLi.appendChild(toDoCheckBox);
        toDoLi.appendChild(toDoSpan);
        toDoLi.appendChild(toDoEdit);
        toDoLi.appendChild(toDoDelete);
        toDoList.appendChild(toDoLi);
         
        // clear the value of the input field
        addInput.value="";
        // Add a click event to the edit button
        toDoEdit.addEventListener("click",function(e){
            // Show a prompt to edit the to-do and save it
            var newToDo;
            
            newToDo=prompt("Edit to-do:",toDoSpan.textContent);

            // check if new to-do is valid or not
            if(!newToDo.trim()){
                return;
            }
            toDoSpan.textContent=newToDo.trim();
        });

        //Add a click event to delete the to-do
        toDoDelete.addEventListener("click",function(){
            // show a confirm box and remove the <li> tag
            var confirmation;

            confirmation=confirm("Are you sure?");

            //check if deletion is confirmed or not
            if (confirmation){
                 toDoList.removeChild(toDoLi);
            }
        })
    });
})();