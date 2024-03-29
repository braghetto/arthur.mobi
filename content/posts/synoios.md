---
title: SynoIOS
date: 2021-05-21
description: Synology DSM package that allows file access of iOS devices.
---

SynoIOS is a package for Synology DSM that allows file access of iOS devices connected via USB in your NAS.

Just install this package using Synology DSM Package Center. After it is running you can connect an iOS device into your Synology's USB port to access your device's files through the File Station.


__How to install__
1. Download a precompiled version of SynoIOS. Here is the [*latest SynoIOS release*](https://github.com/braghetto/synoios/releases/latest), get the spk file.

2. Login your Synology DSM web interface using a admin user.

3. On the DSM desktop open the *Package Center*, click in *Manual Install* button, then browse to SynoIOS spk file that you downloaded.

4. This application package is not signed, a dialog will be displayed confirming your knowledge about it. Proceed with the standard steps to complete the installation.

5. SynoIOS should start automatically. When it is in Runnig state we are done.

6. Now you should see a new share named *AppleDevice* where yours iOS devices filesystem will be displayed.


__How to use__
1. With SynoIOS in Running state, just connect your iOS device using a USB cable into your Synology storage.

2. Unlock your iOS device, a confirmation dialog about the usb connection will be displayed. After confirmation, DSM will mount your device. 

3. On DSM desktop open *File Station* you should see your iOS files inside *AppleDevice* share.


If your want to have more details about the code or even customize this software, all sources and instructions are here.\
https://github.com/braghetto/synoios


**This package is compiled only for x86 64 Bits Synology platforms running DSM 6.x, because this package needs root privileges it will not be compatible with DSM 7.*


