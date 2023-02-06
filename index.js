const form = document["grocery-h"]

form.addEventListener("submit", function (event) {
    event.preventDefault()

    //alert("It's working")

    const label = document.getElementById("food").value

    //set input value to ""

    //console.log(label)
    // 1. list
    const li = document.createElement("li")
    const h1 = document.createElement("h1")
    const editbutton = document.createElement("button")
    const deletebutton = document.createElement("button")
    //2. 
    h1.textContent = label
    editbutton.textContent = "edit"
    deletebutton.textContent = "delete"
    li.append(h1)
    li.append(editbutton)
    li.append(deletebutton)
    document.getElementsByTagName("ul")[0].append(li)
})


// deleteButton.addEventListener("click", function (event){
//       li.remove()

// })


 function deletebutton(event) {
     log.textContent = `Form reset! Timestamp: ${event.timeStamp}`;
   }
  
   const form2 = document.getElementById('list');
   const log = document.getElementById('log');
   form.addEventListener('reset', logReset);



//          then "";
//      }

// })
// let clear = document.getElementsByTagName("deletebutton")

// clear.addEventListener("click", function (event) {

//         document.getElementsByTagName("ul")[0].textContent = ""

// once you refresh it, 
//you'll be able do a git-request 


//     })
//?s to Ask when you make a mistake: 1. What can I learn from this? 2. What could I have done differently? 3. Do I need to acquire or improve some skills? 4. Who can I learn from? 5. What will I do next?