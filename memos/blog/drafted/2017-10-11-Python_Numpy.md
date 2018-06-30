---
layout: post
title: Numpy Introduction
categories: python
tags: numpy memo
---

* content
{:toc}

### NumPy

* check version
    ```python
    import numpy
    numpy.version.full_version
    ```





* example1
    ```python
    import numpy as np
    a = np.array([0,1,2,3,4,5])
    a
    #this will give "array([0,1,2,3,4,5])"

    #Number of array dimensions
    a.ndim -> 1

    #Tuple of array dimensions
    a.shape -> (6,)

    ```

* example2
    ```python
    #it is also possible to change the array dimension
    b = a.reshape((3,2))
    b ->
    array([0,1],
          [2,3],
          [4,5]])

    b.ndim -> 2

    b.shape -> (3,2)
    ```



* Reference
[Getting the Best Performance out of NumPy](http://ipython-books.github.io/featured-01/)
