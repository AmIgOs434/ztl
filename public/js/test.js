const quizData = [
    {
        question: "Какой сироп самый лучший?",
        a: "Лин",
        b: "Солодки",
        c: "Доктор мом",
        d: "Не люблю сиропы",
        correct: "b",
    },
    {
        question: "Кто лучший работник месяца?",
        a: "Лысяков З.А",
        b: "Шапкин Н.А.",
        c: "Харламова Е.Ю. ",
        d: "Какая то уборщица",
        correct: "d",
    },
    {
        question: "Лучшая компания по производству корня солодки?",
        a: "Что то там фарм",
        b: "Что то там торг",
        c: "ЦЕХ 52 !!!!",
        d: "Не люблю сиропы",
        correct: "c",
    },
    {
        question: "Кто?",
        a: "Я",
        b: "Он",
        c: "Они",
        d: "Мы",
        correct: "d",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
        if(score>=3){
            quiz.innerHTML = `
            <h1 style{{text-align:'center'}}>ПОЗДРАВЛЯЕМ !</h1>
            <h2>Вы ответили на ${score}/${quizData.length} вопросов верно</h2>
            <h2>Получите приз у Николая</h2>
            <img class='img__' src='https://sun9-50.userapi.com/impg/lMHJ7Jqjk3FXi1bj4-g60zRvsD9UvX7p8QlOwg/HD45k5WxPpw.jpg?size=318x271&quality=96&sign=a8298aabbf26c2b7101c2f931f8f3f9c&type=album' />
            <button onclick="location.reload()">Reload</button>
            `
        }else{
            quiz.innerHTML = `
            <h2>Вы ответили на ${score}/${quizData.length} вопросов верно</h2>
      <div class='beed'>НЕВЕРНО БЕ-БЕ-БЕ  </div>
      <div class='beed'>Чем ты слушал(а) вообще блин </div>
            <img class='img__' src='https://sun9-6.userapi.com/impg/-B07Y3Bzj9soz_U60CCsXFjgJ0pl8k98SsM9xw/YRf9r9y-Z_w.jpg?size=486x1080&quality=95&sign=538a127e933dd5e52ad2f963a4ca2625&type=album' />
            <button onclick="location.reload()">Reload</button>
            `
        }
           
       }
    }
})    