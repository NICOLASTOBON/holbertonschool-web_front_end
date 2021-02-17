let studentHogwarts = (function () {
    let privateScore = 0, name = null

    let changeScore = (points) => privateScore += points

    return {
        setName: (newName) => name = newName,
        rewardStudent: _ => changeScore(1),
        penalizeStudent: _ => changeScore(-1),
        getScore: _ => `${name}: ${privateScore}`
    }
})

let harry = studentHogwarts()
harry.setName("Harry")
harry.rewardStudent()
harry.rewardStudent()
harry.rewardStudent()
harry.rewardStudent()
console.log(harry.getScore())

let draco = studentHogwarts()
draco.setName("Draco")
draco.rewardStudent()
draco.penalizeStudent()
draco.penalizeStudent()
draco.penalizeStudent()
console.log(draco.getScore())
