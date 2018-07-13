---
layout: post
title: Shutdown & Restart linux on terminal
categories: linux
tags: commands memo
---

* content
{:toc}

### Shutdown

 __-h__ :  which means _halt_ will close all of running processes, turn off the CPUs and _return the control to a ROM monitor of mainboard needing the user to press the power button to get the power supply turned off_

 __poweroff__ : after turning off the CPUs will simply turn off the power supply resulting in a _proper shutdown_

`sudo shutdown now` : will take you to the `runlevel 1` ( recovery mode )





To summarize, the commands below are available to _poweroff_ ( not _halt_ ) a computer:
```
sudo shutdown -h now
sudo shutdown -P now
sudo poweroff
sudo halt -p
sudo init 0
```
 will take you to the runlevel 0 (shutdown)

__shut down forcefully__

  use ```sudo poweroff -f``` which will not use ```shutdown```. Rather, it will invoke the ```reboot(2)``` system call ( used for reboot, poweroff & halt ) to power off the computer instantly.


* Reference
[Why doesn't running “sudo shutdown now” shut down?](https://askubuntu.com/questions/578144/why-doesnt-running-sudo-shutdown-now-shut-down)
