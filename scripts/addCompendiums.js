Hooks.once("ready", async () => {
    // Check if the compendium is loaded
    const pack = game.packs.get("pf2e.sword-saint-class");
    if (pack) {
        console.log("Sword Saint Class compendium found.");
    } else {
        console.warn("Sword Saint Class compendium not found!");
    }
});
