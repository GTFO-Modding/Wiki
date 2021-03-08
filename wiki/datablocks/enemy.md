---
title: Enemy
next: false
prev: false
---

# Enemy
Sample Text

::: warning NOTE
This doc is not finished!
:::

## EnemyType
Sample text

> Weakling\
Standard\
Special\
MiniBoss\
Boss

## AssetBundle
Sample text

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
Sample text

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

`List<String>`

A list of prefab paths used when spawning the enemy.

## ModelDatas

<div class="codespan">

List<[ModelData](/docs/datablocks/datas/model-data)>

</div>

Sample text

## DetectionDataId

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The ID of the desired [enemy detection](enemy-detection) block.

## BehaviorDataId

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The ID of the desired [enemy behavior](enemy-behavior) block.

## MovementDataId

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The ID of the desired [enemy movement](enemy-movement) block.

## BalancingDataId

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The ID of the desired [enemy balancing](enemy-balancing) block.

## SFXDataId

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The ID of the desired [enemy balancing](enemy-sfx) block.

## LinkedSlaveModels

<div class="codespan">

List<[Linked Slave Model](shared/linked-slave-model)>

</div>

Sample text

## isCoccoon

`Boolean`

Sample text

## AI_Abilities

A list of Abilities.

<block>

### Enabled

`Boolean`

Sample text

### AbilityPrefab

`String`

Sample text

### AbilityType
Sample text

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

`Single`

Ability cooldown.

</block>