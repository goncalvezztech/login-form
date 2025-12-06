let isLoginMode = true;

const loginSection = document.getElementById('loginSection');
const signupSection = document.getElementById('signupSection');
const sideTitle = document.getElementById('sideTitle');
const sideText = document.getElementById('sideText');
const toggleBtn = document.getElementById('toggleBtn');
const container = document.querySelector('.container');

function toggleForm() {
    if (isLoginMode) {
        // Mudar para modo cadastro
        loginSection.style.display = 'none';
        signupSection.style.display = 'block';
        sideTitle.textContent = 'Já tem uma conta?';
        sideText.textContent = 'Faça login para acessar!';
        toggleBtn.textContent = 'Entrar';
        
        // Inverter ordem no mobile
        if (window.innerWidth <= 768) {
            container.style.flexDirection = 'column';
        }
    } else {
        // Mudar para modo login
        loginSection.style.display = 'block';
        signupSection.style.display = 'none';
        sideTitle.textContent = 'Não tem uma conta?';
        sideText.textContent = 'Cadastre-se para começar!';
        toggleBtn.textContent = 'Criar Conta';
    }

    isLoginMode = !isLoginMode;
}

// Adicionar evento de clique ao botão
toggleBtn.addEventListener('click', toggleForm);