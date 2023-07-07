const express = require("express");

const connectDB = require("./Config/db");
const auth = require("./MIddleware/auth");

const app = express();


const PORT = 8000;


app.use(express.json());
app.use(require("cors")());

app.use("/api", require("./Route/Auth"));
app.use("/api", require("./Route/cotact"));

app.use("/protected",auth,(req,res)=>{
        return res.status(200).json({
            user:req.user
        })
});


app.get("/",(req,res)=>{
    console.log("Done");
})
app.listen(PORT, () => {
    connectDB();
  console.log(`server listening on port: ${PORT}`);
});