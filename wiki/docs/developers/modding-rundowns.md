---
prev: false
next: false
---

# Modding Rundowns
_Maybe put something here?_

## The Basics?
Info on how the game works and datablock stuff

## What are Datablocks?
Sample Text

### Headers
Sample Text

<block>

### AboveBlockID

Sample Text

### LabelText

Sample Text

### FoldoutStatus

Sample Text

</block>

```json
"AboveBlockID": 1,
"LabelText": "Rifle",
"FoldoutStatus": true
```

### Blocks
Sample Text

<block>

### PersistentID
While modding GTFO you'll come across persistentID's pretty often, everything in GTFO uses a persistentID to reference each other. If you've ever worked with a data base of any kind or have moderate experience in programming you'll most likely understand what these are and how they work already. 

In essence, to refer to any other chunk of game data in GTFO you will need it's persistentID. persistentID's are static, unchanging* values.

Unchanging in the sense that from the dev's side, they always stay the same, as modders we can change these values to whatever we want. 

Whenever you add new a new chunk into the games data blocks, you'll need to assign it a persistentID. You cannot use a persistentID that is already used by another chunk in the game data block you're editing but you can use an ID that is already in use by a diffrent data block. 
*I.E, if data block 1 has a persistent ID in it of 1 and you add a persistent ID of 1 to data block 2, there will be no conflicts.*

persistentID is a uint and as such has a range of 0 to 4,294,967,295, any number between these two ranges is valid.

### internalEnabled
Wether the block is enabled

`Boolean`

</block>

```json
"name": "GEAR_Rifle_Semi",
"internalEnabled": true,
"persistentID": 1
```

| Name | About |
| - | - |
| [Level Layout](level-layout) | Zones array for the Level Layout datablock |
| Player Offline Gear | Neat |
Cool chart?