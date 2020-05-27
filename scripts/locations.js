worldgrid_SouthernWoodland = new GridlineObj(1,0,34.12,34.25);
worldgrid_Graveyard = new GridlineObj(15,1,29.85,29.85);
worldgrid_BeachPyramid = new GridlineObj(2,240,29.85,29.85);
worldgrid_ParkSkyHigh = new GridlineObj(3,0,31.25,31.25);
worldgrid_TownTop = new GridlineObj(277,357,26.25,27);
worldgrid_TownMain = new GridlineObj(277,392,26.25,27);
worldgrid_RabiRavine = new GridlineObj(402,250,31.25,31.25);
worldgrid_NorthernTundra = new GridlineObj(1,1,29.87,30.00);
worldgrid_EasternHighlands = new GridlineObj(0,0,29.95,29.95);
worldgrid_VolcanicCanerns = new GridlineObj(0,0,32.12,32.12); //The "typo" is actually a reference/easter egg. Kind of a meme. Ask around the community if interested.
worldgrid_Plurkwood = new GridlineObj(1,169,22.25,22.25);
worldgrid_SystemInterior = new GridlineObj(242,303,31.25,31.25);

/*
BEGINNER
INTERMEDIATE
ADVANCED
HARDCORE
*/

var DifficultyLevel = {
	BEGINNER:1,
	INTERMEDIATE:2,
	ADVANCED:3,
	HARDCORE:4
};

DIFFICULTY = DifficultyLevel.BEGINNER;

var NONE = true;
var EXPLOSIVES_ENEMY = BLOCK_CLIP = SLIDING_POWDER = ITM = DOWNDRILL_SEMISOLID_CLIP = RABI_SLIPPERS = AIR_JUMP = WALL_JUMP = ITM_HARD = AIR_DASH = SPEED5 = ADV_STUPID = WALL_JUMP_LV2 = WHIRL_BONK_CANCEL = SLIDE_JUMP_BUNSTRIKE_CANCEL = BUNNY_WHIRL = BUNNY_AMULET = PIKO_HAMMER = SLIDE_JUMP_BUNSTRIKE = ADV_VHARD = 
WHIRL_BONK = AIR_DASH_LV3 = SPEED3 = SPEED2 = EXPLOSIVES = CARROT_BOMB = CARROT_SHOOTER = HAMMER_ROLL_ZIP = ADV_HARD = SLIDE_ZIP = HARD = SPEED1 = ITM_VHARD = DARKNESS = LIGHT_ORB = WATER_ORB = UNDERWATER = CARROT_SHOOTER_ENTRY = DOWNDRILL_SEMISOLID_CLIP = RIVERBANK_LOWER_HEALTH_UP_ROOM = PIKO_HAMMER_LEVELED = MANY_AMULET_FOOD = THREE_AMULET_FOOD = FIRE_ORB = TWO_AMULET_FOOD = POST_GAME = IMPOSSIBLE = AMULET_FOOD = BUNNY_STRIKE = HAMMER_ROLL = false;
var ASHURI_2 = TOWN_MAIN = PROLOGUE_TRIGGER = BOOST = CHARGE_RING = TM_CHOCOLATE = TM_VANILLA = TM_CICINI = TM_SYARO = TM_LILITH = SLIDING_POWDER = COCOA_1 = KOTRI_1 = CHAPTER_1 = POST_IRISU = BOSS_KEKE_BUNNY = PLURKWOOD = true;

Item = {
	"CarrotBomb":false,
	"CarrotShooter":false,
	"SlidingPowder":false,
	"RabiSlippers":false,
	"AirJump":false,
	"WallJump":false,
	"BunnyWhirl":false,
	"BunnyAmulet":false,
	"BunnyStrike":false,
	"PikoHammer":false,
	"LightOrb":false,
	"WaterOrb":false,
	"FireOrb":false,
	"AirDash":false,
	"HammerRoll":false
}

function EvaluateConstraints() {
	NONE = true;
	ITM = HARD = DIFFICULTY >= DifficultyLevel.INTERMEDIATE;
	ITM_HARD = ADV_HARD = DIFFICULTY >= DifficultyLevel.INTERMEDIATE;
	ADV_VHARD = ITM_VHARD = DIFFICULTY >= DifficultyLevel.ADVANCED;
	ADV_STUPID = DIFFICULTY >= DifficultyLevel.HARDCORE;
	CARROT_BOMB = Item["CarrotBomb"];
	CARROT_SHOOTER = Item["CarrotShooter"];
	EXPLOSIVES = CARROT_BOMB || CARROT_SHOOTER;
	EXPLOSIVES_ENEMY = CARROT_BOMB || (CARROT_SHOOTER && ITM);
	BLOCK_CLIP = ITM;
	SLIDING_POWDER = Item["SlidingPowder"];
	DOWNDRILL_SEMISOLID_CLIP = ITM;
	RABI_SLIPPERS = Item["RabiSlippers"];
	AIR_JUMP = Item["AirJump"];
	WALL_JUMP = WALL_JUMP_LV2 = Item["WallJump"];
	BUNNY_WHIRL = Item["BunnyWhirl"];
	BUNNY_AMULET = Item["BunnyAmulet"];
	BUNNY_STRIKE = Item["BunnyStrike"];
	PIKO_HAMMER = PIKO_HAMMER_LEVELED = Item["PikoHammer"];
	LIGHT_ORB = Item["LightOrb"];
	WATER_ORB = Item["WaterOrb"];
	FIRE_ORB = Item["FireOrb"];
	DARKNESS = LIGHT_ORB || ITM;
	UNDERWATER = WATER_ORB || ITM;
	SPEED5 = SPEED3 = SPEED2 = SPEED1 = ADV_VHARD;
	AIR_DASH = AIR_DASH_LV3 = Item["AirDash"];
	HAMMER_ROLL = Item["HammerRoll"];
	HAMMER_ROLL_ZIP = HAMMER_ROLL && ADV_VHARD;
	WHIRL_BONK = BUNNY_WHIRL && ITM;
	WHIRL_BONK_CANCEL = BUNNY_WHIRL && BUNNY_AMULET && ITM;
	SLIDE_JUMP_BUNSTRIKE_CANCEL = BUNNY_WHIRL && BUNNY_AMULET && SLIDING_POWDER && BUNNY_STRIKE && ADV_VHARD;
	SLIDE_JUMP_BUNSTRIKE = SLIDING_POWDER && BUNNY_STRIKE && ITM;
	AMULET_FOOD = MANY_AMULET_FOOD = THREE_AMULET_FOOD = TWO_AMULET_FOOD = BUNNY_AMULET && ADV_VHARD;
	SLIDE_ZIP = SLIDING_POWDER && ADV_STUPID;
	CARROT_SHOOTER_ENTRY = CARROT_SHOOTER && ADV_VHARD;
	DOWNDRILL_SEMISOLID_CLIP = PIKO_HAMMER && ADV_VHARD;
	RIVERBANK_LOWER_HEALTH_UP_ROOM = ITM;
}

constraints = {};

