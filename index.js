document.addEventListener('DOMContentLoaded', () => {

    const btn = document.getElementById('btn');
    const pr1 = document.getElementById('pr1');
    const pr2 = document.getElementById('pr2');
    const value1 = document.querySelector('#value1')
    const num = document.getElementById('num')
    const ma = document.getElementById('main');
    const body = document.getElementById('body');

    btn.addEventListener('click', () => {

        const nums = num.value

        if (pr1.value === 'kelvin' && pr2.value === 'fahrenheit') {
            let val = (nums - 273.15) * 9 / 5 + 32;
            value1.classList.add('col')
            value1.innerText = `kelvin -> fahrenheit :${val}°F`
        }

        if (pr1.value === 'kelvin' && pr2.value === 'celsius') {
            let val = nums - 273.15
            value1.classList.add('col')
            value1.innerText = `kelvin -> celsius :${val}°C`
        }

        if (pr1.value === 'celsius' && pr2.value === 'kelvin') {
            let val = nums + 273.15
            value1.classList.add('col')
            value1.innerText = `celsius -> kelvin :${val}K`
        }

        if (pr1.value === 'fahrenheit' && pr2.value === 'kelvin') {
            let val = (nums - 32) * 5 / 9 + 273.15
            value1.classList.add('col')
            value1.innerText = `fahrenheit -> kelvin :${val}K`
        }

        if (pr1.value === 'celsius' && pr2.value === 'fahrenheit') {
            let val = (nums * 9 / 5) + 32;
            value1.classList.add('col')
            if (val >= 32) {
                value1.innerText = `fahrenheit :${val}°F Freezing cold`
            }
            if (val >= 50) {
                value1.innerText = `fahrenheit :${val}°F Cool`
            }

            if (val >= 68) {
                value1.innerText = `fahrenheit :${val}°F Comfortable`

            }
            if (val >= 104) {
                value1.innerText = `fahrenheit :${val}°F hot`

            }
        }

        if (pr1.value === 'fahrenheit' && pr2.value === 'celsius') {
            let val = (nums - 32) * 5 / 9;
            value1.classList.add('col')
            if (val >= 0 && val < 10) {
                value1.innerText = `celsius :${val}°C Freezing cold`

            }
            if (val >= 10 && val < 20) {
                value1.innerText = `celsius :${val}°C Cool`

            }
            if (val >= 20 && val < 30) {
                value1.innerText = `celsius :${val}°C Comfortable`

            }
            if (val >= 30 && val < 40) {
                value1.innerText = `celsius :${val}°C Warm`

            }
            if (val >= 40) {
                value1.innerText = `celsius :${val}°C hot`

            }

        }
    })
})

