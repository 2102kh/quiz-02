// import {Product} from "../models/Product";
const questions = [
  {
      question:"Who is the author of the famous novel Pride and Prejudice?",
      answer:["Jane Austen", " Emily Brontë", " Charlotte Brontë", "Virginia Woolf"],
      correct: 1,
  },
  {
      question:"What is the chemical symbol for gold?",
      answer:["Au","Ag","Fe","Pb"],
      correct:1,
  },
  {
    question:"Which planet is known as the Red Planet?",
    answer:["Mars","Jupiter","Venus","Saturn"],
    correct:1,
},
{
  question:"Who was the first woman to win a Nobel Prize?",
  answer:["Marie Curie","Jane Goodall","Rosa Parks","Mother Teresa"],
  correct:1,
}
]

const quiz = document.querySelector('#quiz') 
const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');
const listTemplate = document.querySelector('#list-template')



let score = 0;
let questionIndex = 0;//aktuell fråga


clearPage()
showQuestion()
submitBtn.onclick= checkAnswer;


function clearPage(){
headerContainer.innerHTML = '';
listContainer.innerHTML = '';
}


function showQuestion(){  
  const headerTemplate = `<h2 class ="title">%title%</h2>`;
    const title = headerTemplate.replace('%title%',questions[questionIndex]['question'])
    headerContainer.innerHTML = title;
    console.log(title)
    let answerNumber = 1;


    for(let [index, answerText] of questions[questionIndex]['answer'].entries()){  
    console.log(index)  
    const questionTemplate =
    `<li id="list-template">
     <label>
      <input value="%number%" type="radio" class="answer" name="answer"/>
        <span>%answer%</span>
     </label>
    </li>`
    const answerHtml = questionTemplate
    .replace('%answer%',answerText)
    .replace('%number',answerNumber);
    // console.log(answerHtml)
    // listContainer.innerHTML = listContainer.innerHTML + answerHtml;//det är samma sak som kod nere
    listContainer.innerHTML += answerHtml;
    answerNumber++;
   }  
  }


function checkAnswer(){
  console.log('checkAnswer started!')
//vi ska hitta selected radio button
// const checkRadio = listContainer.querySelector('input[type="radio"]:checked')
const checkRadio = listContainer.querySelector('input:checked');//eftersom det är bara en type av radio ,vi kan skriva så


//om svar har inte vald vi gå ut
if(!checkRadio){
  listTemplate.style.color = "pink"

  submitBtn.blur()
  return
}


const userAnswer = parseInt(checkRadio.value)
//om svar är rätt, ökar vi poängen


if(userAnswer === questions[questionIndex]['correct']){
  score++;
}
console.log('score',score)


if(questionIndex !== questions.length -1){
  questionIndex++;
  clearPage();
  showQuestion();
}else{
  console.log('Den här är sista frågan!')
  clearPage()
  showResultat()
}
}
function showResultat(){
 console.log('Started')
 const resultTemplate =`
   <h2 class="title">%title%</h2>
   <h3 class="summary">%message%</h3>
   <p class="result">%result%</p>
 `;


}