---
lang: en-US
title: Community
description: Check out the requirements for getting featured and the rules for our community!
sidebar: auto
next: false
prev: false
tags:
  - rules
  - feature
---

# Community 

## Guidelines
These are the general guidelines for community members to follow, if you would like to suggest an addition or change, open a ticket on the [Unofficial GTFO Modding Discord server](https://discord.com/invite/rRMPtv4FAh)

### Players
---
* Avoid performing any of these actions in public lobbies as they will result in a ban.
  * Playing modded content in public lobbies.
  * Using cheats in public lobbies.
* Do not talking about modded content on the main server.

### Content Creators
---
* Please make it obvious that your content is modded (in title or tags).
* Don’t post your content in the main server.
* Make sure to remind people not to post your content on the main server (description or otherwise).

### Rundown Developers
---
* Please use [MTFO](https://github.com/GTFO-Modding/MTFO) or another datablock plugin that disables analytics or logging.
* Do not showcase unreleased content (this does not include custom content, rather content that the devs have created and not yet released). We want to allow the devs to release their content on their own time. This includes, but is it limited to, sounds, enemies, environments, tools, items, or the like. Weapon parts are excluded from this rule.
* Make sure your rundown and level names do not overlap official rundowns. For example, ACT-1 or OS-D2 is okay. However, R5A1 would not be not allowed.
* Your rundown must use persistentID 1. This is to make sure we do not affect official statistics.
* Please try to avoid overlapping official lore. For example, don’t try to create a storyline for Schaeffer, etc.

### Plugin Developers 
---
* Please don't fix half finished features (e.g. level spawn sentry guns, mapper, etc) as the developers would like to do this themselves.
* If developers are making a standalone plugin that is intended not to be used with [MTFO](https://github.com/GTFO-Modding/MTFO) they should implement the following patches.

<!-- #### Required Patches -->

```cs
// Disables analytic reporting
[HarmonyPatch(typeof(AnalyticsManager), "OnGameEvent", typeof(GameEventData))]
public static bool Prefix()
{
  return false;
}

// Disables Steam rich presence
[HarmonyPatch(typeof(SNet_Core_STEAM), "SetFriendsData", new Type[] { typeof(FriendsDataType), typeof(string) })]
public static void Prefix(ref string data)
{
  data = "";
}
```
<!-- > [MTFO](https://github.com/GTFO-Modding/MTFO/) implements these patches so if your plugin is going to be used alongside it, you don't need to worry about implementing these yourself. -->

## Getting Featured
So you want to get your rundown featured? Lets go over some requirements for your rundown first.

---

1) You must have **one or more completed custom Rundowns**.
1) The `persistentID` for your Rundown **must be set to one**.
1) Make sure `RundownToLoad` in `GameSetup` **is set to one as well**, otherwise, your rundown will not load.
3) Your expeditions, enemies, gear, etc. **cannot use any unreleased content**.
::: danger Unreleased Content
* Unused SFX
* Unreleased melee heads
* Unreleased weapons
* Unreleased levels
* Unreleased features including
  * Secondary sentry targeting mode
:::
5) Expedition and Rundown names should **not conflict with any official schemas**.
::: danger Offical Schemas
* R4A4, Rundown 0m06
* Alpha4, Act1-4, Rundown X.
:::

---

Once you feel like your levels are ready, open up a ticket in `#create-ticket` on our [Discord](https://discord.com/invite/rRMPtv4FAh), make sure you have a zip file with all the game data ready for the mods to look over and a name for the text channel where you will be posting your rundown! 