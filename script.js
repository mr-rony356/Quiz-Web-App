const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const signupBtn = document.getElementById('signup-btn');
const cancelSignupBtn = document.getElementById('cancel-signup');
const practiceQuestionsSection = document.getElementById('practice-questions');
const mockTestSection = document.getElementById('mock-test');
const practice10Btn = document.getElementById('practice-10-btn');
const practice20Btn = document.getElementById('practice-20-btn');
const mock5Btn = document.getElementById('mock-5-btn');
const mock10Btn = document.getElementById('mock-10-btn');
const timerElement = document.getElementById('timer');
const resultsElement = document.getElementById('results');

// Function to simulate login/signup (replace with actual authentication logic)
function handleLoginSignup(event) {
  event.preventDefault(); // Prevent default form submission behavior
  alert('You are logged in!'); // Simulate successful login/signup
  loginForm.style.display = 'none';
  signupForm.style.display = 'none';
  practiceQuestionsSection.style.display = 'block';
}

loginForm.addEventListener('submit', handleLoginSignup);
signupForm.addEventListener('submit', handleLoginSignup);

// Toggle signup form visibility
signupBtn.addEventListener('click', () => {
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

cancelSignupBtn.addEventListener('click', () => {
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
});

// Handle selecting number of questions for practice
practice10Btn.addEventListener('click', () => {
  // Simulate loading and displaying 10 practice questions
  console.log('10 Practice Questions Selected');
  // Replace with logic to fetch/display questions
});

practice20Btn.addEventListener('click', () => {
  // Simulate loading and displaying 20 practice questions
  console.log('20 Practice Questions Selected');
  // Replace with logic to fetch/display questions
});

// Handle selecting number of questions and starting mock test
let mockTestQuestions; // Variable to store questions for mock test
let timeRemaining = 300; // Example time limit in seconds (adjust as needed)
let timerInterval;

function startMockTest(questionCount) {
  mockTestQuestions = generateMockTestQuestions(questionCount); // Replace with logic to generate questions
  displayMockTestQuestions();
  startTimer();
  mockTestSection.style.display = 'block';
}

mock5Btn.addEventListener('click', () => startMockTest(5));
mock10Btn.addEventListener('click', () => startMockTest(10));

function displayMockTestQuestions() {
  // Simulate displaying the first question on the mock test
  const questionArea = document.getElementById('question-area');
  questionArea.innerHTML = 'Question 1: Here goes the question content.'; // Replace with actual question data
}

function startTimer() {
  timerElement.textContent = formatTime(timeRemaining);
  timerInterval = setInterval(() => {
    timeRemaining--;
    timerElement.textContent = formatTime(timeRemaining);
    if (timeRemaining === 0) {
      clearInterval(timerInterval);
      showResults();
    }
  }, 1000); // Update timer every second
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function showResults() {
  // Simulate calculating and displaying results
  resultsElement.style.display = 'block';
  resultsElement.textContent = 'Your mock test results will be shown here.';
  clearInterval(timerInterval);
}

// Placeholder function to replace with actual logic for generating mock test questions
function generateMockTestQuestions(count) {
  const questions = [];
  // Replace with logic to fetch/generate questions based on count
  return questions;
}