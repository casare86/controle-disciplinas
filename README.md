# controle-disciplinas
Atividade desenvolvida para a disciplina Frameworks da pós graduação em Java pela UTFPR
1 - Qual é o tema da aplicação web referente ao projeto da disciplina?
Será uma agenda para cadastrar e controlar as disciplinas em andamento e já concluídas durante a pós graduação ou outras atividades escolares.
2 - Quais são as principais funcionalidades desta aplicação web a ser desenvolvida?
Registrar as disciplinas em curso;
Finalizar disciplinas;
Agendar os horários e atividades referentes a disciplina.

<br>
Link figma: https://www.figma.com/file/QOFTQMnxJxVNHlKhBwu6ap/Home?type=design&node-id=2%3A17&mode=design&t=8w8Bt2TbnNmGKXli-1
</br>
<b> Usuário para autenticação </b></br>
login: fernando </br>
senha: 123 </br>
Checklist:
- [x]Criar um repositório no GitHub com a estrutura do Gitflow, incluindo pelo menos as branches principais "main" e "develop."
- [x]Utilizar componentes de um framework CSS, como Bootstrap, Materialize ou outro à sua escolha.
- [x]Apresentar as telas com layout responsivo, adaptando-se a diferentes tamanhos de tela, usando um framework CSS ou implementações personalizadas.
- [x]Desenvolver o layout da aplicação com componentes, tornando o cabeçalho e o rodapé componentes reutilizáveis.
- [x]Aplicar pelo menos dois tipos de data-binding, como Interpolation, Property Binding, Event Binding, Two-Way Data Binding, 
- [x]Empregar variáveis de template e a anotação ViewChild para interagir com elementos do DOM ou componentes diretamente no template ou no código TypeScript do aplicativo. (menu mobile)
- [x]Estabelecer a passagem de dados entre componentes por meio da hierarquia de componentes, empregando as anotações @Input e @Output. (modal na página de cadastro de disciplinas)
- [x]Transferir dados, por meio de serviços, entre componentes que não estão diretamente relacionados.  (Auth service)
- [x]Mapear os componentes às rotas no módulo de rotas, criando uma estrutura de navegação eficiente. (app-routing.ts e routes.js)
- [x]Permitir a navegação fluida entre as diferentes páginas do aplicativo por meio de links e botões de navegação.
- [x]Validar os campos do formulário com expressões regulares (REGEX) e apresentar as mensagens de erro. (Página inicial -> cadastrar disciplina)
- [x]Implementar máscaras em campos de formulário, quando necessário, para melhorar a experiência do usuário ao inserir dados. (não tem máscaras)
- [x]Desabilitar o botão de envio (submit) enquanto o formulário estiver em um estado inválido. (Cadastrar Disciplina)
- [x]Realizar requisições à API com tratamento adequado das respostas de sucesso e erro com Promises.  (Cadastrar disciplina)
- []Realizar requisições à API com tratamento adequado das respostas de sucesso e erro com Observables.
- [x]Criar o cadastro completo de uma entidade, incluindo operações de criação, leitura, atualização e exclusão (CRUD) utilizando uma API, como o JSON Server. (Atualmente tem apenas leitura e criação, falta edição e exclusão)
- [X]Realizar requisições à API com tratamento adequado das respostas de sucesso e erro com Observables.
- [x]Criar o cadastro completo de uma entidade, incluindo operações de criação, leitura, atualização e exclusão (CRUD) utilizando uma API, como o JSON Server. 
- [x]Utilizar o armazenamento local (LocalStorage ou SessionStorage) para armazenar dados temporários, quando necessário.
- [x]Aplicar a diretiva estrutural ngFor para apresentar uma lista dinâmica de dados em seu aplicativo. (página inicial -> lista de disciplinas)
- [x]Utilizar a diretiva ngIf para controlar a exibição ou ocultação de elementos com base em condições específicas. (acordeon de disciplina)
- [x]Formatar a apresentação de dados com Pipes, de acordo com os requisitos do aplicativo. (texto interno dos acordeões Titulo para uppercase e data para dd/mm/aaaa)
- [x]Executar o processo de build da aplicação e realizar o deploy para tornar o aplicativo acessível online. (feito na página: [https://655a77d593efb17a41fda4f4--strong-dasik-6d3181.netlify.app/login](https://strong-dasik-6d3181.netlify.app/login) )


OBS: 
1 - alguns inputs de data (data inicio e data fim) ficaram sem a aplicação da máscara, pois causavam erro ao trazer o dado carregado, e não consegui fazer com que funcionassem da mandeira adequada, ficando apenas a parte do pipe na exibição das datas na exibição das datas cadastradas.
2- O JSON Server não está funcionando, tive que utilizar o Netlify para hospedagem, e parece que o json-server não funciona.
