# Ambio
This website is only looking for two things, good aesthetics and relaxation.

## Technologies Used

- HTML
- CSS
- JavaScript

## Features
- Good aesthetics and relaxing design.
- Multiple background music options (LoFi Girl, Sea, Rain, Forest, Indie).
- Ability to set a specific stop time for the music playback.

## How to use?
You need to download the files and images just like they are in this repository. Then open the 'index.html' in your browser by double clicking, choose the sound you want to hear, press play and enjoy.

<img width="524" alt="image" src="https://github.com/juanAT520/Ambio/assets/106825751/fcc0e673-92fc-49a9-b299-d1eef26ec8b1">

Also you can set the time at which you want the playback to stop by clicking the watch icon, setting the hour and then click on the confirm button.

<img width="569" alt="image" src="https://github.com/juanAT520/Ambio/assets/106825751/8024c639-0f48-4659-b965-dbcaa73db517">

## How it works?
### Let's start by the HTML.

<img width="491" alt="image" src="https://github.com/juanAT520/Ambio/assets/106825751/7fc4acbb-2c7d-453b-a268-5a98b74757f7">

In the head i have the call to the YouTube API, the CSS file and the font for the project (I took thisone from Google Fonts).

<img width="518" alt="image" src="https://github.com/juanAT520/Ambio/assets/106825751/6e9e1e34-59b6-4d7d-8fc9-0c8ff9e1b885">

The header of the body has a div to contain the timer, the title and the cover which will change in each section with the JavaScript and the play button with three span labels for the play / pause animation.

<img width="555" alt="image" src="https://github.com/juanAT520/Ambio/assets/106825751/d008269e-cf50-4403-824d-8ae87b03016e">

Inside the nav i have a list with each section of the website and the calls to the JS (Each call has a 'VideoID' and an 'Index' as parameters for the player constructor)
The last two lines are for the container for the player and the link to the JS file.

### Now the script.

<img width="464" alt="image" src="https://github.com/juanAT520/Ambio/assets/106825751/0421499d-b18f-4bcf-95a7-7a0b64427793">

The function NewID acts as a constructor, setting the current index with the parameter "index", setting the boolean isPlaying as false because the playback will stop if the section is different from the current one, and changing the VideoId to the one of the section that has just been selected. Finally, it will call the YouTube API to configure the player with the current parameters.

<img width="287" alt="image" src="https://github.com/juanAT520/Ambio/assets/106825751/e3c1e840-fc10-4e02-88b9-49fa5338f1d2">

togglePlayPause is called from the list of the HTML, passing the required parameters for the constructor. Through conditional statements, it allows starting or stopping the playback.
StopAudio just stop the player and change isPlaying to false.

<img width="409" alt="image" src="https://github.com/juanAT520/Ambio/assets/106825751/4fb0ac8b-57b8-4f38-9620-81d2b6a2019e">

This is a switch to change the background, tittle and cover depending of the section.

<img width="562" alt="image" src="https://github.com/juanAT520/Ambio/assets/106825751/740f3978-df1c-4270-9cf2-f827e3606d20">

When you put a time to end and press the confirm button the JS clear the last timer and the indicator for the user to know that the timer is on. Then calculates the seconds between now and the time setted and iniciates the indicator and the timer.
If the timer reach 0 the program stops the audio and change the Pause button to Play again.

<img width="340" alt="image" src="https://github.com/juanAT520/Ambio/assets/106825751/af4cadd2-98f4-43c2-9323-b07d65484b0b">

This two EventListener work different for the phone's width or the PC's width. They control the movement and the behavior of the timer label.
