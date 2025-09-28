class MainController {
    getMain(req, res) {
        res.send('GET request to the main route');
    }

    postMain(req, res) {
        res.send('POST request to the main route');
    }
}

module.exports = MainController;