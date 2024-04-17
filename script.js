function nameParts(firstName, lastName){
    const body = document.getElementsByTagName("body")
    const div = document.createElement('div')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    p1.textContent = firstName
    p2.textContent = lastName
    p1.classList.add('firstName')
    p2.classList.add('lastName')
    body[0].append(div)
    div.append(p1, p2)
}

// nameParts('Yulia', 'Gurevich Lurie')

const objectArray = [
    {name: "iPhone14", discription: "phone", price: 5500},
    {name: "samsung A30", discription: "phone", price: 3900},
    {name: "onePlus 10 pro", discription: "phone", price: 3000},
    {name: "Lenovo", discription: "computer", price: 7400},
    {name: "HP", discription: "computer", price: 6000},
    {name: "Asus", discription: "computer", price: 6800},
]

function clearContent() {  
    const removeDiv = document.getElementsByTagName("div")
    for(let i = 1; i < removeDiv.length + 1; i++){
        i--
        const parent = removeDiv[i].parentNode 
        parent.removeChild(removeDiv[i])
        console.log("pls work!");
    }
} 

function itemList(price){
    clearContent()
    const body = document.getElementsByTagName("body")
    // let i = 1
    // let divClassNames = []
    objectArray.forEach(item => {
        if(item.price <= price){
            const div = document.createElement('div')
            body[0].append(div)
            div.classList.add('div')
            div.textContent = "name:" + item.name + " description:" + item.discription + " price:" + item.price

            // divClassNames.push("div" + i)
            // let currentNewDiv = document.createElement(divClassNames[divClassNames.length - 1])
            // body[0].append(currentNewDiv)
            // currentNewDiv.classList.add(divClassNames[divClassNames.length - 1])
            // divClassNames[divClassNames.length - 1].textContent = item
            // i++

        }
    })
}

class Ride{
    constructor(renterName, rentalDate, killometers){
        this.renterName = renterName
        this.rentalDate = rentalDate
        this.killometers = killometers
    }
}

class Car{
    constructor(brand, model, available = true, totalKillometers, ridesArray){
        this.brand = brand
        this.model = model
        this.totalKillometers = totalKillometers
        this.ridesArray = ridesArray
    }

    sumKillometers(){
        let sum = 0
        for(let i = 0; i < this.ridesArray.length; i++){
            sum += ridesArray[i].killometers
        }
        this.totalKillometers = sum
    }

    addRide(ride){
        this.ridesArray.posh(ride)
        this.sumKillometers
    }
}

class Fleet{
    fleet = []
    constructor(companyName){
        this.companyName = companyName
    }

    addCar(car){
        this.fleet.push(car)
    }

    highestKillometras(){
        let resCar = this.fleet[0]
        for(let i = 1; i < this.fleet.length; i++){
            if(this.fleet[i].totalKillometers > resCar.totalKillometers){
                resCar = this.fleet[i]
            }
        }
        return resCar
    }

    freeForRent(){
        let freeForRent = []
        for(let i = 1; i < this.fleet.length; i++){
            if(this.fleet[i].available){
                freeForRent.push(this.fleet[i])
            }
        }
        return freeForRent
    }

    addRide(carBrand, carModel, ride){
        for(let i = 1; i < this.fleet.length; i++){
            if(this.fleet[i].brand === carBrand && this.fleet[i].model
                 === carModel){
                    this.fleet[i].addRide(ride)
                 }
        }
    }
}

