window.addEventListener('load', () => {
    function generateAdvice() {
        const advice_number = document.querySelector('strong')
        const advice_display = document.querySelector('h1')
    
        fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(({slip}) => {
            advice_number.innerHTML = `Advice #${slip.id}`
            advice_display.innerHTML = `" ${slip.advice} "`
        })
    }

    generateAdvice()

    document.querySelector('#gen-advice').addEventListener('click', generateAdvice)
})