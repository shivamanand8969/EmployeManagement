var data;
async function takedata(){
     data=await fetch('./data.json');
    data=await data.json();
   
    callEmp();
}

let empBox=document.getElementsByClassName('emp_box')[0];

function getId(id){
    let userIdData=data.find((value)=>value.id===id);
 
 let userpage=document.getElementsByClassName('user_Details')[0];
userpage.innerHTML=` 
<div style="width:400px; height:500px; border-radius:10px; border:2px solid red; display:flex; justify-content:center; align-items:center; flex-direction:column; gap:10px;">
<div class="profileImage"></div>
<img width="130px" height:"130px" style="border-radius: 80%; border:2px solid red" src="https://th.bing.com/th/id/OIP.lkVN1WDlcV2jQCq-9LT7-wHaIJ?rs=1&pid=ImgDetMain"/>

<div style="font-size:large; font-family: sans-serif; color:red;">Work: ${userIdData ? userIdData?.name :" "}</div>
<div style="font-size:large; font-family: sans-serif; color:red;">Work: ${userIdData ? userIdData?.work :' '}</div>
<div style="font-size:large; font-family: sans-serif; color:red;">Mobile No: ${userIdData? userIdData?.MobileNo:' '}</div>
<div style="font-size:large; font-family: sans-serif; color:red;">Id: ${userIdData ? userIdData?.id:" "}</div>
<div style="font-size:large; font-family: sans-serif; color:red;">Address: ${userIdData ? userIdData?.address:" "}</div>
</div>
`
}
function deletedata(id){
    console.log("Delete function called",id)
       data=data.filter((value)=>value.id!=id);
       document.getElementsByClassName('emp_box')[0].innerHTML=""
       callEmp()
}

function callEmp(){

data.map((value)=>{
    let div=document.createElement('div');
    div.id=value.id;
    div.onclick=()=>getId(value.id);
    let span=document.createElement("span");
    span.className='cross';
    span.innerText="x";
    span.onclick=()=>deletedata(value.id);

    let emp__bo=document.createElement('div');
    emp__bo.className="emp__box";

    let NameSpan=document.createElement('span');
    NameSpan.innerText=value.name;

    emp__bo.appendChild(NameSpan);
    emp__bo.appendChild(span);
    div.appendChild(emp__bo);
    empBox.appendChild(div)

})
}

takedata();

let popup=document.getElementById('formPopup');

let hidpop=document.getElementsByClassName('hidepopup')[0];
hidpop.addEventListener('click',()=>{
    hidePopup();
})
function hidePopup(){
    let popup=document.getElementsByClassName('popup')[0];
    popup.style.display="none";
}

let buttonpopup=document.getElementById('formPopup');
buttonpopup.addEventListener('click',()=>{
    let popup=document.getElementsByClassName('popup')[0];
   popup.style.display='flex'
})

document.getElementById('btnSubmit').addEventListener('click',(e)=>{
    e.preventDefault();
    let name=document.getElementById('name').value;
    let work=document.getElementById('work').value;
    let mobleno=document.getElementById('mobileNo').value;
    let address=document.getElementById('addresss').value;
    let id=Math.random()*123443211;
    console.log("Name",name, "work",work, "mbileno",mobleno,"address", address,"id",id);
    data.push({name:name,work:work,MobileNo:mobleno,id:id,address:address});
    let popup=document.getElementsByClassName('popup')[0];
    popup.style.display="none";
    document.getElementsByClassName('emp_box')[0].innerHTML=""

    callEmp();

})