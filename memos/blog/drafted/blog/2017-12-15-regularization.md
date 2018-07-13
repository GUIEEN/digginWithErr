---
layout: post
title: About Regularization on deep learning
date:   2017-12-15
categories: ML
tags: regularization
author: seung kwak
mathjax: true
---

# Regularization

__Regularization__ は単に言うと、
 machine learningで訓練データで訓練した modelをその訓練データ以外の他のデータにも合するようにすることです。日本語に翻訳すると**正則化**と言います。

勉強をする時、個人的に専門用語とぴったり合わない単語で訳され、概念を掴むのが難しい場合が頻繁にありますが、regularizationもそのような場合でありましたので最初の投稿に書くことになりました。時々Regularizationを正規化と訳したりしますが、regular expressionを正規表現とも言うので妥当な訳かも知りませんが、データを正規分布に変更するnormalization、特にN(0,1)分布に従うようにするstandardizationを意味するnuanceが強いです。





> "It is vain to do with more what can be done with fewer" - Occam's Razor

$y = ax + b$ ぐらいのいくつかの変数で表現できるなら、式を敢えて複雑にする必要はありません。そこでデータに対するモデルの表現を保ちながら、複雑性を抑えるのがregularizationと見たらいいと思います。一般に bias-variance trade offで varianceを抑える(constraint)方向に適用します。

---
### Norm penalty
多く使われている regularizationは lossへ normが大きくならないように termを足してあげることです。体表的に L1 regularizationと L2 regularizationがあり、普通の場合には biasは数が少ない一般化しやすいため weightだけを使って regularizationをします。

#### L2 regularization
l2 normは

$$l_2=\sum_iw_i^2=||W||_2^2$$

で表れ、そのloss式は次のようになります。

$$Loss_{new} = Loss_{old} + \alpha\sum_iw_i^2$$

Gradient Descent Algorithmで訓練される場合、gradientは lossについての微分になるため、次のようになります。

$$\frac{\partial Loss_{new}}{\partial w}=\frac{\partial Loss_{old}}{\partial w}+2\alpha w$$

$$w=w-\epsilon(2\alpha + \frac{\partial Loss_{old}}{\partial w})$$

$$w=(1-2\epsilon\alpha)w-\epsilon\frac{\partial Loss_{old}}{\partial w}$$


上式から updateされるのは既存の Wが比例的に小さくなり、またここに lossの微分値が引かられます。このような特徴のため、non-sparse outputsが生成され、representation spaceを simpleに探すことを防止します。

#### L1 regularization

l1 normは

$$l_1=\sum_i|w_i|=||W||_1$$

で表れ、そのloss式は次のようになります。

$$Loss_{new} = Loss_{old} + \alpha\sum_i|w_i|$$

この場合、微分値は次のように表れます。

$$\frac{\partial Loss_{new}}{\partial w}=\frac{\partial Loss_{old}}{\partial w}+\alpha sign(w)$$


つまり、weight decayが weightの大きさに比例して更新されず、constant値として起こります。言い換えれば、$w=0$の場合を除いて、wを weightの数値に関わらず同じ間隔で 0に向かって移動すると言う意味になります。従って、sparseな weightが生成されます。

二つの場合両方 weightが大きくなるほど lossに加わる penaltyも大きくなるのは同じでありますが、式によりその性質は異なることが分かります。普通の場合、analytical 計算ができる L2(ridge) regularizationが用いられますが、絶対値を用いる L1(lasso)は sparsityの特徴のため feature selectionという特徴があります。
