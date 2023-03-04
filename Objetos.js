const datosPersonales = {
    nombre: "Denis",
    apellido: "Ponce",
    edad: 34,
    altura: 1.75,
    esDesarrollador: true,
}

const miEdad = "edad"

console.log(datosPersonales[miEdad])

const listaAmigos = [
    {
        nombre: "Denis",
        apellido: "Ponce",
        edad: 34,
        altura: 1.75,
        esDesarrollador: true,
    },
    {
        nombre: "Gabriel",
        apellido: "Canteros",
        edad: 27,
        altura: 1.75,
        esDesarrollador: false,
    },
    {
        nombre: "Marcela",
        apellido: "Ramirez",
        edad: 40,
        altura: 1.60,
        esDesarrollador: false,
    }
]

listaAmigos.sort((a,b) => b.edad - a.edad)

console.log(listaAmigos)