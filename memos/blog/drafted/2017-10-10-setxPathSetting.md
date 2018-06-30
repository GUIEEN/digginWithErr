---
layout: post
title: Windows PATH variable using setx
categories: windows
tags: setx memo
---

* content
{:toc}

## Intro
### Environment variable
An environment variable is a dynamic "object" on a computer that stores a value, which in turn can be referenced by one or more software programs in Windows. Environment variables help programs know what directory to install files in, where to store temporary files, where to find user profile settings, and other things.




#### Examples of environment variables
* %appdata%
* %commonprogramfiles%
* %local%
* %programfiles%
* ...

### SETX
 : Modifies environment variables permanently, which affects all future shells, but doesn't modify the environment of the shells already running, whereas **Set** modifies the current shell's (window) environment value temporarily.

for example,
```
SETX PATH "%PATH%;C:\Users\GUIEEN\Anaconda2\Scripts;C:\Users\GUIEEN\Anaconda2
```
