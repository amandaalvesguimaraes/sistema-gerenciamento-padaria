Scenario: cadastrar um funcionário
Given: o usuário está na página de cadastro
And: o usuário preenche todos os campos necessários
And: as informações foram preenchidas em conformidade com o solicitado
When: o usuário clica na opção de confirmar cadastro
Then: o cadastro é confirmado
And: uma mensagem de confirmação aparece

Scenario: cadastrar um funcionário sem preencher um ou mais campos necessários
Given: o usuário está na página de cadastro
And: o usuário não preenche um ou mais campos
When: o usuário clica na opção de confirmar cadastro
Then: o cadastro não é confirmado
And: uma mensagem de erro aparece
