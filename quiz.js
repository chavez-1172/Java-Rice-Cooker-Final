// Java Rice Cooker - Quiz Engine
// Handles question rendering, sound effects, scoring, feedback, trivia unlock, and navigation.

// Simple Retro 8-bit Audio Synthesizer using Web Audio API
class RetroSound {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playSelect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {}
  }

  playCorrect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.5);
    } catch (e) {}
  }

  playIncorrect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.25);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {}
  }

  playVictory() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = this.ctx.currentTime + (idx * 0.12);
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.12, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.2);
      });
    } catch (e) {}
  }
}

const soundFX = new RetroSound();

// Quiz Application State
let currentLessonKey = null;
let currentLessonData = null;
let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false;

// Helper to launch quiz from anywhere
window.takeQuiz = function(lessonId) {
  window.location.href = `quiz.html?lesson=${encodeURIComponent(lessonId)}`;
};

// Automatic button hook for lesson pages
document.addEventListener('DOMContentLoaded', () => {
  // If we are on quiz.html, initialize the quiz screen
  if (document.getElementById('quizScreen')) {
    initQuizPage();
  }

  // Hook up any Take Quiz buttons across other lesson pages
  const quizButtons = document.querySelectorAll('.quiz-btn, .nextpage-btn');
  quizButtons.forEach(btn => {
    if (btn.textContent && btn.textContent.includes('Take Quiz')) {
      btn.style.cursor = 'pointer';
      // If button doesn't already have an onclick or href
      if (!btn.getAttribute('onclick') && (!btn.getAttribute('href') || btn.getAttribute('href') === '#' || btn.getAttribute('href') === '')) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const pageName = window.location.pathname.split('/').pop().toLowerCase();
          let targetLesson = 'java';
          if (pageName.includes('variable')) targetLesson = 'variables';
          else if (pageName.includes('condition')) targetLesson = 'conditions';
          else if (pageName.includes('loop') || pageName.includes('array')) targetLesson = 'loops';
          else if (pageName.includes('class')) targetLesson = 'classes';
          else if (pageName.includes('object')) targetLesson = 'objects';
          else if (pageName.includes('accessmod')) targetLesson = 'accessmod';
          else if (pageName.includes('oop')) targetLesson = 'oop';
          window.takeQuiz(targetLesson);
        });
      }
    }
  });
});

// Initialize the quiz page
function initQuizPage() {
  // Determine lesson from URL query params or hash
  const params = new URLSearchParams(window.location.search);
  let lessonKey = params.get('lesson');
  if (!lessonKey && window.location.hash) {
    lessonKey = window.location.hash.replace('#', '');
  }

  if (lessonKey && QUIZ_DATA[lessonKey]) {
    startQuiz(lessonKey);
  } else {
    showLessonSelector();
  }
}

// Show module picker if no lesson specified
function showLessonSelector() {
  const container = document.getElementById('quizScreen');
  if (!container) return;

  document.getElementById('quizTitle').textContent = "Java Rice Cooker - Quizzes";

  let cardsHtml = '<div class="lesson-grid">';
  for (const [key, lesson] of Object.entries(QUIZ_DATA)) {
    const isCompleted = isLessonCompleted(key);
    cardsHtml += `
      <a href="quiz.html?lesson=${key}" class="lesson-card">
        <div>
          <h3>${lesson.title} ${isCompleted ? '⭐' : ''}</h3>
          <p>${lesson.subtitle}</p>
        </div>
        <div class="start-quiz-tag">
          ${isCompleted ? '✓ Completed (Retake)' : 'Take Quiz >'}
        </div>
      </a>
    `;
  }
  cardsHtml += '</div>';

  container.innerHTML = `
    <h2 class="quiz-lesson-title">Select a Lesson Quiz</h2>
    <p class="quiz-lesson-subtitle">Choose any topic below to test what you've learned!</p>
    ${cardsHtml}
    <div style="margin-top: 30px;">
      <a href="lessons.html" class="pixel-btn secondary">&lt; Back to Lessons</a>
    </div>
  `;
}

