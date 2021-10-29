As a system user, 
I need to register, update, search and remove the products so that I can check correct information about them.


Scenario: cadastrar um produto
Given: o usuário está na página de cadastrar um produto
And: o usuário preenche todos os campos
When: o usuário clica em finalizar cadastro
Then: o cadastro é finalizado com sucesso
And: uma mensagem de confirmação aparece


Scenario: remover um produto
Given: o usuário está na página de remover um produto
And: o usuário digitou o código do produto que deseja remover no campo correspondente
When: o usuário clica em remover produto
And: uma mensagem de confirmação, com o nome do produto a ser removido, aparece
And: o usuário confirma a remoção
Then: a remoção é realizada
And: uma mensagem de confirmação aparece


Scenario: atualizar um produto
Given: o usuário está na página de atualizar um produto
And: o usuário digitou o código do produto que deseja atualizar no campo correspondente
And: o usuário realizou as mudanças desejadas no campo, sem deixar campos em branco
When: o usuário confirma as mudanças
Then: o produto é atualizado
And: uma mensagem de confirmação aparece


Scenario: procurar um produto
Given: o usuário está na página de procurar um produto
And: o usuário digitou o código de um produto existente no campo correspondente
When: o usuário clica em pesquisar
Then: o produto e seus atributos aparecem na tela.


Scenario: registrar um produto com o nome de outro produto já existente.
Given: o usuário está na página de cadastro de produto
And: o usuário digitou no campo referente ao nome do produto um nome já existente para outro produto.
When: o usuário clica em cadastrar
Then: o sistema apresenta uma mensagem de erro.
And: o produto não é cadastrado.


Scenario: registrar um produto com o valor do preço negativo ou igual a zero.
Given: o usuário está na página de cadastro de produto
And: o usuário digitou no campo referente ao preço do produto um valor negativo
When: o usuário clica em cadastrar
Then: o sistema apresenta uma mensagem de erro.
And: o produto não é cadastrado.


Scenario: registrar um produto com o valor do preço não sendo numérico
Given: o usuário está na página de cadastro de produto
And: o usuário digitou no campo referente ao preço do produto um valor de um tipo não numérico, como uma letra.
When: o usuário clica em cadastrar
Then: o sistema apresenta uma mensagem de erro
And: o produto não é cadastrado.


Scenario: registrar um produto com uma quantidade negativa.
Given: o usuário está na página de cadastro de produto
And: o usuário digitou no campo referente à quantidade do produto um valor menor que 0
When: o usuário clica em cadastrar
Then: o sistema apresenta uma mensagem de erro
And: o produto não é cadastrado


Scenario: registrar um produto com o valor de uma quantidade não sendo numérico
Given: o usuário está na página de cadastro de produto
And: o usuário digitou no campo referente à quantidade do produto um valor não numérico
When: o usuário clica em cadastrar
Then: o sistema apresenta uma mensagem de erro
And: o produto não é cadastrado







