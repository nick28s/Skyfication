
ServerEvents.recipes((event) => {
  event.recipes.create.splashing(
    ["minecraft:clay_ball", CreateItem.of("minecraft:sniffer_egg", 0.05)],
    "minecraft:suspicious_sand"
  );
});
