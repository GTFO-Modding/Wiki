---
title: Enemy
next: false
prev: false
---

# Enemy
Sample Text

::: warning WARNING
This doc is not finished!
:::

## EnemyType

> Weakling\
Standard\
Special\
MiniBoss\
Boss

## AssetBundle

[//]: # "This needs to be moved"
> None\
Complex_Shared\
Complex_Mining\
Complex_Tech\
Complex_Service\
Startup\
Gear_Weapon_Front = 20\
Gear_Weapon_Receiver = 30\
Gear_Weapon_Stock = 40\
Gear_Weapon_Sight = 50\
Gear_Weapon_Mag = 60\
Gear_Weapon_Flashlight = 70\
Gear_Tool_Main = 80\
Gear_Tool_Grip = 90\
Gear_Tool_Delivery = 100\
Gear_Tool_Payload = 110\
Gear_Tool_Targeting = 120\
Gear_Tool_Screen = 130\
Gear_Melee_Head = 140\
Gear_Melee_Neck = 150\
Gear_Melee_Handle = 160\
Gear_Melee_Pommel = 170\
Gear_Material = 200\
Enemies = 300

## BundleShard

[//]: # "This needs to be moved"
> S1\
S2\
S3\
S4\
S5\
S6\
S7\
S8\
S9\
S10\
S11\
S12\
S13\
S14\
S15\
S16\
S17\
S18\
S19\
S20

## BasePrefabs
A list of prefab paths used when spawning the enemy.

`List<String>`

## ModelDatas
A list of [Model Data](shared/model-data).

`List<ModelData>`

## DetectionDataId

The [ID](/docs/developers/creating-rundowns.html#persistent-id) of the desired [enemy detection](enemy-detection) block.

## BehaviorDataId

The [ID](/docs/developers/creating-rundowns.html#persistent-id) of the desired [enemy behavior](enemy-behavior) block.

## MovementDataId

The [ID](/docs/developers/creating-rundowns.html#persistent-id) of the desired [enemy movement](enemy-movement) block.

## BalancingDataId
The [ID](/docs/developers/creating-rundowns.html#persistent-id) of the desired [enemy balancing](enemy-balancing) block.

## SFXDataId
The [ID](/docs/developers/creating-rundowns.html#persistent-id) of the desired [enemy balancing](enemy-sfx) block.

## LinkedSlaveModels
A List of [Linked Slave Model Datas](shared/linked-slave-model).

`List<LinkedSlaveModelData>`

## isCoccoon
Sample text

`Boolean`

## AI_Abilities

A list of Abilities.

<block>

### Enabled

Sample text

`Boolean`

### AbilityPrefab

Sample text

`String`

### AbilityType

[//]: # "This description could be better..."
Ability type for the ability to use.

> None\
Melee\
Ranged\
Alarm\
Defensive\
Healing\
GroupEnhance\
Detection\
DoorBreaker

### Cooldown
Ability cooldown.

`Single`

</block>