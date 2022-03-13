/*
    Estudar:

1 - querySelector
2 - diferença entre foreach e o for
3 - Funções de seta ou arrow functions
*/

const listaSelecaoPokemons = document.querySelectorAll(".pokemon")
const pokemonsCard = document.querySelectorAll(".cartao-pokemon")

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const cartaoPokemonAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonAbrir.classList.add('aberto')

        const pokemonAtivoListagem = document.querySelector('.ativo')
        pokemonAtivoListagem.classList.remove('ativo')

        const pokemonSelecionadoListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoListagem.classList.add('ativo')
    })
})