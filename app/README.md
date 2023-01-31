
Realizar o download do Consul:

```
consul_1.14.4_linux_amd64.zip
```

Instalar o descompactador do zip.
O comando irá descompatar o executável "consul":

```
apt install unzip
unzip consul_1.14.4_linux_amd64
ls
```

Anotar o ip. A informação estará no atributo eth0 :

```
apt install net-tools
ifconfig
```

Executar consul:

```
./consul agent -dev -bind=142.93.201.132 -data-dir=/consul/data -ui -client=0.0.0.0
```


## App Node

npm init -y
npm install consul
