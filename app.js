const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

//
//             const db = mongoose.connection;
//                         mongoose.connection.on('error', err => {
//                             logError(err);
//                           });
//                         db.once('open', () => {
//                             console.log('we are connected');
//                           });
          

async function start() {
        try {
            console.log("Connecting to mongodb...");
             await mongoose.connect('mongodb://localhost/todos-db', {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                    });
                app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
                app.use("/api", require("./routes/routes"));
                app.use(bodyParser.json());
            
            } catch (error) {
                console.log('Server Error', error.message);
                handleError(error);
                process.exit(1);
            }
    }
    
start();