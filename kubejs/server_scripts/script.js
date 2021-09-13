// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	event.remove({input: 'botania:pebble'})
	event.remove({id: 'minecraft:ens_ancient_debris'})

	//Nether kezdett stick
	event.shaped('minecraft:stick',[
		'   ',
		'  X',
		'  X'
	], {
		X: 'minecraft:crimson_roots'
	})
	event.shaped('minecraft:stick',[
		'   ',
		'  X',
		'  X'
	], {
		X: 'minecraft:warped_roots'
	})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

onEvent('player.logged_in', event => {
	console.info('Hello!')
})