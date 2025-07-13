import React, { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: "field", text: "מה מעניין אותך?", options: ["טכנולוגיה", "עיצוב", "חינוך", "עסקים"] },
    { id: "study", text: "האם אתה שוקל לימודים אקדמיים?", options: ["כן", "לא", "אולי"] },
    { id: "location", text: "היכן אתה מעדיף ללמוד או לעבוד?", options: ["מרכז", "צפון", "דרום", "לא משנה"] },
  ];

  const handleAnswer = (id, value) => {
    setAnswers({ ...answers, [id]: value });
    setStep(step + 1);
  };

  const getRecommendation = () => {
    if (answers.field === "טכנולוגיה") return "קורס פיתוח תוכנה, לימודי סייבר, או משרות QA";
    if (answers.field === "עיצוב") return "לימודי UX/UI, עיצוב גרפי, או משרות במיתוג";
    if (answers.field === "חינוך") return "מסלול הוראה, קורסים בהדרכה או טיפול רגשי";
    return "שיווק, ניהול, יזמות או מסלולי תעודה מהירים";
  };

  return (
    <main>
      <h1>ברוך הבא ל"הצעד הבא"</h1>
      {step < questions.length ? (
        <div>
          <p>{questions[step].text}</p>
          {questions[step].options.map((opt) => (
            <button key={opt} onClick={() => handleAnswer(questions[step].id, opt)}>
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <p>המלצה עבורך:</p>
          <p>{getRecommendation()}</p>
          <button onClick={() => setStep(0)}>התחל מחדש</button>
        </div>
      )}
    </main>
  );
}
