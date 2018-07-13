---
layout: post
title: Install Tensorflow and Keras on OSX. And setup for using keras backended by tensorflow on Jupyter notebook.
date:   2017-12-18
categories: configuration
tags: tensorflow, keras, ipython, jupyter
author: seung kwak
mathjax: true
---

* content
{:toc}

## Install environment(2017.12.18)
* OSX, High Sierra
* Anaconda
  - By using package manager called "conda", you can make virtual environment so that you don't need to be bothered by dependencies problems(similar with Virtualenv). For more specific [information!](https://conda.io/docs/user-guide/concepts.html#conda-environments)




## Order of Installation
* install Anaconda
* make conda environment
* activate conda environment and install tensorflow in that environment
* install keras also in that environment
* After this installation, you just activate that "conda environment" for using tensorflow

---

* **make conda environment**
  - make conda environment named as "tensorflow"
  ```
  $ conda create -n tensorflow python=3.6
  ```

* **activate conda environment and install tensorflow in that environment**
  - for activating our environment,
  ```
  $ source activate tensorflow
  (tensorflow)$
  ```
  - for installing tensorflow,
  ```
  # Mac OS X, CPU 전용, Python 3.4 or 3.5:
  (tensorflow)$ export TF_BINARY_URL=https://storage.googleapis.com/tensorflow/mac/tensorflow-0.9.0-py3-none-any.whl
  # Python 3(tensorflow)$ pip3 install --upgrade $TF_BINARY_URL
  ```
    - check out this [site](https://github.com/lakshayg/tensorflow-build) if you have error like below  
    ```
    RuntimeWarning: compiletime version 3.5 of module 'tensorflow.python.framework.fast_tensor_util' does not match runtime version 3.6
    ```

  - for installing keras,
  ```
  pip install Keras
  ```

* **deactivate conda environment**
  ```
  (tensorflow)$ source deactivate
  $  # Your prompt should change back
  ```

---

## Organizing versions on environment via script file
```
# tensorflow
import tensorflow
print('tensorflow: %s' % tensorflow.__version__)
# keras
import keras
print('keras: %s' % keras.__version__)
```
Save this script to a file, and run the script by typing:
`python ML_versions.py`

you should see output like:
```
tensorflow: 0.12.1
Using TensorFlow backend.
keras: 1.2.1
```

for example)
![alt text](https://github.com/GUIEEN/guieen.github.io/blob/master/_images/env.jpg?raw=true)

## Configuration for using Keras on Jupyter Notebook

At first, make sure that _**iPython, Jupyter, Keras, and Tensorflow**_ are all installed in the same environment.

you can realize easily the mess you are in by issuing the following commands:`which ####`
```
username$ source activate tensorflow

(tensorflow)username$ which ipython
(tensorflow)username$ /Users/username/anaconda/bin/ipython

(tensorflow)username$ which jupyter
(tensorflow)username$ /Users/username/anaconda/bin/jupyter

(tensorflow)username$ which python
(tensorflow)username$ /User/username//anaconda/envs/tensorflow/bin/python
```

|item | location |
|---| ---|
|iPython   |  /Users/username/anaconda/bin/ipython |
|Jupyter   |  /Users/username/anaconda/bin/jupyter |
|Python   | /User/username//anaconda/envs/tensorflow/bin/python  |

As you can see on this table, iPython and jupyter's configuration needed to be reinstalled **inside** the tensorflow environment:
```
(tensorflow) username$ conda install ipython
(tensorflow) username$ pip install jupyter
(tensorflow) username$ pip install keras
```

Once you've done this, deactivate & activate tensorflow again, then, you're ready to go to call jupyter.
```
(tensorflow)username$ source deactivate tensorflow
username$ source activate tensorflow
(tensorflow)username$ jupyter notebook
```

### **NOTE** :  
for changing the Keras backend tools, edit this file ( `~/.keras/keras.json` ) to specify tensorflow instead of theano:
```
{
	"image_dim_ordering": "tf",
	"epsilon": 1e-07,
	"floatx": "float32",
	"backend": "tensorflow"
}
```
