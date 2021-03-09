---
lang: en-US
title: Beginners Guide
description: Get Started in the Right Direction!
sidebarDepth: 1
sidebar: auto
next: false
prev: false
tags:
    - beginners
    - guide
    - bepinex
    - plugin
    - rundown
    - custom
---

# Beginners Guide
This guide goes over setting up [BepInEx](https://github.com/BepInEx/BepInEx) and how to play custom Rundowns. If you would like to create your own Rundown, head over to our [Creating Rundowns](/creating-rundowns/) guide.

---

## Setting up Modding

### Installing BepInEx
---
<!-- #### Where is the GTFO folder?
Usually, you would find it here. Though, if you have changed the steam install drive, use that drive letter instead.\
`C:\Program Files (x86)\Steam\steamapps\common\GTFO\` -->

1) Download the latest [Thunderstore release](https://gtfo.thunderstore.io/package/BepInEx/BepInExPack_GTFO/) of BepInEx.
1) Follow the installation steps and extract the contents of BepInEx into the [GTFO Folder](/faq##where-is-the-gtfo-folder).
1) Run GTFO, then once you reach the inject screen, close GTFO.
<!-- > This allows BepInEx to generate all of its nessary files. -->

Your [GTFO Folder](#where-is-the-gtfo-folder) should resemble something like this after you completed those steps.

![GTFO Folder](@images/gtfofolder.png)

### Installing Plugins
---
<!-- ::: warning NOTICE
Plugins might not work as expected depending on which version of [BepInEx](https://github.com/BepInEx/BepInEx) you are using.
::: -->
Luckily adding plugins is easy thanks to [BepInEx](https://github.com/BepInEx/BepInEx), all you have to do place your plugin into the `GTFO\BepInEx\plugins\` folder.

![Plugins Folder](@images/plugin.png)

<br/>

## Installing Rundowns

### Setting up MTFO
---
1) Download the latest version of [MTFO](https://gtfo.thunderstore.io/package/dakkhuza/MTFO/)
1) Unzip/drag the entire folder into `GTFO\BepInEx\plugins`
1) Run GTFO, and once you have reached the inject screen, quit the game.

Your config folder should look something like this after closing GTFO.

![BepInEx confg folder](@images/datadumperconfig.png)

### Configuring MTFO
---
1) Download the rundown you want to play.
    * [GTFO Thunderstore Page](https://gtfo.thunderstore.io/)
    * **Featured Content** category on our [Discord](https://discord.com/invite/rRMPtv4FAh)
1) Unzip/drag the folder containing the datablocks into `GTFO\BepInEx\config\Rundowns\` <!-- and make sure to check if the rundown has extra install steps, you would typically find these in a `README.txt` file. -->
<!-- > Make sure to check if the rundown you downloaded has extra install steps, these will typically be in the `README.txt` file. -->
3) Change `RundownPackage` in `GTFO\BepInEx\config\MTFO.cfg` to the name of the rundown folder you want to play.
