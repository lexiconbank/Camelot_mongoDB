const express           = require('express');
const app               = express();
const cors              = require('cors')
const AccountController = require('./controllers/AccountController');
const MemberController = require('./controllers/MemberController');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/front/login', AccountController.login);
app.post('/api/front/registration', AccountController.registration);


 
//  -------------------- Michael Merin -----------------

app.post('/api/front/dashboard', MemberController.dashboard);
app.post('/api/front/wallet', MemberController.wallet);
app.post('/api/front/invite', MemberController.invite);

// ----------------------end Michael ---------------------


app.listen({port: 4000}, (err) => {
    if(err) {
        console.log(err);
        process.exit(1);
    }else {
        console.log('Camelot server is running on port 4000...');
    }
});