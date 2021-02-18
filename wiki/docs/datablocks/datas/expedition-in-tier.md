---
lang: en-US
prev: false
next: false
---

# Expedition In Tier
Sample text

::: warning NOTE
This is not finished!
:::

## Enabled

`Boolean`

Wether the expedition is enabled or not.

## Accessibility

> Normal\
AlwayBlock\
AlwaysAllow\
BlockedAndScrambled

Accessibility of the expedition on the rundown screen.

## Descriptive
Sample text

<block>

### Prefix

`String`

The prefix of the Expedition.

```json
"Prefix": "A",
```

### PublicName

`String`

The public name of the expedition.

```json
"PublicName": "The Admin",
```

### ExpeditionDepth

`Int32`

The depth of the expedition.

```json
"ExpeditionDepth": 421,
```

### EstimatedDuration

`String`

An estimated amount of time the expedition will take.

```json
"EstimatedDuration": "40 minutes",
```

### ExpeditionDescription

`String`

The description of the expedition.

```json
"ExpeditionDescription": "Security clearance for section B needed. DNA sample will suffice.\nPrisoners sent to locate Administrator in stasis unit.\n",
```

### RoleplayedWardenIntel

`String`

Sample text

```json
"RoleplayedWardenIntel": ">...\n<size=200%><color=red>>..they react to light and sounds!</color></size>\n>..stand still! [unintelligible, scream]",
```

### DevInfo

`String`

A description of what the expedition is for the devs.

```json
"DevInfo": "small map with baseline sprinkle\n"
```

</block>

## Seeds
The seeds to build off when generating the expedition.

<block>

### BuildSeed

`Int32`

Sample text

```json
"BuildSeed": 333
```

### FunctionMarkerOffset

`Int32`

The offset for function marker seed.

```json
"FunctionMarkerOffset": 0
```

### StandardMarkerOffset

`Int32`

The offset for standard marker seed.

```json
"StandardMarkerOffset": 15
```

### StandardMarkerOffset

`Int32`

The offset for the light seed.

```json
"LightJobSeedOffset": 0
```

</block>

## ExpeditionData

Sample text

<block>

### ComplexResourceData

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The ID of the [Complex Resource]() block.

### LightSettings

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The ID of the target [Light Settings](/docs/datablocks/light-settings) block.

### FogSettings

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The ID of the target [Fog Settings](/docs/datablocks/light-settings) block.

### EnemyPopulation

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The ID of the target [Enemy Population](/docs/datablocks/enemy-population) block.

### ExpeditionBalance

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The ID of the target [Enemy Balancing](/docs/datablocks/enemy-balancing) block.

### ScoutWaveSettings

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id) = 3U

</div>

The ID of the target [Scout Wave Settings]() block.

### ScoutWavePopulation

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id) = 1U

</div>

The ID of the target [Scout Wave Population]() block.

</block>




## LevelLayout

<div class="codespan">

[persistantID](/guides/developers/creating-rundowns.html#persistent-id)

</div>

The ID of the [Level Layout](/docs/datablocks/level-layout) block

## MainLayerData