// ********************** form *****************************
const addbtn = document.getElementById("addbtn");
const form=document.getElementById("form");
const exit=document.getElementById("exit");

addbtn.addEventListener('click',function(){
    form.style.display="block";
});

exit.addEventListener('click',function(){
    form.style.display="none";
});
 
// ********************** array *****************************
const tacheArray = [] ;
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click',function(){
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

    tacheArray.push(newtask);
    console.log(-8)
    

})




// **********************************************************



