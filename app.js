// Información de usuarios

const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];

// Funciones

function specialtyFilter(usersData) {
    const marketing = usersData.filter((user) => user.specialty === 'marketing');
    const developers = usersData.filter((user) => user.specialty === 'developers');
    const QAs = usersData.filter((user) => user.specialty === 'QAs');
    const ventas = usersData.filter((user) => user.specialty === 'ventas');
    const specialtiesArray = [marketing, developers, QAs, ventas]

    return specialtiesArray
}

function printUsers(specialty) {
    const userInfo = specialty.forEach(user => {
        `   <li>
                <p>ID: ${user.id}</p>
                <p>Nombre: ${user.name}</p>
                <p>Edad: ${user.age}</p>
            </li>`})

    const template = `
        <h3> Número de usuarios: ${specialty.length} </h3>
        <ul>
            ${userInfo}
        </ul>`
    return template
}

// App

const express = require('express')
const app = express()

// Rutas

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Specialties</title>
            </head>
            <body>
                <h1 style="text-align: center">Home</h1>
                <nav styles="text-align: center">
                    <a href="/marketing">Marketing</a>
                    <a href="/developers">Developers</a>
                    <a href="/QAs">QAs</a>
                    <a href="/ventas">Ventas</a>
                </nav>
            </body>
        </html>`)
})

app.get('/marketing', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Specialties: Marketing</title>
            </head>
            <body>
                <h1 style="text-align: center">Marketing</h1>
                <nav styles="text-align: center">
                    <a href="/">Home</a>
                    <a href="/developers">Developers</a>
                    <a href="/QAs">QAs</a>
                    <a href="/ventas">Ventas</a>
                </nav>
                ${printUsers(specialtyFilter(usersData)[0])}
            </body>
        </html>`)
})

app.get('/developers', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Specialties: Developers</title>
            </head>
            <body>
                <h1 style="text-align: center">Developers</h1>
                <nav styles="text-align: center">
                    <a href="/">Home</a>
                    <a href="/marketing">Marketing</a>
                    <a href="/QAs">QAs</a>
                    <a href="/ventas">Ventas</a>
                </nav>
                ${printUsers(specialtyFilter(usersData)[1])}
            </body>
        </html>`)
})

app.get('/QAs', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Specialties: QAs</title>
            </head>
            <body>
                <h1 style="text-align: center">QAs</h1>
                <nav styles="text-align: center">
                    <a href="/">Home</a>
                    <a href="/marketing">Marketing</a>
                    <a href="/developers">Developers</a>
                    <a href="/ventas">Ventas</a>
                </nav>
                ${printUsers(specialtyFilter(usersData)[2])}
            </body>
        </html>`)
})

app.get('/ventas', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Specialties: Ventas</title>
            </head>
            <body>
                <h1 style="text-align: center">Ventas</h1>
                <nav styles="text-align: center">
                    <a href="/">Home</a>
                    <a href="/marketing">Marketing</a>
                    <a href="/developers">Developers</a>
                    <a href="/QAs">QAs</a>
                </nav>
                ${printUsers(specialtyFilter(usersData)[3])}
            </body>
        </html>`)
})

app.use((req, res) => {
    res.status(404).send('<h1>Página no encontrada</h1><a href="/">Volver a la página principal</a>')
})

app.listen(3000, () => {
    console.log('Specialties is listening on port 3000')
})