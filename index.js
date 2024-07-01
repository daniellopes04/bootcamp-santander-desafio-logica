let heroName = "Danubius"
let heroXP = 5623
let heroLevel = "Ferro"
const messageStart = "O Herói de nome"
const messageEnd = "está no nível de"

if (heroXP >= 1001 && heroXP <= 2000) {
    heroLevel = "Bronze"
} else if (heroXP >= 2001 && heroXP <= 5000) {
    heroLevel = "Prata"
} else if (heroXP >= 5001 && heroXP <= 7000) {
    heroLevel = "Ouro"
} else if (heroXP >= 7001 && heroXP <= 8000) {
    heroLevel = "Platina"
} else if (heroXP >= 8001 && heroXP <= 9000) {
    heroLevel = "Ascendente"
} else if (heroXP >= 9001 && heroXP <= 10000) {
    heroLevel = "Imortal"
} else if (heroXP >= 10001) {
    heroLevel = "Radiante"
}

console.log(`O Herói de nome '${heroName}' está no nível de '${heroLevel}'`)