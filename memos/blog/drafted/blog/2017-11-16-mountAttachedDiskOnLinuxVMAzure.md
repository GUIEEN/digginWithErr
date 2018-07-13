---
layout: post
title: Linux VM on Azure, Mounting an attached disk
categories: linux
tags: commands memo Azure VM
---

* content
{:toc}

1. `sudo fdisk /dev/sdc`  
追加したディスクに基本領域を作成するため  
Command : n  
Select : p  
Partition number : 1  
enter  
enter  
Partition 1 of type Linux and of size ~GB is set  
Command(m for help) : w





2.  作成したパーティションの確認  
`sudo fdisk -l /dev/sdc`

3.  作成したパーティションを初期化する  
`sudo mkfs.ext4 /dev/sdc1`

4.  マウントポイントのディレクトリを作成  
`sudo mkdir /mnt/datadrive`

5. 初期化したデータディスク(/dev/sdc1)をマウントポイントにマウントする  
`sudo mount /dev/sdc1 /mnt/datadrive`

6.  現在のディスク使用状況を確認  
`df -h`
