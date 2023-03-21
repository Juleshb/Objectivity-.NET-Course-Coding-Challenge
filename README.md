# Objectivity-Challenge
Objectivity .NET Course Coding Challenge

- Challenge questions:

## Word Frequency Analyzer:
Create a function that reads a text input and outputs a list of unique words in the text, along with their frequency count. The words should be sorted by frequency, with the most frequent words appearing first.
- Answer:
- This code defines a function called word that takes a string text as input. The function performs the following steps:

- Converts the input text to lowercase and removes any punctuation marks (,, ., ?, and !) using a regular expression.
- Splits the text into an array of words using the split() method.
- Creates a Map object called freqMap to store the frequency of each word in the text.
- Loops through each word in the array, incrementing the frequency count for that word in the freqMap.
- Sorts the entries in the freqMap by descending order of frequency using the sort() method and returns the sorted array.

## Text-based Quiz Application:
Develop a text-based quiz application with multiple-choice questions. The app should read questions with answers from an array, display the question randomised to the user, track the user's score, and provide a final summary of the results

- answer
In this implementation, the quiz array contains objects that represent each question, with the question text, an array of answer options, and the index of the correct answer. The score variable keeps track of the user's score. The for...of loop iterates over the shuffled questions and displays each question and its answer options using console.log(). The parseInt() function is used to convert the user's answer from a string to an integer. If the user's answer matches the index of the correct answer (adjusted by 1 because the options are displayed with 1-based numbering), the score is incremented. Finally, the user's score and the total number of questions are displayed using console.log().
