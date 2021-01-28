---
title: Level Layout
parent: Game Data
has_children: false
---

# Level Layout (Zones[])

## LocalIndex 
The internal zone number, always starting with 0. It will be offset by ZoneAliasStart in the [Rundown DataBlock](https://github.com/dakkhuza/DataDumper/wiki/Rundown_DataBlock) to create the ingame zone number. 
For example, if your LocalIndex is 4 and your ZoneAliasStart is 231, the zone number will be 235.

`Enum (0:Zone_0, ..., 20:Zone_20)`
```json
"LocalIndex": 0,
```

## SubSeed 
The seed that the zone uses to generate rooms.

`Integer`
```json
"SubSeed": 0,
```

## BulkheadDCScanSeed 
The seed for the bulkhead scans to spawn at in the zone, used to prevent scans from overlapping.

`Integer`
```json
"BulkheadDCScanSeed": 0,
```

## SubComplex
The complex type that the zone generates as.

 `Enum (0:Digsite, 1:Refinery, 2:Storage, 3:Datacenter, 4:Lab, 5:All, 6:Floodways, 7:Mining_Reactor, 8:Plug_SubComplex_Transition, 9:Tech_Reactor)`
```json
"SubComplex": 5,
```

## CustomGeomorph 
A custom prefab for a zone, typically used for reactors.

`String`
```json
"CustomGeomorph": "Assets/AssetPrefabs/Complex/Mining/Geomorphs/Refinery/geo_64x64_mining_refinery_X_HA_03.prefab",
```

## CoverageMinMax 
The size/coverage of the zone, roughly equal to ingame meters.

`Vector`
```json
"CoverageMinMax": {
    "x": 40.0,
    "y": 40.0
},
```

## BuildFromLocalIndex 
The zone that this zone will build off of; its parent zone.

`Enum (0:Zone_0, ..., 20:Zone_20)`
```json
"BuildFromLocalIndex": 2,
```

## StartPosition 
The location in the parent zone that this zone will start building from.

`Enum (0:From_Random, 1:From_Start, 2:From_AverageCenter, 3:From_Furthest, 4:From_BetweenStartAndFurthest, 5:From_IndexWeight)`
```json
"StartPosition": 3,
```

## StartPosition IndexWeight  
The placement that StartPosition will use if value 5 (From_WeightIndex) is used (see above).

`Single`
```json
"StartPosition_IndexWeight": 0.8,
```

## StartExpansion `Enum (0:Towards_Random, 1:Towards_Forward, 2:Towards_Backward, 3:Towards_Right, 4:Towards_Left)`
The direction that this zone will expand to.

```json
"StartExpansion": 4,
```

## ZoneExpansion 
The generations of the subzones inside of this zone.

`Enum (0:Random, 1:Collapsed, 2:Expansional, 3:Directional_Forward, 4:Directional_Backward, 5:Directional_Right, 6:Directional_Left, 7:Directional_Random)`
```json
"ZoneExpansion": 2,
```

## LightSettings 
The lighting settings that this zone will use from the [Light Settings DataBlock](https://github.com/dakkhuza/DataDumper/wiki/Light_Settings_DataBlock).

`PersistentID`
```json
"LightSettings": 43,
```

## AltitudeData 
The height data of the zone.

`Object`
### AllowedZoneAltitude 
The altitudes that the zone will spread across.

`Enum (0-LowMidHigh, 1-OnlyLow, 2-OnlyHigh, 3-OnlyMid, 4-LowMid, 5-MidHigh, 6-LowHigh, 7-Ascending, 8-Descending, 9-Unchanged)`
### ChanceToChange 

`Single`
```json
"AltitudeData": {
    "AllowedZoneAltitude": 7,
    "ChanceToChange": 0.5
},
```

## EventsOnEnter 
An event to play when the door to the zone (entering it) is opened.

`List`
### Delay 
How long to wait until the event is triggered. 

`Single`
### Noise 
This will alert the enemies around the door when it is opened.

`Boolean` `Single` `Single`
### Intel 
This will show warden intel on the HUD.

`Boolean` `String`
### Sound 
This is the sound that will play based on the id provided.

`Boolean` `Integer`
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

## ProgressionPuzzleToEnter
The progression puzzle required for the door leading into this zone, such as a key or a cell.

 `Object`
### PuzzleType 
This is what type of puzzle is required.

`Enum (0-None, 1-Keycard_SecurityBox, 2-PowerGenerator_And_PowerCell, 3-Locked_No_Key)`
### CustomText 
This the text that will show before the puzzle is completed.

`String`
### PlacementCount  
This how many of the puzzle to spawn (like cells).

`Integer`
### ZonePlacementData
This is where the puzzle item spawns in (a cell or a key).

 `List`
### LocalIndex 
The zone that the puzzle item spawns in.

`Enum (0:Zone_0, ..., 20:Zone_20)`
### Weights  
Where in the zone to put the puzzle item (closer to front or back, etc).

`Single` `Single` `Single`
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

## ChainedPuzzleToEnter 
The chained puzzle that the door entering this zone will use (the scan type).

`PersistentID`
```json
"ChainedPuzzleToEnter": 37,
```

##  SecurityGateToEnter 
The door/gate type that the door entering this zone will use (security vs apex).

`Enum (0-Security, 1-Apex)`
```json
"SecurityGateToEnter": 1,
```

## ActiveEnemyWave 
Determines if the door entering this zone is a blood/motion door and the enemy groups/amounts behind it.

`Object`

### HasActriveEnemyWave 
This determines if this door will be a blood door or not.

`Boolean`

### EnemyGroupInfrontOfDoor 
This determines the enemy group right behind the door, which will get alerted.

`PersistentID`

### EnemyGroupInArea 
This determines the enemy group in the area behind the door, which may get alerted.

`PersistentID`

### EnemyGroupsInArea 
This determines the amount of enemy groups in the area behind the door.

`Integer`
```json
"ActiveEnemyWave": {
    "HasActiveEnemyWave": true,
    "EnemyGroupInfrontOfDoor": 30,
    "EnemyGroupInArea": 31,
    "EnemyGroupsInArea": 1
},
```

## EnemySpawningInZone 
Determines the enemies that spawn throughout the zone, can be multiple groups.

`List`

### GroupType 
This determines the type of enemies in the group.

`Enum (0-Hibernate 1-PureSneak 2-Detect 3-PureDetect 4-Patrol 5-Awake 6-Hunter)`

### Difficulty 
This determines the difficulty of the group.

`Enum (0-Easy 1-Medium 2-Hard 3-MiniBoss 4-Boss 5-MegaBoss 6-Biss 7-Buss)`

### Distribution 
This determines the distribution of the group.

`Enum (0-None 1-Force_One 2-Rel_Value)`

### DistributionValue 
This determines the distribution value if distribution is set to Rel_Value

`Single`
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

## HSUClustersInZone 
Determines the amount of HSU clusters within the zone.

`Integer`
```json
"HSUClustersInZone": 1,
```

## CorpseClustersInZone 
Determines the amount of corpse (dead body) clusters within the zone.

`Integer`
```json
"CorpseClustersInZone": 3,
```

## ResourceContainerClustersInZone 
Determines the amount of resource clusters within the zone.

`Integer`
```json
"ResourceContainerClustersInZone": 2,
```

## GeneratorClustersInZone 
Determines the amount of generator clusters within the zone (single generators, not an actual gen cluster).

`Integer`
```json
"GeneratorClustersInZone": 2,
```

## CorpsesInZone 
Determines the amount of corpses in the zone.

`Enum (0-None 1-Some 2-Many 3-Tons)`
```json
"CorpsesInZone": 1,
```

## HSUsInZone 
Determines the amount of HSUs in the zone.

`Enum (0-None 1-Some 2-Many 3-Tons)`
```json
"HSUsInZone": 2,
```

## DeconUnitsInZone
Determines the amount of Decon Units in the zone.

`Enum (0-None 1-Some 2-Many 3-Tons)`
```json
"DeconUnitsInZone": 0,
```

## AllowSmallPickupsAllocation 
Allows consumables to spawn in the zone.

`Boolean`
```json
"AllowSmallPickupsAllocation": true,
```

## AllowResourceContainerAllocation 
Allows resource boxes to spawn

`Boolean`
```json
"AllowResourceContainerAllocation": true,
```

## ForceBigPickupsAllocation 
Force the zone to allow big pickups (Fog turbine, cell, etc.) to spawn.

`Boolean`
```json
"ForceBigPickupsAllocation": true,
```

## ConsumableDistributionInZone 
The consumables that spawn in the zone.

`PersistentID`
```json
"ConsumableDistributionInZone": 1,
```

## BigPickupDistributionInZone 
The big pickups (fog turbine, neonate, etc) that spawn in the zone.

`PersistentID`
```json
"BigPickupDistributionInZone": 0,
```

## TerminalPlacements 
The location and data of terminals in the zone.

`List`

### ZonePlacementWeights 
These provide a specific location (front/back) for the terminal to spawn.

`Single` `Single` `Single`

### AreaSeedOffset 
`Integer`

### MarkerSeedOffset 
`Integer`

### LocalLogFiles 
This provides log files in the terminal.

`List`
### FileName 
This provides the name of the log when you type LOGS.

`String`
### FileContent 
This provides the text of the log when you type READ.

`String`
### AttachedAudioFile 
This provides the audio connected to the log.

`Integer (Audio ID)`
### AttachedAudioByteSize 
This provides the size of the audio log.

`Integer`
### StartingStateData

 `Object`
### StartingState 

`Enum (0-Sleeping 1-Awake 2-PlayerInteracting 3-DataMining 4-Hacked 5-CodePuzzle 6-InputTest 7-ReactorError 8-AskToPlayLogAudio 9-DoPlayAudioFile 10-AudioLoopError)`

### AudioEventEnter 

`Integer (audio ID)`

### AudioEventExit 

`Integer (audio ID)`

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

## ForbidTerminalsInZone 
Prevents terminals from spawning in the zone.

`Boolean`
```json
"ForbidTerminalsInZone": false,
```
 
## PowerGeneratorPlacements 
The placement of power generators in the zone.

`List`
### ZonePlacementWeights 
These determine a specific weighting of the generators.

`Single` `Single` `Single`
### AreaSeedOffset 

`Integer`
### MarkerSeedOffset 

`Integer`
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
## DisinfectionStationPlacements 
Determines the placement of a disinfection station in the zone.

`List`

### ZonePlacementWeights
This determines a specific weighting of the disinfection stations.

 `Single` `Single` `Single`
 
### AreaSeedOffset 

`Integer`

### MarkerSeedOffset 

`Integer`
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

## HealthMulti 
The amount of health spawning in the zone. (0.2 is 1 use, 0.4 is 2 use, etc.)

`Single`
```json
"HealthMulti": 1.0,
```

## HealthPlacement
The placement of the health packs in the zone.

 `Single` `Single` `Single`
```json
"HealthPlacement": {
    "Start": 0.0,
    "Middle": 0.0,
    "End": 0.0
},
```

## WeaponAmmoMulti 
The amount of ammo packs spawning in the zone. (0.2 is 1 use, 0.4 is 2 use, etc.)

`Single`
```json
"WeaponAmmoMulti": 1.0,
```

## WeaponAmmoPlacement 
The placement of the ammo packs in the zone.

`Single` `Single` `Single`
```json
"WeaponAmmoPlacement": {
    "Start": 0.0,
    "Middle": 0.0,
    "End": 0.0
},
```

## ToolAmmoMulti 
The amount of tool packs spawning in the zone. (0.2 is 1 use, 0.4 is 2 use, etc.)

`Single`
```json
"ToolAmmoMulti": 1.0,
```

## ToolAmmoPlacement 
The placement of the tool packs in the zone.

`Single` `Single` `Single`
```json
"ToolAmmoPlacement": {
    "Start": 0.0,
    "Middle": 0.0,
    "End": 0.0
},
```

## DisinfectionMulti
The amount of disinfection packs spawning in the zone. (0.2 is 1 use, 0.4 is 2 use, etc.)

`Single`
```json
"DisinfectionMulti": 1.0,
```

## DisinfectionPlacement 
The placement of the disinfect packs in the zone.

`Single` `Single` `Single`
```json
"DisinfectionPlacement": {
    "Start": 0.0,
    "Middle": 0.0,
    "End": 0.0
},
```

## StaticSpawnDataContainers 

`List`

### Count 

`Integer`

### DistributionWeightType

 `Enum`

### DistributionWeight 

`Single`

### DistributionRandomBlend  

`Single`

### DistributionResultPow 

`Single`

### StaticSpawnDataId 

### FixedSeed 

`Integer`

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
