---
layout: page
title:  "Using Zoom / Google Meet with OBS"
date:   2020-08-25 10:00:00 +0800
published: true
description: "Setting up a virtual webcam with OBS and Skype's built-in background filtering"
---

## Motivation

In Zoom, the control you have over your webcam footage is limited. You can either turn your camera on or off, or add a greenscreen, and that's about it. However through OBS (Open Broadcaster Software), you could freely customize the webcam footage shown. This freedom gives various benefits. Namely,

1. If your system does not satisify the [minimum system requirements for virtual background for zoom](https://support.zoom.us/hc/en-us/articles/360043484511), you could use Skype's virtual background function to process your webcam's footage, then stream it to Zoom. While I presume Skype also has minimum system requirements, they should be lower than that of Zoom.

2. If you are using google meet (which doesn't even have any virtual background support at time of writing) or pretty much any other video calling platform, you could use the above method to set up a virtual greenscreen.

2. You could greatly customize your webcam footage. Maybe show a picture that says you are taking a toliet break instead of abruptly turning your camera off? Or even switch to different web cameras?

One downside is that OBS generally consumes a large amount of memory, so beware of performance issues.

## Downloads

1. Download [Skype](https://www.skype.com/en/get-skype/)

2. Download [OBS](https://obsproject.com/)

3. Download these two plugins: [OBS-VirtualCam](https://obsproject.com/forum/resources/obs-virtualcam.949/) and [obs-ndi - NewTek NDI™ integration into OBS Studio](https://obsproject.com/forum/resources/obs-ndi-newtek-ndi%E2%84%A2-integration-into-obs-studio.528/)

Just keep clicking next in their installations. You do not need to edit any parameters. Make sure you have downloaded everything before proceeding. 

## Setup

Follow this [video](https://www.youtube.com/watch?v=QPg5IfqAkAI). Rest assured you have already installed all the prerequisites. However, there are some things you should note.

1. Instead of having someone else call you (as shown in the video), you could start a call with yourself. To do this, click meet now and start a meeting. This constitudes as an active call even though there's only you in it. Make sure you turn on the video. Then, you should be able to see footage of your own camera in the NDI source.

2. To change the OBS's output to say a static picture. You create a new scene and add a picture to the source section. Whenever you want to show that picture, you switch to that scene. For more details, you could look at some [OBS tutorials](https://www.youtube.com/watch?v=DTk99mHDX_I)

## Integration with Zoom / Google Meet

Lastly, we need to stream whatever OBS is outputting to Zoom / Google Meet.

1. Goto OBS, Click tools > VirtualCam > Start. Remember the Target Camera's name

2. Goto Zoom, click settings > video > camera. Select the camera generated by VirtualCam. 

3. If you are using Google Meet, click settings > video > camera. Select the camera generated by VirtualCam. 

## Trouble-shooting

### Cannot find skype NDI source in OBS

When you are in the skype call, check whether "Stop NDI" shows up on the upper left corner. If it doesn't show up, it means you have not turned on NDI. You could turn on NDI in the middle of a call by going to settings > Calling > Advanced > Allow NDI usage. 

If NDI is already turned on in your skype call and you still couldn't find it. Turn NDI off and on again while you are in the call by going to settings. After you turn it back on, you should be able to select Skype as NDI source.

### Lag in webcam footage

Force quite skype, then open skype and repeat the process again.
