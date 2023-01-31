# Consul 

* [1. Instalação](#1-instalação)
    - [1.1 Máquina Virtual](#11-máquina-virtual)
    - [1.2 Configuração Git](#12-configuração-git)
    - [1.3 Docker](#13-docker)
    - [1.4 Docker-Compose](#14-docker-compose)

## 1 Instalação 

### 1.1 Máquina Virtual

Configuração do Droplet no serviço da Digital Ocean.

<ul>
    <li>Sistema Operacional: Ubuntu 20.04</li>
    <li>CPU: 1</li>
    <li>Memória: 2GB</li>
</ul>

Acessar o droplet:

``` sh
$ ssh root@ipDroplet
```


### 1.2 Configuração Git

Clonar o Projeto:

```
$ git clone https://github.com/fabiocaettano/consul-001.git
```


Suas credenciais na máquina virtual:

```
$ cd consul-001
$ git config --global user.email ""
$ git config --global user.name ""
```


### 1.3 Docker

Instalar:

```
$ curl -fsSL https://get.docker.com | bash
```

Checar:

```
$ systemctl status docker
```


### 1.4 Docker-Compose

Orientaões para [Instalação do Docker-Compose](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt).

Realizar o download e extrair:

``` sh
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

Tornar executável:

``` sh
sudo chmod +x /usr/local/bin/docker-compose
```

Checar a versão:

``` sh
docker-compose --version
``` 


## 2 Consul

Executar o manifesto:

```
$ docker-compose up -d
```

Checar os containers:

```
$ docker-compose ps
```

## Consul Server

### Iniciar o Consul

Acessar o containerServer01:

```
$ docker exec -it consul-01 sh
```

Criar os diretórios:

```
mkdir /etc/consul.d
mkdir /var/lib/consul
```

Checar os members.

```
# consul members
```

Checar o IP do container:

```
ifconfig
```

Subir o consul:

```
consul agent -server -bootstrap-expect=3 -node=consulserver01 -bind=172.19.0.5 -data-dir=/var/lib/consul -config-dir=/etc/consul.d
```

Agora checar os members:

```
consul members
```

Repetir o mesmo processo para os containers **consulServer02** e **consulServer03**.

### Join

No consulSerever02 e consultServer03 realizar o Join.
Acessar o container através do comando docker exec.

```
# consul join 172.22.0.4
``` 

```
consul members
```

### Eleição



## Consul Client

## ConsulClient01

```
docker exec -it consulclient01 sh
```

```
consul members
```

```
mkdir /etc/consul.d
mkdir /var/lib/consul
```

```
ifconfig
```

```
consul agent -bind=172.18.0.4 -data-dir=/var/lib/consul -config-dir=/etc/consul.d
```

```
consul join
```

```
consul members
``` 
