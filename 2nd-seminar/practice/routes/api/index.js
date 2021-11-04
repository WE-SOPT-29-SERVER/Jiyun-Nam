const express=require("express");
const router=express.Router();

router.get("/", (req, res)=>{
    const result={
        status:200,
        messge:"api~!",
    };
    res.status(200).send(result);
});

module.exports=router;