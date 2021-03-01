let button = document.querySelector("button");
let education = document.getElementById("education");
let capital = document.getElementById("capital");
let skills = document.getElementsByClassName("skills")
let result = document.getElementById("Result");
let loveletter = document.querySelector("textarea");
let name = document.getElementById("name");
let bid = document.getElementById("bid");
let age = document.getElementsByName("age");

button.addEventListener("click", () => {
    if (name.value != '' & bid.value != '') {
        let total = [bid.value, education.value, capital.value].reduce(function (a, b) { return a * b });
        total = getTotalCheckbox(skills, total);
        total = getTotalRadio(age, total);
        for (i = 0; i < 3; i++) {
            let reputation = document.getElementById("reputation" + i);
            if (reputation.checked === true) {
                if (reputation.value !== "200") {
                    total *= Number(reputation.value);
                } else {
                    total -= Number(reputation.value);
                }
            }
        }
        let person = {
        groom_name: name.value,
        groom_price: total,
        letter_to_groom: loveletter.value
        };
        result.innerText = `The price for your groom ${person.groom_name} is ${person.groom_price}$\n Your love letter is: "${person.letter_to_groom}"`;
    } else {
        alert('Error: please fill required fields (name, bid)')
    }
});
const getTotalCheckbox = (skiils, total) => {
    for (i = 0; i < skills.length; i++) {
        if (skills[i].checked === true) {
            total += Number(skills[i].value);
        }
    }
    return total;
}
const getTotalRadio = (age, total) => {
    age.forEach(item => {
        if (item.checked) {
            total *= Number(item.value)
        }
    })
    return total;
}
