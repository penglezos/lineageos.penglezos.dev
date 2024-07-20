---
hide:
  - navigation
---
[:material-arrow-u-left-bottom: Overview](./index.md)

# Update LineageOS on Xiaomi Mi 9T Pro - Redmi K20 Pro (raphael)

## Using the LineageOS Updater app

* Open Settings, navigate to `System`, then `Updater`.
* Click the Refresh Icon in the top right corner.
* Choose which update you’d like and press `Download`.
* When the download completes, click `Install`. Your device will reboot to recovery and install the update, then reboot to the updated installation.

## Sideloading from Recovery

* Download the [LineageOS zip file](https://github.com/penglezos/device_xiaomi_raphael/releases/latest). Simply download the latest zip file, named `lineage-21.0-xxxxxxxx-UNOFFICIAL-raphael.zip`.
* Make sure your computer has `adb` and `fastboot` installed. Setup instructions can be found [here](https://wiki.lineageos.org/adb_fastboot_guide.html).
* Enable USB debugging on your device.
* Now reboot into recovery. With the device powered off, hold `Volume Up` + `Power`. Keep holding both buttons until the “MI” logo appears on the screen, then release.
* On the `Lineage Recovery` home screen, tap `Apply update`, then `Apply from ADB` for starting the sideload service.
* Open a `ADB & Fastboot` tools window on your PC and flash the `LineageOS install package` you downloaded above:

```bash
$ adb sideload lineage-21.0-xxxxxxxx-UNOFFICIAL-raphael.zip
```

* Once you have installed everything successfully, click the back arrow in the top left of the screen, then `Reboot system now`.
