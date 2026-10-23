ServerEvents.recipes(event => {
    // Normales Mekanism-Jetpack entfernen
    event.remove({
        type: 'minecraft:crafting',
        output: 'mekanism:jetpack'
    })

    // Gepanzertes Mekanism-Jetpack entfernen
    event.remove({
        type: 'minecraft:crafting',
        output: 'mekanism:jetpack_armored'
    })

    // Inception-Upgrade entfernen
    event.remove({
        type: 'minecraft:crafting',
        output: 'sophisticatedbackpacks:inception_upgrade'
    })
})