markers = [
	new Location(17,0,worldgrid_SouthernWoodland, "MANA_WAGER"),
	new Location(20,0,worldgrid_SouthernWoodland, "EGG_FOREST_NE_PEDESTAL"),
	new Location(0,1,worldgrid_SouthernWoodland, "NATURE_ORB"),
	new Location(2,1,worldgrid_SouthernWoodland, "EGG_FORESTNIGHT_ARURAUNE"),
	new Location(9,1,worldgrid_SouthernWoodland, "HP_UP_NORTH_FOREST"),
	new Location(13,1,worldgrid_SouthernWoodland, "LIGHT_ORB"),
	new Location(18,1,worldgrid_SouthernWoodland, "MP_UP_NORTHEAST_FOREST"),
	new Location(2,2,worldgrid_SouthernWoodland, "PACK_UP_FOREST_NIGHT"),
	new Location(6,2,worldgrid_SouthernWoodland, "EGG_FORESTNIGHT_EAST"),
	new Location(15,2,worldgrid_SouthernWoodland, "EGG_FOREST_NE_LEDGE"),
	new Location(17,2,worldgrid_SouthernWoodland, "REGEN_UP_EAST_FOREST"),
	new Location(6,3,worldgrid_SouthernWoodland, "TOXIC_STRIKE"),
	new Location(4,4,worldgrid_SouthernWoodland, "ATK_UP_FOREST_NIGHT"),
	new Location(10,4,worldgrid_SouthernWoodland, "REGEN_UP_MID_FOREST"),
	new Location(12,4,worldgrid_SouthernWoodland, "CARROT_BOMB"),
	new Location(6,5,worldgrid_SouthernWoodland, "PIKO_HAMMER"),
	new Location(14,5,worldgrid_SouthernWoodland, "HP_UP_FOREST_POST_COCOA"),
	new Location(17,5,worldgrid_SouthernWoodland, "MP_UP_EAST_FOREST"),
	new Location(6,6,worldgrid_SouthernWoodland, "EGG_CAVE_UNDER_HAMMER"),
	new Location(7,6,worldgrid_SouthernWoodland, "MP_UP_FOREST_CAVE"),
	new Location(17,6,worldgrid_SouthernWoodland, "PACK_UP_EAST_FOREST"),
	new Location(4,7,worldgrid_SouthernWoodland, "MP_UP_CAVE"),
	new Location(13,7,worldgrid_SouthernWoodland, "DEF_TRADE"),
	new Location(4,8,worldgrid_SouthernWoodland, "PACK_UP_SPECTRAL"),
	new Location(5,8,worldgrid_SouthernWoodland, "HP_UP_CAVE"),
	new Location(9,8,worldgrid_SouthernWoodland, "REGEN_UP_CAVE"),
	new Location(13,8,worldgrid_SouthernWoodland, "EGG_CAVE_COCOA"),
	new Location(3,9,worldgrid_SouthernWoodland, "HP_UP_WEST_SPECTRAL"),
	new Location(10,9,worldgrid_SouthernWoodland, "MP_UP_MID_SPECTRAL"),
	new Location(16,9,worldgrid_SouthernWoodland, "CHARGE_RING"),
	new Location(4,10,worldgrid_SouthernWoodland, "EGG_SPECTRAL_WEST"),
	new Location(9,10,worldgrid_SouthernWoodland, "WALL_JUMP"),
	new Location(12,10,worldgrid_SouthernWoodland, "EGG_SPECTRAL_SLIDE"),
	new Location(17,10,worldgrid_SouthernWoodland, "MP_UP_CICINI"),
	new Location(8,11,worldgrid_SouthernWoodland, "TOUGH_SKIN"),
	new Location(11,11,worldgrid_SouthernWoodland, "HP_UP_MID_SPECTRAL"),
	new Location(17,11,worldgrid_SouthernWoodland, "ARM_STRENGTH"),
	new Location(20,0,worldgrid_Graveyard, "PACK_UP_SKY_ISLAND"),
	new Location(15,1,worldgrid_Graveyard, "TOP_FORM"),
	new Location(18,1,worldgrid_Graveyard, "PURE_LOVE"),
	new Location(0,3,worldgrid_Graveyard, "SURVIVAL"),
	new Location(7,3,worldgrid_Graveyard, "EGG_GRAVEYARD_NEAR_LIBRARY"),
	new Location(19,3,worldgrid_Graveyard, "EGG_SKY_TOWN"),
	new Location(21,3,worldgrid_Graveyard, "REGEN_UP_SKY_ISLAND"),
	new Location(3,4,worldgrid_Graveyard, "HEALTH_WAGER"),
	new Location(7,4,worldgrid_Graveyard, "MP_UP_UPPER_GRAVEYARD"),
	new Location(9,4,worldgrid_Graveyard, "CRISIS_BOOST"),
	new Location(19,4,worldgrid_Graveyard, "HP_UP_SKY_ISLAND"),
	new Location(4,5,worldgrid_Graveyard, "HP_UP_GRAVEYARD"),
	new Location(17,5,worldgrid_Graveyard, "AIR_DASH"),
	new Location(4,6,worldgrid_Graveyard, "MP_UP_GRAVEYARD_WARP"),
	new Location(7,6,worldgrid_Graveyard, "AUTO_EARRINGS"),
	new Location(9,6,worldgrid_Graveyard, "ATK_UP_GRAVEYARD"),
	new Location(15,0,worldgrid_BeachPyramid, "PACK_UP_BEACH"),
	new Location(14,2,worldgrid_BeachPyramid, "EGG_PYRAMID_BEACH"),
	new Location(16,2,worldgrid_BeachPyramid, "HP_UP_PYRAMID_ENTRANCE"),
	new Location(6,3,worldgrid_BeachPyramid, "SUNNY_BEAM"),
	new Location(12,3,worldgrid_BeachPyramid, "HP_UP_BEACH"),
	new Location(19,3,worldgrid_BeachPyramid, "MP_UP_BEACH_TUNNEL"),
	new Location(22,3,worldgrid_BeachPyramid, "MP_UP_BEACH_PILLAR"),
	new Location(4,4,worldgrid_BeachPyramid, "ATK_UP_BEACH_CAVE"),
	new Location(9,4,worldgrid_BeachPyramid, "HEALTH_PLUS"),
	new Location(11,4,worldgrid_BeachPyramid, "HP_UP_INNER_PYRAMID"),
	new Location(14,5,worldgrid_BeachPyramid, "ARMORED"),
	new Location(17,5,worldgrid_BeachPyramid, "MP_UP_PYRAMID_BOMBBLOCK_ROOM"),
	new Location(19,5,worldgrid_BeachPyramid, "HOURGLASS"),
	new Location(13,6,worldgrid_BeachPyramid, "PACK_UP_PYRAMID"),
	new Location(16,6,worldgrid_BeachPyramid, "EGG_PYRAMID_LOWER"),
	new Location(18,6,worldgrid_BeachPyramid, "REGEN_UP_PYRAMID"),
	new Location(2,7,worldgrid_BeachPyramid, "EGG_BEACH_TO_AQUARIUM"),
	new Location(10,7,worldgrid_BeachPyramid, "MP_UP_PYRAMID_DARK_ROOM"),
	new Location(13,7,worldgrid_BeachPyramid, "ATK_UP_PYRAMID"),
	new Location(14,7,worldgrid_BeachPyramid, "CHAOS_ROD"),
	new Location(6,0,worldgrid_ParkSkyHigh, "EGG_SKY_BRIDGE_WARP"),
	new Location(5,1,worldgrid_ParkSkyHigh, "MP_UP_SKY_BRIDGE"),
	new Location(7,1,worldgrid_ParkSkyHigh, "HP_UP_SKY_BRIDGE"),
	new Location(11,2,worldgrid_ParkSkyHigh, "LUCKY_SEVEN"),
	new Location(11,3,worldgrid_ParkSkyHigh, "EGG_SKY_BRIDGE_BY_VANILLA"),
	new Location(14,3,worldgrid_ParkSkyHigh, "ATK_UP_VANILLA"),
	new Location(4,4,worldgrid_ParkSkyHigh, "HEALTH_SURGE"),
	new Location(2,5,worldgrid_ParkSkyHigh, "ATK_UP_PARK"),
	new Location(7,5,worldgrid_ParkSkyHigh, "HEX_CANCEL"),
	new Location(8,5,worldgrid_ParkSkyHigh, "PACK_UP_SKY_BRIDGE"),
	new Location(3,7,worldgrid_ParkSkyHigh, "REGEN_UP_PARK"),
	new Location(2,8,worldgrid_ParkSkyHigh, "ATK_TRADE"),
	new Location(9,8,worldgrid_ParkSkyHigh, "REGEN_UP_SKY_BRIDGE"),
	new Location(6,9,worldgrid_ParkSkyHigh, "MP_UP_PARK"),
	new Location(1,11,worldgrid_ParkSkyHigh, "EGG_PARK_SPIKES"),
	new Location(2,12,worldgrid_ParkSkyHigh, "HP_UP_PARK"),
	new Location(3,13,worldgrid_ParkSkyHigh, "EGG_UPRPRC_BASE"),
	new Location(6,13,worldgrid_ParkSkyHigh, "MP_UP_UPRPRC_HQ"),
	new Location(3,14,worldgrid_ParkSkyHigh, "RABI_SLIPPERS"),
	new Location(1,15,worldgrid_ParkSkyHigh, "DEF_GROW"),
	new Location(2,15,worldgrid_ParkSkyHigh, "EGG_PARK_GREEN_KOTRI"),
	//new Location(4,15,worldgrid_ParkSkyHigh, " "),
	//new Location(9,15,worldgrid_ParkSkyHigh, " "),
	new Location(0.5,0,worldgrid_TownTop, "SPEED_BOOST"),
	new Location(1.5,0,worldgrid_TownTop, "BUNNY_STRIKE"),
	//new Location(3,0,worldgrid_TownTop, " "),
	new Location(5,0,worldgrid_TownMain, "EGG_TOWN"),
	//new Location(7,0,worldgrid_TownMain, " "),
	new Location(4,1,worldgrid_RabiRavine, "HAMMER_WAVE"),
	new Location(6,1,worldgrid_RabiRavine, "ATK_UP_NORTH_RAVINE"),
	new Location(7,1,worldgrid_RabiRavine, "MP_UP_RAVINE"),
	new Location(4,2,worldgrid_RabiRavine, "ATK_UP_WEST_RAVINE"),
	new Location(6,2,worldgrid_RabiRavine, "EGG_RAVINE_MID"),
	new Location(4,3,worldgrid_RabiRavine, "EGG_RAVINE_ABOVE_CHOCOLATE"),
	new Location(6,3,worldgrid_RabiRavine, "HP_UP_MID_RAVINE"),
	new Location(8,3,worldgrid_RabiRavine, "MANA_SURGE"),
	new Location(7,6,worldgrid_RabiRavine, "REGEN_UP_RAVINE"),
	new Location(5,7,worldgrid_RabiRavine, "HP_UP_SOUTH_RAVINE"),
	new Location(1,0,worldgrid_NorthernTundra, "WATER_ORB"),
	new Location(9,0,worldgrid_NorthernTundra, "GOLD_CARROT"),
	new Location(1,1,worldgrid_NorthernTundra, "HP_UP_PALACE"),
	new Location(5,1,worldgrid_NorthernTundra, "EGG_PALACE_BRIDGE"),
	new Location(12,1,worldgrid_NorthernTundra, "ATK_UP_ICY_SUMMIT"),
	new Location(16,1,worldgrid_NorthernTundra, "SUPER_CARROT"),
	new Location(6,2,worldgrid_NorthernTundra, "EGG_PALACE_WALL"),
	new Location(9,2,worldgrid_NorthernTundra, "PACK_UP_ICY_SUMMIT"),
	new Location(16,2,worldgrid_NorthernTundra, "HP_UP_ICY_SUMMIT"),
	new Location(3,3,worldgrid_NorthernTundra, "ATK_UP_PALACE"),
	new Location(5,3,worldgrid_NorthernTundra, "REGEN_UP_PALACE"),
	new Location(11,3,worldgrid_NorthernTundra, "EGG_ICY_SUMMIT_NIXIE"),
	//new Location(1,4,worldgrid_NorthernTundra, " "),
	new Location(5,4,worldgrid_NorthernTundra, "STAMINA_PLUS"),
	new Location(15,4,worldgrid_NorthernTundra, "MP_UP_ICY_SUMMIT"),
	new Location(17,4,worldgrid_NorthernTundra, "EGG_ICY_SUMMIT_WARP"),
	new Location(6,5,worldgrid_NorthernTundra, "MP_UP_PALACE"),
	new Location(9,6,worldgrid_NorthernTundra, "EGG_SNOWLAND_WARP"),
	new Location(2,7,worldgrid_NorthernTundra, "EGG_SNOWLAND_TO_EVERNIGHT"),
	new Location(4,7,worldgrid_NorthernTundra, "ATK_UP_SNOWLAND"),
	//new Location(11,7,worldgrid_NorthernTundra, " "),
	new Location(15,7,worldgrid_NorthernTundra, "MP_UP_SNOWLAND"),
	new Location(7,8,worldgrid_NorthernTundra, "SELF_DEFENSE"),
	new Location(16,8,worldgrid_NorthernTundra, "QUICK_BARRETTE"),
	new Location(21,8,worldgrid_NorthernTundra, "HP_UP_SNOWLAND"),
	new Location(9,9,worldgrid_NorthernTundra, "ATK_UP_UPPER_AQUARIUM"),
	new Location(17,9,worldgrid_NorthernTundra, "REGEN_UP_SNOWLAND_WATER"),
	new Location(18,9,worldgrid_NorthernTundra, "EGG_SNOWLAND_LAKE"),
	new Location(22,10,worldgrid_NorthernTundra, "CARROT_BOOST"),
	new Location(8,11,worldgrid_NorthernTundra, "HP_UP_UPPER_AQUARIUM"),
	new Location(22,11,worldgrid_NorthernTundra, "REGEN_UP_AQUARIUM"),
	new Location(2,12,worldgrid_NorthernTundra, "MANA_PLUS"),
	new Location(13,12,worldgrid_NorthernTundra, "ATK_UP_MID_AQUARIUM"),
	new Location(22,12,worldgrid_NorthernTundra, "PACK_UP_AQUARIUM"),
	new Location(1,13,worldgrid_NorthernTundra, "HP_UP_WEST_AQUARIUM"),
	new Location(6,13,worldgrid_NorthernTundra, "EGG_AQUARIUM"),
	new Location(20,13,worldgrid_NorthernTundra, "MP_UP_AQUARIUM"),
	new Location(22,0,worldgrid_EasternHighlands, "EGG_EVERNIGHT_SAYA"),
	new Location(10,1,worldgrid_EasternHighlands, "SPIKE_BARRIER"),
	new Location(18,1,worldgrid_EasternHighlands, "EGG_EVERNIGHT_MID"),
	new Location(19,1,worldgrid_EasternHighlands, "REGEN_UP_EVERNIGHT"),
	new Location(16,2,worldgrid_EasternHighlands, "ATK_UP_EVERNIGHT_UPRPRC"),
	new Location(18,2,worldgrid_EasternHighlands, "PACK_UP_NORTH_EVERNIGHT"),
	new Location(20,2,worldgrid_EasternHighlands, "ATK_UP_EVERNIGHT"),
	new Location(14,3,worldgrid_EasternHighlands, "HP_UP_EVERNIGHT"),
	new Location(23,3,worldgrid_EasternHighlands, "HAMMER_ROLL"),
	new Location(8,4,worldgrid_EasternHighlands, "EXPLODE_SHOT"),
	new Location(1,5,worldgrid_EasternHighlands, "REGEN_UP_NORTHWEST_RIVERBANK"),
	new Location(3,5,worldgrid_EasternHighlands, "EGG_RIVERBANK_SPIDER_SPIKE"),
	new Location(11,5,worldgrid_EasternHighlands, "FRAME_CANCEL"),
	new Location(13,5,worldgrid_EasternHighlands, "MP_UP_EVERNIGHT"),
	new Location(16,5,worldgrid_EasternHighlands, "PLUS_NECKLACE"),
	new Location(3,6,worldgrid_EasternHighlands, "ATK_GROW"),
	new Location(8,6,worldgrid_EasternHighlands, "EGG_RIVERBANK_WALL"),
	new Location(18,7,worldgrid_EasternHighlands, "PACK_UP_SOUTH_EVERNIGHT"),
	new Location(7,8,worldgrid_EasternHighlands, "ATK_UP_RIVERBANK_PIT"),
	new Location(8,8,worldgrid_EasternHighlands, "MP_UP_MID_RIVERBANK"),
	new Location(16,8,worldgrid_EasternHighlands, "CASHBACK"),
	new Location(1,9,worldgrid_EasternHighlands, "PACK_UP_RIVERBANK"),
	new Location(8,9,worldgrid_EasternHighlands, "BUNNY_WHIRL"),
	new Location(10,9,worldgrid_EasternHighlands, "ATK_UP_EAST_RIVERBANK"),
	new Location(12,9,worldgrid_EasternHighlands, "HP_UP_RIVERBANK"),
	new Location(17,9,worldgrid_EasternHighlands, "WEAKEN"),
	new Location(2,11,worldgrid_EasternHighlands, "MP_UP_SOUTHWEST_RIVERBANK"),
	new Location(3,11,worldgrid_EasternHighlands, "REGEN_UP_SOUTH_RIVERBANK"),
	new Location(11,11,worldgrid_EasternHighlands, "HP_UP_LAB_SLIDE_TUNNEL"),
	new Location(12,11,worldgrid_EasternHighlands, "MP_UP_LAB"),
	new Location(14,12,worldgrid_EasternHighlands, "EGG_LAB"),
	new Location(15,12,worldgrid_EasternHighlands, "HP_UP_LAB_PIT"),
	new Location(22,12,worldgrid_EasternHighlands, "ATK_UP_EAST_LAB"),
	new Location(23,12,worldgrid_EasternHighlands, "PACK_UP_LAB"),
	new Location(15,13,worldgrid_EasternHighlands, "SLIDING_POWDER"),
	new Location(18,13,worldgrid_EasternHighlands, "ATK_UP_LAB_COMPUTER"),
	new Location(16,0,worldgrid_VolcanicCanerns, "EGG_VOLCANIC_NE"),
	new Location(4,2,worldgrid_VolcanicCanerns, "EGG_VOLCANIC_BOMB_BUNNIES"),
	new Location(15,2,worldgrid_VolcanicCanerns, "PACK_UP_VOLCANIC"),
	new Location(3,3,worldgrid_VolcanicCanerns, "HP_UP_VOLCANIC"),
	new Location(14,3,worldgrid_VolcanicCanerns, "EGG_VOLCANIC_FIRE_ORB"),
	new Location(14,6,worldgrid_VolcanicCanerns, "FIRE_ORB"),
	new Location(21,11,worldgrid_VolcanicCanerns, "EGG_VOLCANIC_BIG_DROP"),
	new Location(3,0,worldgrid_Plurkwood, "P_HAIRPIN"),
	new Location(7,5,worldgrid_Plurkwood, "EGG_PLURK_EAST"),
	new Location(0,6,worldgrid_Plurkwood, "EGG_PLURK_CAVE"),
	new Location(0,12,worldgrid_Plurkwood, "EGG_PLURK_CATS"),
	new Location(10,0,worldgrid_SystemInterior, "HP_UP_CYBERSPACE"),
	new Location(11,1,worldgrid_SystemInterior, "ATK_UP_CYBERSPACE"),
	new Location(1,2,worldgrid_SystemInterior, "REGEN_UP_CYBERSPACE"),
	new Location(2,2,worldgrid_SystemInterior, "PACK_UP_CYBERSPACE"),
	new Location(7,4,worldgrid_SystemInterior, "AIR_JUMP"),
	new Location(14,4,worldgrid_SystemInterior, "MP_UP_CYBERSPACE"),
	//new Location(5,5,worldgrid_SystemInterior, " "),
	new Location(14,6,worldgrid_SystemInterior, "EGG_SYSINT1"),
];

