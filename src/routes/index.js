function setRoutes(app) {
    const MainController = require('../controllers/mainController');
    const mainController = new MainController();

    app.get('/', mainController.getMain.bind(mainController));
    app.post('/', mainController.postMain.bind(mainController));
}

module.exports = setRoutes;