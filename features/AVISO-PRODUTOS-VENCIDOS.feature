As a System user,
I need to receive a warning about expired products in stock so that I can take them off the shelves.

Scenario: o usuário deseja receber aviso de algum produto vencido
Given: o usuário está logado no sistema
When: o usuário seleciona a opção de aviso de produtos vencidos
Then: o usuário recebe um aviso dos produtos que vencerão naquele dia

Scenario: usuário deseja verificar quais produtos vencerão em um determinado dia
Given: o usuário está logado no sistema
When: o usuário seleciona a opção de verificar produtos que vão vencer
And: o usuário seleciona o dia
Then: o usuário recebe uma lista dos produtos que vão vencer no dia selecionado


