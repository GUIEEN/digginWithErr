---
layout: post
title: Statistic terminologies
date:   2017-12-18
categories: Math
tags: statistic
author: seung kwak
mathjax: true
---

* content
{:toc}

## Normalization  
rescales the values into a range of [0,1].  This might be useful in some cases where all parameters need to have the same positive scale. However, the outliers from the data set are lost.




$$ X_{changed} = \frac{X - X_{min}}{X_{max}-X_{min}} $$

## Standardization  
rescales data to have a mean ($\mu$) of 0 and standard deviation ($\sigma$) of 1 (unit variance).

$$ X_{changed} = \frac{X - \mu}{\sigma} $$
