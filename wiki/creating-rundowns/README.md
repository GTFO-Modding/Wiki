---
lang: en-US
sidebar: auto
sidebarDepth: 1
---

# Creating Rundowns
Interested in making your own Rundown? Well, you came to the right place!

::: warning NOTE
This guide is not finished!
:::

## The Fundamentals
How rundowns use data blocks and some other examples

## What are Datablocks?
Sample Text

### Header
Sample Text

<div class="block">

### AboveBlockID

<div class="codespan">

[persistentID](#persistentid)

</div>

<!-- I have no idea how to say this -->
The ID of the block the header looks above.

### LabelText

`String`

The name of the header shown in the unity inspector.

### FoldoutStatus

`Boolean`

Wether the section of datablocks are shown in the unity inspector.

</div>

```json
"AboveBlockID": 1,
"LabelText": "Rifle",
"FoldoutStatus": true
```

### Block
Sample Text

<div class="block">

### persistentID

`UInt32`

<!-- Maybe have some of this work with the description of blocks themselves --->
While modding GTFO you'll come across persistentID's pretty often, everything in GTFO uses a persistentID to reference each other. If you've ever worked with a data base of any kind or have moderate experience in programming you'll most likely understand what these are and how they work already. 

In essence, to refer to any other chunk of game data in GTFO you will need it's persistentID. persistentID's are static, unchanging* values.

<!-- Unchanging in the sense that from the dev's side, they always stay the same, as modders we can change these values to whatever we want.  -->

Whenever you add new a new chunk into the games data blocks, you'll need to assign it a persistentID. You cannot use a persistentID that is already used by another chunk in the game data block you're editing but you can use an ID that is already in use by a diffrent data block. 

### internalEnabled

`Boolean`

Wether the block will be loaded or not.

</div>

```json
"name": "GEAR_Rifle_Semi",
"internalEnabled": true,
"persistentID": 1
```
<!-- plus description? --->
| Guide | Author |
| --------------------------------------------- | ------------- |
| [Weapon](./weapon-guide)                      | Mapper Man #1 |
| [Warden Objective](./warden-objective-guide)  | Mapper Man #2 |
| [Enemy](./enemy-guide)                        | Mapper Man #3 |