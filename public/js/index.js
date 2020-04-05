weatherForm = document.querySelector('form');
locationInput = document.querySelector('input');
messageOne = document.querySelector('.message-1');
messageTwo = document.querySelector('.message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    fetch(`/weather?address=${locationInput.value}`)
        .then((response) => {
                response.json().then((data) => {
                    if (data.error) {
                        messageOne.innerHTML = '<span class="error">' + data.error + '</span>';
                        messageTwo.textContent = '';
                    } else {
                        messageOne.innerHTML = '<span class="temp">' + data.forcast.main.temp + '<sup>&#176</sup>C' + '</span>';
                        messageTwo.innerHTML = '<span class="location">' + data.location + '</span>';
                    }
                })
        })
        .catch(error => {
            console.log(error)
        });
});