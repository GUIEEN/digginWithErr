---
layout: post
title: Gradient descent optimization algorithms
date:   2018-01-24
categories: ML
tags: optimization draft
author: seung kwak
mathjax: true
---
* Gradient descent variants
  - Batch gradient descent
  - Stochastic gradient descent
  - Mini-batch gradient descent
- Challenges
- Gradient descent optimization algorithms
  - Momentum
  - Nesterov accelerated gradient
  - Adagrad
  - Adadelta
  - RMSprop
  - Adam
  - AdaMax
  - Nadam
  - Visualization of algorithms
  - Which optimizer to choose
- Parallelizing and distributing SGD
  - Hogwild!
  - Downpour SGD
  - Delay-tolerant Algorithms for SGD
  - TensorFlow
  - Elastic Averaging SGD
- Additional strategies for optimizing SGD
  - Shuffling and Curriculum Learning
  - Batch normalization
  - Early Stopping
  - Gradient noise
- Conclusion
- References

この文章はこちらの論文[[1](https://arxiv.org/abs/1609.04747)]を基盤に作成したものでございます。


＿勾配降下方（Gradient descent、GD）は NNを最適化する方法の中で最も一般的に使われている方法です。

これは NNのパラメーターを$$\theta$$とした場合、NNからの結果値と実際値の差を定義する関数$$J(\theta)$$の値を最小化するため$$\nabla_\theta J(\theta)$$をを用いる方法です。Gradient Descentでは$$\theta$$に対し、勾配の反対方向にその勾配の大きさに比例する大きさほど移動することを繰返して最小化する$$\theta$$を探します。一つのiterationでの変化式は次のようになります。

$$\theta = \theta - \eta\nabla_\theta J(\theta)$$

ここで$$\eta$$は learning rateであり、最小値に至るためどのぐらいの大きさでiterationを更新したいのかを決定します。

最近のディープラーニングライブラリには GDを最適する色んなアルゴリズムを提供しています。（eg: Kerasの[Optimizer](https://keras.io/optimizers/)）しかし、それらの長所や短所についての概念がやや難しいため、実質的にどのようなものを使えば良いか困る時が個人的にも多かったので、今回は最適化関数について整理することになりました。


## **Gradient descent variants**

Gradient descentは大きく三つに分類することができます。各々はどのぐらいのデータを用いて勾配の更新をするのかによって異なり、そのデータの量によってパラメーター更新の正確度と一つの更新に掛かる時間は trade-off関係にあります。

### Batch gradient descent
単純な gradient descentで、cost functionの勾配を計算時、全てのtraining datasetのパラメーター$$\theta$$に掛けての計算を行います。

$$\theta = \theta - \eta\nabla_\theta J(\theta)$$

言い換えると一つの更新を行うため、全てのデータセットに掛けての計算が必要となるため、batch gradient descentは遅くなるし、データセットによってはメモリの問題上扱いにくい時もあり得ります。計算時間は掛かりますが、batch gradient descentは convex surfacesの上 global minimumに、non-convex surface上の極小値に収束するのを保します。

![alt text](https://sebastianraschka.com/images/faq/visual-backpropagation/nonconvex-cost.png)

Image 1: local minimum and global minimum on non-convex surface ([参照](https://sebastianraschka.com/images/faq/visual-backpropagation/nonconvex-cost.png))

### Stochastic gradient descent
Stochastic gradient descent（SGD）はそれに反してパラメーターの更新を training データ$$x^{(i)}$$とラベル$$y^{(i)}$$ごとに行います。

$$\theta = \theta - \eta\cdot\nabla_\theta J(\theta;x^{(i)};y^{(i)})$$

Batch gradient descentは毎回のパラメーター更新をする前、同じ例に対する勾配を再計算し、データセットが大きくなるほど不必要な計算が増加することに反して、SGDは一回の更新でその不必要性な過程をせずに終わります。したがって速度も早くなります。

SGDは多くの変化に対し頻繁な更新を行うため、cost functionは激しく変動したりします。

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Stogra.png/220px-Stogra.png)

Image 2: Fluctuations in the total objective function as gradient steps with respect to mini-batches are taken.([Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Stogra.png/220px-Stogra.png))

Batch gradient descentがパラメーターが置かれてあるconvexの最小値に収束することに反して、SGDは上の図のように変動するため、他のconvexに移動するポテンシャルを持っています。しかしながら、それが決してより良い極小値に至るわけではなく、その過程をもっと複雑にし逆に収束し難くする原因となったりもしますが、小さな学習率を設定することで overshootingする傾向を抑えれば batch gradient descentのように殆どの場合 global minimum（convex）や local minimum（non-convex）に収束します。

一般的に最適化する時、バイアスを生成しないようにするため、毎epochごとに training dataを shuffleする必要があります。
([参照](http://ruder.io/optimizing-gradient-descent/index.html#shufflingandcurriculumlearning))

```python
for i in range(nb_epochs):
  np.random.shuffle(data)
  for example in data:
    params_grad = evaluate_gradient(loss_function, example, params)
    params = params - learning_rate * params_grad
```

### Mini-batch gradient descent
Mini-batch gradient descentは二つの長所を取り、mini-batchごと n個の training examplesに対して更新を行います。

$$\theta = \theta - \eta\cdot\nabla_\theta J(\theta;x^{(i+n)};y^{(i+n)})$$

一つ一つのデータに対することより、mini-batchの平均値として更新するため、より安定的に収束する傾向を見せます。また、最近の deep learning ライブラリは効率的に計算をするように設計されており、通常の mini-batch sizesは 50 ~ 256ぐらいに設定をします（もちろん、場合によって異なる）。

```python
for i in range(nb_epochs):
  np.random.shuffle(data)
  for batch in get_batches(data, batch_size=50):
    params_grad = evaluate_gradient(loss_function, batch, params)
    params = params - learning_rate * params_grad
```

## **Challenges**
しかし、単純な mini-batch gradient descentだと良い収束そするとは言えない幾つかの問題点があります。

* 適合する learning rateを決めるのが難しい。小さな learning rate値はそれに相当する計算時間が掛かるし、高い learning rate値は収束を妨害し、cost functionの変動が引き起こされ時にはそれが発散する原因ともなります。

* Learning rate schedulesは事前に定義されている scheduleにしたがって漸進的に learning rateを減らしますが、事前に定義される必要があり、データセットの特性を反映することが難しいです。

* 全てのパラメーターに対し同じ learning rateを採択する場合、例えばデータが sparseで、その特長が頻繁に異なるとしたら稀に起こる特徴を大きく反映してしまうため、繰り返される一般な特長と差を指定しないと行けないです。

* NN上、普通に起こりうる non-convex 関数に対して最適化の過程の中それらの local minimaに陥らないようにするのもこそ難しい問題点であります。また Dauphin et al.[[2](https://arxiv.org/abs/1406.2572)]はこのような問題は local minimaに限らず saddle pointsにも収束してしまうことまで考えないと行けないのに問題があると言いました。そのような saddle pointsは多くの場合、同じ誤差を持つほぼ平面な時（全ての次元に対して勾配が０に近づいている場合）であります。

## **Gradient descent optimization algorithms**

上記の問題を扱うための幾つかの方法を紹介する前、結果から先に見てみます。

![alt text](http://i.imgur.com/2dKCQHh.gif?1)

Image 3: Gradient Descent Optimization Algorithms at Long Valley

![alt text](http://i.imgur.com/pD0hWu5.gif?1)

Image 4: Gradient Descent Optimization Algorithms at Beale's Function

![alt text](http://i.imgur.com/NKsFHJb.gif?1)

Image 5: Gradient Descent Optimization Algorithms at Saddle Point

上の図はSGDやSGDの変形アルゴリズムが最適化する過程を描画したものです。図の中で赤色のSGDがStochastic Gradient Descentアルゴリズム、Momentum, NAG, Adagrad, AdaDelta, RMSpropなどはSGDの変形したものです。見たら分かるように全ての場合の中、SGDは他のアルゴリズムに比べて収束速度や性能が低いことが確認できます。つまり、単純なSGDを用い、NNを学習すると相対的にいい結果を得難いことを予測できます。


### Momentum
Momentum方式はこの言葉通りに Gradient Descentを通じて移動する過程に一種の慣性を持たせることで、現在の勾配以前に過去からの影響を受けながら移動する方式です。
$$v_t = \gamma v_{t-1}+\eta \nabla_\theta J(\theta)$$
$$\theta = \theta - v_t$$
ここで $$v_t$$は time stepの$$t$$で移動ベクトルを意味します。

時間の経過によって
$$v_t = \eta \nabla_\theta J(\theta)_t + \gamma \eta \nabla_\theta J(\theta)_{t-1} + \gamma^2 \eta \nabla_\theta J(\theta)_{t-2} + ....$$

のように展開されます。つまり、一緒な方向の勾配を持つ表面での運動を考えると、そこでOscillation現状があったとしても最小値に向かう速度は加速されながら運動をします。

![alt text](http://sebastianruder.com/content/images/2015/12/without_momentum.gif)

Image 6: SGD without momentum

![alt text](http://sebastianruder.com/content/images/2015/12/with_momentum.gif)

Image 7: SGD with momentum

SGDでは一回のstepで動ける step sizeの限界があるため、oscillationの波長がどんどん小さくなることに反して、Momentum方式では慣性が保たされ oscillationの場合にあったとしても加速され波長も大きくなる様子が確認できます。

![alt image](http://www.yaldex.com/game-development/FILES/17fig09.gif)

Image 8: Avoiding Local Minima. Picture from http://www.yaldex.com

また、Momentum方式を使うことによって local minimaに陥らず運動する効果も期待できます。ところが、記憶しないといけない変数が多くなるため、必要とされるメモリは増加します。

### Nesterov Accelerated Gradient (NAG)

単純な Momentumの更新がある知らない曲面の上にボールを置かせて、そのボールの停止時点が最小点であると思うことなら、Nesterov momentumとは加速される先が次の移動stepのところから受けて運動を進む方式です。話だけでは説明が難しいので下の図と数式で見てみます。

![alt image](http://cs231n.github.io/assets/nn3/nesterov.jpeg)

Image 9: Momentum update and Nesterov momentum update. Picture from [cs231n](http://cs231n.github.io/assets/nn3/nesterov.jpeg)

$$v_t = \gamma v_{t-1} + \eta \nabla_\theta J (\theta - \gamma v_{t-1})$$
$$\theta = \theta - v_t$$

Momentumの場合、
$$v_t = \gamma v_{t-1}+\eta \nabla_\theta J(\theta)$$
だった速度がNAGでは momentum stepまで考慮し gradientを求め gradient stepを移動することがはっきり分かります。このような制御によってMomentum方式の慣性による不必要な動きを抑えながら早く移動することが出来ると考えれます。

### Adagrad




## **References**

### paper
1. Ruder, Sebastian. (2016). An overview of gradient descent optimization algorithms. arXiv:1609.04747. Retrieved from https://arxiv.org/abs/1609.04747
2. Dauphin, Y., Pascanu, R., Gulcehre, C., Cho, K., Ganguli, S., & Bengio, Y. (2014). Identifying and attacking the saddle point problem in high-dimensional non-convex optimization. arXiv, 1–14. Retrieved from https://arxiv.org/abs/1406.2572

### site
* http://shuuki4.github.io/deep%20learning/2016/05/20/Gradient-Descent-Algorithm-Overview.html
* http://cs231n.github.io/optimization-1/
* http://ruder.io/optimizing-gradient-descent/index.html
* http://sanghyukchun.github.io/74/
* http://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf

$$\frac{x}{t}$$

$$\nabla_\theta J(\theta)$$

$$v$$


書きたくね
くそぉぉぉぉぉぉぉぉぉ
