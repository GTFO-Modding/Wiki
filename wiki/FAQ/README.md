## FAQ

### How do I use mods?
To mod [GTFO](#where-is-gtfo) it requires the following
* [BepInEx](#what-is-bepinex)
* [MTFO](#what-is-mtfo)
* [custom content](#where-can-i-get-mods)

All of which will be set within the [GTFO game folder](#where-is-gtfo)

### Where can I get mods?
* [The Unofficial GTFO Modding server](https://discord.gg/rRMPtv4FAh)
* [The Bucket](https://github.com/GTFO-Modding/Bucket)

### Who can I play modded content with?
* [The Unofficial GTFO Modding server](https://discord.gg/rRMPtv4FAh)
* Private servers
* Direct messages

### What is BepInEx?
It's a Unity / XNA game patcher and [plugin](#what-are-plugins) framework required in order to make [modding](#how-do-i-use-mods) work

### What is MTFO?
[A plugin](#what-are-plugins) that dumps most of the settings used for GTFO into [data block files](#what-are-data-blocks). It also can be used to load custom blocks from mod devs

### What are plugins?
* Typically in compilled dll files
* They are what enables custom functionality for the game not possible through [data blocks](#what-are-data-blocks)
* [BepInEx](#what-is-bepinex) loads them at runtime
* Some plugins can conflict with each other so be cautious

### What are data blocks?
* Typically in json file format
* [MTFO](#what-is-mtfo) dumps them from [GTFO](#where-is-gtfo)
* Data blocks contain settings for weapons, objectives, enemies, players, and the environments
* [They can be modified to create custom rundowns and expeditions](#how-do-I-make-custom-rundowns)
* [You can read the entry for guidance on each datablock and what their properties do](../..#Datablock)

### Where is GTFO?
* [It can be purchased from steam](https://store.steampowered.com/app/493520/GTFO/)
* On windows the files are located at `C:\Program Files (x86)\Steam\steamapps\common\GTFO\`

### How do I get BepInEx?
You can use the following options
* [Download the latest artifact for UnityIL2CPP_x64 from their build bot](https://builds.bepis.io/projects/bepinex_be)

or
* [use the GTFO bucket](https://github.com/GTFO-Modding/Bucket)

### How do I get MTFO?
You can use the following options
* [Download the latest release from github](https://github.com/GTFO-Modding/MTFO/releases/latest)

or
* [Use the Bucket](https://github.com/GTFO-Modding/Bucket)

### How do I set up BepInEx?
1. [Download BepInEx](#how-do-i-get-bepinex)
2. Copy `BepInEx`, `mono`, `doorstop_config.ini` and `winhttp.dll` to the same [directory](#where-is-gtfo) as `GTFO.exe`
3. Overwrite any files if it asks
4. Run and close the game once you reach the inject screen

### How do I set up MTFO?
1. [Download MTFO](#how-do-i-get-mtfo)
2. Extract `MTFO.dll` and `Newtonsoft.Json.dll` to [the plugins folder](#how-do-i-set-up-custom-plugins)
3. Run and close the game once you reach the inject screen

### How do I set up custom plugins?
Place your custom plugins into `GTFO\BepInEx\plugins\` and they should automatically be loaded

### How do I set up custom rundowns?
1. Place your custom rundown blocks in a new folder located within `GTFO\BepInEx\config\Rundowns\`
2. Make sure your json files are located at `GTFO\BepInEx\config\Rundowns\YourRundown\GameData_*DataBlock_bin.json`
3. Edit `GTFO\BepInEx\config\DataDumper.cfg`
4. Set `RundownPackage = default` to the name of the folder you want to load
5. Save `DataDumper.cfg`

### How do I disable modding?
There are several options to do this, the most common are the following
* Rename `winhttp.dll` to `winhttp`

or
* Move `winhttp.dll` outside of [the GTFO directory](#where-is-gtfo)

or
1. Edit `doorstop_config.ini`
2. Set `enabled=true` to `enabled=false`
3. Save the file

### How do I make custom rundowns?
1. First set up [BepInEx](#how-do-i-set-up-bepinex) and [MTFO](#how-do-i-set-up-mtfo)
2. Make a copy of `GTFO\BepInEx\config\Rundowns\GameData_#####` with a unique name
3. [Configure MTFO to load your rundown](#how-do-i-set-up-custom-rundowns)
4. Edit the json files within the rundown folder with a text editor of your choice
5. [Read the entry for guidance on each datablock and what their properties do](../..#Datablock)

### How do I make custom plugins?
* This requires C# and unity knowledge as well as an understanding of how GTFO works internally
* Plugins are compiled using Visual Studio typically
* [BepInEx has a basic guide to get started here](https://github.com/BepInEx/BepInEx/wiki/How-to-make-a-regular-plugin)
