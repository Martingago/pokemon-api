<template>
    
    <div class="py-4 m-auto d-flex gap-4 flex-column container">
        <buscador @search="handleSearch"></buscador>
        <p v-if="pending" class="shadow rounded  p-2 container text-center bg-warning">Cargando...</p>
        <p v-else-if="error" class="shadow rounded container p-2 text-center bg-danger"> Ha ocurrido un error</p>

        <section v-else class="row gap-2 justify-content-center">
            <!-- ficha del pokemon -->
            <div class=" col-5 col-sm-4 col-md-3 col-lg-2 shadow rounded p-2 d-flex  flex-column justify-content-center align-items-center position-relative"
                v-for="pokemon in pokemons" :key="pokemon.name">
                <p class="pokemon-id position-absolute top-0">{{ pokemonDetails.get(pokemon.name).id }}</p>
                <img :src="pokemonDetails.get(pokemon.name).sprite" alt="llaa">
                <h3 class="fs-5 text-capitalize w-100">{{ pokemon.name }}</h3>

                <div class="d-flex gap-1 margin-left w-100">
                    <p class="pokemon-type-tag  m-0 fw-bold rounded"
                        v-for="tipoPokemon in pokemonDetails.get(pokemon.name).types" :key="tipoPokemon.types"
                        :style="{ backgroundColor: setColortype(tipoPokemon.type.name) }"> {{
                            tipoPokemon.type.name }}</p>
                </div>
            </div>

        </section>
    </div>

</template>

<style scoped>
.pokemon-id {
    left: 5px;
}

.pokemon-type-tag {
    width: 40px;
    text-align: center;
    font-size: 10px;
    color: white;
}
</style>

<script setup>

let searchValue = ref('');
const handleSearch = (search) => {
        searchValue = search;
}

//fetch pokemon information
const { data: p, error, pending } = await useLazyFetch('https://pokeapi.co/api/v2/pokemon?limit=10');
let pokemons = [];
const pokemonDetails = new Map();

try {
    pokemons = toRaw(p.value.results);
    //Creamos un map con los datos obtenidos de pokemon
    pokemons.forEach(async (pokemon) => {
        //Debemos realizar una subconsulta para obtener la informacion especifica del pokemon
        const { data: p, error, pending } = await useLazyFetch(pokemon.url);
        const pData = toRaw(p.value);
        pokemonDetails.set(pData.name, {
            id: pData.id,
            name: pData.name,
            sprite: pData.sprites.front_default,
            types: pData.types
        })

    })
} catch (error) {
    console.log("error => " + error)
}







</script>