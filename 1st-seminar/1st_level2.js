const { group } = require("console");

const members=[
    {
    name:"남지윤",
    address:"공덕",
    age:22,
    hobby:"서든",
    },
    {
    name:"이승헌",
    address:"광흥창",
    age:23,
    hobby:"게임",
    },
    {
    name:"이정은",
    address:"숙대입구",
    age:23,
    hobby:"게임",
    },
    {
    name:"최진영",
    address:"효공",
    age:22,
    hobby:"산책",
    },
];

const member=()=>{
    members.forEach(
        person=>console.log(
            "제 이름은 "+person.name+"입니다. 나이는 "+person.age+"살 입니다. 저는 "+person.address+"에 살며 "+person.hobby+"를 좋아합니다."        
        ),
    )
};

member();


