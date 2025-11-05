document.addEventListener("DOMContentLoaded", () => {
    const Login = document.getElementById("login");
  
    if (Login) {
      Login.addEventListener("click", (e) => {
        e.preventDefault();
  
        abrirModalLogin();
      });
    }
  
    function abrirModalLogin() {
      Swal.fire({
        title: "Entrar",
        html: `
                  <div id="t1">
                      <label for="email" class="swal2-label" style="display: block; margin-bottom: 5px;">Email:</label>
                      <input id="email" class="swal2-input" placeholder="email@exemplo.com" type="email" style="width: 90%;">
                      
                      <label for="senha" class="swal2-label" style="display: block; margin-top: 15px; margin-bottom: 5px;">Senha:</label>
                      <input id="senha" class="swal2-input" placeholder="Digite sua senha" type="password" style="width: 90%;">
                      
                      <a href="#" style="display: block; margin-top: 10px; font-size: 0.9em; text-decoration: none; color: #0071eb;">Esqueceu a senha?</a>
                  </div>
              `,
        focusConfirm: false, 
        showCancelButton: true, 
        confirmButtonText: "Entrar", 
        cancelButtonText: "Cancelar", 
  
        preConfirm: () => {
          const email = document.getElementById("email").value; 
          const senha = document.getElementById("senha").value; 
  
          if (!email || !senha) {
            Swal.showValidationMessage("Por favor, preencha ambos os campos.");
            return false;
          }
  
          return { email: email, senha: senha };
        },
      }).then((resultado) => {
        if (resultado.isConfirmed) {
          const { email, senha } = resultado.value;
  
          if (email === "admin@email.com" && senha === "123456") {
            window.location.href = "perfil.html"; 
            Swal.fire({
              // função do sweet alert que mostra a mensagem
              icon: "success", // icone e mensgem de sucesso
              title: "Sucesso!", //titulo da mensagem
              text: `Bem-vindo(a), ${email}!`, //texto da mensagem
              confirmButtonText: "Continuar", // botão para confirmar
            });
          } else {
            // Login falhou
            Swal.fire({ // função sweet alert que mostra a mensagem
                icon: 'error', // icone de erro
                title: 'Erro de Login', // titulo da mensagem
                text: 'Email ou senha incorretos. Tente novamente.', // texto da mensagem
                confirmButtonText: 'Tentar Novamente' // botão para tentar novamente
            });
          }
          //caso clique no botão cancelar
        } else if (resultado.dismiss === Swal.DismissReason.cancel) {
          //verifica se clicou no botão cancelar
          // Usuário cancelou
          Swal.fire({
            //função sweet alert que mostra a mensagem
            icon: "info", // icone da mensagem
            title: "Cancelado", //titulo da mensagem
            text: "Você cancelou o login.", // texto da mensagem
          });
        }
      });
    }
  });
  