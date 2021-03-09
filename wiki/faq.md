---
lang: en-US
title: Frequently Asked Questions
description: Check out our most asked questions.
prev: false
next: false
sidebar: false
tags:
    - faq
    - help
---

# Frequently Asked Questions

## Where can I get Rundowns/Plugins?
---
We recommend you downloading them using one of these methods.
* [The Unofficial GTFO Modding server](https://discord.gg/rRMPtv4FAh)
* [The GTFO Thunderstore page](https://gtfo.thunderstore.io/)

## Who can I play modded content with?
---
You can play modded content with anyone as long as you dont contradict our [Player Guidelines](/community#players)

## Where is the GTFO Folder?
---
If you haven't changed your [Steam Install Location](https://support.steampowered.com/kb_article.php?ref=7710-tdlc-0426) you will find it at `C:\Program Files (x86)\Steam\steamapps\common\GTFO\`

<!-- ## What is BepInEx?
It's a Unity / XNA game patcher and [plugin](#what-are-plugins) framework required in order to make [modding](#how-do-i-use-mods) work -->

<!-- ## What is MTFO?
[A plugin](#what-are-plugins) that dumps most of the settings used for GTFO into [data block files](#what-are-data-blocks). It also can be used to load custom blocks from mod devs -->

## What are plugins?
---
* Typically in compilled dll files
* They are what enables custom functionality for the game not possible through [data blocks](#what-are-data-blocks)
* [BepInEx](#what-is-bepinex) loads them at runtime
* Some plugins can conflict with each other so be cautious

## What are data blocks?
---
* Typically in json file format
* [MTFO](#what-is-mtfo) dumps them from [GTFO](#where-is-gtfo)
* Data blocks contain settings for weapons, objectives, enemies, players, and the environments
* [They can be modified to create custom rundowns and expeditions](#how-do-I-make-custom-rundowns)
* [You can read the entry for guidance on each datablock and what their properties do](../..#Datablock)

## How do I disable modding?
---
1) Open `doorstop_config.ini` in the [GTFO folder](#where-is-the-gtfo-folder)
1) Change `enabled` to `false` under the `UnityDoorstop` category.
```ini
[UnityDoorstop]
# Specifies whether assembly executing is enabled
enabled=false
# Specifies the path (absolute, or relative to the game's exe) to the DLL/EXE that should be executed by Doorstop
targetAssembly=BepInEx\core\BepInEx.IL2CPP.dll
# Specifies whether Unity's output log should be redirected to <current folder>\output_log.txt
redirectOutputLog=false
```

<!-- ## Where can I download BepInEx?
---
You can download the latest [Artifact for UnityIL2CPP_x64](https://builds.bepis.io/projects/bepinex_be) -->

## How do I setup BepInEx?
---
Refer to the [Beginners Guide](/beginners-guide#installing-bepinex) on how to setup [BepInEx](https://github.com/BepInEx/BepInEx)

## How do I setup MTFO?
---
Refer to the [Beginners Guide](/beginners-guide#setting-up-mtfo) on how to setup [MTFO](https://github.com/GTFO-Modding/MTFO)

## How do I setup plugins?
---
Refer to the [Beginners Guide](/beginners-guide#installing-plugins) on how to setup plugins.

<!-- ## How do I setup custom rundowns?
1. Place your custom rundown blocks in a new folder located within `GTFO\BepInEx\config\Rundowns\`
2. Make sure your json files are located at `GTFO\BepInEx\config\Rundowns\YourRundown\GameData_*DataBlock_bin.json`
3. Edit `GTFO\BepInEx\config\DataDumper.cfg`
4. Set `RundownPackage = default` to the name of the folder you want to load
5. Save `DataDumper.cfg` -->

<!-- Will be used in the creating-rundowns guide -->
<!-- ## How do I make custom rundowns?
1. First set up [BepInEx](#how-do-i-set-up-bepinex) and [MTFO](#how-do-i-set-up-mtfo)
2. Make a copy of `GTFO\BepInEx\config\Rundowns\GameData_#####` with a unique name
3. [Configure MTFO to load your rundown](#how-do-i-set-up-custom-rundowns)
4. Edit the json files within the rundown folder with a text editor of your choice
5. [Read the entry for guidance on each datablock and what their properties do](../..#Datablock)

<!-- Will be used in the creating-plugins guide -->
<!-- ## How do I make custom plugins?
* This requires C# and unity knowledge as well as an understanding of how GTFO works internally
* Plugins are compiled using Visual Studio typically
* [BepInEx has a basic guide to get started here](https://github.com/BepInEx/BepInEx/wiki/How-to-make-a-regular-plugin) -->
