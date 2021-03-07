// const tabs = document.querySelector('.tabs');
// const panels = document.querySelectorAll('.panel');
// console.log(tabs);

// tabs.addEventListener('click', (e)=>{
//     if(e.target.tagName == "A"){
//         const targetPane = document.querySelector(e.target.dataset.target);
//         panels.forEach(panel =>{
//             if(panel == targetPane){
//                 panel.classList.add('active');
//             }else{
//                 panel.classList.remove('active');
//             }
//         });
//     }
// });


let tabs =  document.querySelectorAll('.tab');
let panels = document.querySelectorAll('.panel')
tabs.forEach(tab =>{
    tab.addEventListener('click', e =>{
        let panelss = e.target.attributes[1].value;
        if (e.target.attributes[1].value == panelss){
            panels.forEach(panel =>{
                panel.classList.remove('active')
            })
            document.querySelector(panelss).classList += " active"
        }
    })
})





