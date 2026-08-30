# Paulo Fernando — Developer

Site pessoal bilíngue sobre minha trajetória profissional, estudos, interesses e formas de contato.

## Idiomas

O conteúdo está disponível em português (padrão) e inglês. O idioma pode ser alternado pelo botão no cabeçalho:

- Português: `index.htm`
- Inglês: `index.htm?lang=en`

As traduções são aplicadas no navegador pelo arquivo `i18n.js`.

## Seções

- Sobre mim
- Estudos
- Minha trajetória
- Meus hobbies
- Contato

## Recursos

- Navegação responsiva para desktop e dispositivos móveis
- Seletor de idioma português/inglês
- Destaque automático da seção ativa durante a rolagem
- Animações leves de entrada com suporte a preferência por movimento reduzido
- Cálculo automático da idade, dos dias vividos e do ano exibido no rodapé
- Badge de perfil do LinkedIn

## Stack

- HTML
- Tailwind CSS via CDN
- Google Fonts (Inter)
- JavaScript vanilla
- Página estática, sem processo de build

## Estrutura do projeto

```text
.
├── index.htm
├── i18n.js
├── img/
│   └── perfil.jpg
└── README.md
```

## Como rodar localmente

Não há dependências para instalar nem etapa de build. Abra `index.htm` diretamente no navegador ou inicie um servidor HTTP local na raiz do projeto, por exemplo:

```bash
python3 -m http.server 8000
```

Depois, acesse `http://localhost:8000/index.htm`.

## Deploy

O projeto pode ser publicado em qualquer serviço de hospedagem estática, como:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

Dependendo do serviço, pode ser necessário configurar `index.htm` como documento inicial do site.

## Acessibilidade e qualidade

- Navegação por teclado
- Textos alternativos nas imagens
- Meta tag de viewport para layout responsivo
- Respeito à configuração `prefers-reduced-motion`
- Links externos abertos com `rel="noopener"`

## Contato

- **E-mails:** [paulo@inove.cloud](mailto:paulo@inove.cloud) e [paulofoliveira@outlook.com](mailto:paulofoliveira@outlook.com)
- **LinkedIn:** [paulo-fernando-oliveira](https://br.linkedin.com/in/paulo-fernando-oliveira)
- **Instagram:** [@_paulofoliveira](https://instagram.com/_paulofoliveira)
- **Facebook:** [paulo.fernando.54](https://www.facebook.com/paulo.fernando.54)