// Start a specific quiz
function startQuiz(lessonKey) {
  currentLessonKey = lessonKey;
  currentLessonData = QUIZ_DATA[lessonKey];
  currentQuestionIndex = 0;
  score = 0;
  isAnswered = false;

  // Update Top Nav Back Icon link to the current lesson page
  const backNav = document.getElementById('navBackLesson');
  if (backNav && currentLessonData.lessonUrl) {
    backNav.setAttribute('href', currentLessonData.lessonUrl);
    backNav.setAttribute('title', 'Back to Lesson');
  }

  // Update Page Title
  document.getElementById('quizTitle').textContent = "Java Rice Cooker - Quiz";

  renderQuestion();
}

// Render the current question
function renderQuestion() {
  isAnswered = false;
  const container = document.getElementById('quizScreen');
  if (!container || !currentLessonData) return;

  const total = currentLessonData.questions.length;
  const qData = currentLessonData.questions[currentQuestionIndex];
  const progressPercent = Math.round((currentQuestionIndex / total) * 100);

  const letters = ['A', 'B', 'C', 'D'];

  const optionsHtml = qData.options.map((opt, idx) => `
    <button class="option-btn" onclick="handleSelectOption(${idx})" id="opt-${idx}">
      <span class="option-prefix">${letters[idx]}</span>
      <span class="option-text">${escapeHtml(opt)}</span>
    </button>
  `).join('');

  container.innerHTML = `
    <div class="quiz-meta-bar">
      <span class="quiz-badge">${currentLessonData.badge}</span>
      <span class="quiz-progress-text">Question ${currentQuestionIndex + 1} of ${total}</span>
      <button class="sound-toggle-btn" onclick="toggleSound()" id="soundToggleBtn">
        ${soundFX.enabled ? '🔊 Sound: ON' : '🔇 Sound: OFF'}
      </button>
    </div>

    <div class="progress-container">
      <div class="progress-fill" style="width: ${progressPercent}%;"></div>
    </div>

    <h2 class="quiz-lesson-title">${currentLessonData.title}</h2>
    <p class="quiz-lesson-subtitle">${currentLessonData.subtitle}</p>

    <div class="question-card">
      <p class="question-prompt">${escapeHtml(qData.question)}</p>
      ${qData.code ? `
        <div class="quiz-code-block">
          <pre><code>${escapeHtml(qData.code)}</code></pre>
        </div>
      ` : ''}
    </div>

    <div class="options-grid" id="optionsGrid">
      ${optionsHtml}
    </div>

    <div class="feedback-box" id="feedbackBox">
      <div class="feedback-status" id="feedbackStatus"></div>
      <p class="feedback-explanation" id="feedbackExplanation"></p>
    </div>

    <div class="quiz-action-bar">
      <a href="${currentLessonData.lessonUrl}" class="pixel-btn secondary">&lt; Review Lesson</a>
      <button class="pixel-btn" id="nextActionBtn" style="display: none;" onclick="handleNextStep()">
        ${currentQuestionIndex + 1 === total ? 'View Results >' : 'Next Question >'}
      </button>
    </div>
  `;
}

