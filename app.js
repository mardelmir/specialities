const users = require('./users.js');
const style = require('./style.js');
const express = require('express');
const app = express();

// Funciones
const specialtyFilter = (specialty) =>
    users.filter((user) => user.specialty === specialty);

const printUsers = (filteredUsers) => {
    const userInfo = filteredUsers.map((user) => `
            <li>
                <p><span>ID:</span> ${user.id}</p>
                <p><span>Nombre:</span> ${user.name}</p>
                <p><span>Edad:</span> ${user.age}</p>
            </li>`);
    return userInfo.join('');
};

// App
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${style}
            <title>Specialties</title>
            </head>
            <body>
                <h1>Home</h1>
                <nav>
                    <a href="/marketing">Marketing</a>
                    <a href="/developers">Developers</a>
                    <a href="/QAs">QAs</a>
                    <a href="/ventas">Ventas</a>
                </nav>
            </body>
        </html>`);
});

app.get('/marketing', (req, res) => {
    const marketing = specialtyFilter('marketing');
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${style}
            <title>Specialties: Marketing</title>
            </head>
            <body>
                <h1>Marketing</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/developers">Developers</a>
                    <a href="/QAs">QAs</a>
                    <a href="/ventas">Ventas</a>
                </nav>
                <h3> Número de usuarios: ${marketing.length}</h3>
                <ul>
                    ${printUsers(marketing)}
                </ul>
            </body>
        </html>`);
});

app.get('/developers', (req, res) => {
    const developers = specialtyFilter('developers');
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${style}
            <title>Specialties: Developers</title>
            </head>
            <body>
                <h1>Developers</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/marketing">Marketing</a>
                    <a href="/QAs">QAs</a>
                    <a href="/ventas">Ventas</a>
                </nav>
                <h3> Número de usuarios: ${developers.length}</h3>
                <ul>
                    ${printUsers(developers)}
                </ul>
            </body>
        </html>`);
});

app.get('/QAs', (req, res) => {
    const QAs = specialtyFilter('QAs');
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${style}
            <title>Specialties: QAs</title>
            </head>
            <body>
                <h1>QAs</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/marketing">Marketing</a>
                    <a href="/developers">Developers</a>
                    <a href="/ventas">Ventas</a>
                </nav>
                <h3> Número de usuarios: ${QAs.length}</h3>
                <ul>
                    ${printUsers(QAs)}
                </ul>
            </body>
        </html>`);
});

app.get('/ventas', (req, res) => {
    const ventas = specialtyFilter('ventas');
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
           ${style}
            <title>Specialties: Ventas</title>
            </head>
            <body>
                <h1>Ventas</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/marketing">Marketing</a>
                    <a href="/developers">Developers</a>
                    <a href="/QAs">QAs</a>
                </nav>
                <h3> Número de usuarios: ${ventas.length}</h3>
                <ul>
                    ${printUsers(ventas)}
                </ul>
            </body>
        </html>`);
});

app.use((req, res) => {
    res
        .status(404)
        .send(`${style}<h1>Página no encontrada</h1><div><a href='/'">Volver a la página principal</a></div>`
        );
});

app.listen(3000, () => {
    console.log('Specialties is listening on port 3000');
});

