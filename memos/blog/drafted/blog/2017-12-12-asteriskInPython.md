---
layout: post
title: Meaning of Asteric( * ) on Python
date:   2017-12-12
categories: python
tags: memo asteric
author: seung kwak
mathjax: true
---

* content
{:toc}

Let's suppose there's a function like this.

```Python
>>> def test(frag, *args):
...   print("formal arg: ", frag)
...   for arg in args:
...     print("another arg: ", arg)
```
and also define some parameters.

```Python
aa = ((1.1, 2.2), 3.3, 4, 4)
```





At this function definition, frag is positional parameters(== formal parameters) and \*arg means only extract & use an arguments from second arguments, which makes you can input more than 2,3,... parameters ( NOTE : dont forget that **you should specify the positional param** )

```Python

>>> test()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: test() missing 1 required positional argument: 'frag'


>>> test("aa")
formal arg:  aa

```

then, the other outputs are going to be,

```Python
>>> test((1,2), 3, 4, (4,5,6,7,(8,9)))
formal arg:  (1, 2)
another arg:  3
another arg:  4
another arg:  (4, 5, 6, 7, (8, 9))

>>> test("shit",aa)
formal arg:  shit
another arg:  ((1.1, 2.2), 3.3, 4, 4)

>>> test("shit",*aa)
formal arg:  shit
another arg:  (1.1, 2.2)
another arg:  3.3
another arg:  4
another arg:  4

>>> test("sipal", aa, *aa)
formal arg:  sipal
another arg:  ((1.1, 2.2), 3.3, 4, 4)
another arg:  (1.1, 2.2)
another arg:  3.3
another arg:  4
another arg:  4

```

And, if you want to extract keyworded variable arguments then you can use "\*\*kwargs"

```Python
>>> def test_var_kwargs(farg, **kwargs):
      print "formal arg:", farg
      for key in kwargs:
          print "another keyword arg: %s: %s" % (key, kwargs[key])

>>> test_var_kwargs(farg=1, myarg2="two", myarg3=3)
formal arg: 1
another keyword arg: myarg2: two
another keyword arg: myarg3: 3

>>> kwargs = {"arg3": 3, "arg2": "two"}
>>> test_var_args_call(1, **kwargs)
arg1: 1
arg2: two
arg3: 3
```
