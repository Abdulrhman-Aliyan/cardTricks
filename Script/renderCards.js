export function addCard(targetElement, dragable,callback){
const body = document.querySelector('body');

fetch('../View/Component/card.html')
    .then(response => response.text())
    .then(htmlContent => {
        body.innerHTML = htmlContent;
    }).then(function(){  
        const wrapper = body.querySelector(".wrapper");
        const header = wrapper.querySelector("header");
        dragable(wrapper);
    })
    .catch(error => {
        console.error(error);
    });

}