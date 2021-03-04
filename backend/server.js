const express           = require('express');
const app               = express();
const cors              = require('cors')
const AccountController = require('./controllers/AccountController');
const AdminController = require('./controllers/AdminController');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/front/login', AccountController.login);
app.post('/api/front/registration', AccountController.validateRegistration);
app.post('/api/admin/nobilities', AdminController.postNobilities);
app.post('/api/get/admin/nobilities', AdminController.getNobilities);
app.post('/api/remove/nobilities', AdminController.removeNobilties);
app.post('/api/update/nobilities', AdminController.updateNobilities);

app.listen({port: 4000}, (err) => {
    if(err) {
        console.log(err);
        process.exit(1);
    }else {
        console.log('Camelot server is running on port 4000...');
    }
});