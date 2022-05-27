// Date Display
const d = new Date();
 let choppeddate = d.toDateString();

document.getElementById("displaydate").innerHTML = choppeddate;
// Date Display
var obj=[];



//button function
function addtimetable(){
    document.getElementById("btn00").innerHTML="Added"

   setTimeout(() => {
       document.getElementById("btn00").innerHTML="Add"
    }, 2000);

   addlists();



    }

function clearlist(){
    obj=[];
    renderSchdule();
    document.getElementById("t-area").value="";
}



//adding lists
function addlists(){
    addSchdule(document.getElementById("t-area").value,document.getElementById("time").value);
}

function addSchdule(val,time){
    obj.push({ id:getuniqId(),valu:val,time:time});
    renderSchdule()
}
function renderSchdule(){
    var el=document.getElementById("schedule-list");
    el.children[1].innerHTML='';
    var html='';
    obj.forEach(function(x){
        html+=`<tr><td>${x.valu}</td><td>${x.time}</td><td><button onclick="deleteSchedule('${x.id}')" class="btn">Done</button></td></tr>`;
    })
    el.children[1].innerHTML=html;
}

function getuniqId() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  
function deleteSchedule(v){
    obj= obj.filter(x=>x.id!=v);
    renderSchdule();
}




    