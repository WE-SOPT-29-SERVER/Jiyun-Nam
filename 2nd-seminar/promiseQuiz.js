const members=require("./members")

const getOnline = members => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter(o => o.location === "online");
      resolve(data);
    }, 500);
  });
};

const getOffline = members => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter(o => o.location === "offline");
      resolve(data);
    }, 500);
  });
};

const getYB = members => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter(o => o.group === "YB");
      resolve(data);
    }, 500);
  });
};

const getOB = members => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter(o => o.group === "OB");
      resolve(data);
    }, 500);
  });
};

//체이닝
getOnline(members).then(getOB).then(console.log);
getYB(members).then(getOffline).then(console.log);

//getOnline(members).then((onlineMembers)=>getOB(OnlineMembers)).then(console.log);

//마지막 부분 async,await으로 변경
const asyncFunc = async(members)=>{
  const onlineMembers = await getOnline(members);
  const offlineMembers = await getOB(onlineMembers);
  console.log(onlineObMembers)
}