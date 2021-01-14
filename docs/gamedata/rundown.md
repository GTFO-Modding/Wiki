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

## StorytellingData

### Title
The title of the rundown, this is displayed on the "Connect to Rundown" screen.
This uses the same markup as other text fields in GTFO, see [GameData - Text]() for more info.
> String

### TextLog
This doesn't seem to display anywhere currenrtly.
> String

## Visuals
This section contains everything related to the visual look of the rundown.

### ColorBackground
This is the color the rundown background takes, self explanatory.

```
{
    "a": 1.0,
    "r": 0.0,
    "g": 0.0,
    "b": 0.0
}
```

### TierA-EVisuals
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
> Enum 0: Normal, 1: AlwayBlock, 2: AlwaysAllow, 3: BlockedAndScrambled

## Descriptive

