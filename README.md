# desafio_revvo

Realizado por Gustavo de Mazo Silva

Descrição do Desafio:

Deve ser evidenciado a evolução do código desenvolvido (commitar sempre).
No README deverá ter as informações do desenvolvedor e do projeto.
Front-end
O layout deverá respeitar um determinado grid com base no layout e ser acessível em resoluções menores, ex.: notebooks, tablets e smartphones. O markup deve ser desenvolvido utilizando HTML5, CSS (sass/less), JS (livre para usar libs, mas seria interessante criar do zero) e automatizador de tarefas (gulp/grunt).
Back-end
Deve ser realizado o CRUD para: * Cursos. * Imagens, título, descrição e link do botão do Slideshow.
Modal
Modal deve aparecer somente no primeiro acesso do usuário
Atenção!
O Desenvolvimento deve ser feito com PHP puro, sem uso de frameworks.

Explicação sobre a Resolução

- Nesse desafio foram feitos os designs conforme os layouts fornecidos e foram criadas configurações para melhor visualização no mobile.
- O servidor utilizado foi o do próprio PHP (php -S).
- A estrutura das pastas segue o padrão MVC.
- Para o banco de dados foi utilizado o PostgreSQL. Para utilizar é necessário liberar a extensão no php.ini (pgsql).
- A criação de um serviço para o controle de funções do database foi uma escolha pessoal, tenho a ciência de que poderia ter sido feita completamente na model.
- Foram utilizados dois dias para o desenvolvimento do projeto, logo, não foi dada a devida atenção para alguns detalhes, como: verificação de cursos duplicados, espaçamentos específicos do layout, criação de um sistema de rotas, criação de um .env para a proteção de dados sensíveis e commit de todas as etapas do desenvolvimento.

