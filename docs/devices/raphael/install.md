---
hide:
  - navigation
---
[:material-arrow-u-left-bottom: Overview](./index.md)

# Install LineageOS on Xiaomi Mi 9T Pro - Redmi K20 Pro (raphael)

!!! note
    Make sure you have read the [Getting started](../../index.md) page before proceeding with the installation.

## Install Lineage Recovery using fastboot
!!! warning
    Other recoveries may not work for installation or updates. We strongly recommend to use the one linked below!
* Download [Lineage Recovery](https://github.com/penglezos/device_xiaomi_raphael/releases/latest). Simply download the latest recovery file, named `recovery.img`.
* Connect your device to your PC via USB if it isn’t already.
* If your device isn’t already in fastboot mode, on the computer, open a command prompt (on Windows) or terminal (on Linux or macOS) window, and type:
```bash
$ adb -d reboot bootloader
```

You can also boot into fastboot mode via a key combination:

With the device powered off, hold `Volume Down` + `Power`. Keep holding both buttons until the word “FASTBOOT” appears on the screen, then release.

* Once the device is in fastboot mode, verify your PC finds it by typing:
```bash
$ fastboot devices
```

* Flash recovery onto your device:
```bash
$ fastboot flash recovery recovery.img
```

* Now reboot into recovery to verify the installation. Do not reboot into the existing OS, since it will overwrite the recovery you just installed!

With the device powered off, hold `Volume Up` + `Power`. Keep holding both buttons until the “MI” logo appears on the screen, then release.

!!! success
    Lineage recovery should be installed successfully and should show the LineageOS logo.

## Install device firmware from recovery
* Download the latest device firmware available for your device according to your region:

| Firmware          | Region | Link                      |
| ----------------- | -------|-------------------------- |
| V12.5.2.0.RFKMIXM | Global | [Click here](https://xmfirmwareupdater.com/firmware/raphael/stable/V12.5.2.0.RFKMIXM/) |
| V12.5.1.0.RFKEUXM | Europe | [Click here](https://xmfirmwareupdater.com/firmware/raphael/stable/V12.5.1.0.RFKEUXM/) |
| V12.5.6.0.RFKCNXM | China  |  [Click here](https://xmfirmwareupdater.com/firmware/raphael/stable/V12.5.6.0.RFKCNXM/) |
| V12.5.1.0.RFKINXM | India  | [Click here](https://xmfirmwareupdater.com/firmware/raphaelin/stable/V12.5.1.0.RFKINXM/) |

* On the `LineageOS Recovery` home screen, tap `Apply update`, then `Apply from ADB` for starting the sideload service.

* Open a `ADB & Fastboot` tools window on your PC and flash the `device firmware` install package you downloaded previously:
```bash
$ adb sideload fw_raphael.zip
```

!!! note
    When presented with a screen that says Signature verification failed, click `Continue`. It is expected as add-ons aren’t signed with LineageOS’s official key!

!!! success
    Device firmware should be installed successfully.

## Install LineageOS from recovery
* Download the [LineageOS zip file](https://github.com/penglezos/device_xiaomi_raphael/releases/latest). Simply download the latest zip file, named `lineage-21.0-xxxxxxxx-UNOFFICIAL-raphael.zip`.
* On the `Lineage Recovery` home screen tap, `Factory Reset`, then `Format data / factory reset` and continue with the formatting process. This will remove encryption and delete all files stored in the internal storage, as well as format your cache partition (if you have one).
* Return to the main menu.
* On the `Lineage Recovery` home screen, tap `Apply update`, then `Apply from ADB` for starting the sideload service.
* Open a `ADB & Fastboot` tools window on your PC and flash the `LineageOS install package` you downloaded previously:

```bash
$ adb sideload lineage-21.0-xxxxxxxx-UNOFFICIAL-raphael.zip
```

!!! information
    Normally, adb will report Total xfer: 1.00x, but in some cases, even if the process succeeds the output will stop at 47% and report adb: failed to read command: Success. In some cases it will report adb: failed to read command: No error or adb: failed to read command: Undefined error: 0 which is also fine.

!!! success
    LineageOS should be installed successfully.

## Install Add-Ons
!!! warning
    If you don’t want to install any add-on (such as Google Apps), you can skip this whole section and reboot to system!
    If you want to install Google Apps add-on package (use the `arm64` architecture), you can download it from [here](https://github.com/MindTheGapps/14.0.0-arm64/releases/latest). This add-on needs to be installed **before** booting into LineageOS for the first time!

* On the `Lineage Recovery` home screen, tap `Apply update`, then `Apply from ADB` for starting the sideload service.
* Open a `ADB & Fastboot` tools window on your PC and flash the `LineageOS install package` you downloaded previously (for example: Google Apps):
```bash
$ adb sideload filename.zip
```

!!! note
    When presented with a screen that says Signature verification failed, click `Continue`. It is expected as add-ons aren’t signed with LineageOS’s official key!

## All set!
* Once you have installed everything successfully, you can now reboot your device into the OS for the first time!
* Click the back arrow in the top left of the screen, then `Reboot system now`.

!!! note
    The first boot usually takes no longer than 15 minutes, depending on the device. If it takes longer, you may have missed a step.