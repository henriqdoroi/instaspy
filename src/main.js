import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function normalizeUsername(value) {
  return value.replace(/^@+/, '').trim();
}

function App() {
  const [step, setStep] = useState('home');
  const [username, setUsername] = useState('');
  const [feedback, setFeedback] = useState('Depois de confirmar, a análise será preparada automaticamente.');

  const startFlow = () => {
    setStep('confirm');
    window.setTimeout(() => document.querySelector('[data-username]')?.focus(), 80);
  };

  const confirmProfile = () => {
    const cleanUsername = normalizeUsername(username);

    if (!cleanUsername) {
      setFeedback('Digite um @ válido para continuar.');
      return;
    }

    localStorage.setItem('espionado_username', cleanUsername);
    sessionStorage.setItem('espionado_username', cleanUsername);
    setFeedback(`Análise iniciada para @${cleanUsername}...`);
  };

  const homeStep = React.createElement(
    'div',
    { className: 'legacy-step' },
    React.createElement('p', { className: 'legacy-eyebrow' }, 'Stalkea Instagram'),
    React.createElement('h1', { className: 'legacy-title', id: 'landing-title' }, 'Analise um perfil do Instagram em poucos segundos'),
    React.createElement('p', { className: 'legacy-subtitle' }, 'Digite o @ do perfil para iniciar a verificação e seguir para a oferta com o fluxo original.'),
    React.createElement('button', { className: 'legacy-button', type: 'button', onClick: startFlow }, 'Espionar agora'),
    React.createElement(
      'div',
      { className: 'legacy-features', 'aria-label': 'Recursos da ferramenta' },
      React.createElement('span', null, React.createElement('i', { className: 'fa-solid fa-shield-halved' }), ' Seguro'),
      React.createElement('span', null, React.createElement('i', { className: 'fa-solid fa-bolt' }), ' Rápido'),
      React.createElement('span', null, React.createElement('i', { className: 'fa-solid fa-mobile-screen' }), ' Mobile'),
    ),
  );

  const confirmStep = React.createElement(
    'div',
    { className: 'legacy-step' },
    React.createElement('p', { className: 'legacy-eyebrow' }, 'Confirme o Instagram'),
    React.createElement('h1', { className: 'legacy-title' }, 'Confirme o Instagram'),
    React.createElement('p', { className: 'legacy-subtitle' }, 'Coloque o usuário exatamente como aparece no Instagram. Exemplo: ', React.createElement('strong', null, '@nomedoconjuge_10')),
    React.createElement('label', { className: 'legacy-label', htmlFor: 'username' }, 'Usuário do Instagram'),
    React.createElement('input', {
      id: 'username',
      className: 'legacy-input',
      type: 'text',
      placeholder: '@nomedoconjuge_10',
      autoComplete: 'off',
      value: username,
      onChange: (event) => setUsername(event.target.value),
      'data-username': true,
    }),
    React.createElement('button', { className: 'legacy-button', type: 'button', onClick: confirmProfile }, 'Confirmar'),
    React.createElement('p', { className: 'legacy-note' }, feedback),
  );

  return React.createElement(
    'main',
    { className: 'legacy-page' },
    React.createElement(
      'section',
      { className: 'legacy-card', 'aria-labelledby': 'landing-title' },
      React.createElement('div', { className: 'legacy-logo', 'aria-hidden': 'true' }, React.createElement('i', { className: 'fa-brands fa-instagram' })),
      step === 'home' ? homeStep : confirmStep,
    ),
  );
}

createRoot(document.getElementById('root')).render(React.createElement(App));
