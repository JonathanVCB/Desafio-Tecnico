## 🛠️ Inicialização

- Para conseguir rodar esta API, é preciso fazer algumas configurações previas.

### :one: Primeira etapa

É preciso criar um banco de dados <strong><i>postgresql</i></strong>, onde todos os dados são amarzenados. Então no exemplo abaixo irei utilizar o <a href="https://dbeaver.io/download/">dbeaver</a>. Após abrir o <a href="https://dbeaver.io/download/">dbeaver</a>, você se deparará com está tela:

<div>
  <img src="https://user-images.githubusercontent.com/101361395/226995412-664a41aa-b1dc-4fb0-b078-f78779523222.png"/>
</div>

<p>Você precisará clicar no canto superio esquerdo, onde é mostrado na imagem abaixo, e selecionar o postgresql e avançar.</p>

<div>
  <img src="https://user-images.githubusercontent.com/101361395/227004042-b71d3686-3e26-4625-981c-da0f0cc2467b.png"/>
</div>

<p>Abrirá um outro model de configuração do banco. você precisará prencher o campo <strong>password</strong> com a senha criada na instalção do programa, clicar no botão <strong>Test Connection</strong> e se der tudo certo, pode clicar em <strong>concluir</strong>.</p>

<div>
  <img src="https://user-images.githubusercontent.com/101361395/227006529-8fb5d2fd-442f-4eb2-a45b-2f15be5dbc04.png"/>
</div>

Para criar uma base de dados, você precisará selecionar a opção <strong>SQL</strong> na barra de opções a cima e precisará utilisar um comando SQL demostrado na imagem abaixo.

<div>
  <img src="https://user-images.githubusercontent.com/101361395/227008368-c54b5b76-8cda-42b4-a912-f358b7c2b225.png"/>
</div>

### :two: Segunda etapa

1. **Fazer o clone do repositório** <br>
2. **Abra o terminal na raiz do projeto e dê o comando "yarn install" ou "npm i"** <br>
3. **faça uma copia do arquivo <i>.env.example</i>, remova o ".example" do final e preencha com os dados do seu banco postgres.** <br>

**O banco, se você não alterou, irá rodar na porta 5432 e no host localhost. Você irá preencher os demais campos com os dados da seu banco**

- **DB_USER** = Esta chave precisa conter o nome <strong>"User"</strong> que há no seu banco.

- **DB_PASSWORD** = Esta chave precisa conter a senha que você utilizou na criação do banco.

- **DB_HOST** = Por padrão, a chave recebe <strong>"localhost"</strong>.

- **DB_PORT** = Por padrão, a chave recebe <strong>"5432"</strong>, se a chave da porta não foi alterada na instalação do dbeaver.

- **DB_NAME** = Essa chave precisa conter o nome exato da sua base de dados.

- **SECRET=KEY** = Essa chave precisa conter qualquer valor, só não pode ser nula.

- **EXPIRES_IN** = Essa chave indica o tempo que o token jwt irá expirar. ex: "24h"

após a configuração, é preciso rodar as migrações. utilize o comando:

```
yarn typeorm migration:run -d src/data-source
```

---

Pronto, deu tudo certo? basta inicializar o servidor com o seguinte comando:
```
yarn dev
```

---

## :bullettrain_side: Rotas

### :boy: Rotas de criação deUsuário

🟢 **POST - /user**

- Rota para fazer registro do usuário.

**Request:**

