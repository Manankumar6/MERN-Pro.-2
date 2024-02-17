require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const authRouter = require('./router/auth-router')
const contactRoute = require('./router/contact-router')
const serviceRoute = require('./router/service-router')
const adminRoute = require('./router/admin-router')
const connectDb = require('./utils/db');
const errorMiddleware = require("./middleware/error_middleware");
// let's tackle cor

app.use(cors());
app.use(express.json())
app.use("/api/auth",authRouter);
app.use("/api/form",contactRoute)
app.use("/api/data",serviceRoute)

// ]let's define admin route
app.use('/api/admin',adminRoute)

app.use(errorMiddleware);
app.get('/', (req,res)=>{
    res.send("Hello World")
})
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`App is listening on the port http://localhost:${PORT} `)
    })
})