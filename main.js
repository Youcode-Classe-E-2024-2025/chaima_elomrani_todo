const addbtn = document.getElementById("addbtn");
const form=document.getElementById("form");
const exit=document.getElementById("exit");
addbtn.addEventListener('click',function(){
    form.style.display="block";
});

exit.addEventListener('click',function(){
    form.style.display="none";
});

