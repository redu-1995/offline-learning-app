import React, { useState } from 'react';
import { englishGrade1 } from './data/englishGrade1';
import GradePicker from './pages/GradePicker';
import LessonMenu from './pages/LessonMenu';
import LessonViewer from './pages/LessonViewer';
import SubjectPicker from './pages/SubjectPicker';
import './App.css';

function App() {
  // Navigation State
  // Possible views: 'subject', 'grade', 'menu', 'viewer'
  const [currentView, setCurrentView] = useState('subject');
  
  // Selection State
  const [selections, setSelections] = useState({
    subject: null,
    grade: null,
    sectionData: null
  });

  // --- NAVIGATION HANDLERS ---

  const handleSubjectSelect = (subjectId) => {
  // Only English has data for now
  if (subjectId === 'english') {
    setSelections(prev => ({ ...prev, subject: subjectId }));
    setCurrentView('grade');
  } else {
    // Show a friendly message for Math and Science
    alert(`${subjectId.toUpperCase()} is coming soon🚀`);
  }
};

  const handleGradeSelect = (gradeId) => {
    setSelections(prev => ({ ...prev, grade: gradeId }));
    setCurrentView('menu');
  };

  const handleSectionSelect = (data) => {
    setSelections(prev => ({ ...prev, sectionData: data }));
    setCurrentView('viewer');
  };

  const handleBack = () => {
    if (currentView === 'grade') setCurrentView('subject');
    if (currentView === 'menu') setCurrentView('grade');
    if (currentView === 'viewer') setCurrentView('menu');
  };

  // --- RENDER LOGIC ---

  return (
    <div className="app-container">
      <main className="main-content">
        
        {/* STEP 1: SUBJECT PICKER */}
        {currentView === 'subject' && (
          <SubjectPicker onSelect={handleSubjectSelect} />
        )}

        {/* STEP 2: GRADE PICKER */}
        {currentView === 'grade' && (
          <GradePicker 
            onSelect={handleGradeSelect} 
            onBack={handleBack} 
          />
        )}

        {/* STEP 3: LESSON MENU (Table of Contents) */}
        {currentView === 'menu' && (
          <LessonMenu 
            // In a full app, you'd pick data based on selections.subject/grade
            subjectData={englishGrade1} 
            onSelectSection={handleSectionSelect}
            onBack={handleBack}
          />
        )}

        {/* STEP 4: ACTUAL LESSON ENGINE */}
        {currentView === 'viewer' && (
          <LessonViewer 
            key = {selections.section}
            unitData={selections.sectionData} 
            onComplete={() => setCurrentView('menu')} 
          />
        )}

      </main>

      {/* Optional: Global Footer or Branding */}
      {currentView !== 'viewer' && (
        <footer className="app-footer">
          <p>Dildiy Learning • Ethiopia</p>
        </footer>
      )}
    </div>
  );
}

export default App;