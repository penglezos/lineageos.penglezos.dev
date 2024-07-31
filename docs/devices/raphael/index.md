---
hide:
  - navigation
---
[:material-arrow-u-left-bottom: Devices](../../devices.md)

# Xiaomi Mi 9T Pro/Redmi K20 Pro (raphael)

## Specifications

| Specifications    | Value                              |
| ----------------- | ---------------------------------- |
| Relase Date       | June 2019 |
| SoC               | Qualcomm SM8150 Snapdragon 855 (msmnile) |
| RAM               | 6GB / 8GB |
| CPU               | 1x2.84 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485 |
| Architecture      | arm64 |
| GPU               | Qualcomm Adreno 640 |
| Storage           | 64GB / 128GB / 256GB |
| Screen            | 6.39 in (162.31 mm) 2340x1080 (403 PPI) AMOLED |
| Battery           | Non-removable Li-Po 4000 mAh |
| Maintainer        | penglezos |
| Current version   | 21 |
| Previously supported versions | 17.1, 18.1, 19.1, 20 |
| Kernel version    | 4.14 |

## Downloads

[Get the builds here](https://github.com/penglezos/device_xiaomi_raphael/releases)

## Guides

* [Installation](../raphael/install.md)
* [Update to a newer build of the same LineageOS version](../raphael/update.md)
* [Upgrade to a higher version of LineageOS (e.g. lineage-20 -> lineage-21)](../raphael/upgrade.md)

## Special boot modes

* **Recovery**: With the device powered off, hold `Volume Up + Power`. Keep holding both buttons until the “MI” logo appears on the screen, then release.
* **Fastboot**: With the device powered off, hold `Volume Down + Power`. Keep holding both buttons until the word “FASTBOOT” appears on the screen, then release.

## Report a bug

!!! warning
    Support will **NOT** be provided if: ROM is installed with a different recovery, a custom kernel is installed, any kind of system modifications example: root, data decryption.

## What not to report

* Ask for installation help.
* Ask for status updates - we can’t provide them (no ETA!).
* Feature requests.
* Ask if it is fixed already - if the report is still open it probably is still present.

## Reporting a bug

We use [Github Issues](https://github.com/penglezos/device_xiaomi_raphael/issues) as our bug tracker. 

Before you submit a bug, please search to verify that someone else hasn’t reported it already. To properly report an issue, the following log file must be provided in the ticket:

* `logcat` (System Log).

Providing a detailed description of the issue and attaching a video/photo is always a plus.

## Taking logs for bug reports

These instructions will generate a logcat file which you can then attach to a bug report. That file basically consists of a log of system messages, including stack traces when the device throws an error, and debug messages from apps.

To grab a `logcat` it is required to have USB debugging enabled:

* Connect your device to your PC via USB if it isn’t already.
* Open a command prompt (on Windows) or terminal (on Linux or macOS) window, and type:

```bash
$ adb logcat -d > logcat.txt
```

Additionally, the radio buffer can be viewed or stored with logcat. If needed or requested, type:

```bash
$ adb logcat -db radio > radio.txt
```