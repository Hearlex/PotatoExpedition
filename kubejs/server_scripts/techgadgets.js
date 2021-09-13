onEvent('recipes', e => {
    //materials
    const iron = 'minecraft:iron_ingot';
    const diamond = 'powah:crystal_niotic'
    const emerald = 'powah:crystal_spirited'
    const redstone = 'create:electron_tube'
    const gold = 'create:precision_mechanism'
    const lapis = 'minecraft:lapis_lazuli'
    const ender = 'appliedenergistics2:ender_dust'

    //remove
    e.remove({id: 'buildinggadgets:gadget_building'})
    e.remove({id: 'buildinggadgets:gadget_exchanging'})
    e.remove({id: 'buildinggadgets:gadget_copy_paste'})
    e.remove({id: 'buildinggadgets:gadget_destruction'})
    e.remove({id: 'buildinggadgets:template_manager'})
    e.remove({id: 'mininggadgets:mininggadget_simple'})
    e.remove({id: 'mininggadgets:mininggadget_fancy'})
    e.remove({id: 'mininggadgets:mininggadget'})
    e.remove({id: 'mininggadgets:modificationtable'})
    e.remove({id: 'powah:crafting/dielectric_paste'})
    e.remove({id: 'powah:crafting/dielectric_paste_2'})

    //add - building gadgets
    e.shaped('buildinggadgets:gadget_building', [
        'IRI',
        'DXD',
        'ILI'
    ], {
        I: iron,
        R: redstone,
        D: diamond,
        L: lapis,
        X: 'create:refined_radiance'
    })
    e.shaped('buildinggadgets:gadget_exchanging', [
        'IRI',
        'DLD',
        'IXI'
    ], {
        I: iron,
        R: redstone,
        D: diamond,
        L: lapis,
        X: 'create:refined_radiance'
    })
    e.shaped('buildinggadgets:gadget_copy_paste', [
        'IRI',
        'EXE',
        'ILI'
    ], {
        I: iron,
        R: redstone,
        E: emerald,
        L: lapis,
        X: 'create:refined_radiance'
    })
    e.shaped('buildinggadgets:gadget_destruction', [
        'IRI',
        'EXE',
        'ILI'
    ], {
        I: iron,
        R: redstone,
        E: ender,
        L: lapis,
        X: 'create:refined_radiance'
    })
    e.shaped('buildinggadgets:template_manager', [
        'GRG',
        'ERE',
        'GLG'
    ], {
        G: gold,
        R: redstone,
        E: emerald,
        L: lapis
    })
    //add - mininggadgets
    e.shaped('mininggadgets:mininggadget_simple', [
        'DIG',
        'XBR',
        'DII'
    ], {
        D: diamond,
        I: iron,
        G: gold,
        R: redstone,
        X: 'create:refined_radiance',
        B: 'mininggadgets:upgrade_empty'
    })
    e.shaped('mininggadgets:mininggadget_fancy', [
        'DII',
        'XBR',
        'DIG'
    ], {
        D: diamond,
        I: iron,
        G: gold,
        R: redstone,
        X: 'create:refined_radiance',
        B: 'mininggadgets:upgrade_empty'
    })
    e.shaped('mininggadgets:mininggadget', [
        'DIG',
        'XBR',
        'DIG'
    ], {
        D: diamond,
        I: iron,
        G: gold,
        R: redstone,
        X: 'create:refined_radiance',
        B: 'mininggadgets:upgrade_empty'
    })
    e.shaped('mininggadgets:modificationtable', [
        'III',
        'RBR',
        'DEG'
    ], {
        D: diamond,
        I: iron,
        G: gold,
        R: redstone,
        E: emerald,
        B: 'mininggadgets:upgrade_empty'
    })

    //add - powah
    e.shaped('24x powah:dielectric_paste', [
        'CCX',
        'YYL',
        '   '
    ], {
        C: '#minecraft:coals',
        Y: '#forge:clay',
        L: 'minecraft:lava_bucket',
        X: 'create:refined_radiance'
    })
    e.shaped('16x powah:dielectric_paste', [
        'CX ',
        'YB ',
        '   '
    ], {
        C: '#minecraft:coals',
        Y: '#forge:clay',
        B: '#forge:dusts/blaze',
        X: 'create:refined_radiance'
    })
})