openMarkers = [
];

function EvaluateMarkers() {
	for ( i = 0; i < markers.length; i++){
		var item = markers[i].itemName;
		switch (item) {
			case "NATURE_ORB":{
				constraints[item]=NONE;
			}break;
			case "PACK_UP_FOREST_NIGHT":{
				constraints[item]=(EXPLOSIVES_ENEMY | BLOCK_CLIP);
			}break;
			case "HP_UP_WEST_SPECTRAL":{
				constraints[item]=NONE;
			}break;
			case "ATK_UP_FOREST_NIGHT":{
				constraints[item]=NONE;
			}break;
			case "PACK_UP_SPECTRAL":{
				constraints[item]=NONE;
			}break;
			case "MP_UP_CAVE":{
				constraints[item]=SLIDING_POWDER;
			}break;
			case "HP_UP_CAVE":{
				constraints[item]=NONE;
			}break;
			case "BLESSED":{
				constraints[item]=POST_GAME;
			}break;
			case "TOXIC_STRIKE":{
				constraints[item]=NONE;
			}break;
			case "PIKO_HAMMER":{
				constraints[item]=NONE;
			}break;
			case "MP_UP_FOREST_CAVE":{
				constraints[item]=SLIDING_POWDER;
			}break;
			case "TOUGH_SKIN":{
			constraints[item]=ASHURI_2 & TOWN_MAIN;
			}break;
			case "REGEN_UP_CAVE":{
				constraints[item]=(EXPLOSIVES_ENEMY | ITM) & SLIDING_POWDER;
			}break;
			case "HP_UP_NORTH_FOREST":{
				constraints[item]=
				((EXPLOSIVES_ENEMY & SLIDING_POWDER) | DOWNDRILL_SEMISOLID_CLIP);
			}break;
			case "WALL_JUMP":{
				constraints[item]=NONE;
			}break;
			case "REGEN_UP_MID_FOREST":{
			constraints[item]=
				(ITM_HARD & (WALL_JUMP_LV2 | WHIRL_BONK_CANCEL))
				| AIR_JUMP
				| ((RABI_SLIPPERS | SLIDE_JUMP_BUNSTRIKE_CANCEL) & WALL_JUMP_LV2);
			}break;
			case "MP_UP_MID_SPECTRAL":{
				constraints[item]=NONE;
			}break;
			case "HP_UP_MID_SPECTRAL":{
				constraints[item]=NONE;
			}break;
			case "CARROT_BOMB":{
				constraints[item]=NONE;
			}break;
			case "DEF_TRADE":{
				constraints[item]=EXPLOSIVES_ENEMY;
			}break;
			case "LIGHT_ORB":{
				constraints[item]=NONE;
			}break;
			case "HP_UP_FOREST_POST_COCOA":{
				constraints[item]=PIKO_HAMMER | EXPLOSIVES_ENEMY;
			}break;
			case "CHARGE_RING":{
				constraints[item]=NONE;
			}break;
			case "ARM_STRENGTH":{
				constraints[item]=AIR_JUMP | (SLIDE_JUMP_BUNSTRIKE | AIR_DASH | AIR_JUMP | (ADV_VHARD & AMULET_FOOD));
			}break;
			case "REGEN_UP_EAST_FOREST":{
				constraints[item]=NONE;
			}break;
			case "MANA_WAGER":{
				constraints[item]=
					WHIRL_BONK
					| (AIR_JUMP & (RABI_SLIPPERS | ITM_HARD))
					| (AIR_DASH & (RABI_SLIPPERS | SLIDE_JUMP_BUNSTRIKE_CANCEL))
					// 4 tile corner rwj, airdash, wallkick, amulet cancel
					| (ADV_VHARD & AIR_DASH_LV3 & BUNNY_AMULET)
					// slide bonk off big bunny
					| (ADV_STUPID & SLIDING_POWDER & RABI_SLIPPERS);
				}break;
			case "MP_UP_EAST_FOREST":{
				constraints[item]=NONE;
			}break;
			case "PACK_UP_EAST_FOREST":{
				constraints[item]=(PIKO_HAMMER | EXPLOSIVES_ENEMY) & SLIDING_POWDER;
			}break;
			case "MP_UP_CICINI":{
				constraints[item]=(COCOA_1 & KOTRI_1 & CHAPTER_1)|(AIR_JUMP
					| SLIDE_JUMP_BUNSTRIKE_CANCEL
					| (ITM_HARD & (WALL_JUMP_LV2 | AIR_DASH))
					| (RABI_SLIPPERS & (ADV_VHARD | (ADV_HARD & SPEED3)))
					| (ADV_STUPID & PROLOGUE_TRIGGER & SPEED3));
			}break;
				case "MP_UP_NORTHEAST_FOREST":{
				constraints[item]=EXPLOSIVES_ENEMY & SLIDING_POWDER;
			}break;
			case "SURVIVAL":{
				constraints[item]=NONE;
			}break;
			case "HEALTH_WAGER":{
			constraints[item]=
				(AIR_JUMP & AIR_DASH)
				| (AIR_JUMP & ITM_HARD)
				| (AIR_DASH_LV3 & (
					ADV_VHARD | (ITM_HARD & (WALL_JUMP | BUNNY_AMULET))
				))
				| (AIR_DASH & ADV_STUPID)
				| (ADV_VHARD & BUNNY_STRIKE & BUNNY_AMULET);
			}break;
			case "ATK_UP_BEACH_CAVE":{
				constraints[item]=NONE;
			}break;
			case "MP_UP_GRAVEYARD_WARP":{
				constraints[item]=EXPLOSIVES_ENEMY;
			}break;
			case "HP_UP_GRAVEYARD":{
				constraints[item]=NONE;
			}break;
			case "SUNNY_BEAM":{
				constraints[item]=NONE;
			}break;
			case "MP_UP_UPPER_GRAVEYARD":{
			constraints[item]=
				// Getting onto the ledge
				(AIR_JUMP | AIR_DASH | (ITM_HARD & (AMULET_FOOD | BUNNY_STRIKE)))
				& (CARROT_BOMB | BLOCK_CLIP);
			}break;
			case "AUTO_EARRINGS":{
				constraints[item]=NONE;
			}break;
			case "AUTO_TRIGGER":{
				constraints[item]=POST_GAME & IMPOSSIBLE;
			}break;
			case "HEALTH_PLUS":{
				constraints[item]=NONE;
			}break;
			case "MP_UP_PYRAMID_DARK_ROOM":{
				constraints[item]=DARKNESS;
			}break;
			case "CRISIS_BOOST":{
			constraints[item]=
				(AIR_JUMP & (RABI_SLIPPERS | ITM_HARD))
				| (AIR_DASH & (RABI_SLIPPERS | SLIDE_JUMP_BUNSTRIKE_CANCEL));
			}break;
			case "ATK_UP_GRAVEYARD":{
				constraints[item]=EXPLOSIVES_ENEMY;
			}break;
			case "HP_UP_INNER_PYRAMID":{
				constraints[item]=EXPLOSIVES;
			}break;
			case "HP_UP_BEACH":{
				constraints[item]=EXPLOSIVES_ENEMY;
			}break;
			case "ATK_UP_PYRAMID":{
				constraints[item]=CARROT_BOMB;
			}break;
			case "PACK_UP_PYRAMID":{
				constraints[item]=EXPLOSIVES;
			}break;
			case "ARMORED":{
				constraints[item]=NONE;
			}break;
			case "CHAOS_ROD":{
				constraints[item]=NONE;
			}break;
			case "PACK_UP_BEACH":{
				constraints[item]=EXPLOSIVES_ENEMY | BLOCK_CLIP;
			}break;
			case "TOP_FORM":{
				constraints[item]=NONE;
			}break;
			case "HP_UP_PYRAMID_ENTRANCE":{
				constraints[item]=CARROT_BOMB | (CARROT_SHOOTER & BOOST & ADV_HARD);
			}break;
			case "HITBOX_DOWN":{
			constraints[item]=POST_GAME & CARROT_BOMB & IMPOSSIBLE;
			}break;
			case "MP_UP_PYRAMID_BOMBBLOCK_ROOM":{
				constraints[item]=NONE;
			}break;
			case "AIR_DASH":{
				constraints[item]=EXPLOSIVES & SLIDING_POWDER;
			}break;
			case "REGEN_UP_PYRAMID":{
				constraints[item]=NONE;
			}break;
			case "PURE_LOVE":{
				constraints[item]=EXPLOSIVES & SLIDING_POWDER;
			}break;
			case "MP_UP_BEACH_TUNNEL":{
				constraints[item]=NONE;
			}break;
			case "HOURGLASS":{
				constraints[item]=NONE;
			}break;
			case "HP_UP_SKY_ISLAND":{
				constraints[item]=EXPLOSIVES;
			}break;
			case "PACK_UP_SKY_ISLAND":{
				constraints[item]=EXPLOSIVES;
			}break;
			case "REGEN_UP_SKY_ISLAND":{
				constraints[item]=EXPLOSIVES;
			}break;
			case "MP_UP_BEACH_PILLAR":{
				constraints[item]=NONE;
			}break;
			case "DEF_GROW":{
				constraints[item]=NONE;
			}break;
			case "ATK_UP_PARK":{
				constraints[item]=EXPLOSIVES_ENEMY;
			}break;
			case "ATK_TRADE":{
				constraints[item]=EXPLOSIVES;
			}break;
			case "HP_UP_PARK":{
				constraints[item]=EXPLOSIVES_ENEMY;
			}break;
			case "RABI_SLIPPERS":{
				constraints[item]=NONE;
			}break;
			case "REGEN_UP_PARK":{
				constraints[item]=SLIDING_POWDER | HAMMER_ROLL_ZIP;
			}break;
			case "HEALTH_SURGE":{
				constraints[item]=NONE;
			}break;
			case "MP_UP_SKY_BRIDGE":{
			constraints[item]=EXPLOSIVES & SLIDING_POWDER
			}break;
			case "MP_UP_UPRPRC_HQ":{
			constraints[item]=NONE;
			}break;
			case "MP_UP_PARK":{
			constraints[item]=RABI_SLIPPERS | SLIDING_POWDER | AIR_DASH | AIR_JUMP | (ITM & SPEED2) | (ADV_VHARD & AMULET_FOOD)
			}break;
			case "HEX_CANCEL":{
				constraints[item]=NONE;
			}break;
			case "HP_UP_SKY_BRIDGE":{
				constraints[item]=NONE;
			}break;
			case "PACK_UP_SKY_BRIDGE":{
				constraints[item]=NONE;
			}break;
			case "REGEN_UP_SKY_BRIDGE":{
				constraints[item]=NONE;
			}break;
			case "LUCKY_SEVEN":{
				constraints[item]=NONE;
			}break;
			case "ATK_UP_VANILLA":{
				constraints[item]=
				(CARROT_BOMB | (CARROT_SHOOTER & BOOST & ADV_HARD)) &
				SLIDING_POWDER;
			}break;
			case "HAMMER_WAVE":{
				constraints[item]=NONE;
			}break;
			case "ATK_UP_WEST_RAVINE":{
				constraints[item]=NONE;
			}break;
			case "HP_UP_SOUTH_RAVINE":{
			constraints[item]=EXPLOSIVES_ENEMY & (SLIDING_POWDER | HAMMER_ROLL_ZIP);
			}break;
			case "ATK_UP_NORTH_RAVINE":{
				constraints[item]=EXPLOSIVES | BLOCK_CLIP
			}break;
			case "HP_UP_MID_RAVINE":{
			constraints[item]=EXPLOSIVES
			}break;
			case "MP_UP_RAVINE":{
			constraints[item]=EXPLOSIVES
			}break;
			case "REGEN_UP_RAVINE":{
			// cramped 2 tile zip in and out
				constraints[item]=EXPLOSIVES | (ADV_STUPID & SLIDE_ZIP);
			}break;
			case "MANA_SURGE":{
			constraints[item]=NONE;
			}break;
			case "HP_UP_PALACE":{
			constraints[item]=NONE;
			}break;
			case "WATER_ORB":{
			constraints[item]=NONE;
			}break;
			case "HP_UP_WEST_AQUARIUM":{
			constraints[item]=DARKNESS & EXPLOSIVES			}break;
			case "MANA_PLUS":{
			constraints[item]=DARKNESS
			}break;
			case "ATK_UP_PALACE":{
			constraints[item]=FIRE_ORB
			}break;
			case "ATK_UP_SNOWLAND":{
			constraints[item]=EXPLOSIVES_ENEMY & (SLIDING_POWDER | HAMMER_ROLL | BLOCK_CLIP)
			}break;
			case "REGEN_UP_PALACE":{
			constraints[item]=
				DARKNESS &
				(
					SLIDE_JUMP_BUNSTRIKE
					| WHIRL_BONK
					| AIR_DASH
					| AIR_JUMP
					// rwj left wall, wallkick overhang
					| (RABI_SLIPPERS & ((ITM_HARD & SPEED2) | ADV_STUPID))
					// wimpy right corner, bounce left wall, amulet (similar to spike barrier)
					| (ADV_STUPID & AMULET_FOOD)
				)
						}break;
			case "STAMINA_PLUS":{
			constraints[item]=EXPLOSIVES_ENEMY
			}break;
			case "MP_UP_PALACE":{
			constraints[item]=NONE;
			}break;
			case "SELF_DEFENSE":{
			constraints[item]=SLIDING_POWDER & UNDERWATER;
			}break;
			case "HP_UP_UPPER_AQUARIUM":{
			constraints[item]=NONE;
			}break;
			case "GOLD_CARROT":{
			constraints[item]=
				AIR_JUMP
				| (WALL_JUMP_LV2 & (
					WHIRL_BONK
					| (AIR_DASH & HARD)
					| SLIDE_JUMP_BUNSTRIKE
					| (RABI_SLIPPERS & (
						SLIDING_POWDER
						| (SPEED1 & ITM_HARD)
						| (AMULET_FOOD & ADV_STUPID)
					))
				))
			}break;
			case "ATK_UP_UPPER_AQUARIUM":{
			constraints[item]=NONE;
			}break;
			case "PACK_UP_ICY_SUMMIT":{
			constraints[item]=AIR_JUMP | AIR_DASH | (WHIRL_BONK & ADV_VHARD)
			}break;
			case "ATK_UP_ICY_SUMMIT":{
			constraints[item]=EXPLOSIVES_ENEMY
			}break;
			case "ATK_UP_MID_AQUARIUM":{
			constraints[item]=NONE;
			}break;
			case "MP_UP_ICY_SUMMIT":{
			constraints[item]=ADV_STUPID | RABI_SLIPPERS | AIR_JUMP | WALL_JUMP | WHIRL_BONK | (SPEED1 & ITM_VHARD) | (SLIDING_POWDER | HAMMER_ROLL_ZIP)
			}break;
			case "MP_UP_SNOWLAND":{
			constraints[item]=EXPLOSIVES_ENEMY			
			}break;
			case "QUICK_BARRETTE":{
			constraints[item]=NONE;
			}break;
			case "HP_UP_ICY_SUMMIT":{
			constraints[item]=NONE;
			}break;
			case "SUPER_CARROT":{
			constraints[item]=EXPLOSIVES
			}break;
			case "REGEN_UP_SNOWLAND_WATER":{
			constraints[item]=NONE;
			}break;
			case "MP_UP_AQUARIUM":{
			constraints[item]=NONE;
			}break;
			case "HP_UP_SNOWLAND":{
			constraints[item]=EXPLOSIVES_ENEMY
			}break;
			case "CARROT_BOOST":{
			constraints[item]=NONE;
			}break;
			case "REGEN_UP_AQUARIUM":{
			constraints[item]=SLIDING_POWDER
			}break;
			case "PACK_UP_AQUARIUM":{
			constraints[item]=NONE;
			}break;
			case "REGEN_UP_NORTHWEST_RIVERBANK":{
			constraints[item]=NONE;
			}break;
			case "PACK_UP_RIVERBANK":{
			constraints[item]=NONE;
			}break;
			case "MP_UP_SOUTHWEST_RIVERBANK":{
			constraints[item]=EXPLOSIVES
			}break;
			case "ATK_GROW":{
			constraints[item]=NONE;
			}break;
			case "REGEN_UP_SOUTH_RIVERBANK":{
			constraints[item]=DARKNESS & UNDERWATER & EXPLOSIVES
			}break;
			case "ATK_UP_RIVERBANK_PIT":{
			constraints[item]=NONE;
			}break;
			case "BUNNY_WHIRL":{
			constraints[item]=
				PIKO_HAMMER | (CARROT_SHOOTER & BOOST & ADV_HARD)
				// slide zip from bomb block slide tunnel in room to the left
				| SLIDE_ZIP;
			}break;
			case "EXPLODE_SHOT":{
			constraints[item]=NONE;
			}break;
			case "MP_UP_MID_RIVERBANK":{
			constraints[item]=EXPLOSIVES_ENEMY
			}break;
			case "ATK_UP_EAST_RIVERBANK":{
			constraints[item]=
				DOWNDRILL_SEMISOLID_CLIP
				// A bit of a workaround. Assumption: You can walk from riverbank main to health room, unconstrained.
				| (EXPLOSIVES & RIVERBANK_LOWER_HEALTH_UP_ROOM & SLIDING_POWDER)
			}break;
			case "SPIKE_BARRIER":{
			constraints[item]=NONE;
			}break;
			case "FRAME_CANCEL":{
			constraints[item]= EXPLOSIVES_ENEMY & (SLIDING_POWDER | HAMMER_ROLL_ZIP)
			}break;
			case "HP_UP_LAB_SLIDE_TUNNEL":{
			constraints[item]=SLIDING_POWDER
			}break;
			case "MP_UP_LAB":{
			constraints[item]=SLIDING_POWDER
			}break;
			case "HP_UP_RIVERBANK":{
			constraints[item]=EXPLOSIVES_ENEMY | BUNNY_WHIRL | AIR_DASH | BLOCK_CLIP | PIKO_HAMMER_LEVELED			}break;
			case "MP_UP_EVERNIGHT":{
			constraints[item]=
				DARKNESS & SLIDING_POWDER
				& (
					(AIR_JUMP & (RABI_SLIPPERS | AIR_DASH | ITM_HARD))
					| WHIRL_BONK
					| (RABI_SLIPPERS & AIR_DASH)
					| (BUNNY_STRIKE & AIR_DASH & ITM_HARD)
					| (ADV_STUPID & THREE_AMULET_FOOD) // wimpy, bounce, spam amulet (same as spike barrier jump)
				)
			}break;
			case "HP_UP_EVERNIGHT":{
			constraints[item]=EXPLOSIVES
			}break;
			case "HP_UP_LAB_PIT":{
			constraints[item]=CARROT_BOMB
			}break;
			case "SLIDING_POWDER":{
			constraints[item]=NONE;
			}break;
			case "ATK_UP_EVERNIGHT_UPRPRC":{
			constraints[item]=SLIDING_POWDER & (EXPLOSIVES | DOWNDRILL_SEMISOLID_CLIP)
			}break;
			case "CASHBACK":{
			constraints[item]=NONE;
			}break;
			case "PLUS_NECKLACE":{
			constraints[item]=NONE;
			}break;
			case "WEAKEN":{
			constraints[item]=NONE;
			}break;
			case "ATK_UP_LAB_COMPUTER":{
			constraints[item]=EXPLOSIVES | BLOCK_CLIP			}break;
			case "PACK_UP_SOUTH_EVERNIGHT":{
			constraints[item]=EXPLOSIVES_ENEMY
			}break;
			case "PACK_UP_NORTH_EVERNIGHT":{
			constraints[item]=
				AIR_DASH | AIR_JUMP | SLIDE_JUMP_BUNSTRIKE
				| (ADV_VHARD & RABI_SLIPPERS & AMULET_FOOD)
				| (ADV_STUPID & WALL_JUMP_LV2 & MANY_AMULET_FOOD)
			}break;
			case "REGEN_UP_EVERNIGHT":{
			constraints[item]=EXPLOSIVES
			}break;
			case "ATK_UP_EVERNIGHT":{
			constraints[item]=NONE;
			}break;
			case "ATK_UP_EAST_LAB":{
			constraints[item]=EXPLOSIVES_ENEMY & (
				AIR_JUMP
				| AIR_DASH
				| (RABI_SLIPPERS & ADV_VHARD)
				| (RABI_SLIPPERS & SLIDE_JUMP_BUNSTRIKE)
			) | (EXPLOSIVES_ENEMY & HAMMER_ROLL_ZIP);
			}break;
			case "PACK_UP_LAB":{
			constraints[item]=NONE;
			}break;
			case "HAMMER_ROLL":{
			constraints[item]=BUNNY_WHIRL
			}break;
			case "RIBBON_BADGE":{
			constraints[item]=POST_IRISU & SLIDING_POWDER			}break;
			case "ERINA_BADGE":{
			constraints[item]=POST_IRISU & SLIDING_POWDER			}break;
			case "HP_UP_VOLCANIC":{
			constraints[item]=EXPLOSIVES_ENEMY
			}break;
			case "CARROT_SHOOTER":{
			constraints[item]=POST_GAME
			}break;
			case "FIRE_ORB":{
			// 1.8 requirements
			constraints[item]=FIRE_ORB | CARROT_BOMB | (CARROT_SHOOTER & (BOOST | CHARGE_RING))
			}break;
			case "PACK_UP_VOLCANIC":{
			constraints[item]=EXPLOSIVES_ENEMY
			}break;
			case "REGEN_UP_CYBERSPACE":{
			constraints[item]=(CARROT_BOMB | (CARROT_SHOOTER & BOOST & ADV_HARD)) & (AIR_JUMP | AIR_DASH | SLIDE_JUMP_BUNSTRIKE | ADV_STUPID)
			}break;
			case "PACK_UP_CYBERSPACE":{
			constraints[item]=NONE;
			}break;
			case "CYBER_FLOWER":{
			constraints[item]=POST_GAME & IMPOSSIBLE			}break;
			case "AIR_JUMP":{
			constraints[item]=NONE;
			}break;
			case "HP_UP_CYBERSPACE":{
			constraints[item]=
				(SLIDING_POWDER & (
					CARROT_BOMB
					// hammer roll zip oob, then almost blind 2 tile zip
					| (ADV_STUPID & SLIDE_ZIP & HAMMER_ROLL_ZIP)
				))
				& (
					(AIR_JUMP & (RABI_SLIPPERS | ITM_HARD)) // 6tile airjump
					| (AIR_DASH_LV3 & ITM_HARD) // 4tile walljump, some other strange jumps
					| (AIR_DASH & ADV_VHARD) // (needs slide) 4tile walljump + weird jump at end
					| (WALL_JUMP_LV2 & (
						(RABI_SLIPPERS & ADV_VHARD) // buffered wall launch
						| ADV_STUPID // (needs slide) two slide bonks, one buffered wall launch
					))
					| (WHIRL_BONK & ITM_VHARD) // 3 buffered whirlbonks. last one is tight
				)
				}break;
			case "ATK_UP_CYBERSPACE":{
			constraints[item]=CARROT_BOMB | (CARROT_SHOOTER & BOOST & ADV_HARD)
			}break;
			case "MP_UP_CYBERSPACE":{
			constraints[item]=NONE;
			}break;


			// EGGS

			case "EGG_CAVE_COCOA":{
			constraints[item]=ADV_STUPID | EXPLOSIVES_ENEMY			}break;
			case "EGG_CAVE_UNDER_HAMMER":{
			constraints[item]=NONE;
			}break;
			case "EGG_FOREST_NE_LEDGE":{
			constraints[item]=NONE;
			}break;
			case "EGG_FOREST_NE_PEDESTAL":{
			constraints[item]=NONE;
			}break;
			case "EGG_FORESTNIGHT_ARURAUNE":{
			constraints[item]=DARKNESS & EXPLOSIVES			}break;
			case "EGG_FORESTNIGHT_EAST":{
			constraints[item]=DARKNESS & EXPLOSIVES			}break;
			case "EGG_RUMI":{
			constraints[item]=POST_GAME
			}break;
			case "EGG_SPECTRAL_SLIDE":{
			constraints[item]=(SLIDING_POWDER & COCOA_1 & KOTRI_1 & CHAPTER_1) | (SLIDING_POWDER & (
						AIR_JUMP
						| SLIDE_JUMP_BUNSTRIKE_CANCEL
						| (ITM_HARD & (WALL_JUMP_LV2 | AIR_DASH))
						| (RABI_SLIPPERS & (ADV_VHARD | (ADV_HARD & SPEED3)))
						| (ADV_STUPID & SPEED3)
					))
			}break;
			case "EGG_SPECTRAL_WEST":{
			constraints[item]=NONE;
			}break;
			case "EGG_BEACH_TO_AQUARIUM":{
			constraints[item]=NONE;
			}break;
			case "EGG_GRAVEYARD_NEAR_LIBRARY":{
			constraints[item]=
				AIR_JUMP
				| AIR_DASH
				| SLIDE_JUMP_BUNSTRIKE
				| (SLIDING_POWDER & (RABI_SLIPPERS | (ADV_VHARD & SPEED5) | (ADV_STUPID & TWO_AMULET_FOOD)))
						}break;
			case "EGG_HALLOWEEN_CICINI_ROOM":{
			constraints[item]=
				EXPLOSIVES & (
					SLIDE_ZIP
					| HAMMER_ROLL_ZIP
					| (CARROT_SHOOTER & BOOST & SLIDING_POWDER)
					| (TM_CHOCOLATE & TM_VANILLA & TM_CICINI & TM_SYARO & TM_LILITH & SLIDING_POWDER & BUNNY_WHIRL)
				)
			}break;
			case "EGG_HALLOWEEN_LEFT_PILLAR":{
			constraints[item]=AIR_JUMP | RABI_SLIPPERS | SLIDING_POWDER | BUNNY_WHIRL			}break;
			case "EGG_HALLOWEEN_MID":{
			constraints[item]=EXPLOSIVES & SLIDING_POWDER
			}break;
			case "EGG_HALLOWEEN_NEAR_BOSS":{
			constraints[item]=EXPLOSIVES_ENEMY			}break;
			case "EGG_HALLOWEEN_PAST_PILLARS1":{
			constraints[item]=NONE;
			}break;
			case "EGG_HALLOWEEN_PAST_PILLARS2":{
			constraints[item]=
					(BUNNY_WHIRL & AIR_DASH_LV3 & (ADV_VHARD | AIR_JUMP))
					| (BUNNY_WHIRL & AIR_JUMP & WALL_JUMP_LV2 & ADV) | (ADV_STUPID & SLIDE_ZIP & EXPLOSIVES_ENEMY & BUNNY_AMULET_LV2 &
					BUNNY_STRIKE & AIR_JUMP & WALL_JUMP_LV2 & AIR_DASH)
			}break;
			case "EGG_HALLOWEEN_RIGHT_PILLAR":{
			constraints[item]=AIR_JUMP | RABI_SLIPPERS | SLIDING_POWDER | BUNNY_WHIRL			}break;
			case "EGG_HALLOWEEN_SW_SLIDE":{
			constraints[item]=EXPLOSIVES & SLIDING_POWDER
			}break;
			case "EGG_HALLOWEEN_WARP_ZONE":{
			constraints[item]=
				WHIRL_BONK
				| (AIR_JUMP & (AIR_DASH | ADV_STUPID))
				| (ADV_STUPID & AIR_DASH & WALL_JUMP_LV2 & BUNNY_AMULET_LV2 & (
					SLIDE_JUMP_BUNSTRIKE_CANCEL
					| (RABI_SLIPPERS & SLIDING_POWDER)
					// probably speed something
				) )
			}break;
			case "EGG_HALLOWEEN_WEST":{
			constraints[item]=
				//SLIDING_POWDER & DARKNESS & (FIRE_ORB | (ADV_HARD & RIBBON)) &
				SLIDING_POWDER & DARKNESS & (FIRE_ORB | ADV_HARD) &
				(BUNNY_WHIRL | (
					CARROT_SHOOTER
					& BOOST_MANY
					& (CARROT_BOMB | PIKO_HAMMER)
					& ADV_STUPID
				))
			}break;
			case "EGG_LIBRARY":{
			constraints[item]=POST_GAME & IMPOSSIBLE			}break;
			case "EGG_PYRAMID_LOWER":{
			constraints[item]=EXPLOSIVES			}break;
			case "EGG_PYRAMID_BEACH":{
			constraints[item]=(ADV_STUPID & AMULET_FOOD) | EXPLOSIVES | AIR_JUMP | AIR_DASH			}break;
			case "EGG_SKY_TOWN":{
			constraints[item]=EXPLOSIVES			}break;
			case "EGG_PARK_SPIKES":{
			constraints[item]=EXPLOSIVES_ENEMY			}break;
			case "EGG_PARK_GREEN_KOTRI":{
			constraints[item]=
				WHIRL_BONK | AIR_JUMP | AIR_DASH
				| (RABI_SLIPPERS & SLIDE_JUMP_BUNSTRIKE)
				| (ADV_VHARD & (
					(RABI_SLIPPERS & AMULET_FOOD)
					| SLIDING_POWDER // slide bonk off stone
				))
						}break;
			case "EGG_UPRPRC_BASE":{
			constraints[item]=EXPLOSIVES_ENEMY			}break;
			case "EGG_SKY_BRIDGE_WARP":{
			constraints[item]=EXPLOSIVES_ENEMY			}break;
			case "EGG_SKY_BRIDGE_BY_VANILLA":{
			constraints[item]=CARROT_BOMB			}break;
			case "EGG_RAVINE_ABOVE_CHOCOLATE":{
			constraints[item]=NONE;
			}break;
			case "EGG_RAVINE_MID":{
			constraints[item]=EXPLOSIVES & SLIDING_POWDER
			}break;
			case "EGG_SNOWLAND_TO_EVERNIGHT":{
			constraints[item]=EXPLOSIVES			}break;
			case "EGG_PALACE_BRIDGE":{
			constraints[item]=EXPLOSIVES_ENEMY			}break;
			case "EGG_AQUARIUM":{
			constraints[item]=DARKNESS | SLIDING_POWDER			}break;
			case "EGG_PALACE_WALL":{
			constraints[item]=NONE;
			}break;
			case "EGG_SNOWLAND_WARP":{
			constraints[item]=RABI_SLIPPERS | AIR_JUMP | AIR_DASH | ADV_HARD			}break;
			case "EGG_ICY_SUMMIT_NIXIE":{
			constraints[item]=NONE;
			}break;
			case "EGG_ICY_SUMMIT_WARP":{
			constraints[item]=EXPLOSIVES_ENEMY			}break;
			case "EGG_SNOWLAND_LAKE":{
			constraints[item]=
				AIR_JUMP | WATER_ORB | WHIRL_BONK | WALL_JUMP_LV2
				| (WALL_JUMP & (RABI_SLIPPERS | (AIR_DASH & ITM_HARD)))
				| (ADV_STUPID & MANY_AMULET_FOOD)
						}break;
			case "EGG_RIVERBANK_SPIDER_SPIKE":{
			constraints[item]=EXPLOSIVES_ENEMY			}break;
			case "EGG_RIVERBANK_WALL":{
			constraints[item]=
				WHIRL_BONK | AIR_JUMP | AIR_DASH | SLIDING_POWDER
				| (ADV_VHARD & RABI_SLIPPERS & AMULET_FOOD)
				| (ADV_STUPID & WALL_JUMP_LV2 & TWO_AMULET_FOOD)
							}break;
			case "EGG_LAB":{
			constraints[item]=NONE;
			}break;
			case "EGG_EVERNIGHT_MID":{
			constraints[item]=EXPLOSIVES_ENEMY			}break;
			case "EGG_EVERNIGHT_SAYA":{
			constraints[item]=
				ADV_STUPID // softlock potential. get item via saya blocks
				| AIR_JUMP
				| SLIDE_JUMP_BUNSTRIKE
				| WHIRL_BONK
				| (RABI_SLIPPERS & (
					AIR_DASH_LV3
					| (AIR_DASH & ((SPEED2 & ITM_HARD) | (SPEED1 & ADV_VHARD)))
				  ))
						}break;
			case "EGG_TOWN":{
			constraints[item]=AIR_JUMP & (RABI_SLIPPERS | SLIDE_JUMP_BUNSTRIKE_CANCEL)			}break;
			case "EGG_PLURK_EAST":{
			constraints[item]=PLURKWOOD			}break;
			case "EGG_PLURK_CAVE":{
			constraints[item]=PLURKWOOD & EXPLOSIVES_ENEMY			}break;
			case "EGG_PLURK_CATS":{
			constraints[item]=PLURKWOOD			}break;
			case "EGG_VOLCANIC_BOMB_BUNNIES":{
			constraints[item]=NONE;
			}break;
			case "EGG_MEMORIES_SYSINT":{
			constraints[item]=POST_GAME & EXPLOSIVES_ENEMY			}break;
			case "EGG_MEMORIES_RAVINE":{
			constraints[item]=POST_GAME & EXPLOSIVES_ENEMY			}break;
			case "EGG_VOLCANIC_FIRE_ORB":{
			constraints[item]=EXPLOSIVES_ENEMY			}break;
			case "EGG_VOLCANIC_NE":{
			constraints[item]=
				AIR_JUMP | AIR_DASH | BUNNY_STRIKE |
				// 0% ADV_STUPID jump: walljump off left wall, damage boost off dog, wallkick off left wall, amulet
				(ADV_STUPID & AMULET_FOOD) |
				WHIRL_BONK |
				(SLIDING_POWDER & (RABI_SLIPPERS | WALL_JUMP | ITM_HARD)) |
				(RABI_SLIPPERS & WALL_JUMP)
						}break;
			case "EGG_VOLCANIC_BIG_DROP":{
			constraints[item]=ITM | AIR_JUMP | AIR_DASH			}break;
			case "EGG_CRESPIRIT":{
			constraints[item]=WARP_DESTINATION			}break;
			case "EGG_HOSPITAL_WALL":{
			constraints[item]=WARP_DESTINATION & POST_GAME & EXPLOSIVES			}break;
			case "EGG_HOSPITAL_BOX":{
			constraints[item]=WARP_DESTINATION & POST_GAME & EXPLOSIVES			}break;
			case "EGG_SYSINT1":{
			constraints[item]=NONE;
			}break;
			case "EGG_SYSINT2":{
			constraints[item]=POST_GAME & IMPOSSIBLE
			}break;
			case "SPEED_BOOST":{
			constraints[item]=NONE;
			}break;
			case "BUNNY_STRIKE":{
			constraints[item]=SLIDING_POWDER			}break;
			case "P_HAIRPIN":{
			constraints[item]=BOSS_KEKE_BUNNY
			}break;
		}
		if (markers[i].difficulty===null && constraints[item]) {
			markers[i].difficulty=DIFFICULTY;
			switch (DIFFICULTY) {
				case DifficultyLevel.BEGINNER:{
					openBeginnerMarkers.push(markers[i]);
				}break;
				case DifficultyLevel.INTERMEDIATE:{
					openIntermediateMarkers.push(markers[i]);
				}break;
				case DifficultyLevel.ADVANCED:{
					openAdvancedMarkers.push(markers[i]);
				}break;
				case DifficultyLevel.HARDCORE:{
					openHardcoreMarkers.push(markers[i]);
				}break;
			}
		}
	}
}

