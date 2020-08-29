---
layout: page
title:  "Using Zoom / Google Meet with OBS"
date:   2020-08-25 10:00:00 +0800
published: true
description: Setting up a virtual webcam with OBS and Skype's built-in background filtering
---

### Motivation

In Zoom, the definition of a camera / video source is rather limited. You seem to only be able to use your webcam directly. However through OBS, you could customize the webcam footage shown to a much larger degree by creating a virtual webcam. After this guide, a few things could be achieved.

1. If your system does not satisify the [system requirements for virtual background for zoom](https://support.zoom.us/hc/en-us/articles/360043484511), you could use skype's virtual background and stream it to Zoom / Google Meet. 

2. You could switch your webcam footage to any picture you like. (Maybe show a picture that says you are taking a toliet break?)

### Downloads

1. Download [Skype](https://www.skype.com/en/get-skype/)

2. Download [OBS](https://obsproject.com/)

3. Download these two plugins: [OBS-VirtualCam](https://obsproject.com/forum/resources/obs-virtualcam.949/) and [obs-ndi - NewTek NDI™ integration into OBS Studio](https://obsproject.com/forum/resources/obs-ndi-newtek-ndi%E2%84%A2-integration-into-obs-studio.528/)

Just keep clicking next in their installations. You do not need to edit any parameters. Make sure you have downloaded everything before proceeding. 

### Setup

Follow this [video](https://www.youtube.com/watch?v=QPg5IfqAkAI). Rest assured you have already installed all the prerequisites. However, there are some things you should note.

1. As we are trying to use Skype to process our webcam's footage, you could start a call with yourself. To do this, click meet now and start a meeting. This constitudes as an active call even though there's only you in it. Make sure you turn on the video.

2. Even if your system is capable of using Zoom's virtual background without greenscreen, it's not recommended as it might apply to any other images that OBS might show. 

3. To change the OBS's output to say a static picture. You create a new scene and add a picture to the source section. Whenever you want to show that picture, you switch to that scene. For more details, you could look at some [OBS tutorials](https://www.youtube.com/watch?v=DTk99mHDX_I)

### Integration with Zoom / Google Meet

Lastly, we need to stream whatever OBS is outputting to Zoom / Google Meet.

1. Goto OBS, Click tools > VirtualCam > Start. Remember the Target Camera's name

2. Goto Zoom, click settings > video > camera. Select the camera generated by VirtualCam. 

3. If you are using Google Meet, click settings > video > camera. Select the camera generated by VirtualCam. 

Everything's done now! Sadly, I haven't figured out how to stream the audio to Zoom / Google Meet. However it's probably not worth the trouble. You would still have to directly stream your mic's audio to Zoom / Google Meet and mute using their interfaces. 

### Trouble-shooting

#### Cannot find skype NDI source in OBS

When you are in the skype call, check whether "Stop NDI" shows up on the upper left corner. If it doesn't exist, it means you have not turned on NDI. You could turn on NDI in the middle of a call by going to settings. **Even if it is already turned on, turn it off and on again while you are in the call.** After you turn it back on, you should be able to select Skype as NDI source.

