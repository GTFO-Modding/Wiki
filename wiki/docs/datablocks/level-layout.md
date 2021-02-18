---
title: Level Layout
next: false
prev: false
---

# Level Layout
_Documentation for the Zones array for the Level Layout datablock_

::: warning NOTE
This doc is not finished!
:::

## LocalIndex
`int`

The internal zone number, always starting with 0. It will be offset by ZoneAliasStart in the Rundown DataBlock to create the ingame zone number. For example, if your LocalIndex is 4 and your ZoneAliasStart is 231, the zone number will be 235.

```json
"LocalIndex": 0
```

## SubSeed
`int`

The seed that the zone uses to generate rooms

```json
"SubSeed": 0
```

## BulkheadDCScanSeed
`int`

The seed for the bulkhead scans to spawn at in the zone, used to prevent scans from overlapping.

```json
"BulkheadDCScanSeed": 0
```

## SubComplex
> DigSite\
Refinery\
Storage\
DataCenter\
Lab\
All\
Maintenance\
Mining_Reactor\
Plug_SubComplex_Transition\
Tech_Reactor

The complex type that the zone generates as.

```json
"SubComplex": 5
```

## CustomGeomorph
`string`

A custom prefab for a zone, typically used for reactors.

```json
"CustomGeomorph": "Assets/AssetPrefabs/Complex/Mining/Geomorphs/Refinery/geo_64x64_mining_refinery_X_HA_03.prefab"
```

## CoverageMinMax
`Vector2`

The size/coverage of the zone, roughly equal to ingame meters.

```json
"CoverageMinMax": {
    "x": 40.0,
    "y": 40.0
}
```

## BuildFromLocalIndex
`int`

The zone that the current zone will build off from.

```json
"BuildFromLocalIndex": 2,
```

## StartPosition
> From_Random\
From_Start\
From_AverageCenter\
From_Furthest\
From_BetweenStartAndFurthest\
From_IndexWeight

The location in the parent zone that this zone will start building from.

```json
"StartPosition": 3
```

## StartPosition_IndexWeight
`float`

The placement that StartPosition will use.


```json
"StartPosition_IndexWeight": 0.8
```

::: tip NOTICE
This will only be used when [StartPosition](#startposition) is set to `From_IndexWeight`.
:::

## StartExpansion
> Towards_Random\
Towards_Forward\
Towards_Backward\
Towards_Right\
Towards_Left

The direction the zone will expand.

```json
"StartExpansion": 4
```

## LightSettings

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The lighting settings that the zone will use from the [Light Settings](./light-settings) DataBlock.

```json
"LightSettings": 43
```

## AltitudeData
The height data of the zone.

<block>

### AllowedZoneAltitude
> LowMidHigh\
OnlyLow\
OnlyHigh\
OnlyMid\
LowMid\
MidHigh\
LowHigh\
Ascending\
Descending\
Unchanged

The altitudes that the zone will spread across.

```json
"AllowedZoneAltitude": 7
```

### ChanceToChange
`float`

The chance of zone altitudes to change.

```json
"ChanceToChange": 0.5
```
</block>

## EventsOnEnter
An event to play when the door to the zone (entering it) is opened.

<block>

### Delay
`float`

How long to wait until the event is triggered.

```json
"Delay": 0
```

### Noise
This will alert the enemies around the door when it is opened.

<block>

#### Enabled
`bool`

dasdfjasfk
#### RadiusMin
`float`

dkjajsdkajskdas

#### RadiusMax
`float`

djsakjdkalsjfka

</block>

```json
"Noise": {
    "Enabled": false,
    "RadiusMin": 0.0,
    "RadiusMax": 0.0
}
```

### Intel
This will show warden intel on the HUD.

<block>

#### Enabled
`bool`

dasdfjasfk

#### IntelMessage
`string`

dasdfjasfk

</block>

```json
"Enabled": true,
"IntelMessage": "Hello World",
```

### Sound
This is the sound that will play based on the ID provided.

<block>

#### Enabled
`bool`

#### SoundEvent
`uint`

```json
"Enabled": true,
"SoundEvent": 3184121378
```

</block>

</block>