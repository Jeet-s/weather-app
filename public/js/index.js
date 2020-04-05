weatherForm = document.querySelector('form');
locationInput = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/weather?address=${locationInput.value}`)
        .then((response) => {
            if (response.error) {
                return console.log(response.error)
            }
            response.json().then((data) => {
                console.log(data);
            })
        })
        .catch(error => {
            console.log(error)
        });
});