```
{
  "email": "teste@mail.com",
  "password": "123456"
}`
```

**Response:**

```
{
  "id": "6c8a0b2a-f9d7-4330-aec4-12898536959f",
  "email":"teste@mail.com"
}
```

### **Rotas v1**

🟢 **POST - /v1/auth**

- Rota para fazer o login.

**Request:**

```
{
  email: "teste@mail.com",
  password: "123456"
}
```

**Response:**

```
{
  token: aoZJSJhOpjwQXDWKRtXz3HjucCaC08hw91vFxxswjIMzUNYxFefGoQZ75spo60XjgvCAWSFAtxPjdMnYpkxLH7E63aa2cf042609
}
```

🔵 **GET - /v1**

- Mensagem de bem vindo

**Response:**

```
{
  "message": "Bem vindo a API GeoPoly!"
}
```

### **Rotas v2**

🔵 **GET - /v2/places**

- Lista de lugares

**Response:**

```
[
	{
		"id": "61dbbdf3-fd17-4bef-b73e-e8f8ec66954c",
		"name": "Lago do Vale",
		"latitude": "-23.200443",
		"longitude": "-45.896235"
	},
	{
		"id": "b28c094c-029b-4dd6-a314-33afdd4ef146",
		"name": "Parque da Cidade",
		"latitude": "-23.221112",
		"longitude": "-45.899678"
	},
	{
		"id": "54ef6e84-2535-444c-aa22-3ef8def26aba",
		"name": "Praça Ulisses Guimarães",
		"latitude": "-23.180038",
		"longitude": "-45.884357"
	}
]
```

🔵 **GET - /v2/places/:id**

- Lugar específico

**Response:**

```
{
	"id": "7a187a9c-e086-44be-9562-e448debb7f58",
	"name": "Parque da Cidade - São José dos Campos",
	"latitude": "-23.221112",
	"longitude": "-45.899678"
}
```

---

### **Rotas v3**

🟢 **POST - /v3/places**

- Rota para fazer registro de um lugar.

**Request:**

```
{
    "name": "Lago do Vale",
    "latitude": -23.200443,
    "longitude": -45.896235
}
```

**Response:**

```
{
	"name": "Lago do Vale",
	"latitude": "-23.200443",
	"longitude": "-45.896235",
	"id": "61dbbdf3-fd17-4bef-b73e-e8f8ec66954c"
}
```

🟡 **PATCH - /v3/places/:id**

- Atualiza um lugar

**Request:**

```
{
    "name": "Lago do Vale atualizado",
    "latitude": -23.200443,
    "longitude": -45.896235
}
```

**Response:**

```
{
	"name": "Lago do Vale atualizado",
	"latitude": "-23.200443",
	"longitude": "-45.896235",
	"id": "61dbbdf3-fd17-4bef-b73e-e8f8ec66954c"
}
```

🔴 **DELETE - /v3/places/:id**

- Deleta um lugar

**Response:**

```
"message": "Lugar removido com sucesso!"
```

### **Rotas v4**

🔵 **GET - /v4/search?latitude={latitude}&longitude={longitude}&radius={raio}**

- Lista todos os lugares cadastrados dentro dos parâmetros especificados.

**Response:**

```
 [
	{
		"id": "61dbbdf3-fd17-4bef-b73e-e8f8ec66954c",
		"name": "Lago do Vale",
		"latitude": "-23.200443",
		"longitude": "-45.896235",
		"distance": 0
	},
	{
		"id": "b28c094c-029b-4dd6-a314-33afdd4ef146",
		"name": "Parque da Cidade",
		"latitude": "-23.221112",
		"longitude": "-45.899678",
		"distance": 0.02095380180301646
	},
	{
		"id": "54ef6e84-2535-444c-aa22-3ef8def26aba",
		"name": "Praça Ulisses Guimarães",
		"latitude": "-23.180038",
		"longitude": "-45.884357",
		"distance": 0.023610398323618144
	}
]

```

🔵 **GET - /v4/places/:id1/distanceto/:id2**

- Mostra a distancia entre dois lugares.

**Response:**

```
{
	"distance": 0.023610398323618144
}
```

### **Rotas v5**

### **POINTS**

🟢 **POST - v5/point**

- Cria um lugar(ponto).

**Request:**

```
{
"name": "Lago do Vale",
"location":[
          -45.907492541346045,
          -23.232654686410783
        ]
}
```

**Response:**

```
{
	"name": "Lago do Vale",
	"location": [
		-45.907492541346045,
		-23.232654686410783
	],
	"id": "2ddd086c-a4c2-40cd-bfe4-1136d2215d64"
}

```

🔵 **GET - v5/point/:id**

- Mostra um lugar(ponto) específico.

**Response:**

```
{
	"id": "2ddd086c-a4c2-40cd-bfe4-1136d2215d64",
	"name": "Lago do Vale editado",
	"location": [
		-45.907492541346045,
		-23.232654686410783
	]
}
```

🔵 **GET - v5/point/**

- Mostra todos lugares(pontos) cadastrados.

**Response:**

```
[
	{
		"id": "2ddd086c-a4c2-40cd-bfe4-1136d2215d64",
		"name": "Lago do Vale editado",
		"location": [
			-45.907492541346045,
			-23.232654686410783
		]
	},
	{
		"id": "116fb84b-2c1a-46c2-b6b3-723ff8dd18d3",
		"name": "Praça teste",
		"location": [
			-45.907492541346045,
			-23.232654686410783
		]
	},
	{
		"id": "3e0313d3-36a1-4ac0-a8b7-a16f08a1bf27",
		"name": "Posto de gasolina",
		"location": [
			-45.907492541346045,
			-23.232654686410783
		]
	}
]
```

🟡 **PATCH - v5/point/:id**

- Atualiza um lugar(ponto).

**Request:**

```
{
"name": "Lago do Vale editado",
"location":[
          -45.907492541346045,
          -23.232654686410783
        ]
}
```

**Response:**

```
{
	"name": "Lago do Vale editado",
	"location": [
		-45.907492541346045,
		-23.232654686410783
	],
	"id": "2ddd086c-a4c2-40cd-bfe4-1136d2215d64"
}

