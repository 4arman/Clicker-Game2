const timer = document.querySelector('.timer')
const clickBtn = document.querySelector('.click-btn')
const clickInfo = document.querySelector('.nums')
const resBtn = document.querySelector('.restart-btn')
const mainBlock = document.querySelector('.main-block')
const span = document.querySelector('span')
const results = document.querySelector('.res-block')

let num = 0

let newNums = 1

clickBtn.onclick = function () {
    num += 1
}

function timerInterval () {
    const interval = setInterval(() => {
    timer.textContent -=1
    if (timer.textContent === '0') {
        timer.textContent = 'Your Clicks:'
        timer.style = 'font-size: 50px'
        clickInfo.style = 'display: flex;'
        clickInfo.textContent = num
        setTimeout(() => {
            resBtn.style = 'display: flex;'
        },1300)
        clearInterval(interval)
        results.insertAdjacentHTML('beforeend', `
        <p><span>${newNums + ':'}
        ${clickInfo.textContent}</span></p>`)
    }
},1000)
}

timerInterval()

resBtn.onclick = function () {
    let bigNums = [15,30,45,60,75,90,105,120,135,150]
    for (n of bigNums) {
        if (newNums === n) {
            results.innerHTML = `Results:`
        }
    }
    newNums += 1
    resBtn.style = 'display: none'
    clickBtn.textContent = 'Click Here'
    timer.textContent = '10'
    timer.style = 'font-size: 90px;'
    clickInfo.style = 'display:none'
    num = 0
    timerInterval()
}
