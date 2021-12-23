const admin = require("firebase-admin"); //얘가 있어야 firebase functions를 실행 가능
const serviceAccount = require("./wesopt29-8f39a-firebase-adminsdk-zian7-64a4f12b2f"); //admin권한을 얻기 위해 제공하는 크레덴셜?
const dotenv = require("dotenv"); //.으로 시작하는 파일을 사용할 수 있게 해줌. 깃허브에 올라가지 않는게 좋은 파일

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require("./api"),
};