// Handle User Option Selection
window.handleSelectOption = function(selectedIndex) {
  if (isAnswered) return;
  isAnswered = true;

  const qData = currentLessonData.questions[currentQuestionIndex];
  const isCorrect = (selectedIndex === qData.answer);

  if (isCorrect) {
    score++;
    soundFX.playCorrect();
  } else {
    soundFX.playIncorrect();
  }

  // Update Option Buttons
  const totalOptions = qData.options.length;
  for (let i = 0; i < totalOptions; i++) {
    const btn = document.getElementById(`opt-${i}`);
    if (btn) {
      btn.disabled = true;
      if (i === qData.answer) {
        btn.classList.add('correct');
      } else if (i === selectedIndex) {
        btn.classList.add('incorrect');
      }
    }
  }

  // Show Feedback Box
  const feedbackBox = document.getElementById('feedbackBox');
  const feedbackStatus = document.getElementById('feedbackStatus');
  const feedbackExp = document.getElementById('feedbackExplanation');
  const nextBtn = document.getElementById('nextActionBtn');

  if (feedbackBox && feedbackStatus && feedbackExp && nextBtn) {
    feedbackBox.style.display = 'block';
    if (isCorrect) {
      feedbackStatus.className = 'feedback-status correct';
      feedbackStatus.innerHTML = '✅ Correct! Excellent Work!';
    } else {
      feedbackStatus.className = 'feedback-status incorrect';
      feedbackStatus.innerHTML = '❌ Incorrect!';
    }
    feedbackExp.textContent = qData.explanation;
    nextBtn.style.display = 'inline-block';
    nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
};

// Handle Next Question or Results
window.handleNextStep = function() {
  soundFX.playSelect();
  currentQuestionIndex++;
  const total = currentLessonData.questions.length;

  if (currentQuestionIndex < total) {
    renderQuestion();
  } else {
    renderResults();
  }
};

// Render Quiz Completion Screen
function renderResults() {
  const container = document.getElementById('quizScreen');
  if (!container || !currentLessonData) return;

  const total = currentLessonData.questions.length;
  const percent = Math.round((score / total) * 100);
  const passed = percent >= 70; // 70% passing threshold (e.g. at least 8 out of 11)

  if (passed) {
    soundFX.playVictory();
    saveLessonCompletion(currentLessonKey, score, total);
  }

  let triviaHtml = '';
  if (passed && currentLessonData.trivia) {
    triviaHtml = `
      <div class="trivia-box">
        <div class="trivia-header">
          <span>🔓</span> JAVA HISTORY TRIVIA UNLOCKED!
        </div>
        <p class="trivia-content">${escapeHtml(currentLessonData.trivia)}</p>
      </div>
    `;
  }

  const resultTitle = passed ? '🎉 LESSON COMPLETED!' : '⚡ KEEP PRACTICING!';
  const resultIcon = passed ? '🏆' : '📚';
  const resultDesc = passed
    ? `Awesome job! You passed the quiz for <strong>${currentLessonData.title}</strong> and proved your Java skills!`
    : `You scored ${score} out of ${total}. Review the lesson material and try again to unlock the Java trivia!`;

  container.innerHTML = `
    <div class="quiz-meta-bar">
      <span class="quiz-badge">${currentLessonData.badge}</span>
      <span class="quiz-progress-text">Completed</span>
    </div>

    <div class="results-card" style="display: block;">
      <div class="results-icon">${resultIcon}</div>
      <h2 class="results-title">${resultTitle}</h2>
      
      <div class="results-score-badge ${passed ? '' : 'failed'}">
        SCORE: ${score} / ${total} (${percent}%)
      </div>

      <p class="results-desc">${resultDesc}</p>

      ${triviaHtml}

      <div class="quiz-action-bar" style="justify-content: center; gap: 15px; margin-top: 30px;">
        <button class="pixel-btn secondary" onclick="startQuiz('${currentLessonKey}')">
          🔄 Retake Quiz
        </button>
        <a href="${currentLessonData.lessonUrl}" class="pixel-btn secondary">
          📖 Review Lesson
        </a>
        ${
          passed && currentLessonData.nextLessonUrl
            ? `<a href="${currentLessonData.nextLessonUrl}" class="pixel-btn success">
                Next: ${escapeHtml(currentLessonData.nextLessonTitle)} &gt;
               </a>`
            : `<a href="lessons.html" class="pixel-btn">
                All Lessons Menu &gt;
               </a>`
        }
      </div>
    </div>
  `;
}

// Sound toggle
window.toggleSound = function() {
  soundFX.enabled = !soundFX.enabled;
  const btn = document.getElementById('soundToggleBtn');
  if (btn) {
    btn.textContent = soundFX.enabled ? '🔊 Sound: ON' : '🔇 Sound: OFF';
  }
};

// Storage helpers
function saveLessonCompletion(lessonKey, score, total) {
  try {
    const data = JSON.parse(localStorage.getItem('java_rice_cooker_progress') || '{}');
    data[lessonKey] = {
      passed: true,
      score: score,
      total: total,
      updatedAt: Date.now()
    };
    localStorage.setItem('java_rice_cooker_progress', JSON.stringify(data));
  } catch (e) {}
}

function isLessonCompleted(lessonKey) {
  try {
    const data = JSON.parse(localStorage.getItem('java_rice_cooker_progress') || '{}');
    return !!(data[lessonKey] && data[lessonKey].passed);
  } catch (e) {
    return false;
  }
}

// Utility to escape HTML strings safely
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
