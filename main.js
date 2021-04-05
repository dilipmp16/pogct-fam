
var i = 0;

function bru() {

    var names = ["Mavicheri", "Dilip Mavicheri", "Deepa Chemery", "Dhruv Mavicheri"];
    var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
 

    if(i==4)
    {
        i=0;
    }
    document.getElementById("blab").src = images[i];
    document.getElementById("nm").innerText = names[i];
    i++;
    
}