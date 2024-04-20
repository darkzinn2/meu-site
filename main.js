<!DOCTYPE html>
<html lang="pt-br">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
   <link rel="shortcut icon" href="./assets/Wyllyan-ico.ico" type="image/x-icon">
   <link rel="stylesheet" href="./css/main.css">
   <script src="./main.js" defer></script>
   <title>Portfólio - Marcelo Souza</title>
</head>
<body>
   <header>
      <div class="container">
         <a href="./index.html"><img src="./assets/imgs/logo-brand.png" alt=""></a>
         <nav>
            <i id="menu" class='bx bx-menu'></i>
            <ul id="nav-links">
               <li><a href="#sobre">Sobre mim</a></li>
               <li><a href="#projetos">Projetos</a></li>
               <li><a href="#skills">Minhas Habilidades</a></li>
            </ul>
         </nav>
      </div>
   </header>
   <main>
      <section class="intro">
         <div class="container">
            <div class="group1">
               <img class="memmoji" style="width: 20vh;" src="assets/imgs/memmoji.png"></img>
               <h1>Olá, eu sou Marcelo e sejam bem vindos a minha casa na internet 🏡</h1>
               
               <a href="" class="typewrite" data-period="500" data-type='[ "Desenvolvedor Web", "PHP, Laravel, HTML ,CSS ,JavaScript, Lua Script", "Estundante de Direito 📚", "Projeto HOPE 🤔" ]'>
                  <span class="wrap"></span>
               </a>
               <div class="intro-btns">
                  <a href="" target="_blank" class="cv" download="assests/Marcelo_Souza_Curriculo.pdf"><button class="cv-btn">Baixar Curriculo</button></a>
                  <a href="#sobre"><button class="contact-btn">Entar em contato</button></a>
               </div>
            </div>
         </div>
      </section>
      <section class="about" id="sobre">
         <div class="container">
            <h2>Sobre mim</h2>
            <p>
            Olá, o meu nome é Marcelo Souza e estou atualmente a tentar entrar no mercado de trabalho aplicando os conhecimentos que tenho vindo a adquirir nos meus estudos. Estou focado no desenvolvimento front-end e estou a estudar a vertente de back-end no setor Web. </p>
         </div>
      </section>
      <section class="social" id="social">
         <div class="container">
            <a href="https://www.linkedin.com/in/wyllyan-vieira/" target="_blank" class="social-col">
               <div class="icon-img">
                  <i class='bx bxl-linkedin'></i>
               </div>
               <h3>Linkedin</h3>
               <p>N/A</p>
            </a>
            <a href="https://github.com/darkzinn2" target="_blank" class="social-col">
               <div class="icon-img">
                  <i class='bx bxl-github'></i>
               </div>
               <h3>Github</h3>
               <p>darkzinn2</p>
            </a>
            <a href="#" class="social-col">
               <div class="icon-img">
                  <i class='bx bx-envelope'></i>
               </div>
               <h3>E-mail</h3>
               <p>sadasdasdsadsadasd102@gmail.com</p>
            </a>
            <a href="https://instagram/" target="_blank" class="social-col">
               <div class="icon-img">
                  <i class='bx bxl-instagram'></i>
               </div>
               <h3>instagram</h3>
               <p>EmBreve</p>
            </a>
         </div>
      </section>
      <section class="projetos" id="projetos">
         <div class="container">
            <h2>Projetos</h2>
            <div class="cards-container">
               <a href="https://github.com/darkzinn2" target="_blank" class="proj-card">
                  <div class="card-img"><img src="./assets/imgs/calculadorajuros.PNG" alt="screenshot"></div>
                  <h3>Calculadora de Juros Compostos</h3>
                  <p>Ferramenta Desenvolvida para auxilio de pessoas que nessecitam fazer calculos refrente aos juros compostos.</p>
               </a>
               <a href="https://github.com/darkzinn2" target="_blank" class="proj-card">
                  <div class="card-img"><img src="./assets/imgs/motivacional.png" alt="screenshot"></div>
                  <h3>Gerador de Frases Motivacionais</h3>
                  <p>Ferramenta Desenvolvida para auxiliar pessoas que buscam frases inspiradoras para terem um norte em seus dias.</p>
               </a>
               <a href="https://github.com/darkzinn2" target="_blank" class="proj-card">
                  <div class="card-img"><img src="./assets/imgs/buscaespecie.png" alt="screenshot"></div>
                  <h3>Busca de especies arvores</h3>
                  <p>criando um sistema onde é possivel fazer a busca por especies de arvores consultando uma tabela em csv.</p>
               </a>

               <a href="https://github.com/darkzinn2" target="_blank" class="proj-card">
                  <div class="card-img"><img src="./assets/imgs/botdiscord.js.jpeg" alt="screenshot"></div>
                  <h3>Discord Bot Gerenciamento Policial</h3>
                  <p>Por muito tempo fui fan de GTARP e sempre joguei como Policiale com isso desenvolvi esse bot para suprir minas nessesidades para gerenciar minha equipe.</p>
               </a>
               <a href="https://github.com/darkzinn2" target="_blank" class="proj-card">
                  <div class="card-img"><img src="./assets/imgs/sistemaadvocaticio.png" alt="screenshot"></div>
                  <h3>Sistema Advocacio</h3>
                  <p>O sistema acima foi criado para gerenciar uma Advocacio con controle de dados seja eles preenchimento de documentos automatico gerenciamento financeiro e muito mais.</p>
               </a>
            </div>
            
         </div>
      </section>
      <section class="skills" id="skills">
         <div class="container">
            <h2>Minhas Habilidades</h2>
            <div class="cards-container">
               <div class="skill-card">
                  <i class="bi bi-filetype-html"></i>
               </div>
               <div class="skill-card">
                  <i class="bi bi-filetype-css"></i>
               </div>
               <div class="skill-card">
                  <i class="bi bi-filetype-js"></i>
               </div>
               <div class="skill-card">
                  <i class='bi bi-filetype-sql'></i>
               </div> 
               <div class="skill-card">
                  <i class='bi bi-filetype-php'></i>
               </div>  
            </div>
         </div>
      </section>
   </main>
   <footer>
      <p>Desenvolvido por <span>Marcelo Souza</span></p>
   </footer>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
   <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
   <script src="https://unpkg.com/scrollreveal"></script>
   <script src="./main.js" defer></script>
   <script>
      window.onload = function() {
         var audio = new Audio('./assets/alma_nua.mp3');
         audio.play();
      };
   </script>
</body>
</html>
