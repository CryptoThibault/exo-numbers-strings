let msg = `C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar.`
let autor = 'Gustave Flaubert'
let bookname = 'Salammbô'
console.log(`Cette phrase provient du livre ${bookname} de ${autor}, elle contient ${msg.length} caractéres.`)

for (let i = 0; i < msg.length; ++i) {
  console.log(`character ${msg[i]} is at index: ${i}`)
}