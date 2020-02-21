# CALLBACKS

<strong>1º FOMA DE UTILIZAR</strong> = `
NÃO É MUITO BOA ... POIS, EM ALGUM MOMENTO , PODE SER QUE TENHA DE USAR UM CALLBACK DENTRO DE OUTRO CALLBACK
`
<br>
<strong>2º FORMA USANDO PROMESSAS</strong> = `
 AS PROMESSAS ESPERAM O CALLBACK TRAZER TUDO QUE TEM DE TRAZER PARA CONTINUAR EXECUTANDO
 MAS, PODE FICAR , BEM CONFUSO...
`<br>
<strong>3º FORMA USANDO ASYNC AWAIT</strong> = `
  MELHOR FORMA , ELA TAMBEM ESPERA DE CERTA FORMA O CALLBACK TRAZER TUDO,
  MAS, SEU CÓDIGO FICA MUITO LIMPO<br>
  OBS:'
    PARA O AWAIT FUNCIONAR TEM DE TER O "ASYNC" NA FRENTE DA FUNCTION DE RENDERIZAR
    
    async create(req, res){}
  '
`
<br>
<br>
<strong>then</strong> == promessa , recebe o results<br>
<strong>cath</strong> == recebe o err
<br>
<strong>await</strong> == só funciona se o async tiver na frente da função assim:<br>
async create(req,res){}

