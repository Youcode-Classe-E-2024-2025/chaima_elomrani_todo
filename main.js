// ********************** form *****************************
const addbtn = document.getElementById("addbtn");
const formContainer=document.getElementById("form-container");
const form=document.getElementById("form");
const exit=document.getElementById("exit");
const todoAdd=document.querySelector('.todoAdd');
const doingAdd=document.querySelector('.doingAdd')
const line = document.querySelector('.line');

addbtn.addEventListener('click',function(){
    formContainer.style.display="block";
});

exit.addEventListener('click',function(){
    formContainer.style.display="none";
});
 
// ********************** array *****************************
const tacheArray = [] ;
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click',function(e){
    e.preventDefault()
    const title = document.getElementById("title").value;
    const description =document.getElementById("description").value;
    const date =document.getElementById("date").value;
    const priority =document.getElementById("priority").value;
    const statut =document.getElementById("statut").value;

    const newtask ={
        title: title,
        description :description,
        date :date,
        priority :priority,
        statut : statut,
    };

    console.log(newtask);

    tacheArray.push(newtask);
  
    console.log(tacheArray);

    form.reset();
    formContainer.style.display="none";

   
    // const card = document.createElement('div');
    // card.classList.add('doing-card');
    // card.appendChild(priority);
    affichage(tacheArray);
    lineColor(tacheArray);
    affichageDoing(tacheArray);
})
function lineColor(tacheArray){
    for(let i= 0 ; i<tacheArray.length; i++){
        if(tacheArray[i].priority === 'P1'){
            line.style.backgroundColor = 'red';
        }else if(tacheArray[i].priority === 'P2'){
            line.style.backgroundColor = 'orange';
        }else if(tacheArray[i].priority === 'P3'){
            line.style.backgroundColor = 'green';
        }
    }
}

function affichage(tacheArray){
     todoAdd.innerHTML='';
    for(let i= 0 ; i<tacheArray.length; i++){
        if(tacheArray[i].statut === 'todo'){

            let lineColor;
            if (tacheArray[i].priority === 'P1') {
                lineColor = 'red';
            } else if (tacheArray[i].priority === 'P2') {
                lineColor = 'orange';
            } else if (tacheArray[i].priority === 'P3') {
                lineColor = 'green';
            }

            todoAdd.innerHTML +=`
            <div class="tache">
                        <div class="tache-icon">
                            <div class="line" style="background-color: ${lineColor};"></div>
                            <button id="btn" style="background-color:white; border: none; "><i class='bx bxs-trash'
                                    style="padding-right: 20px;"></i></button>
                        </div>
                        <h4 class="title">${tacheArray[i].title}</h4>
                    </div>
          `
    }
        }
    }

         
    

