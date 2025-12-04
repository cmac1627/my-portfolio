
import React from 'react';

export default function Portfolio() {
  return (
    <div style={{padding: 40, fontFamily: 'Arial, sans-serif'}}>
      <h1 style={{fontSize: 36}}>Cj Macale</h1>
      <img src='https://via.placeholder.com/150' alt='Profile' style={{borderRadius: '50%', margin: 20}} />
      <p style={{fontSize: 18}}>Virtual Assistant • Administrative Support • Real Estate VA</p>
      
      <h2 style={{fontSize: 28, marginTop: 30}}>About Me</h2>
      <p>I am a dedicated and detail-oriented virtual assistant with experience in administrative support, customer service, and real estate operations.</p>
      
      <h2 style={{fontSize: 28, marginTop: 30}}>Skills</h2>
      <ul>
        <li>Administrative Assistance & Email Management</li>
        <li>Customer Updates & Follow-ups</li>
        <li>Real Estate Lead Management</li>
        <li>Online Communication & Social Messaging</li>
        <li>CRM Tools — GoHighLevel, Trello, Slack</li>
        <li>Google Workspace, Canva, Data Entry</li>
      </ul>

      <h2 style={{fontSize: 28, marginTop: 30}}>Experience</h2>
      <ul>
        <li>Virtual Assistant / Administrative Assistant — Company Name</li>
        <li>Customer Service Representative — Company Name</li>
      </ul>

      <h2 style={{fontSize: 28, marginTop: 30}}>Sample Work</h2>
      <ul>
        <li>Customer Update: “Hi! Just a quick update—your service is complete. Let me know if you need anything else!”</li>
        <li>Gaming Script: “Hey! Thanks for messaging. Here’s what you can try…”</li>
      </ul>

      <h2 style={{fontSize: 28, marginTop: 30}}>Contact</h2>
      <ul>
        <li>Email: yourname@example.com</li>
        <li>Phone: +63 XXX XXX XXXX</li>
        <li>Location: Philippines</li>
        <li><a href='#' target='_blank'>Download Resume</a></li>
      </ul>
    </div>
  );
}
