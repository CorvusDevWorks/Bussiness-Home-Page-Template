


let menu= document.querySelector('.toggle');
let list=document.querySelector(' .menu');

menu.addEventListener('click',showHide);


function showHide() {
    
    if(menu.classList.contains("active")) {
        
        menu.classList.remove('active');
        menu.innerHTML="&#9776;"
		list.classList.remove('active');
		
		console.log('Gasi');
    }
    
    else {
        menu.innerHTML="&#9932;"
        menu.classList.add('active');
		list.classList.add('active');
		
		console.log('Pali');
        
    }
    
    
}





