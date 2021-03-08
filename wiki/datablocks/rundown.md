---
lang: en-US
next: false
prev: false
---

# Rundown
This is the setup for a Rundown, this allows you to customize the look of the Rundown as well as expedition related data.

::: warning NOTE
This doc is very much not finished!
:::

## ReqToReachTierB-E
This sets how many badges you need to get to a tier, see [Guidelines - Rundown Setup]() for more info.

`N/A`

## TierA-E
This contains an array of each level in a tier

`List`

## name
This is the internal name of the rundown, not visible in game.

`String`

## internalEnabled

`Boolean`

See [internalEnabled](/docs/developers/creating-rundowns.html#internalenabled)

## StorytellingData

<block>

### Title
The title of the rundown, this is displayed on the "Connect to Rundown" screen.

`String`

### TextLog
*This doesn't seem to be used.*

::: warning NOTE
This doesn't seem to be used.
:::

The content of the log?

`String`

</block>

## Visuals
This section contains everything related to the visual look of the rundown.

<block>

### ColorBackground
Unused.

`N/A`

### TierA-EVisuals
This affects the color and scale of each tier

```json
"Color": {
    "a": 1.0,
    "r": 0.4509804,
    "g": 0.7490196,
    "b": 0.858823538
},
"Scale": 0.2
```

</block>

## Rundown In Tier
This contains the data that forms an expedition icon on the rundown.

<block>

### Enabled
Dictates if this expedition appears on the rundown.

`Boolean`

### Accessibility
Defines how this expedition's icon appears on the rundown.
> Normal\
AlwayBlock\
AlwaysAllow\
BlockedAndScrambled

### LevelLayoutData

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The ID of the [Level Layout](./level-layout) block.

</block>

---

## Descriptive
This contains all the text elements of an expedition.

<block>

#### Prefix
This is a text string that displays before the auto-prefixed number on an expedition.

`string`

#### PublicName
This is the name of the expedition.

`string`

#### ExpeditionDepth
The depth of the expedition.

`Integer`

#### EstimatedDuration
Dev info.

`String`

#### ExpeditionDescription
The description of the expedition.

`String`

#### RoleplayedWardenIntel
The description of the expedition.

`String`

#### DevInfo
What it says on the tin. Not visible in game.

`String`

</block>


## Seeds
Contains data related to seeding the level generator.

<block>

#### BuildSeed
The seed used to generate the rooms of the level

`Integer`

#### FunctionMarkerOffset
Effects the layout inside rooms?

`Integer`

#### StandardMarkerOffset

Offset for markers such as for level fillings, shelves, etc.

`Integer`

#### LightJobSeedOffset
Effects the placement of lights.

`Integer`

</block>

---

## Expedition
This contains general data related to the expedition that isn't related to the level layout.

<block>

#### ComplexResourceData

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The ID of the [Complex Resource Set]() block.

#### LightSettings

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The [ID](/docs/developers/creating-rundowns.html#persistent-id) of the [Light Settings]() block.

#### FogSettings

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The [ID](/docs/developers/creating-rundowns.html#persistent-id) of the [Fog Settings]() block.

#### EnemyPopulation

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The [ID](/docs/developers/creating-rundowns.html#persistent-id) of the [Enemy Population]() block.

#### ExpeditionBalance

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The [ID](/docs/developers/creating-rundowns.html#persistent-id) of the [Expedition Balance]() block.

#### ScoutWaveSettings

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The [ID](/docs/developers/creating-rundowns.html#persistent-id) of the [Scout Wave Settings]() block.

#### ScoutWavePopulation

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The [ID](/docs/developers/creating-rundowns.html#persistent-id) of the [Scout Wave Population]() block.

</block>

---

## Main Layer Data
This contains setup for general level information

::: warning WARNING
This is not finished!
:::

<block>

### ZoneAliasStart
The number zones start with, for instance setting this to 100 would have the zones go 100, 101, etc

`Integer`

#### ZonesWithBulkheadEntrance

`List`

#### BulkheadDoorControllerPlacements

`List`

#### BulkheadKeyPlacements

`List`

</block>

---

## ObjectiveData
Contains setup for this level's warden objective.
See also warden object link.

<block>

### DataBlockId
The [ID](/docs/developers/creating-rundowns.html#persistent-id) of the [Warden Objective]() block.

### WinCondition
Where the exit scan spawns.
> Spawn\
Custom exit

### ZonePlacementDatas
See placement_data_link

`List`

</block>

---

## Layers
Settings for layered difficulty, secondary and tertiary layouts are the same.

<block>

### SecondaryLayerEnabled
If this level has a secondary layer

`Boolean`

### SecondaryLayout

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The ID of the [Level Layout](/docs/gamedata/levellayout.html#level-layout)

<block>

#### Layer
The layer from which the secondary layer is built.

> MainLayer\
SecondaryLayer\
ThirdLayer


#### Zone
The zone index from which to build from.

<!-- This enum is really dumb -->

`0-20`

</block>
</block>