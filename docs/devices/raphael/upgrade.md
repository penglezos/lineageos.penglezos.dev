---
hide:
  - navigation
---
[:material-arrow-u-left-bottom: Overview](./index.md)

# Upgrade LineageOS on Xiaomi Mi 9T Pro - Redmi K20 Pro (raphael)

## Manually upgrading LineageOS to a higher version of LineageOS

!!! warning
    The updater app does not support upgrades from one version of LineageOS to another, and will block installation to any update for a different version. Upgrading manually requires similar steps to installing LineageOS for the first time.

!!! warning
    If you previously had any Google Apps add-on package installed on your device, you must install an updated package **before** the first boot of Android! If you did not have Google Apps installed, you must wipe the **Data** partition (or perform a factory reset) to install them.

* Verify your device is using the latest [Lineage Recovery](https://github.com/penglezos/device_xiaomi_raphael/releases/latest). Simply download the latest recovery file, named `recovery.img`.
* Download the [LineageOS zip file](https://github.com/penglezos/device_xiaomi_raphael/releases/latest). Simply download the latest zip file, named `lineage-21.0-xxxxxxxx-UNOFFICIAL-raphael.zip`.
* Now reboot into recovery. With the device powered off, hold `Volume Up` + `Power`. Keep holding both buttons until the “MI” logo appears on the screen, then release.
* On the `Lineage Recovery` home screen, tap `Apply update`, then `Apply from ADB` for starting the sideload service.
* Open a `ADB & Fastboot` tools window on your PC and flash the `LineageOS install package` you downloaded above:

```bash
$ adb sideload lineage-21.0-xxxxxxxx-UNOFFICIAL-raphael.zip
```

!!! information
    Normally, adb will report Total xfer: 1.00x, but in some cases, even if the process succeeds the output will stop at 47% and report adb: failed to read command: Success. In some cases it will report adb: failed to read command: No error or adb: failed to read command: Undefined error: 0 which is also fine.

!!! information
    Add-ons aren’t signed with LineageOS’s official key, and therefore when they are sideloaded, Lineage Recovery will present a screen that says Signature verification failed, this is expected, please click Continue.

* Once you have installed everything successfully, click the back arrow in the top left of the screen, then `Reboot system now`.

!!! success
    LineageOS should be installed successfully.
