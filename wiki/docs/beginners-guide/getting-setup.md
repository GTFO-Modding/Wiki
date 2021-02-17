---
title: Getting Setup
lang: en-US
prev: false
next: ./installing-rundowns
---

# Getting Setup

[//]: # "*Setting up GTFO for modding.*"

## Installing BepInEx

#### Where is the GTFO folder?

Usually, you would find it here. Though, if you have changed the steam install drive, use that drive letter instead.\
`C:\Program Files (x86)\Steam\steamapps\common\GTFO\`

1. Download the latest IL2CPP x64 [Artifact](https://builds.bepis.io/projects/bepinex_be) of BepInEx.
2. Extract the contents of BepInEx into the [GTFO Folder](#where-is-the-gtfo-folder).
3. Run GTFO once, once you reach the inject screen, close GTFO.
> This allows BepInEx to generate all of its nessary files.

Your [GTFO Folder](#where-is-the-gtfo-folder) should resemble something like this once you have completed these steps.

![GTFO Folder](@images/gtfofolder.png)

## Installing Plugins

::: warning NOTICE
[//]: # "* Only place **.dll** files into the plugins folder to get loaded properly."
* Plugins might not work as expected depending on which version of [BepInEx](https://github.com/BepInEx/BepInEx) you are using.
:::

Luckily adding plugins is easy thanks to [BepInEx](https://github.com/BepInEx/BepInEx), all you have to do place your plugin into the `GTFO\BepInEx\plugins` folder.

![Plugins Folder](@images/plugin.png)