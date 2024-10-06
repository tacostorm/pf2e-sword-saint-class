Hooks.once('init', function() {
  console.log("Adding Sword Saint Class Trait")
  const customClassTraits = {
    "sword-saint": "Sword Saint"
  };

  // Add these custom weapon traits to the system's existing weapon traits
  CONFIG.PF2E.featTraits = foundry.utils.mergeObject(CONFIG.PF2E.featTraits, customClassTraits);
  console.log("Finished Adding Class Trait")


  console.log("Adding Sword Saint feat/features Traits")
  const customFeatTraits = {
    "apex": "Apex",
    "flair": "Flair",
    "fusion": "Fusion",
    "style": "Style",
    "weapon-art": "Weapon Art",
    "limit-break": "Limit Break",
    "commando": "Commando",
    "medic": "Medic",
    "ravager": "Ravager",
    "saboteur": "Saboteur",
    "sentinel": "Sentinel",
    "synergist": "Synergist",
    "destructive-fist": "Destructive Fist",
    
  };

  // Add these custom weapon traits to the system's existing weapon traits
  CONFIG.PF2E.featTraits = foundry.utils.mergeObject(CONFIG.PF2E.featTraits, customFeatTraits);
  console.log("Finished Adding feat/feature Traits")
  });
  