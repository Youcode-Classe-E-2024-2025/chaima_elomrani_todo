// ********************** Form  *****************************
const addbtn = document.getElementById("addbtn");
const formContainer = document.getElementById("form-container");
const form = document.getElementById("form");
const exit = document.getElementById("exit");


addbtn.addEventListener('click', function () {
    formContainer.style.display = "block";
});


exit.addEventListener('click', function () {
    formContainer.style.display = "none";
});

// ********************** Task Array *****************************
const tacheArray = [];
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const priority = document.getElementById("priority").value;
    const statut = document.getElementById("statut").value;

    const newTask = {
        title: title,
        description: description,
        date: date,
        priority: priority,
        statut: statut,
    };

    tacheArray.push(newTask); 
    form.reset();
    formContainer.style.display = "none"; 

    affichage(); 
})
// ********************** Display Function *****************************

function affichage() {
    const todoAdd = document.querySelector('.todoAdd');
    const doingAdd = document.querySelector('.doingAdd');
    const doneAdd = document.querySelector('.doneAdd');

        todoAdd.innerHTML = '';
    doingAdd.innerHTML = '';
    doneAdd.innerHTML = '';

       tacheArray.forEach((task, index) => {
        let lineColor;
        if (task.priority === 'P1') {
            lineColor = 'red';
        } else if (task.priority === 'P2') {
            lineColor = 'orange';
        } else if (task.priority === 'P3') {
            lineColor = 'green';
        }

       
        const taskHTML = `
            <div class="tache" data-index="${index}">
                <div class="tache-icon">
                   
                    <div class = "buttons">
                    <div class="line" style="background-color: ${lineColor};"></div>
                    <button class="trash-btn" style="background-color:white; border: none;"><i class='bx bxs-trash' style="padding-right: 20px;"></i>
                    </button>
                    <div onclick="editTask(${index})" class="editbtn" id="editbtn"><i class='bx bxs-message-rounded-edit'></i></div>
                    </div>
                <h4 class="title">${task.title}</h4>
               
            </div>
        `;

       
        if (task.statut === 'todo') {
            todoAdd.innerHTML += taskHTML;
        } else if (task.statut === 'doing') {
            doingAdd.innerHTML += taskHTML;
        } else if (task.statut === 'done') {
            doneAdd.innerHTML += taskHTML;
        }
    });

   
    document.querySelectorAll('.trash-btn').forEach(button => {
        button.addEventListener('click', function () {
            const taskElement = this.closest('.tache');
            const index = taskElement.getAttribute('data-index');
            deleteTask(index);
            modifier (index);
        });
    });
}

// ********************************* Delete Function ********************************
function deleteTask(index) {

    tacheArray.splice(index, 1);
    

    affichage();
}
function editTask(index){
    const formEdit=document.querySelector('.form-edit');
    formEdit.style.display="block";
    document.getElementById("title-edit").value = tacheArray[index].title
    document.getElementById("description-edit").value = tacheArray[index].description   
     document.getElementById("date-edit").value = tacheArray[index].date
    document.getElementById("priority-edit").value = tacheArray[index].priority
    document.getElementById("statut-edit").value = tacheArray[index].statut
    document.getElementById("form-edit").addEventListener("submit", function(e){
        e.preventDefault();
        tacheArray[index] = {
            title:document.getElementById("title-edit").value,
            description:document.getElementById("description-edit").value,
            date:document.getElementById("date-edit").value,
            statut:document.getElementById("statut-edit").value,
            priority:document.getElementById("priority-edit").value 
        }
        console.log( tacheArray[index])
        affichage();
        const formEdit=document.querySelector('.form-edit');
        formEdit.style.display="none";


    })


   

}

