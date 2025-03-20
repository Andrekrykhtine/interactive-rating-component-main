# Componente de Avaliação Interativa - Frontend Mentor

Este é o meu projeto de solução para o desafio "Interactive rating component" do [Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). O desafio consiste em criar um componente de avaliação interativo que permite aos usuários selecionar uma classificação e visualizar um cartão de agradecimento após o envio.

![Prévia do Componente de Avaliação Interativa](./screenshot.png)

## Visão Geral

### O Desafio

O desafio proposto pelo Frontend Mentor é construir um componente de avaliação interativo com as seguintes funcionalidades:

*   **Layout Responsivo:** O layout deve se adaptar a diferentes tamanhos de tela, desde dispositivos móveis até desktops.
*   **Estados de Hover:** Todos os elementos interativos devem exibir estados de "hover" (passar o mouse por cima).
*   **Seleção e Envio de Avaliação:** O usuário deve poder selecionar uma avaliação numérica e enviá-la.
*   **Cartão de Agradecimento:** Após o envio da avaliação, o usuário deve visualizar um cartão de "Obrigado" com a avaliação selecionada.

### Screenshot

*(Substitua `screenshot.png` por uma captura de tela real do seu projeto. Você pode usar ferramentas como a do próprio navegador ou o FireShot para isso. Coloque a imagem na raiz do seu projeto.)*

!Captura de tela do componente de avaliação interativa

### Links

*   **URL da Solução:** https://github.com/Andrekrykhtine/interactive-rating-component-main
*   **URL do Site Publicado:** *(Adicione o link do seu site publicado aqui, se você o implantou em algum serviço como GitHub Pages, Vercel ou Netlify)*

## Meu Processo

### Construído com

*   **HTML5 Semântico:** Para estruturar o conteúdo de forma clara e acessível.
*   **CSS3:** Para estilização e layout do componente.
*   **Flexbox:** Para criar um layout flexível e responsivo.
*   **JavaScript:** Para a interatividade, como a seleção da avaliação e a exibição do cartão de agradecimento.
*   **Mobile-First Workflow:** O desenvolvimento foi feito pensando primeiro em dispositivos móveis, e depois adaptado para telas maiores.

### O que eu aprendi

*   **Manipulação do DOM com JavaScript:** Aprendi a manipular elementos HTML dinamicamente com JavaScript, como adicionar e remover classes, alterar o conteúdo e controlar a exibição de elementos.
*   **Eventos em JavaScript:** Aprofundei meu conhecimento sobre o uso de eventos, como `click`, para criar interações com o usuário.
*   **CSS Responsivo:** Reforcei o uso de Flexbox para criar um layout que se adapta a diferentes tamanhos de tela.
*   **Estados de Hover:** Pratiquei a criação de estados de "hover" para melhorar a experiência do usuário.
* **Boas praticas de acessibilidade:** Implementei boas praticas de acessibilidade para garantir que o componente seja acessivel para todos os usuarios.

```javascript
// Exemplo de código JavaScript para selecionar a avaliação
const ratingButtons = document.querySelectorAll('.rating-button');
ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Lógica para selecionar a avaliação
  });
});
/* Exemplo de CSS para o estado de hover */
.rating-button:hover {
  background-color: hsl(25, 97%, 53%);
  color: white;
}
```

# Desenvolvimento Contínuo

## Animações
Adicionar animações suaves para melhorar a experiência do usuário ao interagir com o componente.

## Testes
Implementar testes unitários e de integração para garantir a qualidade do código.

## Refatoração
Refatorar o código para torná-lo mais modular e reutilizável.

## Acessibilidade
Continuar aprimorando a acessibilidade do componente.

---

# Recursos Úteis

- **Frontend Mentor**: Plataforma para desafios de front-end.
- **MDN Web Docs**: Documentação completa sobre tecnologias web.
- **W3Schools**: Tutoriais e referências sobre HTML, CSS e JavaScript.

---

# Documentação do Desafio

## Autor
- **GitHub**: [Andrekrykhtine](https://github.com/Andrekrykhtine)
- **Frontend Mentor**: [Andrekrykhtine](https://www.frontendmentor.io/profile/Andrekrykhtine)

---

# Agradecimentos

Gostaria de agradecer à comunidade do **Frontend Mentor** pelo desafio e pelos recursos fornecidos. Também agradeço a todos que me ajudaram com feedback e sugestões durante o desenvolvimento deste projeto.