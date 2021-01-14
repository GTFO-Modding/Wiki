---
title: Game Data
has_children: true
nav_order: 3
---


# Game Data
{: .no_toc }

This doc contains general information that is applicable to all data blocks and serves as a root for all data block related pages.
{: .fs-6 .fw-300 }

## Persistent ID
While modding GTFO you'll come across {{site.persistent_id}}'s pretty often, everything in GTFO uses a {{site.persistent_id}} to reference each other. If you've ever worked with a data base of any kind or have moderate experience in programming you'll most likely understand what these are and how they work already. 

In essence, to refer to any other chunk of game data in GTFO you will need it's {{site.persistent_id}}. {{site.persistent_id}}'s are static, unchanging* values.

\* Unchanging in the sense that from the dev's side, they always stay the same, as modders we can change these values to whatever we want. 
{: .fs-2 }

Whenever you add new a new chunk into the games data blocks, you'll need to assign it a {{site.persistent_id}}. You cannot use a {{site.persistent_id}} that is already used by another chunk in the game data block you're editing but you can use an ID that is already in use by a diffrent data block. 
*I.E, if data block 1 has a persistent ID in it of 1 and you add a persistent ID of 1 to data block 2, there will be no conflicts.*

{{site.persistent_id}} is a uint and as such has a range of 0 to 4,294,967,295, any number between these two ranges is valid.


## Rich Text
Unity rich text shit will go here

## Placement Data
General over view of how placement data works
