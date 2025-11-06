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
           <label for="email" class="swal2-label">Email:</label>
           <input id="email" class="swal2-input" type="email" placeholder="email@exemplo.com">
           <label for="senha" class="swal2-label">Senha:</label>
           <input id="senha" class="swal2-input" type="password" placeholder="Digite sua senha">
           <a href="#" style="display:block;margin-top:10px;font-size:0.9em;color:#0071eb;text-decoration:none;">Esqueceu a senha?</a>
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
          window.location.href = "lista.html";
          Swal.fire({
            icon: "success",
            title: "Sucesso!",
            text: `Bem-vindo(a), ${email}!`,
            confirmButtonText: "Continuar",
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Erro de Login',
            text: 'Email ou senha incorretos. Tente novamente.',
            confirmButtonText: 'Tentar Novamente'
          });
        }
      } else if (resultado.dismiss === Swal.DismissReason.cancel) {

        Swal.fire({
          icon: "info",
          title: "Cancelado",
          text: "Você cancelou o login.",
        });
      }
    });
  }
});
