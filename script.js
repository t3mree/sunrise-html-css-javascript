let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat');
let t3mree = document.querySelector('.t3mree');

window.onscroll = function () {
    let value = scrollY;
    
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    t3mree.style.fontSize = value + 'px';
    
    if (scrollY >= 79) {
        t3mree.style.fontSize = '79px';
        t3mree.style.position = 'fixed';
        
        if (scrollY >= 99) {
            t3mree.style.position = 'fixed';
            
            if (scrollY >= 453) {
                t3mree.style.display = 'none'; 
            } else {
                t3mree.style.display = 'block'; 
            
             }
             if(scrollY >= 99 )
                document.querySelector('.main').style.background = 'linear-gradient(#717be6, #10001f)'
        }else{
                document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'


        }
    }
}
