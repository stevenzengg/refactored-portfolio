const wrapper = document.getElementById("wrapper");
wrapper.dataset.configuration = 1;

let prev = 2;
setInterval(() => {
    wrapper.dataset.configuration = prev;
    if(prev == 2){
        prev = 1;
    } else {
        prev = 2;
    }
}, 5000);