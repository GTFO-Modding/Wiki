---
lang: en-US
prev: ./setting-up-bepinex
next: false
---

# Installing Rundowns

## Setting up DataDumper

1) Download the latest version of [DataDumper](https://github.com/GTFO-Modding/MTFO/releases/)

1) Unzip/drag the entire folder into `GTFO\BepInEx\plugins`

1) Run GTFO, and once you have reached the inject screen, quit the game.
> Your config folder should look something like this after closing GTFO.

![BepInEx confg folder](@images/datadumperconfig.png)

## Configuring DataDumper

1) Download the rundown you want to play from the **Featured Content** category from our [Discord](https://discord.com/invite/rRMPtv4FAh)

1) Unzip/drag the folder containing the datablocks into `GTFO\BepInEx\config\Rundowns`
::: warning NOTE
Make sure to check if the rundown you downloaded has extra install steps, these will typically be in the `README.txt` file.
:::

3) Change `RundownPackage` in `GTFO\BepInEx\config\DataDumper.cfg` to the name of the rundown folder you want to play.