```

🔴 **DELETE - v5/point/:id**

- Deleta um lugar(ponto).

**Response:**

```
{
	"message": "lugar removido com sucesso!"
}

```

### **POLYGONS**

🟢 **POST - v5/polygon**

- Cria um poligono.

**Request:**

```
{
"name": "Lago do Vale 3",
"location": [
            [
              -45.91115186602562,
              -23.246891753083432
            ],
            [
              -45.909088947631915,
              -23.242810108752494
            ],
            [
              -45.911582168022306,
              -23.24661267026906
            ],
            [
              -45.91115186602562,
              -23.246891753083432
            ]
          ]
}
```

**Response:**

```
{
	"name": "Lago do Vale 3",
	"location": [
		[
			-45.91115186602562,
			-23.246891753083432
		],
		[
			-45.909088947631915,
			-23.242810108752494
		],
		[
			-45.911582168022306,
			-23.24661267026906
		],
		[
			-45.91115186602562,
			-23.246891753083432
		]
	],
	"id": "0eaf1aa5-bf84-42f8-968e-df344e5e6f65"
}

```

🔵 **GET - v5/polygon/:id**

- Mostra um poligono específico.

**Response:**

```
{
	"id": "0eaf1aa5-bf84-42f8-968e-df344e5e6f65",
	"name": "Lago do Vale 3",
	"location": [
		[
			-45.91115186602562,
			-23.246891753083432
		],
		[
			-45.909088947631915,
			-23.242810108752494
		],
		[
			-45.911582168022306,
			-23.24661267026906
		],
		[
			-45.91115186602562,
			-23.246891753083432
		]
	]
}
```

🔵 **GET - v5/polygon/**

- Mostra todos poligonos cadastrados.

**Response:**

```
[
	{
		"id": "70360c63-a847-494b-9f83-a071e07b3328",
		"name": "Lago do Vale 2",
		"location": [
			[
				-45.91115186602562,
				-23.246891753083432
			],
			[
				-45.909088947631915,
				-23.242810108752494
			],
			[
				-45.911582168022306,
				-23.24661267026906
			],
			[
				-45.91115186602562,
				-23.246891753083432
			]
		]
	},
	{
		"id": "0eaf1aa5-bf84-42f8-968e-df344e5e6f65",
		"name": "Lago do Vale 3",
		"location": [
			[
				-45.91115186602562,
				-23.246891753083432
			],
			[
				-45.909088947631915,
				-23.242810108752494
			],
			[
				-45.911582168022306,
				-23.24661267026906
			],
			[
				-45.91115186602562,
				-23.246891753083432
			]
		]
	}
]
```

🟡 **PATCH - v5/polygon/:id**

- Atualiza um poligono.

**Request:**

```
{
"name": "Lago do Vale poligono editado",
"location": [
            [
              -45.91115186602562,
              -23.246891753083432
            ],
            [
              -45.909088947631915,
              -23.242810108752494
            ],
            [
              -45.911582168022306,
              -23.24661267026906
            ],
            [
              -45.91115186602562,
              -23.246891753083432
            ]
          ]
}
```

**Response:**

```
{
	"name": "Lago do Vale poligono editado",
	"location": [
		[
			-45.91115186602562,
			-23.246891753083432
		],
		[
			-45.909088947631915,
			-23.242810108752494
		],
		[
			-45.911582168022306,
			-23.24661267026906
		],
		[
			-45.91115186602562,
			-23.246891753083432
		]
	],
	"id": "0eaf1aa5-bf84-42f8-968e-df344e5e6f65"
}

```

🔴 **DELETE - v5/polygon/:id**

- Deleta um poligono.

**Response:**

```
{
	"message": "lugar removido com sucesso!"
}

```
