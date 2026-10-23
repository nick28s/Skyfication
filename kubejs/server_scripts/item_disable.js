ServerEvents.recipes(event => {
    event.remove({
        output: 'mekanism:jetpack'
    })

    event.remove({
        output: 'mekanism:jetpack_armored'
    })

    event.remove({
        output: 'sophisticatedbackpacks:inception_upgrade'
    })
})
