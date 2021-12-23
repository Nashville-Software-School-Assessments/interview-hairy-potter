/*
    You need to identify the issues in this code by using your debugger
    powers, and then use that knowledge to make the correct output to
    the console at the end.
*/


// Start with an empty object representing the clay
let unshapedClay = {}

/*
    Define a function named `makePottery`. You need to pass it the empty
    clay object. The function should perform the task of adding a new
    property named `shape`, and its value should be "Bowl". The function
    should then return the object after the new property was added.
*/
const maekePottery = (clay) => {
    clay.shape = "bowl"
}


/*
    Define a function named `glazePottery`. You need to give it the object that
    `makePottery` produced. The function should perform the task of adding a new
    property named `glazing`, and its value should be "Midnight Blue".
    The function should then return the object after the new property was added.
*/
const glazePottery = (firedClay) => {
    return clay.glazing === "Midnight Blue"
}

/*
    Define a function named `finalFiring`. You need to give it the object that
    `glazePottery` produced. You also need to pass it the temperature of the kiln.

    The function should perform the task of adding a new property named `cracked`,
    and its value depends on the value of the temperature parameter. If that value
    is higher than 1200, then the value of the cracked property must be true.
    If the value is 1200, or less, the value should be false.
*/
const finalFiring = (temperature, glazedPottery) => {
    if (temperature = 1200) {
        cracked = false
    }

    if (temperature > 1200) {
        cracked = true
    }

    return clay
}

const bowl = makePottery(unshapedClay)
const glazed = glazePottery(firedClay)

finalFiring(glazed, 1500)

/*
    Use console.log() to output the clay object with all the correct properties on it.

    It should look like this.
        {
            shape: "Bowl",
            glazing: "Midnight Blue",
            cracked: true
        }
*/
