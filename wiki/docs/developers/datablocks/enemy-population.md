---
title: Enemy Population
next: false
prev: false
---

# Enemy Population
Enemy Population stuff

::: warning WARNING
This doc is not finished!
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
The [ID](/docs/developers/creating-rundowns.html#persistent-id) of the desired enemy. This ID is pulled from Enemy Data.

```json
"Enemy": 12,
```

## Cost
The cost of the current enemy. This value will be subtracted from MaxScore in Enemy Group Data.

 `Single`

```json
"Cost": 5.0,
```

## Weight 
The chance of this enemy being selected in a group, relative to others.

`Single`

```json
"Weight": 0.75
```
