---
title: Rundown
parent: Game Data
has_children: false
---

# Rundown
This is the setup for a Rundown, this allows you to customize the look of the Rundown as well as expidition related data.

Some sections of the game data blocks will be skimmed over in this guide as they aren't useful to modders.

**ReqToReachTierB-E**
This sets how many badges you need to get to a tier, see [Guidelines - Rundown Setup]() for more info.
> N/A

# StorytellingData

**Title**
The title of the rundown, this is displayed on the "Connect to Rundown" screen.
> {{ site.rich_string_link }}

**TextLog**
This doesn't seem to display anywhere currenrtly.
> String

## Visuals
This section contains everything related to the visual look of the rundown.

**ColorBackground**
Unused.
> N/A

**TierA-EVisuals**
This effects the color and scale of each tier

```
"Color": {
    "a": 1.0,
    "r": 0.4509804,
    "g": 0.7490196,
    "b": 0.858823538
},
"Scale": 0.2
```

## TierA-E
This contains an array of each level in a tier
> List

# Rundown In Tier
This contains the data that forms a expidition icon on the rundown.

**Enabled**
Dictates if this expidition appears on the rundown.
> Boolean

**Accessibility**
Defines the how this expiditions icon appears on the rundown.
> Enum  0: Normal, 1: AlwayBlock, 2: AlwaysAllow, 3: BlockedAndScrambled

## Descriptive
This contains all the text elements of a expidition.

**Prefix**
This is a text string that displays before the auto-prefixed number on an expidition.
> {{ site.rich_string_link }}

**PublicName**
This is the name of the expidition.
> {{ site.rich_string_link }}

**ExpeditionDepth**
The depth of the expedition.
> Integer

**EstimatedDuration**
Dev info.
> String

**ExpeditionDescription**
The description of the expidition.
> {{ site.rich_string_link }}

**RoleplayedWardenIntel**
The description of the expidition.
> {{ site.rich_string_link }}

**DevInfo**
What it says on the tin.
> String

## Seeds
Contains data related to seeding the level generator.

**BuildSeed**
The seed used to generate the rooms of the level
> Integer

**FunctionMarkerOffset**
Effects the layout inside rooms?
> Integer

**StandardMarkerOffset**
Effects something.
> Integer

**LightJobSeedOffset**
Effects the placement of lights.
> Integer

## Expedition


**ComplexResourceData**
The {{site.persistent_id}} of the resource set this level uses, see [Complex Resource Set]() for more info.
> {{site.persistent_id_link}}

