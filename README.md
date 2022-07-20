# Projetinho eCommerce

Pequeno projeto de eCommerce, está bem simples, contém uma tela principal que contém categorias e produtos na qual o usuário pode adicionar produtos em um carrinho, uma tela para o carrinho onde o usuário pode limpar o carrinho e uma tela para fazer login.

A tela de login serve apenas para logar como adminstrador, não há como cadastrar novos usuários. O único usuário que está configurado para fazer login é: Nome: Bernardo, Senha: batata. Ao fazer login com sucesso, na tela principal você poderá cadastrar/atualizar/excluir novas categorias e produtos. Para voltar como usuário normal basta acessar a tela de login e clicar em logout.

O carrinho e a informação de login estão salvos na session do navegador, ao sair do navegador esses dados são apagados.

Os produtos e categorias estão persistidos em um banco de dados.

Para o banco de dados usei SQLite, pois se trata de uma aplicação bem simples.

Para fazer os endpoints e API Rest usei ASP.NET Core, C# e o Entity Framework para fazer a conexão com o banco de dados.

Para o FrontEnd SPA usei Node, Angular e ngxBootstrap (pacote do angular para usar BootStrap).

## Instalações e start na aplicação:

Baixar ou clonar o repositório:

![Alt text](imagensTutorial/github.png?raw=true "GitHub")

Baixar e instalar o .NET SDK, link: https://dotnet.microsoft.com/en-us/download

![Alt text](imagensTutorial/dotnet.png?raw=true "DotNet")

Baixar e Instalar o Node, link : https://nodejs.org/en/

![Alt text](imagensTutorial/node.png?raw=true "Node")

Next -> (Aceitar os termos) Next -> Next -> Next -> Next -> Install -> Finish

A pasta do projeto contém as pastas Loja e LojaAPI, abrir um cmd em cada uma, basta ir até o diretório da pasta
e na barra do diretório apagar tudo e digitar cmd

![Alt text](imagensTutorial/pasta.png?raw=true "Pasta")
![Alt text](imagensTutorial/cmd.png?raw=true "CMD")

No cmd que está na pasta Loja, digitar os seguintes comandos:

npm install -g @angular/cli
npm install --legacy-peer-deps
ng serve
n

No cmd que está na pasta LojaAPI

dotnet run

caso o comando dotnet não sejá reconhecido:

pesquisar variaveis na barra de pesquisa do windows

![Alt text](imagensTutorial/var.png?raw=true "var")

selecionar Path e clicar em editar

![Alt text](imagensTutorial/path.png?raw=true "path")

clicar em novo e adiconar C:\Program Files\dotnet

![Alt text](imagensTutorial/corrige.png?raw=true "corrige")

clicar em ok, feche o cmd da pasta LojaAPI e abra novamente. O comando dotnet run vai funcionar.

Agora que backend e o forntend estão levantados basta ir no seu navegador e ir no endereço http://localhost:4200/

![Alt text](imagensTutorial/loja.png?raw=true "loja")