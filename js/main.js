let cardImg = document.querySelector('.card-img') 
let cardBody = document.querySelector('.card-body') 
let cardBody1 = document.querySelector('.card-body h5') 
let cardBody2 = document.querySelector('.card-body p') 
let userImg = document.querySelector('.user-img') 
let userInfo = document.querySelector('.user-info') 

setTimeout(content,2500);

function content(){
    cardImg.innerHTML = ` <img src="imgs/sky.jpg" alt="sky">`
    cardBody1.innerHTML = `<h5>Lorem ipsum dolor sit amet consectetur.</h5> `
    cardBody1.style.height = 'fit-content'
    cardBody1.classList = ''
    cardBody2.innerHTML = ` <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, odio!</p>`
    userImg.innerHTML = `  <img src="imgs/flower.jpg" alt="flower">`
    userInfo.innerHTML = ` <h5>John Doe</h5><span>Oct 08, 2020</span>`
}

// <div class="main">
// <div class="card">
// <div class="card-img">
//   <img src="/imgs/sky.jpg" alt="sky">&nbsp;
// </div>
// <div class="card-body">
//   <h5>Lorem ipsum dolor sit amet consectetur.</h5>
//   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, odio!</p>
//   <div class="user">
//     <div class="user-img">
//       <img src="/imgs/flower.jpg" alt="flower">
//     </div>
//     <div class="user-info">
//       <h5>John Doe</h5>
//       <span>Oct 08, 2020</span>
//     </div>
//   </div>
// </div>
// </div>
// </div>