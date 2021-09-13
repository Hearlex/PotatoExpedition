onEvent('recipes', e => {

    //removing
    const idRemove = [
        'mekanism:chemical_tank/basic',
    ]
    
    idRemove.forEach(iR => {
        e.remove({id: iR})
    })

    //new recipes
    e.shaped('mekanism:basic_chemical_tank', [
        'ROR',
        'OEO',
        'ROR'
    ], {
        R: 'minecraft:redstone',
        O: 'mekanism:ingot_osmium',
        E: 'minecraft:dragon_breath'
    })

    //change materials
    e.replaceInput({mod: 'mekanism'}, 'minecraft:gold_ingot', 'create:precision_mechanism')
    e.replaceInput({mod: 'mekanism'}, 'minecraft:iron_ingot', 'create:shadow_steel')
    e.replaceInput({mod: 'mekanism'}, 'minecraft:redstone', 'create:electron_tube')


})