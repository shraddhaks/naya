let express = require('express');
let app = express();
let apiRoutes = require("./routes/api-routes")
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let designerRoutes = require("./routes/designer-routes")
let makerRoutes = require("./routes/maker-routes")
var cors = require('cors');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(cors());

// //To Allow Requests from Another Port, OR to prevent CORS Error
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//     );
//     next();
//   });
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/naya', { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World with Express'));
// app.use('/api', apiRoutes);
app.use('/api/designer', designerRoutes);
app.use('/api/maker', makerRoutes);

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});