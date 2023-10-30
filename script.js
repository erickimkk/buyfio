let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nexImage();
},2000)

function nexImage(){
    count++;
    if(count>17){
        count=1;
    }

document.getElementById("radio"+count).checked = true;

}