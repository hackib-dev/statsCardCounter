var valueDisplay = document.querySelectorAll('.counter');
speed = 10;
// console.log(valueDisplay)

valueDisplay.forEach(values => {

    function updateCount(){
    var new_value = parseInt(values.getAttribute('value'));
    var default_count = parseInt(values.textContent);

    if(default_count < new_value){
        values.textContent  = Math.floor(default_count + new_value/speed);
        setTimeout(updateCount,100)
    } else{
        values.textContent=new_value;
    }

}
updateCount();
});

