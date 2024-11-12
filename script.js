const ul = document.querySelector('.contenitor');


for (let i = 1; i <= 100; i++) {
    const li = document.createElement('li');
    
    if (i % 3 === 0 && i % 5 === 0) {
        li.textContent = "FizzBuzz";
        li.classList.add('fizzbuzz');
    } else if (i % 3 === 0) {
        li.textContent = "Fizz";
        li.classList.add('fizz');
    } else if (i % 5 === 0) {
        li.textContent = "Buzz";
        li.classList.add('buzz');
    } else {
        li.textContent = i;
        li.classList.add('number');
    }

    
    ul.appendChild(li);
}