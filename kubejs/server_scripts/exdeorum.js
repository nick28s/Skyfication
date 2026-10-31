ServerEvents.recipes(event => {
    // 12% Chance beim Diamant-Sieb
    event.custom({
        type: "exdeorum:sieve",
        ingredient: { item: "exdeorum:dust" },
        mesh: { item: "exdeorum:diamond_mesh" }, // Jetzt als Objekt formatiert!
        result: { id: "mekanism:dust_fluorite" },
        result_amount: {
            type: "minecraft:binomial",
            n: 1,
            p: 0.12
        }
    })

    // 14% Chance beim Netherit-Sieb
    event.custom({
        type: "exdeorum:sieve",
        ingredient: { item: "exdeorum:dust" },
        mesh: { item: "exdeorum:netherite_mesh" }, // Jetzt als Objekt formatiert!
        result: { id: "mekanism:dust_fluorite" },
        result_amount: {
            type: "minecraft:binomial",
            n: 1,
            p: 0.14
        }
    })
})
