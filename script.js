function timer(){
    fadein()
    let seconds = 10
    let timer_sec = document.getElementById('timer')
    timer_sec.innerText = seconds
    fadeOut()

    function fadein() {
        setTimeout(() => {
            timer_sec.classList.add('time')
            timer_sec.style.display='flex'
        },0);
    }

    function fadeOut() {
        setTimeout(() => {
            timer_sec.classList.remove('time')
            timer_sec.style.display='none'
        },1000);
    }

    setTimeout(()=>{
        fadein()
        timer_sec.innerText = seconds-1  
        fadeOut()
    },2000)
    

    setTimeout(()=>{
        fadein()
        timer_sec.innerText = seconds-2
        fadeOut()
    },4000)

    setTimeout(()=>{
        fadein()
        timer_sec.innerText = seconds-3
        fadeOut()
    },6000)

    setTimeout(()=>{
        fadein()
        timer_sec.innerText = seconds-4
        fadeOut()
    },8000)

    setTimeout(()=>{
        fadein()
        timer_sec.innerText = seconds-5
        fadeOut()
    },10000)

    setTimeout(()=>{
        fadein()
        timer_sec.innerText = seconds-6
        fadeOut()
    },12000)

    setTimeout(()=>{
        fadein()
        timer_sec.innerText = seconds-7
        fadeOut()
    },14000)

    setTimeout(()=>{
        fadein()
        timer_sec.innerText = seconds-8
        fadeOut()
    },16000)

    setTimeout(()=>{
        fadein()
        timer_sec.innerText = seconds-9
        fadeOut()
    },18000)

    setTimeout(()=>{
        fadein()
        timer_sec.innerText = seconds-10
        fadeOut()
    },20000)

    setTimeout(()=>{
        fadein()
        timer_sec.innerText = '>Happy Developers Day<'
        timer_sec.style.fontSize = '100px'
    },22000)
}

timer()
