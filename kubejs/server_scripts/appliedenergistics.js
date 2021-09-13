onEvent('recipes', e => {
    
    //charged certus quartz recipe
    function energize(ingredient, result, rCount, power) {
        e.recipes.powah.energizing({
            ingredients: ingredient,
            energy: power,
            result: {
                item: result,
                count: rCount
            }
        })
    }

    energize([{item:'minecraft:quartz'},{item:'create:shadow_steel'},{item:'create:refined_radiance'}],'appliedenergistics2:charged_certus_quartz_crystal',4,"100000")

    
})