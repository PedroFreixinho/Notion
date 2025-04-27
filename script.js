// Seleção de elementos
const display = document.getElementById('display');
const lembreteEl = document.getElementById('lembrete');
const addBtn = document.getElementById('addBtn');

// Carrega o contador do localStorage ou inicia em 0
let count = parseInt(localStorage.getItem('diaCount')) || 0; // localStorage sem expiração :contentReference[oaicite:9]{index=9};
updateUI();

// Função para atualizar a interface
function updateUI() {
  display.textContent = `${count} dia${count !== 1 ? 's' : ''}`;
  
  // Verifica múltiplos de 30 e exibe lembrete
  if (count > 0 && count % 30 === 0) { // operador % retorna resto da divisão :contentReference[oaicite:10]{index=10};
    lembreteEl.textContent = `🔔 Parabéns! Você completou ${count/30} mês${count/30 > 1 ? 'es' : ''}!`;
  } else {
    lembreteEl.textContent = '';
  }
}

// Ao clicar, incrementa +1, salva e atualiza
addBtn.addEventListener('click', () => {
  count++;
  localStorage.setItem('diaCount', count.toString()); // armazenando string :contentReference[oaicite:11]{index=11};
  updateUI();
});
