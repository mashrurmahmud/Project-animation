const test=['web devloper', 'Cyber-Security expert', 'Back-end Devloper'];

let textScript = document.querySelector('.animate-text');
let index = 0;



const handleReset = ()=>{

    const word = test[index];
    textScript.textContent=word;
    gsap.fromTo(textScript, {
        y:25,
        duration:0.5,
        opacity:0,
    },{
        y:0,
        duration:0.5,
        opacity:1,
        delay:2
    })
    
    gsap.to(textScript, {
        y:-50,
        
        duration:0.8,
        opacity:0,
        delay:3,
        onComplete:()=>{
            index = (index + 1) % test.length;
            handleReset()
        }
    })



}



handleReset()






