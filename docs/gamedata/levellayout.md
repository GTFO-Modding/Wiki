---
title: Level Layout
parent: Game Data
has_children: false
---

# Level Layout (Zones[])

## LocalIndex `Enum (0:Zone_0, ..., 20:Zone_20)`
The internal zone number, always starting with 0. It will be offset by ZoneAliasStart in the [Rundown DataBlock](https://github.com/dakkhuza/DataDumper/wiki/Rundown_DataBlock) to create the ingame zone number. 
For example, if your LocalIndex is 4 and your ZoneAliasStart is 231, the zone number will be 235.

```json
"LocalIndex": 0,
```

## SubSeed `Integer`
The seed that the zone uses to generate rooms.

```json
"SubSeed": 0,
```

## BulkheadDCScanSeed `Integer`
The seed for the bulkhead scans to spawn at in the zone, used to prevent scans from overlapping.

```json
"BulkheadDCScanSeed": 0,
```

## SubComplex `Enum (0:Digsite, 1:Refinery, 2:Storage, 3:Datacenter, 4:Lab, 5:All, 6:Floodways, 7:Mining_Reactor, 8:Plug_SubComplex_Transition, 9:Tech_Reactor)`
The complex type that the zone generates as.

```json
"SubComplex": 5,
```

## CustomGeomorph `String`
A custom prefab for a zone, typically used for reactors.

```json
"CustomGeomorph": "Assets/AssetPrefabs/Complex/Mining/Geomorphs/Refinery/geo_64x64_mining_refinery_X_HA_03.prefab",
```

## CoverageMinMax `Vector`
The size/coverage of the zone, roughly equal to ingame meters.

```json
"CoverageMinMax": {
    "x": 40.0,
    "y": 40.0
},
```

## BuildFromLocalIndex `Enum (0:Zone_0, ..., 20:Zone_20)`
The zone that this zone will build off of; its parent zone.

```json
"BuildFromLocalIndex": 2,
```

## StartPosition `Enum (0:From_Random, 1:From_Start, 2:From_AverageCenter, 3:From_Furthest, 4:From_BetweenStartAndFurthest, 5:From_IndexWeight)`
The location in the parent zone that this zone will start building from.

```json
"StartPosition": 3,
```

## StartPosition IndexWeight  `Single`
The placement that StartPosition will use if value 5 (From_WeightIndex) is used (see above).

```json
"StartPosition_IndexWeight": 0.8,
```

## StartExpansion `Enum (0:Towards_Random, 1:Towards_Forward, 2:Towards_Backward, 3:Towards_Right, 4:Towards_Left)`
The direction that this zone will expand to.

```json
"StartExpansion": 4,
```

## ZoneExpansion `Enum (0:Random, 1:Collapsed, 2:Expansional, 3:Directional_Forward, 4:Directional_Backward, 5:Directional_Right, 6:Directional_Left, 7:Directional_Random)`
The generations of the subzones inside of this zone.

```json
"ZoneExpansion": 2,
```

## LightSettings `PersistentID`
The lighting settings that this zone will use from the [Light Settings DataBlock](https://github.com/dakkhuza/DataDumper/wiki/Light_Settings_DataBlock).

```json
"LightSettings": 43,
```

## AltitudeData `Object`
The height data of the zone.

### AllowedZoneAltitude `Enum (0-LowMidHigh, 1-OnlyLow, 2-OnlyHigh, 3-OnlyMid, 4-LowMid, 5-MidHigh, 6-LowHigh, 7-Ascending, 8-Descending, 9-Unchanged)`
The altitudes that the zone will spread across.

### ChanceToChange `Single`

```json
"AltitudeData": {
    "AllowedZoneAltitude": 7,
    "ChanceToChange": 0.5
},
```

## EventsOnEnter `List`
An event to play when the door to the zone (entering it) is opened.

### Delay `Single`
How long to wait until the event is triggered. 

### Noise `Boolean` `Single` `Single`
This will alert the enemies around the door when it is opened.

### Intel `Boolean` `String`
This will show warden intel on the HUD.

### Sound `Boolean` `Integer`
This is the sound that will play based on the id provided.

```json
"EventsOnEnter": [
    {
        "Delay": 0.0,
        "Noise": {
            "Enabled": false,
            "RadiusMin": 0.0,
            "RadiusMax": 0.0
        },
        "Intel": {
            "Enabled": true,
            "IntelMessage": "Hello World",
        },
        "Sound": {
            "Enabled": true,
            "SoundEvent": 3184121378
        }
    }
],
```

## ProgressionPuzzleToEnter `Object`
The progression puzzle required for the door leading into this zone, such as a key or a cell.

### PuzzleType `Enum (0-None, 1-Keycard_SecurityBox, 2-PowerGenerator_And_PowerCell, 3-Locked_No_Key)`
This is what type of puzzle is required.

### CustomText `String`
This the text that will show before the puzzle is completed.

### PlacementCount  `Integer`
This how many of the puzzle to spawn (like cells).

### ZonePlacementData `List`
This is where the puzzle item spawns in (a cell or a key).

### LocalIndex `Enum (0:Zone_0, ..., 20:Zone_20)`
The zone that the puzzle item spawns in.

### Weights  `Single` `Single` `Single`
Where in the zone to put the puzzle item (closer to front or back, etc).

```json
"ProgressionPuzzleToEnter": {
    "PuzzleType": 2,
    "CustomText": "<color=red> Type:://ERROR: Door in emergency lockdown, unable to operate.</color> Type:",
    "PlacementCount": 1,
    "ZonePlacementData": [
        {
            "LocalIndex": 0,
            "Weights": {
                "Start": 0.0,
                "Middle": 0.0,
                "End": 1000.0
            }
        },
    ]
},
```

## ChainedPuzzleToEnter `PersistentID`
The chained puzzle that the door entering this zone will use (the scan type).

```json
"ChainedPuzzleToEnter": 37,
```

##  SecurityGateToEnter `Enum (0-Security, 1-Apex)`
The door/gate type that the door entering this zone will use (security vs apex).

```json
"SecurityGateToEnter": 1,
```

## ActiveEnemyWave `Object`
Determines if the door entering this zone is a blood/motion door and the enemy groups/amounts behind it.

### HasActriveEnemyWave `Boolean`
This determines if this door will be a blood door or not.

### EnemyGroupInfrontOfDoor `PersistentID`
This determines the enemy group right behind the door, which will get alerted.

### EnemyGroupInArea `PersistentID`
This determines the enemy group in the area behind the door, which may get alerted.

### EnemyGroupsInArea `Integer`
This determines the amount of enemy groups in the area behind the door.

```json
"ActiveEnemyWave": {
    "HasActiveEnemyWave": true,
    "EnemyGroupInfrontOfDoor": 30,
    "EnemyGroupInArea": 31,
    "EnemyGroupsInArea": 1
},
```

## EnemySpawningInZone `List`
Determines the enemies that spawn throughout the zone, can be multiple groups.

### GroupType `Enum (0-Hibernate 1-PureSneak 2-Detect 3-PureDetect 4-Patrol 5-Awake 6-Hunter)`
This determines the type of enemies in the group.

### Difficulty `Enum (0-Easy 1-Medium 2-Hard 3-MiniBoss 4-Boss 5-MegaBoss 6-Biss 7-Buss)`
This determines the difficulty of the group.

### Distribution `Enum (0-None 1-Force_One 2-Rel_Value)`
This determines the distribution of the group.

### DistributionValue `Single`
This determines the distribution value if distribution is set to Rel_Value

```json
"EnemySpawningInZone": [
    {
        "GroupType": 0,
        "Difficulty": 0,
        "Distribution": 5,
        "DistributionValue": 1.0
    },
    {
        "GroupType": 1,
        "Difficulty": 0,
        "Distribution": 6,
        "DistributionValue": 1.0
    }
],
```

## HSUClustersInZone `Integer`
Determines the amount of HSU clusters within the zone.

```json
"HSUClustersInZone": 1,
```

## CorpseClustersInZone `Integer`
Determines the amount of corpse (dead body) clusters within the zone.

```json
"CorpseClustersInZone": 3,
```

## ResourceContainerClustersInZone `Integer`
Determines the amount of resource clusters within the zone.

```json
"ResourceContainerClustersInZone": 2,
```

## GeneratorClustersInZone `Integer`
Determines the amount of generator clusters within the zone (single generators, not an actual gen cluster).

```json
"GeneratorClustersInZone": 2,
```

## CorpsesInZone `Enum (0-None 1-Some 2-Many 3-Tons)`
Determines the amount of corpses in the zone.

```json
"CorpsesInZone": 1,
```

## HSUsInZone `Enum (0-None 1-Some 2-Many 3-Tons)`
Determines the amount of HSUs in the zone.

```json
"HSUsInZone": 2,
```

## DeconUnitsInZone `Enum (0-None 1-Some 2-Many 3-Tons)`
Determines the amount of Decon Units in the zone.

```json
"DeconUnitsInZone": 0,
```

## AllowSmallPickupsAllocation `Boolean`
Allows consumables to spawn in the zone.

```json
"AllowSmallPickupsAllocation": true,
```

## AllowResourceContainerAllocation `Boolean`
Allows resource boxes to spawn

```json
"AllowResourceContainerAllocation": true,
```

## ForceBigPickupsAllocation `Boolean`
Force the zone to allow big pickups (Fog turbine, cell, etc.) to spawn.

```json
"ForceBigPickupsAllocation": true,
```

## ConsumableDistributionInZone `PersistentID`
The consumables that spawn in the zone.

```json
"ConsumableDistributionInZone": 1,
```

## BigPickupDistributionInZone `PersistentID`
The big pickups (fog turbine, neonate, etc) that spawn in the zone.

```json
"BigPickupDistributionInZone": 0,
```

## TerminalPlacements `List`
The location and data of terminals in the zone.

### ZonePlacementWeights `Single` `Single` `Single`
These provide a specific location (front/back) for the terminal to spawn.

### AreaSeedOffset `Integer`

### MarkerSeedOffset `Integer`

### LocalLogFiles `List`
This provides log files in the terminal.

### FileName `String`
This provides the name of the log when you type LOGS.

### FileContent `String`
This provides the text of the log when you type READ.

### AttachedAudioFile `Integer (Audio ID)`
This provides the audio connected to the log.

### AttachedAudioByteSize `Integer`
This provides the size of the audio log.

### StartingStateData `Object`

### StartingState `Enum (0-Sleeping 1-Awake 2-PlayerInteracting 3-DataMining 4-Hacked 5-CodePuzzle 6-InputTest 7-ReactorError 8-AskToPlayLogAudio 9-DoPlayAudioFile 10-AudioLoopError)`

### AudioEventEnter `Integer (audio ID)`

### AudioEventExit `Integer (audio ID)`

```json
"TerminalPlacements": [
    {
        "PlacementWeights": {
            "Start": 0.0,
            "Middle": 0.0,
            "End": 0.0
        },
        "AreaSeedOffset": 0,
        "MarkerSeedOffset": 0,
        "LocalLogFiles": [
            {
                "FileName": "Log Name Here",
                "FileContent": "Log Text Here",
                "AttachedAudioFile": 0,
                "AttachedAudioByteSize": 0
            }
        ],
        "StartingStateData": {
            "StartingState": 0,
            "AudioEventEnter": 0,
            "AudioEventExit": 0
        }
    }
],
```

## ForbidTerminalsInZone `Boolean`
Prevents terminals from spawning in the zone.

```json
"ForbidTerminalsInZone": false,
```
 
## PowerGeneratorPlacements `List`
The placement of power generators in the zone.

### ZonePlacementWeights `Single` `Single` `Single`
These determine a specific weighting of the generators.

### AreaSeedOffset `Integer`

### MarkerSeedOffset `Integer`

```json
"PowerGeneratorPlacements": [
    {
        "PlacementWeights": {
            "Start": 0.0,
            "Middle": 0.0,
            "End": 10000.0
        },
        "AreaSeedOffset": 0,
        "MarkerSeedOffset": 0
    },
],
```
## DisinfectionStationPlacements `List`
Determines the placement of a disinfection station in the zone.

### ZonePlacementWeights `Single` `Single` `Single`
This determines a specific weighting of the disinfection stations.

### AreaSeedOffset `Integer`

### MarkerSeedOffset `Integer`

```json
"DisinfectionStationPlacements": [
    {
        "PlacementWeights": {
            "Start": 111333.0,
            "Middle": 0.0,
            "End": 0.0
        },
        "AreaSeedOffset": 1122,
        "MarkerSeedOffset": 0
    },
],
```

## HealthMulti `Single`
The amount of health spawning in the zone. (0.2 is 1 use, 0.4 is 2 use, etc.)

```json
"HealthMulti": 1.0,
```

## HealthPlacement `Single` `Single` `Single`
The placement of the health packs in the zone.

```json
"HealthPlacement": {
    "Start": 0.0,
    "Middle": 0.0,
    "End": 0.0
},
```

## WeaponAmmoMulti `Single`
The amount of ammo packs spawning in the zone. (0.2 is 1 use, 0.4 is 2 use, etc.)

```json
"WeaponAmmoMulti": 1.0,
```

## WeaponAmmoPlacement `Single` `Single` `Single`
The placement of the ammo packs in the zone.

```json
"WeaponAmmoPlacement": {
    "Start": 0.0,
    "Middle": 0.0,
    "End": 0.0
},
```

## ToolAmmoMulti `Single`
The amount of tool packs spawning in the zone. (0.2 is 1 use, 0.4 is 2 use, etc.)

```json
"ToolAmmoMulti": 1.0,
```

## ToolAmmoPlacement `Single` `Single` `Single`
The placement of the tool packs in the zone.

```json
"ToolAmmoPlacement": {
    "Start": 0.0,
    "Middle": 0.0,
    "End": 0.0
},
```

## DisinfectionMulti `Single`
The amount of disinfection packs spawning in the zone. (0.2 is 1 use, 0.4 is 2 use, etc.)

```json
"DisinfectionMulti": 1.0,
```

## DisinfectionPlacement `Single` `Single` `Single`
The placement of the disinfect packs in the zone.

```json
"DisinfectionPlacement": {
    "Start": 0.0,
    "Middle": 0.0,
    "End": 0.0
},
```

## StaticSpawnDataContainers `List`

### Count `Integer`

### DistributionWeightType `Enum`

### DistributionWeight `Single`

### DistributionRandomBlend  `Single`

### DistributionResultPow `Single`

### StaticSpawnDataId 

### FixedSeed `Integer`

```
"StaticSpawnDataContainers": [
    {
        "Count": 30,
        "DistributionWeightType": 1,
        "DistributionWeight": 4.0,
        "DistributionRandomBlend": 0.5,
        "DistributionResultPow": 2.0,
        "StaticSpawnDataId": 1,
        "FixedSeed": 0
    }
]
```
