---
title: Enemy Population
next: false
prev: false
---

# Enemy Population
Enemy Population stuff

::: warning NOTE
This is not finished!
:::

## Role 
The role for the current enemy. 0 through 4 and 6 through 10 are standard enemies. 5 is for scouts.

> Melee\
Ranged\
Tank\
Lurker\
PureSneak\
Scout\
Patroller\
Hunter\
BirtherChild\
MiniBoss\
Boss

```json
"Role": 0,
```

## Difficulty 
The difficulty for the current enemy. Any value can be used here.

> Easy\
Medium\
Hard\
MiniBoss\
Boss\
MegaBoss\
Biss\
Buss

```json
"Difficulty": 0,
```

## Enemy 

<div class="codespan">

[persistantID](/docs/developers/creating-rundowns.html#persistent-id)

</div>

The ID of the desired enemy. This ID is pulled from Enemy Data.

```json
"Enemy": 12,
```

## Cost

 `Single`

The cost of the current enemy. This value will be subtracted from MaxScore in Enemy Group Data.

```json
"Cost": 5.0,
```

## Weight 

`Single`

The chance of this enemy being selected in a group, relative to others.

```json
"Weight": 0.75
```