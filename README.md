# 📝 The-Blog — Projeto em Next.js

Bem-vindo ao **The-Blog**, uma aplicação web moderna desenvolvida com **Next.js**.  
O projeto demonstra o uso de recursos avançados do framework, explorando rotas dinâmicas, renderização estática e funcionalidades de cache.

O resultado é um blog rápido, responsivo e com foco em uma leitura agradável e experiência fluida para o usuário.

---

## 🚀 Tecnologias utilizadas

- ⚛️ **Next.js 15** — App Router, Server Actions e recursos de cache  
- 💅 **Tailwind CSS 4** — Estilização responsiva e *mobile-first*  
- 🗄️ **Drizzle ORM + SQLite** — Banco de dados tipado e migrations  
- 🔐 **JWT + Bcrypt + Cookies Seguros** — Autenticação e segurança  
- 🧠 **Zod** — Validação de formulários e tipagem de dados  
- ✨ **React Markdown + Tailwind Typography** — Renderização de texto rica  
- 🔔 **React Toastify** — Feedback visual ao usuário  
- 🧱 **Lucide React** — Ícones leves e personalizáveis  
- 📅 **Date-fns** — Manipulação de datas  
- 🧹 **TypeScript + ESLint** — Código seguro e padronizado  

---

## 💻 Funcionalidades

✅ **Criação, edição e exclusão de posts**  
🖼️ **Upload e pré-visualização de imagens**  
📝 **Editor Markdown com pré-visualização**  
📱 **Layout responsivo (mobile-first)**  
🌗 **Tema claro e escuro**  
🔒 **Autenticação segura com JWT e cookies**  
⚙️ **Cache inteligente com revalidação automática (ISR e revalidatePath)**  
📂 **Área administrativa protegida**  
⚡ **Alto desempenho com Server Components e Suspense**  

---

## 🧭 Estrutura do projeto
```bash
the-blog/
├── public/ # Imagens e arquivos públicos
├── src/ # Código-fonte principal
│ ├── app/ # Rotas e páginas Next.js
│ ├── components/ # Componentes reutilizáveis
│ ├── lib/ # Configurações e utilitários
│ └── db/ # Schemas e conexão Drizzle
├── drizzle.config.js # Configuração do ORM
├── tailwind.config.js # Estilos globais
└── package.json # Dependências e scripts
```

---

## 🧑‍💻 Como executar o projeto

**Clone o repositório:**
```bash
git clone https://github.com/rafamgcarvalho/the-blog.git
cd the-blog
```

**Instale as dependências:**

```bash
npm install
```

**Configurar o arquivo .env.local:**

Crie um arquivo .env.local na raiz do projeto e copie o conteúdo de .env.local-example.

**Rodar as migrações:**

```bash
npm run migrate
```

**Executar seed (opcional):**

```bash
npm run seed
```

**Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

**O projeto estará disponível em:**

```arduino
http://localhost:3000
```

---

## 🌟 Diferenciais
- Performance otimizada graças ao uso do Next.js App Router e renderização estática (SSG).
- Design responsivo e moderno, construído com Tailwind CSS, priorizando a experiência mobile-first.
- Gerenciamento de dados eficiente utilizando Drizzle ORM com SQLite.
- Autenticação segura com JWT e bcrypt, garantindo proteção de acesso à área administrativa.
- Arquitetura organizada, seguindo padrões de repositório e componentização reutilizável.

---

## 🧩 Possíveis melhorias futuras
- Integração com um banco de dados remoto (ex: PostgreSQL).
- Deploy automatizado em plataforma cloud (Vercel, Render ou Railway).
- Implementação de sistema de comentários para os posts.
- Adição de painel de estatísticas com métricas de visualização.
- Internacionalização (i18n) com suporte a múltiplos idiomas.

