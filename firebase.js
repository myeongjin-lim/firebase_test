const firebaseConfig = {
    apiKey: "AIzaSyDT74qdcaKhNjinAri1PiFb3GQc2ViwP_E",
    authDomain: "project-mj-497ae.firebaseapp.com",
    databaseURL: "https://project-mj-497ae-default-rtdb.firebaseio.com",
    projectId: "project-mj-497ae",
    storageBucket: "project-mj-497ae.appspot.com",
    messagingSenderId: "709909543141",
    appId: "1:709909543141:web:98d4ddff59c2435443fc0c",
    measurementId: "G-BQY4H4FK9E"
  };

// 파이어베이스 앱 초기화
const app = firebase.initializeApp(firebaseConfig);

// 파이어베이스 실시간 데이터베이스 생성
const database = firebase.database();

// 데이터 저장 실습
function writeUserData(userId, email, nick) {
    database.ref("users/"+userId).set({
        email: email,
        nick : nick
    });
}

// 데이터 읽기 실습
// 1. 전체 조회된 결과 출력
//   - 테이블 태그 or 목록 태그를 활용해서 출력

// 2. 특정 사용자 조회 
//   - id값 입력받은 후 해당 사용자의 email, nick 출력
function readUserData(){
    database.ref("users/").on('value',(snapshot)=>{
        //실시간 데이터베이스 값 접근
        console.log(snapshot.val());

        let data = snapshot.val();
        let keys = Object.keys(data);

        console.log(Object.keys(data));
        console.log(data["smart"]);
        console.log(data[keys[0]]);

        const result = document.getElementById("result");

        //데이터베이스 웹 페이지 출력
        result.innerText = `${data[keys[0]].email} / ${data[keys[0]].nick}`;


    })
}

//////////////////////////////////////////////////////////////////

const btn = document.frm.btn;
const readBtn = document.getElementById("readBtn");

readBtn.addEventListener("click",()=>{
    readUserData();
});

btn.addEventListener("click",(event)=>{
    event.preventDefault();

    const id = document.frm.id.value;
    const email = document.frm.email.value;
    const nick = document.frm.nick.value;

    console.log(id, email, nick);

    writeUserData(id, email, nick);

});