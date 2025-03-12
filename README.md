# TEMPOGRAMA - Jogo de Anagramas com Tempo

![Logotipo do Tempograma](https://example.com/tempograma-logo.png)

## Índice
- [Sobre o Jogo](#sobre-o-jogo)
- [Funcionalidades](#funcionalidades)
- [Regras do Jogo](#regras-do-jogo)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Desenvolvimento](#desenvolvimento)
- [Documentação](#documentação)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)

## Sobre o Jogo

TEMPOGRAMA é um jogo desafiador de anagramas onde os jogadores precisam reorganizar letras embaralhadas para formar palavras corretas antes que o tempo acabe. Com diferentes temas e níveis de dificuldade progressivos, o jogo testa seu vocabulário e agilidade mental.

## Funcionalidades

- **Temas Diversos**:
  - 🐾 Animais
  - 🏢 Cidades
  - 🍽️ Comidas
  - ▶️ Verbos
  - 📦 Objetos

- **Sistema de Jogo**:
  - ⏱️ 30 segundos iniciais
  - ⭐ 5 níveis de dificuldade
  - ⏩ 3 pulos disponíveis
  - 🎯 Bônus de tempo por acerto
  - 📊 Sistema de pontuação dinâmico

## Regras do Jogo

1. **Objetivo**: Forme a palavra correta usando as letras embaralhadas
2. **Progressão**: 
   - 5 palavras para avançar de nível
   - Máximo de 5 níveis
   - Dificuldade aumenta progressivamente
3. **Tempo**: 
   - 30 segundos iniciais
   - +2 segundos por acerto
4. **Pulos**: 
   - 3 pulos por partida
   - Sem penalidade
5. **Fim de Jogo**: Quando acabar o tempo ou desistir

## Tecnologias

- ⚛️ **React 18**
- 📘 **TypeScript 5**
- 🎨 **Tailwind CSS**
- 🎯 **shadcn/ui**
- ⚡ **Vite**

## Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── game/            # Componentes específicos do jogo
│   │   ├── GameActions.tsx
│   │   ├── GameStats.tsx
│   │   ├── Timer.tsx
│   │   └── WordDisplay.tsx
│   ├── screens/         # Telas do jogo
│   │   ├── GameScreen.tsx
│   │   ├── GameOver.tsx
│   │   └── WelcomeScreen.tsx
│   ├── shared/          # Componentes compartilhados
│   │   ├── AnimatedTitle.tsx
│   │   └── ThemeSelector.tsx
│   └── ui/             # Componentes base (shadcn/ui)
├── game/               # Lógica do jogo
│   ├── useGame.ts
│   ├── useGameState.ts
│   ├── useGameTimer.ts
│   └── useWordManagement.ts
├── data/              # Dados do jogo
│   └── words.ts
├── types/            # Tipos TypeScript
├── constants/        # Constantes do jogo
└── pages/           # Páginas da aplicação
```

## Instalação

```bash
# Clone o repositório
git clone https://github.com/ualcz/tempogramma.git

# Entre no diretório
cd tempograma

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Desenvolvimento

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## Documentação

### Hooks Principais

#### useGame
Hook principal que gerencia toda a lógica do jogo:
- Estado do jogo (tema, palavra atual, letras, etc.)
- Ações do jogo (iniciar, verificar palavra, pular, etc.)
- Temporizador e pontuação

#### useGameState
Gerencia o estado global:
- Tema selecionado
- Palavra atual
- Letras embaralhadas e selecionadas
- Nível e pontuação
- Tempo restante

#### useGameTimer
Controla o temporizador:
- Contagem regressiva
- Bônus de tempo
- Fim de jogo por tempo

#### useWordManagement
Gerencia as palavras:
- Seleção de letras
- Verificação de palavras
- Sistema de pulos
- Progressão de nível

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.
