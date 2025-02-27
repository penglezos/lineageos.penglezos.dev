---
hide:
  - navigation
---

# Reporting a bug

!!! warning
    Support will **NOT** be provided if: ROM is installed with a different recovery, a custom kernel is installed, any kind of system modifications example: root, data decryption.

## What not to report

* Ask for installation help.
* Ask for status updates - we can’t provide them (no ETA!).
* Feature requests.
* Ask if it is fixed already - if the report is still open it probably is still present.

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

## Submitting bug report logs

We use [Github Issues](https://github.com/penglezos/device_xiaomi_raphael/issues) as our bug tracker. 

Before you submit a bug, please search to verify that someone else hasn’t reported it already. To properly report an issue, the following log file must be provided in the ticket:

* `logcat` (System Log).

Providing a detailed description of the issue and attaching a video/photo is always a plus.