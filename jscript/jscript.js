((window, document, undefined)=>{
    'use strict'

    //Selectors
    const up = document.querySelector("#up"); 
    const doc = document.documentElement;

    //Methods

    const scrollHide = () => {
        if(window.innerHeight * 0.4 < doc.scrollTop){

            up.style.opacity = "100";

        }
        if(window.innerHeight * 0.4 > doc.scrollTop){

            up.style.opacity = "0";
            
        }
    }


    //Events
    
    window.addEventListener("scroll", scrollHide);
    

})(window, document);

