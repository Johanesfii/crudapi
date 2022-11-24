const express = require('express');
const app = express();
const mongoose = require('mongoose');
const customerRouter = require("./routes/CustomerRoutes");

// middleware
app.use(express.json());
app.use("/api/customers", customerRouter);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

// configure mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/crud",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("Connected to MongoDB");
        }
    }
);

module.exports = app;