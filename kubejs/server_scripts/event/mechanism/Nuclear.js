ItemEvents.rightClicked("cmi:nuclear_mechanism", (event) => {
	if (event.level.isClientSide()) {
		return
	}
	event.player.mergeNbt({ ForgeCaps: { "mekanism:radiation": { radiation: 0 } } })
	event.player.swing()
})