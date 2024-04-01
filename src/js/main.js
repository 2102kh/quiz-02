const quiz = document.querySelector('#quiz') 
const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');


const questions = [
    {
        question:"Vilket språk körs i weblässaren?",
        answer:["Java", "C", "Python", "JavaScript"],
        correct: 4,
    },
    {
        question:"Vad står CSS för?",
        answer:["Central Style Sheets","Cascading Style Sheets","CascadingSimple Sheets","Cars Suvs Sailboats"],
        correct:2,
    }
]
console.log(questions)
let score = 0;
let questionIndex = 0;//aktuell fråga

clearPage()
showQuestion()
function clearPage(){
headerContainer.innerHTML = '';
listContainer.innerHTML = '';
}

function showQuestion(){  
  const headerTemplate = `<h2 class ="title">%title%</h2>`;
    const title = headerTemplate.replace('%title%',questions[questionIndex]['question'])
    headerContainer.innerHTML = title; 
    console.log(title)

    for(let answerText of questions[questionIndex]['answer']){     
    const questionTemplate =
    `<li>
     <label>
      <input type="radio" class="answer" name="answer"/>
        <span>%answer%</span>
      </label>
    </li>`
    const answerHtml = questionTemplate.replace('%answer%',answerText)
    console.log(answerHtml)
    listContainer.innerHTML = listContainer.innerHTML + answerHtml;
   }  
  }







