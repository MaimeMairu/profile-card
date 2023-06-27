import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <>
      <div className='card'>
        <Avatar />
        <div className='date'>
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill Skill="Unity" emoji="💪🔥" color="gray" />
      <Skill Skill="PHP" emoji="💪🔥" color="gray" />
      <Skill Skill="React" emoji="💀" color="gray" />
      <Skill Skill="HTML" emoji="🥶" color="gray" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.Skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>นายณัฐดนัย นานาวัน</h1>
      <p>
        amogus 📮📮📮📮
      </p>
    </div>
  );
}

function Avatar() {
  return <img className='avatar' src="natdnanai.png" alt='My Avatar' />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
