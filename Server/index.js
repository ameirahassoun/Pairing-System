const server = require('./server');

const PORT = process.env.PORT || 3000;

if (!module.parent) {
    app.listen(PORT, () => {
        console.log(`The Port : ${PORT}`);
    });
}

module.exports = app;