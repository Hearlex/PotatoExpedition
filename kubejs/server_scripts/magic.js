onEvent('recipes', e => {
    //botania
    e.remove({output: 'botania:fertilizer'})

    e.shapeless('botania:fertilizer', ['minecraft:bone_meal','8x twilightforest:liveroot'])

    const petals = [
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray',
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black'
    ]

    petals.forEach(p => {
        e.recipes.bloodmagic.alchemytable(`botania:${p}_petal`, ['#botania:petals',`#forge:dyes/${p}`])
    })

    //ars nouveau
    const bookrecipes = [
        'ars_nouveau:novice_spell_book'
    ] 

    bookrecipes.forEach(br => {
        e.remove({id: br})
    })

    e.shapeless('ars_nouveau:novice_spell_book',['#forge:books','minecraft:dragon_egg'])
})