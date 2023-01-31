var Consul =  require('consul');
const express = require('express');
const utf8 = require('utf8');

var consul = new Consul();

console.log(process.argv[2]);

const SERVICE_NAME = 'microservice';
const SERVICE_ID = 'm_'+process.argv[2];
const SCHEME = 'http';
const HOST = '167.172.141.252';
const PORT = process.argv[2] * 1;

const app = express();

/** Checar a saúde*/
app.get('/health', function (req,res){
    res.end("Ok.");
});

/** Listar serviços*/
app.get('/', async(req,res) => {

    var s="<h1>Instância '"+ SERVICE_ID +"' </h1>";
    s += "<h2>Listando de serviços</h2><br>";

    var list = await consul.agent.service.list();    
    s += JSON.stringify(list);

    res.end(s);     
});

app.listen(PORT,function(){
    console.log('Sistema rodando na porta '+ SCHEME +'://'+HOST+':'+PORT+'!');
});

/**Registrando Serviço */

var check = {
    id: SERVICE_ID,
    name: SERVICE_NAME,
    address: HOST,
    port: PORT,
    check: {
        http: SCHEME+'://'+HOST+':'+PORT+'/health',
        ttl: '5s',
        interval: '5s',
        timeout: '5s',
        deregistercriticalserviceafter: '1m'
    }
};

consul.agent.service.register(check, function(err){
    if(err) throw err;
});
