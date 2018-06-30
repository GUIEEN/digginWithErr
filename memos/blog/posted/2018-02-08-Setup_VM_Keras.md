<a id="TOP"></a>

# Setup an Environment for Deep Learning on Azure VM
_180205~180208, Seung Kwak_

In this tutorial, I'll show you how I set up my remote environment for using deep learning libraries.

---
## Prerequisites
- Azure account

---
## Table of contents
* [チェック目録](#CheckList)
* [Create a Virtual Machine in the Azure Cloud ](#CreateVMAzure)
* [Install VNC server on our remote server](#InstallVNC)
* [Setting up a Keras / tensorflow environment in a vanilla Ubuntu](#InitialSetting)
* [Customize our settings](#CustomizeSettings)
* [Additional Information](#AdditionalInfo)
* [Mounting an Attached disk on linux OS in Microsoft Azure](#mountingDiskAzure)
* [How to Excute the Project](#ExcuteProject)

---
<a id="CheckList"></a>

**チェック目録**（全てではないが、思いつく限り残しておく）
>  * ~~新たなssd_kerasの実行確認や必要モジュール設置~~
>  * ~~元々使ったssd_kerasの実行確認や必要モジュール設置~~
>    * このSSD_KERASは公式ページでは
      * This code was tested with Keras v1.2.2, Tensorflow v1.0.0, OpenCV v3.1.0-dev
      * しかし、ceatecに使ったVM上では
        * Keras v2.0.7, Tensorflow v1.3.0
        * 時々起こった依存性問題の原因だと思うが、現場で使った環境に合わせてセッティング
>  * ~~CEATEC現場ファイルの実行確認~~
>    * CEATEC dataset & test_video 格納
>  * ~~SMART工場EXPO現場ファイル実行確認~~
>    * SMART工場EXPO dataset　格納
>    * inbound setting必要 - 8000ポート open
>  * ~~Projectごとの仮想環境モジュール設置や起動確認~~
>    * Pipenvで管理
>  * ~~ラベリングの為のツール格納~~
>  * ~~VNCViewerのterminal実行時、.profile読み込まらないため、.bashrcに環境変数追加~~
>  * ~~ssh接続時にVNCViewerも自動起動~~
>  * ~~VNCViewerとlocalとのpaste&copy~~
>  * ~~Azureディスク追加する方法について書いておく~~
>  * など。。

---
<a id="CreateVMAzure"></a>

## Create a Virtual Machine in the Azure Cloud 
- Location : South Central US
- Size : Standard NC6 (6 vcpus, 56 GB memory)
- OS : Ubuntu 16.04 LTS
- Set the other option as default(but it's an optional choice up to you)
- Network Setting
    - add inbound port for vncserver
- Set your DNS name : 
    - then now you can connect to remote via SSH tunneling by `ssh USER_NAME@DNS_NAME` 
- Update our ubuntu server : 
    - `sudo apt-get update && sudo apt-get upgrade`

eg)
＞＞ssh brokenHeart@when.you.got.dumped.by.girl
＞＞TYPE_YOUR_PASSWORD


[initial server setup with ubuntu 16.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)
[initial setup of linux](https://linode.com/docs/getting-started/)

[**MOVE TO TOP**](#TOP)

---
<a id="InstallVNC"></a>

## Install VNC server on our remote server
- Install 'xfce' as our Graphical Desktop Environment, and their dependiencies required for the graphical interface to work properly:
  - `sudo apt install xfce4 xfce4-goodies`
- Install the VNC server:
  - `sudo apt-get install tightvncserver`
  - setup a password for connecting VNC server
- Install autocutsel for to copy & paste from remote to local and vice versa:
  - `sudo apt-get install autocutsel`
- Configuring VNC server:
  - Modify `~/.vnc/xstartup` file, which will be performed whenever you start or restart the VNC server:
      ```bash
      #!/bin/bash
      xrdb $HOME/.Xresources
      autocutsel -fork 
      startxfce4 &
      ```  
  - **NOTE**:: 
    - Settings of a `~/.vnc/xstartup` file varies from which **Desktop Environment** you installed. In this case, we add `startxfce4 &` line to `xstartup` file because we choosed `xfce4` as our Desktop Environment. 
  - To ensure that the VNC server will be able to use this new startup file properly, we'll need to grant executable privileges to it:
    - `sudo chmod +x ~/.vnc/xstartup`
  - Restart our newly configurated VNC server
    - `vncserver`

- Setup for automatic start with booting
  - Before we do that, we needed to create a VNC service file at first !
    1.  `sudo vi /etc/systemd/system/vncserver@.service`
        ```bash
        [Unit]
        Description=Start TightVNC server at startup
        After=syslog.target network.target

        [Service]
        Type=forking
        User=sammy
        PAMName=login
        PIDFile=/home/sammy/.vnc/%H:%i.pid
        ExecStartPre=-/usr/bin/vncserver -kill :%i > /dev/null 2>&1
        ExecStart=/usr/bin/vncserver -depth 24 -geometry 1280x800 :%i
        ExecStop=/usr/bin/vncserver -kill :%i

        [Install]
        WantedBy=multi-user.target
        ```  
    2.  Next, make the system aware of the new unit file.
        `sudo systemctl daemon-reload`
    3.  Enable the unit file.
        `sudo systemctl enable vncserver@1.service`
        The 1 following the @ sign signifies which display number the service should appear over, in this case the default :1 as was discussed above. 
    4.  Stop the current instance of the VNC server if it's still running
        `vncserver -kill :1`  
    5.  Then start it as you would start any other systemd service.
        `sudo systemctl start vncserver@1`
    6.  You can verify that it started with this command:
        `sudo systemctl status vncserver@1`
  - And just run this script, for enrolling your system service.
    -  `sudo update-rc.d vncserver defaults`  
- Configuring VNC viewer for using `tab` key
  - When using the Xfce desktop, users may notice that the tab key does not work. This is due to a bug in Xfce sending a super key modifier with the command. To fix this:
    - Open the Xfce `Application Menu > Settings > Window Manager`
    - Click on the `Keyboard` Tab
    - Clear the Switch window for same application setting

[**MOVE TO TOP**](#TOP)

---
<a id="InitialSetting"></a>

## Setting up a Keras / tensorflow environment in a vanilla Ubuntu
[look this site if you want for more details](http://tammo.io/cs/2017/12/07/ubuntu-cuda-gpu-keras-setup.html)
### 1.
```bash
» sudo apt update
» sudo apt upgrade -y
» sudo apt install python3 python3-pip -y
» pip3 install --user pipenv
```

### 2.
```bash
# install current NVIDIA drivers
» sudo add-apt-repository ppa:graphics-drivers/ppa
» sudo apt update
» sudo apt install nvidia-387 nvidia-387-dev -y
# check driver is running
» lsmod | grep nvidia
# if no output appears from lsmod, start driver by: 
» sudo modprobe nvidia
» nvidia-smi  # should show you your GPU

# prepare cuda 8 and sdk
sudo apt install freeglut3-dev build-essential \
                 libx11-dev libxmu-dev libxi-dev \
                 libglu1-mesa libglu1-mesa-dev

# download cuda toolkit
» wget https://developer.nvidia.com/compute/cuda/8.0/Prod2/local_installers/cuda_8.0.61_375.26_linux-run
» sudo sh cuda_8.0.61_375.26_linux-run
# MAKE SURE YOU SAY NO TO INSTALLING NVIDIA DRIVERS! Also make sure you select yes to creating a symbolic link to your cuda directory.

# install patches to cuda 8.0
» wget https://developer.nvidia.com/compute/cuda/8.0/Prod2/patches/2/cuda_8.0.61.2_linux-run
» sudo sh cuda_8.0.61.2_linux-run

# install libcupti-dev
» sudo apt install libcupti-dev

export PATH=/usr/local/cuda/bin/:$PATH  # put also into .bashrc
# try cuda installation, e.g. via https://gist.github.com/dpiponi/1502434

# following some optimization guidelines from google (Tesla K80):
# https://cloud.google.com/compute/docs/gpus/add-gpus#gpu-performance
» sudo nvidia-smi -pm 1
Enabled persistence mode for GPU 00000000:00:04.0.
All done.
» sudo nvidia-smi -ac 2505,875
Applications clocks set to "(MEM 2505, SM 875)" for GPU 00000000:00:04.0
All done.
» sudo nvidia-smi --auto-boost-default=DISABLED
All done.
```

Go to https://developer.nvidia.com/cudnn (create the account) and follow survey to download Download cuDNN v6.0 (April 27, 2017), for CUDA 8.0 -> cuDNN v6.0 Library for Linux

### 3.
```bash
» scp cudnn-8.0-linux-x64-v6.0.tgz tammo.ippen@<ip-of-server>:/home/tammo.ippen
# then follow cuDNN install instructions:
» tar -xzvf cudnn-8.0-linux-x64-v6.0.tgz
» sudo cp cuda/include/cudnn.h /usr/local/cuda/include
» sudo cp cuda/lib64/libcudnn* /usr/local/cuda/lib64
» sudo chmod a+r /usr/local/cuda/include/cudnn.h \
               /usr/local/cuda/lib64/libcudnn*
# These environment variables are required according to TF install:
» export CUDA_HOME=/usr/local/cuda  # put also into .bashrc
» export LD_LIBRARY_PATH=/usr/local/cuda/lib64  # put also into .bashrc
» export PATH="$PATH:/usr/local/cuda-8.0/bin"
```

### 4.
```bash
» mkdir ml
» cd ml
» pipenv --three install tensorflow-gpu==1.4 keras ipython
# you can see, what is installed by:
» pipenv graph
ipython==6.2.1
  - decorator [required: Any, installed: 4.1.2]
  - jedi [required: >=0.10, installed: 0.11.0]
    - parso [required: ==0.1.0, installed: 0.1.0]
  - pexpect [required: Any, installed: 4.3.0]
    - ptyprocess [required: >=0.5, installed: 0.5.2]
  - pickleshare [required: Any, installed: 0.7.4]
  - prompt-toolkit [required: >=1.0.4,<2.0.0, installed: 1.0.15]
    - six [required: >=1.9.0, installed: 1.11.0]
    - wcwidth [required: Any, installed: 0.1.7]
  - pygments [required: Any, installed: 2.2.0]
  - setuptools [required: >=18.5, installed: 38.2.4]
  - simplegeneric [required: >0.8, installed: 0.8.1]
  - traitlets [required: >=4.2, installed: 4.3.2]
    - decorator [required: Any, installed: 4.1.2]
    - ipython-genutils [required: Any, installed: 0.2.0]
    - six [required: Any, installed: 1.11.0]
Keras==2.1.2
  - numpy [required: >=1.9.1, installed: 1.13.3]
  - pyyaml [required: Any, installed: 3.12]
  - scipy [required: >=0.14, installed: 1.0.0]
    - numpy [required: >=1.8.2, installed: 1.13.3]
  - six [required: >=1.9.0, installed: 1.11.0]
tensorflow-gpu==1.4.0
  - enum34 [required: >=1.1.6, installed: 1.1.6]
  - numpy [required: >=1.12.1, installed: 1.13.3]
  - protobuf [required: >=3.3.0, installed: 3.5.0.post1]
    - setuptools [required: Any, installed: 38.2.4]
    - six [required: >=1.9, installed: 1.11.0]
  - six [required: >=1.10.0, installed: 1.11.0]
  - tensorflow-tensorboard [required: >=0.4.0rc1,<0.5.0, installed: 0.4.0rc3]
    - bleach [required: ==1.5.0, installed: 1.5.0]
      - html5lib [required: !=0.99999,>=0.999,!=0.9999,<0.99999999, installed: 0.9999999]
        - six [required: Any, installed: 1.11.0]
      - six [required: Any, installed: 1.11.0]
    - html5lib [required: ==0.9999999, installed: 0.9999999]
      - six [required: Any, installed: 1.11.0]
    - markdown [required: >=2.6.8, installed: 2.6.9]
    - numpy [required: >=1.12.0, installed: 1.13.3]
    - protobuf [required: >=3.3.0, installed: 3.5.0.post1]
      - setuptools [required: Any, installed: 38.2.4]
      - six [required: >=1.9, installed: 1.11.0]
    - six [required: >=1.10.0, installed: 1.11.0]
    - werkzeug [required: >=0.11.10, installed: 0.12.2]
    - wheel [required: >=0.26, installed: 0.30.0]
  - wheel [required: >=0.26, installed: 0.30.0]
```

### 5.
```python
# activate the environment and start coding
» pipenv shell --fancy
» ipython
Python 3.5.2 (default, Nov 23 2017, 16:37:01)
Type 'copyright', 'credits' or 'license' for more information
IPython 6.2.1 -- An enhanced Interactive Python. Type '?' for help.

In [1]: import tensorflow as tf
In [2]: hello = tf.constant('Hello, TensorFlow!')
In [3]: sess = tf.Session()
2017-12-07 11:41:07.943761: I tensorflow/core/platform/cpu_feature_guard.cc:137] Your CPU supports instructions that this TensorFlow binary was not compiled to use: SSE4.1 SSE4.2 AVX AVX2 FMA
2017-12-07 11:41:10.727162: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1030] Found device 0 with properties:
name: Tesla K80 major: 3 minor: 7 memoryClockRate(GHz): 0.8755
pciBusID: 0000:00:04.0
totalMemory: 11.17GiB freeMemory: 11.10GiB
2017-12-07 11:41:10.727193: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1120] Creating TensorFlow device (/device:GPU:0) -> (device: 0, name: Tesla K80, pci bus id: 0000:00:04.0, compute capability: 3.7)

In [4]: print(sess.run(hello))
b'Hello, TensorFlow!'

In [5]: import keras
Using TensorFlow backend.
```

[**MOVE TO TOP**](#TOP)

---
<a id="CustomizeSettings"></a>

## Customize our settings

Furthermore, I installed these libraries below for using new_SSD model. 

```bash
sudo apt-get install python3-tk
pip install opencv-python
pipenv install beautifulsoup4==4.6.0
pipenv install h5py scipy numpy pillow matplotlib sklearn tqdm lxml
```

In the case, if your USER command doesn't work on your terminal on vncviewer, put this line to your `~/.bashrc` file:
```bash
# set PATH so it includes user's private bin directories
PATH="$HOME/bin:$HOME/.local/bin:$PATH"
```

[**MOVE TO TOP**](#TOP)

---
<a id="AdditionalInfo"></a>

## Additional Information

* **WARNING ::** 
  * Files saved in `/mnt` directory will be removed whenever you reboot the system. Use this directory as temporary !
  * Before you run the files related with any deep learning project, you should activate your virtual envronment with respect to your project. `pipenv shell` 
* I saved the files 
  * used for initial settings and backup files of pipenv within each project in `~/Documents/envSetting`
  * of PASCAL VOC datasets in `~/Documents/datasets`
  * of architectures I used in `~/Documents/architectures`
  * of projects in `~/Documents/projects`
  * used for labeling the dataset in `~/Documents/annotation_tool`


```bash
# HERE's A DIRECTORY STRUCTURE ON THE FINAL PHASE
.
├── annotation_tool 
~~
├── architectures
│   ├── ssd_keras_new
│   │   ├── examples
│   │   └── __pycache__
│   └── ssd_keras_old_version_EXPO_CEATEC
│       └── __pycache__
├── datasets
│   └── VOCdevkit
│       └── VOC2007_Test
│           ├── Annotations
│           ├── ImageSets
│           │   ├── Layout
│           │   ├── Main
│           │   └── Segmentation
│           ├── JPEGImages
│           ├── SegmentationClass
│           └── SegmentationObject
├── envSetting
│   ├── initial_setting_files
│   │   └── cuda
│   │       ├── include
│   │       └── lib64
│   └── pipenv_backup
│       ├── ssd_keras_new
│       └── ssd_keras_old
└── projects
    ├── ceatec
    │   ├── dataset
    │   │   ├── annotations
    │   │   └── images
    │   ├── files
    │   │   └── __pycache__
    │   ├── model
    │   └── test_video
    └── SMART_EXPO
        ├── dataset_knag
        │   ├── annotations
        │   └── images
        ├── dataset_surface
        │   ├── train
        │   ├── union
        │   └── validation
        ├── model_knag
        ├── model_surface
        └── server
            ├── __pycache__
            ├── SSD
            └── WOOD_SPECIES
                ├── __pycache__
                └── result
```

[**MOVE TO TOP**](#TOP)

---
<a id="mountingDiskAzure"></a>

## Mounting an Attached disk on linux OS in Microsoft Azure

1. 追加したディスクに基本領域を作成するため
    ```bash
    sudo fdisk /dev/sdc
    ```
    Command : n
    Select : p
    Partition number : 1
    (press enter)
    (press enter)
    Partition 1 of type Linux and of size ~GB is set
    Command(m for help) : w
    ```
    ```
2. 作成したパーティションの確認
    ```bash
    sudo fdisk -l /dev/sdc
    ```
3. 作成したパーティションを初期化する
    ```bash
    sudo mkfs.ext4 /dev/sdc1
    ```
4. マウントポイントのディレクトリを作成
    ```bash
    sudo mkdir /mnt/datadrive
    ```
5. 初期化したデータディスク(/dev/sdc1)をマウントポイントにマウントする
    ```bash
    sudo mount /dev/sdc1 /mnt/datadrive
    ```
6. 現在のディスク使用状況を確認
    ```bash
    df -h
    ```

[**MOVE TO TOP**](#TOP)

---
<a id="ExcuteProject"></a>

## How to Excute the Project

Brief explanation of how to excute the project.
```bash
# move to the directory of your project
cd path/to/your/project

# activate virtual environment
pipenv shell # or pipenv shell --fancy

# run that file
python yourProjectFile.py

# deactivate virtual environment
exit # or ctrl + d
```

e.g)
```bash
# move to dir_project
cd Documents/projects/SMART_EXPO/
# activate vir_env
pipenv shell
cd server/
# run
python server2.py

# terminate vir_env
exit
```

[**MOVE TO TOP**](#TOP)