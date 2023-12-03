class Cat {
    constructor(Breed, Age, Gender, Color, Name, Catimage, isAsleep) {
        this.Breed = Breed;
        this.Age = Age;
        this.Gender = Gender;
        this.Color = Color;
        this.Name = Name;
        this.Catimage = Catimage;
        this.isAsleep = isAsleep;
    }

    askForFood() {
        if (!this.isAsleep) {
            console.log(`${this.Name} is asking for food.`);
        } else {
            console.log(`${this.Name} is asleep and cannot ask for food.`);
        }
    }

    sleep() {
        this.isAsleep = true;
        console.log(`${this.Name} is now sleeping.`);
    }

    wakeUp() {
        this.isAsleep = false;
        console.log(`${this.Name} woke up.`);
    }
}

const cats = [
    new Cat("Немає", 4, "male", "рижий", "Рижик", "./images/Ginger-cat.jpg", true),
    new Cat("Довгошорстна", 2, "female", "білий", "Мурка", "./images/White-cat.jpg", false),
    new Cat("Немає", 1, "male", "чорний", "Барсик", "./images/Black-cat.jpg", true)
];

function toggleCatInfo(catIndex) {
    const cat = cats[catIndex];
    document.getElementById('catImage').src = cat.Catimage;
    document.getElementById('breed').innerText = cat.Breed;
    document.getElementById('age').innerText = cat.Age;
    document.getElementById('name').innerText = cat.Name;
    document.getElementById('gender').innerText = cat.Gender;
    document.getElementById('color').innerText = cat.Color;
    document.getElementById('status').innerText = cat.isAsleep ? "Спить" : "Не спить";
}
toggleCatInfo(0);