function ClearDifficultyMarkers() {
	for (i=0;i<markers.length;i++) {
		markers[i].difficulty = null;
	}
}

function UpdateConstraints() {
	openBeginnerMarkers=[];
	openIntermediateMarkers=[];
	openAdvancedMarkers=[];
	openHardcoreMarkers=[];
	ClearDifficultyMarkers();
	DIFFICULTY = DifficultyLevel.BEGINNER;
	EvaluateConstraints();
	EvaluateMarkers();
	DIFFICULTY = DifficultyLevel.INTERMEDIATE;
	EvaluateConstraints();
	EvaluateMarkers();
	DIFFICULTY = DifficultyLevel.ADVANCED;
	EvaluateConstraints();
	EvaluateMarkers();
	DIFFICULTY = DifficultyLevel.HARDCORE;
	EvaluateConstraints();
	EvaluateMarkers();
	drawMarkers();
}

function drawMarkers(){

	var sw = document.getElementById("swood");
	var wc = document.getElementById("wcoast");
	var ic = document.getElementById("core");
	var nt = document.getElementById("ntun");
	var eh = document.getElementById("ehigh");
	var ot = document.getElementById("other");

	
	for ( i = 0; i < markers.length; i++){
		if (markers[i].elem=="") {
			markers[i].elem = document.createElement("img");
		}
		markers[i].elem.setAttribute("src","images/marker0.png");
		markers[i].elem.setAttribute("class","markera");
		markers[i].elem.id = markers[i].itemName + "("+Math.round((markers[i].x-markers[i].gridObj.xoffset)/markers[i].gridObj.xgrid)+","+Math.round((markers[i].y-markers[i].gridObj.yoffset)/markers[i].gridObj.ygrid)+")";
		markers[i].elem.style.left = markers[i].x + "px";
		markers[i].elem.style.top = markers[i].y + "px";
		markers[i].elem.style.width = markers[i].gridObj.xgrid + "px";
		markers[i].elem.style.height = markers[i].gridObj.ygrid + "px";
		markers[i].elem.onclick = toggleMarker;
		markers[i].elem.onmouseenter = showTooltip;
		markers[i].elem.onmouseleave = hideTooltip;
		switch (markers[i].gridObj) {
			case worldgrid_SouthernWoodland:{
				sw.appendChild(markers[i].elem);
			}break;
			case worldgrid_Graveyard:
			case worldgrid_BeachPyramid:{
				wc.appendChild(markers[i].elem);
			}break;
			case worldgrid_ParkSkyHigh:
			case worldgrid_TownTop:
			case worldgrid_TownMain:
			case worldgrid_RabiRavine: {
				ic.appendChild(markers[i].elem);
			}break;
			case worldgrid_NorthernTundra: {
				nt.appendChild(markers[i].elem);
			}break;
			case worldgrid_EasternHighlands: {
				eh.appendChild(markers[i].elem);
			}break;
			case worldgrid_VolcanicCanerns:
			case worldgrid_Plurkwood:
			case worldgrid_SystemInterior: {
				ot.appendChild(markers[i].elem);
			}break;
		}
		/*if ( i < 37 ){
			sw.appendChild(markers[i].elem);
		} else if (( i >= 37 ) && ( i <= 56 )){
			wc.appendChild(markers[i].elem);
		} else if (( i >= 57 ) && ( i <= 91)){
			ic.appendChild(markers[i].elem);
		} else if (( i >= 92 ) && ( i <= 126 )){
			nt.appendChild(markers[i].elem);
		} else if (( i >= 127 ) && ( i <= 163 )){
			eh.appendChild(markers[i].elem);
		} else if (( i >= 164 ) && ( i <= 182 )){
			ot.appendChild(markers[i].elem);
		} else if (( i >= 183 ) && ( i <= 197 )){
			wc.appendChild(markers[i].elem);
		}*/
	}
	for ( i = 0; i < openBeginnerMarkers.length; i++){
		openBeginnerMarkers[i].elem.setAttribute("class","markerb");
	}
	for ( i = 0; i < openIntermediateMarkers.length; i++){
		openIntermediateMarkers[i].elem.setAttribute("class","markerc");
	}
	for ( i = 0; i < openAdvancedMarkers.length; i++){
		openAdvancedMarkers[i].elem.setAttribute("class","markerd");
	}
	for ( i = 0; i < openHardcoreMarkers.length; i++){
		openHardcoreMarkers[i].elem.setAttribute("class","markere");
	}
}

activateItem = function(pressed) {
	Item[pressed.id]=!Item[pressed.id];
	if (pressed.getAttribute("class")=="off") {
		pressed.setAttribute("class","on");
	} else {
		pressed.setAttribute("class","off");
	}
	UpdateConstraints();
}