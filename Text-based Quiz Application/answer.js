const quiz = [
    {
      question: "my name is?",
      options: ["Jules", "kiki", "lili", "mimi"],
      answer: 0
    },
    {
      question: "I am writing?",
      options: ["text", "codes", "leter", "quiz"],
      answer: 1
    },
    {
      question: "I will submit on?",
      options: ["github", "gitlab", "gform", "email"],
      answer: 0
    }
  ];
  
  let score = 0;
  for (const question of quiz.sort(() => Math.random() - 0.5)) { 
    console.log(question.question);
    for (let i = 0; i < question.options.length; i++) {
      console.log(`${i + 1}. ${question.options[i]}`);
    }
    const answer = parseInt(prompt("Enter your answer (1-4):"));
    if (answer === question.answer + 1) {
      console.log("Correct!");
      score++;
    } else {
      console.log("Incorrect.");
    }
  }
  
  console.log(`You scored ${score} out of ${quiz.length} questions.`);
  