---
hide:
  - navigation
---
[:material-arrow-u-left-bottom: Overview](../../devices.md)

# Install LineageOS on Xiaomi Mi 9T Pro - Redmi K20 Pro (raphael)

!!! note
    Make sure you have read the [Getting started](../../index.md) page before proceeding with the installation.

## Download required files from [Github releases](https://github.com/penglezos/device_xiaomi_raphael/releases/latest):
* lineage-21.0-xxxxxxxx-UNOFFICIAL-raphael.zip
* recovery.img

## Device firmware
* Download the latest vendor firmware available for your device according to your region:

| Firmware          | Region | Link                      |
| ----------------- | -------|-------------------------- |
| V12.5.2.0.RFKMIXM | Global | [Click here](https://xmfirmwareupdater.com/firmware/raphael/stable/V12.5.2.0.RFKMIXM/) |
| V12.5.1.0.RFKEUXM | Europe | [Click here](https://xmfirmwareupdater.com/firmware/raphael/stable/V12.5.1.0.RFKEUXM/) |
| V12.5.6.0.RFKCNXM | China  |  [Click here](https://xmfirmwareupdater.com/firmware/raphael/stable/V12.5.6.0.RFKCNXM/) |
| V12.5.1.0.RFKINXM | India  | [Click here](https://xmfirmwareupdater.com/firmware/raphaelin/stable/V12.5.1.0.RFKINXM/) |

## Install Lineage Recovery using fastboot
!!! warning
    Other recoveries may not work for installation or updates. We strongly recommend to use the one linked above!

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