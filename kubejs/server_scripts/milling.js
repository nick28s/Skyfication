ServerEvents.recipes((event) => {
  event.recipes.create.milling(
    CreateItem.of("minecraft:suspicious_sand", 0.25),
    "minecraft:smooth_sandstone"
  );
});
