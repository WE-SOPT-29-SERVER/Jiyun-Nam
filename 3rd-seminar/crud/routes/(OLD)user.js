/*
const express=require("express");

const router=express.Router();
const users=require("../dbMockup/user");
const util=require("../lib/util.js");
const responseMessage=require("../constants/responsemessage");
const statusCode=require("../constants/statusCode");

// /user/signup 핸들링하는 코드
router.post('/signup', (req, res)=>{
    //email, password

    //const email=req.body.email;
    //const name=req.body.name;
    //const password= req.body.password; //postman body에서 받아옴
    
    //비구조화 할당
    const{email, name, password}=req.body;

    //비구조화 할당 이름 바꿀수도 있음
    //const{email:myEmail, name:myName, password:myPassword}=req.body;

    //예외처리
    //request body가 잘못됐을 때
    if(!email || !name || !password){
        //return res.status(400).send({status:400, message:"BAD REQUEST"})

        /*util파일 이용해서 형식 통일->클라가 연결할 때 편함
        return res.status(400).send(util.fail(400, "BAD REQUEST")); */

        //statusCode.js랑 responseMessage.js 불러와서 사용 -> 유지보수에 편함
        /*
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    //해당 email을 가진 user가 이미 있을 때
    const alreadyUser = users.filter(obj => obj.email===email).length>0; //배열타입임
    if(alreadyUser){
        //return res.status(400).send({status:400, message:"ALEADY EMAIL"});
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                    statusCode.BAD_REQUEST,responseMessage.ALREADY_EMAIL)
            );
    }

    const newUser={
        id:users.length+1,
        name,
        password,
        email
    }; //응답객체를 만들어서
    
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CREATED_USER, newUser)); //send
});

router.post("/login", async(req, res)=>{ //async 쓰는 이유 : await 곧 사용할 예정
    const{email, password};
    if(!email || !password){
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    const user = users.filter(user => user.email===email)[0];
    if(!user){
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }
    
    if(user.password !== password){
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW));
    }

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, data));

    
        
});
module.exports=router;


*/