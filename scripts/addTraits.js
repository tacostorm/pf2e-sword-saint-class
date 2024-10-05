Hooks.once('init', function() {
    const customWeaponTraits = {
      "apex": "Apex",
      "flair": "Flair",
      "fusion": "Fusion",
      "style": "Style",
      "weapon-art": "Weapon Art"
      "sword-saint": "Sword Saint"
    };
  
    // Add these custom weapon traits to the system's existing weapon traits
    CONFIG.PF2E.weaponTraits = mergeObject(CONFIG.PF2E.weaponTraits, customWeaponTraits);
  });
  