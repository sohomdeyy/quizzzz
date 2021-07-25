const quizDB=[
    {
        question:"q1:what is 5+5?",
        a:"7",
        b:"12",
        c:"10",
        d:"23",
        ans:"ans3"
    },
    {
        question:"q2:what is 45+5?",
        a:"7",
        b:"50",
        c:"10",
        d:"23",
        ans:"ans2"
    },
    {
        question:"q3:what is 5-5?",
        a:"7",
        b:"12",
        c:"10",
        d:"0",
        ans:"ans4"
    },
    {
        question:"q4:what is 5+5?",
        a:"7",
        b:"12",
        c:"10",
        d:"23",
        ans:"ans3"
    },
    {
        question:"q5:what is 5*5?",
        a:"7",
        b:"12",
        c:"10",
        d:"25",
        ans:"ans4"
    },
];

const question=document.querySelector('.ques');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');
let questionCount =0;
let score=0;
const loadQues = ()=>{
    question.innerText= quizDB[questionCount].question;
    option1.innerText= quizDB[questionCount].a;
    option2.innerText= quizDB[questionCount].b;
    option3.innerText= quizDB[questionCount].c;
    option4.innerText= quizDB[questionCount].d;

}
loadQues();
getCheckAnswer=()=>{
    let answer;
    answers.forEach((curanselement)=>{
       if(curanselement.checked){
           answer=curanselement.id;
            
         }  
       
    });
return answer;
    };
const deselectall=()=>{
    answers.forEach((curanselement)=>curanselement.checked=false);
}
submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);


if(checkedAnswer === quizDB[questionCount].ans){
    score++;
};
questionCount++;
deselectall();
if(questionCount<quizDB.length){
    loadQues();
}
else{
    showscore.innerHTML=`
    <h3> you scored ${score}/${quizDB.length}</h3>
    <button class="btn" onclick="location.reload()">play again</button>
    `
    ;
    showscore.classList.remove('score');
}
});