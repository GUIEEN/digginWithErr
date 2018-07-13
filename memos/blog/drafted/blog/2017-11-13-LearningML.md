---
layout: post
title: Learning ML & Deep Learning
categories: ML
tags: memo
---

* content
{:toc}

こちらの[ページ](http://robonchu.hatenablog.com/entry/2017/10/02/093117)をscriptしました。





<ul>
  <li>
    <div class="entry-content">

    <ul class="table-of-contents">
    <li><a href="#All">All</a><ul>
            <li><a href="#CVPR論文まとめ">CVPR論文まとめ</a></li>
            <li><a href="#ClassificationDetectionSegmentation">Classification,Detection,Segmentation</a><ul>
                    <li><a href="#UberNet">UberNet</a></li>
                </ul>
            </li>
        </ul>
    </li>
    <li><a href="#Classification">Classification</a><ul>
            <li><a href="#全体">全体</a></li>
            <li><a href="#AlexNet">AlexNet</a><ul>
                    <li><a href="#論文">論文</a></li>
                    <li><a href="#論文まとめ">論文まとめ</a></li>
                </ul>
            </li>
            <li><a href="#VGG16">VGG16</a><ul>
                    <li><a href="#論文-1">論文</a></li>
                    <li><a href="#論文まとめ-1">論文まとめ</a><ul>
                            <li><a href="#Fine-tuning">Fine-tuning</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="#ResNet">ResNet</a><ul>
                    <li><a href="#論文-2">論文</a></li>
                    <li><a href="#論文まとめ-2">論文まとめ</a></li>
                </ul>
            </li>
            <li><a href="#SqueezeNet">SqueezeNet</a><ul>
                    <li><a href="#論文-3">論文</a></li>
                    <li><a href="#論文まとめ-3">論文まとめ</a></li>
                </ul>
            </li>
            <li><a href="#DenseNet">DenseNet</a><ul>
                    <li><a href="#論文-4">論文</a></li>
                    <li><a href="#Git">Git</a></li>
                </ul>
            </li>
            <li><a href="#Local-Binary-Convolutional-Neural-Networks">Local Binary Convolutional Neural Networks</a></li>
        </ul>
    </li>
    <li><a href="#Detection">Detection</a><ul>
            <li><a href="#全体-1">全体</a></li>
            <li><a href="#R-CNN">R-CNN</a><ul>
                    <li><a href="#論文-5">論文</a></li>
                    <li><a href="#論文まとめ-4">論文まとめ</a></li>
                </ul>
            </li>
            <li><a href="#Faster-R-CNN">Faster R-CNN</a><ul>
                    <li><a href="#論文-6">論文</a></li>
                    <li><a href="#論文まとめ-5">論文まとめ</a></li>
                </ul>
            </li>
            <li><a href="#yolo">yolo</a><ul>
                    <li><a href="#論文-7">論文</a></li>
                    <li><a href="#論文まとめ-6">論文まとめ</a></li>
                </ul>
            </li>
            <li><a href="#SSD">SSD</a><ul>
                    <li><a href="#論文-8">論文</a></li>
                    <li><a href="#論文まとめ-7">論文まとめ</a></li>
                </ul>
            </li>
            <li><a href="#Mask-R-CNN">Mask R-CNN</a><ul>
                    <li><a href="#論文-9">論文</a></li>
                    <li><a href="#論文まとめ-8">論文まとめ</a></li>
                </ul>
            </li>
        </ul>
    </li>
    <li><a href="#Segmentation">Segmentation</a><ul>
            <li><a href="#全体-2">全体</a></li>
            <li><a href="#FCN">FCN</a><ul>
                    <li><a href="#論文-10">論文</a></li>
                    <li><a href="#論文まとめ-9">論文まとめ</a><ul>
                            <li><a href="#Net-Surgery">Net Surgery</a></li>
                            <li><a href="#Shift-and-Stitch-trick">Shift and Stitch trick</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="#Delated-Convolution">Delated Convolution</a><ul>
                    <li><a href="#論文-11">論文</a></li>
                    <li><a href="#論文まとめ-10">論文まとめ</a><ul>
                            <li><a href="#wave-net">wave net</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="#Instance-sensitive-FCN">Instance sensitive FCN</a><ul>
                    <li><a href="#論文-12">論文</a></li>
                    <li><a href="#論文まとめ-11">論文まとめ</a></li>
                </ul>
            </li>
            <li><a href="#SegNet">SegNet</a><ul>
                    <li><a href="#論文-13">論文</a></li>
                    <li><a href="#論文まとめ-12">論文まとめ</a></li>
                </ul>
            </li>
            <li><a href="#Refine-Net">Refine Net</a><ul>
                    <li><a href="#論文-14">論文</a></li>
                </ul>
            </li>
            <li><a href="#Semantic-Segmentation-using-Adversarial-Networks">Semantic Segmentation using Adversarial Networks</a><ul>
                    <li><a href="#論文-15">論文</a></li>
                </ul>
            </li>
            <li><a href="#DeepMask">DeepMask</a><ul>
                    <li><a href="#論文-16">論文</a></li>
                </ul>
            </li>
            <li><a href="#SharpMask">SharpMask</a><ul>
                    <li><a href="#論文-17">論文</a></li>
                </ul>
            </li>
            <li><a href="#U-Net">U Net</a><ul>
                    <li><a href="#論文-18">論文</a></li>
                </ul>
            </li>
            <li><a href="#Pyramid-Scene-Parsing-Network">Pyramid Scene Parsing Network</a><ul>
                    <li><a href="#論文-19">論文</a></li>
                    <li><a href="#論文まとめ-13">論文まとめ</a></li>
                    <li><a href="#Git-1">Git</a></li>
                </ul>
            </li>
            <li><a href="#Pohlen_Full-Resolution_Residual_Networks">Pohlen_Full-Resolution_Residual_Networks</a><ul>
                    <li><a href="#論文-20">論文</a></li>
                    <li><a href="#Git-2">Git</a></li>
                </ul>
            </li>
            <li><a href="#End-to-End-Instance-Segmentation-with-Recurrent-Attention">End-to-End Instance Segmentation with Recurrent Attention</a><ul>
                    <li><a href="#論文-21">論文</a></li>
                </ul>
            </li>
            <li><a href="#Object-Region-Mining-with-Adversarial-Erasing弱教師あり学習">Object Region Mining with Adversarial Erasing（弱教師あり学習）</a><ul>
                    <li><a href="#論文-22">論文</a></li>
                </ul>
            </li>
            <li><a href="#Bayesian-SegNet">Bayesian SegNet</a><ul>
                    <li><a href="#論文-23">論文</a></li>
                    <li><a href="#Git-3">Git</a></li>
                </ul>
            </li>
            <li><a href="#Semi-and-Weakly-Supervised-Semantic-Segmentation-Using-Generative-Adversarial-Network">Semi and Weakly Supervised Semantic Segmentation Using Generative Adversarial Network</a><ul>
                    <li><a href="#論文-24">論文</a></li>
                    <li><a href="#論文の参考">論文の参考</a></li>
                </ul>
            </li>
            <li><a href="#Global-Average-Pooling-Layers-for-Object-Localization">Global Average Pooling Layers for Object Localization</a><ul>
                    <li><a href="#論文-25">論文</a></li>
                    <li><a href="#論文まとめ-14">論文まとめ</a></li>
                </ul>
            </li>
        </ul>
    </li>
    <li><a href="#比較論文">比較論文</a><ul>
            <li><a href="#論文-26">論文</a></li>
            <li><a href="#論文まとめ-15">論文まとめ</a></li>
        </ul>
    </li>
    <li><a href="#その他の機械学習手法">その他の機械学習手法</a><ul>
            <li><a href="#CNN-SLAM">CNN-SLAM</a></li>
            <li><a href="#OpenPose">OpenPose</a></li>
            <li><a href="#ScanNet">ScanNet</a></li>
            <li><a href="#PointNet">PointNet</a></li>
            <li><a href="#Network-Dessecion中間層の理解">Network Dessecion（中間層の理解）</a></li>
            <li><a href="#Multi-Scale-Continuous-CRFs-as-Sequential-Deep-Networks-for-Monocular-Depth-Estimation">Multi-Scale Continuous CRFs as Sequential Deep Networks for Monocular Depth Estimation</a></li>
            <li><a href="#Global-Hypothesis-Generation-for-6D-Object-Pose-Estimation">Global Hypothesis Generation for 6D Object Pose Estimation</a></li>
            <li><a href="#Cognitive-Mapping-and-Planning-for-Visual-Navigation">Cognitive Mapping and Planning for Visual Navigation</a></li>
            <li><a href="#Kehl_Real-Time_3D_Model-Tracking">Kehl_Real-Time_3D_Model Tracking</a></li>
            <li><a href="#Budget-Constrained-6D-Object-Pose-Estimation-via-Reinforcement-Learning">Budget-Constrained 6D Object Pose Estimation via Reinforcement Learning</a></li>
            <li><a href="#Global-hypothesis-generation-for-6D-object-pose-estimation">Global hypothesis generation for 6D object-pose estimation</a></li>
            <li><a href="#Fine-Tuning-by-Increasing-Model-Capacity">Fine-Tuning by Increasing Model Capacity</a></li>
            <li><a href="#A-Point-Set-Generation-Network-for-3D-Object-Reconstruction-From-a-Single-Image">A Point Set Generation Network for 3D Object Reconstruction From a Single Image</a></li>
            <li><a href="#pix2pix">pix2pix</a></li>
            <li><a href="#Learning-Local-Geometric-Descriptors-from-RGBD-Reconstructions">Learning Local Geometric Descriptors from RGBD Reconstructions</a><ul>
                    <li><a href="#Git-4">Git</a></li>
                </ul>
            </li>
            <li><a href="#Image-Caption-Generator">Image Caption Generator</a><ul>
                    <li><a href="#論文まとめ-16">論文まとめ</a></li>
                </ul>
            </li>
            <li><a href="#Neural-Style-Transfer">Neural Style Transfer</a><ul>
                    <li><a href="#論文-27">論文</a></li>
                    <li><a href="#論文まとめ-17">論文まとめ</a></li>
                </ul>
            </li>
            <li><a href="#Conditional-Random-Fields">Conditional Random Fields</a></li>
            <li><a href="#latent-Dirichlet-allocation">latent Dirichlet allocation</a></li>
            <li><a href="#スーパーピクセル">スーパーピクセル</a></li>
        </ul>
    </li>
</ul>

<h1 id="All">All</h1>

<h3 id="CVPR論文まとめ">CVPR論文まとめ</h3>

<p><a href="http://hirokatsukataoka.net/temp/cvpaper.challenge/cvpr17_finalize.pdf">http://hirokatsukataoka.net/temp/cvpaper.challenge/cvpr17_finalize.pdf</a></p>

<h3 id="ClassificationDetectionSegmentation">Classification,Detection,Segmentation</h3>

<h4 id="UberNet">UberNet</h4>

<p><a href="https://arxiv.org/pdf/1609.02132.pdf">https://arxiv.org/pdf/1609.02132.pdf</a></p>

<h1 id="Classification">Classification</h1>

<h3 id="全体">全体</h3>

<p><a href="https://github.com/chainer/chainer/tree/master/examples/imagenet">chainer/examples/imagenet at master &middot; chainer/chainer &middot; GitHub</a></p>

<h3 id="AlexNet">AlexNet</h3>

<h4 id="論文">論文</h4>

<p><a href="https://www.cs.toronto.edu/~kriz/imagenet_classification_with_deep_convolutional.pdf">https://www.cs.toronto.edu/~kriz/imagenet_classification_with_deep_convolutional.pdf</a></p>

<h4 id="論文まとめ">論文まとめ</h4>

<p><a href="http://starpentagon.net/analytics/alex_net_paper/">AlexNet&#x8AD6;&#x6587; | &#x6709;&#x610F;&#x306B;&#x7121;&#x610F;&#x5473;&#x306A;&#x8A71;</a></p>

<p><a href="https://qiita.com/komakomako/items/a6fa14bc6a2bdaaab5c7">&#x3010;&#x6DF1;&#x5C64;&#x5B66;&#x7FD2;&#x3011;&#x7573;&#x307F;&#x8FBC;&#x307F;&#x30CB;&#x30E5;&#x30FC;&#x30E9;&#x30EB;&#x30CD;&#x30C3;&#x30C8;&#x3067;&#x753B;&#x50CF;&#x5206;&#x985E; [DW 4&#x65E5;&#x76EE;] - Qiita</a></p>

<h3 id="VGG16">VGG16</h3>

<h4 id="論文-1">論文</h4>

<p><a href="https://arxiv.org/pdf/1409.1556.pdf">https://arxiv.org/pdf/1409.1556.pdf</a></p>

<h4 id="論文まとめ-1">論文まとめ</h4>

<p><a href="https://qiita.com/ikeyasu/items/c84049e47aee745fde1b">&#x6A5F;&#x68B0;&#x5B66;&#x7FD2;&#x8AD6;&#x6587;&#x8AAD;&#x307F;&#xFF1A;VERY DEEP CONVOLUTIONAL NETWORKS FOR LARGE-SCALE IMAGE RECOGNITION - Qiita</a></p>

<h5 id="Fine-tuning">Fine-tuning</h5>

<p><a href="http://www.nlab.ci.i.u-tokyo.ac.jp/pdf/CNN_survey.pdf">http://www.nlab.ci.i.u-tokyo.ac.jp/pdf/CNN_survey.pdf</a></p>

<h3 id="ResNet">ResNet</h3>

<h4 id="論文-2">論文</h4>

<p><a href="https://arxiv.org/pdf/1512.03385.pdf">https://arxiv.org/pdf/1512.03385.pdf</a></p>

<h4 id="論文まとめ-2">論文まとめ</h4>

<p><a href="http://yusuke-ujitoko.hatenablog.com/entry/2017/06/15/201923">ResNet&#x8AD6;&#x6587;&#x3092;&#x8AAD;&#x3093;&#x3060;&#x30E1;&#x30E2;&#xFF08;arXiv:1512.03385&#xFF09; - &#x7DD1;&#x8336;&#x601D;&#x8003;&#x30D6;&#x30ED;&#x30B0;</a></p>

<p><a href="https://www.slideshare.net/masatakanishimori/res-net">Res net&#x3068;&#x6D3E;&#x751F;&#x7814;&#x7A76;&#x306E;&#x7D39;&#x4ECB;</a></p>

<p><a href="https://qiita.com/ikeyasu/items/ea9ced2b8e0fcb3da2be">&#x6A5F;&#x68B0;&#x5B66;&#x7FD2;&#x8AD6;&#x6587;&#x8AAD;&#x307F;&#xFF1A;Deep Residual Learning for Image Recognition - Qiita</a></p>

<p><a href="https://qiita.com/supersaiakujin/items/935bbc9610d0f87607e8">[Survey]Deep Residual Learning for Image Recognition - Qiita</a></p>

<p><a href="https://deepage.net/deep_learning/2016/11/30/resnet.html">Residual Network(ResNet)&#x306E;&#x7406;&#x89E3;&#x3068;&#x30C1;&#x30E5;&#x30FC;&#x30CB;&#x30F3;&#x30B0;&#x306E;&#x30D9;&#x30B9;&#x30C8;&#x30D7;&#x30E9;&#x30AF;&#x30C6;&#x30A3;&#x30B9; - DeepAge</a></p>

<h3 id="SqueezeNet">SqueezeNet</h3>

<p>Fireブロックを8つ重ねたモデル</p>

<h4 id="論文-3">論文</h4>

<p><a href="https://arxiv.org/pdf/1602.07360.pdf">https://arxiv.org/pdf/1602.07360.pdf</a></p>

<h4 id="論文まとめ-3">論文まとめ</h4>

<p><a href="https://tkng.org/b/2016/03/28/squeeze-net/">SqueezeNet: AlexNet-level accuracy with 50x fewer parameters and &lt;1MB model size&#x3092;&#x8AAD;&#x3093;&#x3060;</a></p>

<p><a href="https://github.com/ghmagazine/chainerbook/blob/master/ch6/fcn_squeeze.py">chainerbook/fcn_squeeze.py at master &middot; ghmagazine/chainerbook &middot; GitHub</a></p>

<p><a href="https://www.semiconportal.com/archive/contribution/applications/170418-neurochip5-2.html">https://www.semiconportal.com/archive/contribution/applications/170418-neurochip5-2.html</a></p>

<p><a href="https://www.slideshare.net/tm1966/20160901-jwein">20160901 jwein</a></p>

<p><a href="http://songhan.github.io/SqueezeNet-Residual/">Squeezenet-residual by songhan</a></p>

<p><a href="https://qiita.com/supersaiakujin/items/ece1e20ca4073e77bed7">[Survey]SqueezeNet: AlexNet-level accuracy with 50x fewer parameters and &lt;1MB model size - Qiita</a></p>

<p><a href="https://qiita.com/aiskoaskosd/items/59c49f2e2a6d76d62798">2016&#x5E74;&#x306E;&#x6DF1;&#x5C64;&#x5B66;&#x7FD2;&#x3092;&#x7528;&#x3044;&#x305F;&#x753B;&#x50CF;&#x8A8D;&#x8B58;&#x30E2;&#x30C7;&#x30EB; - Qiita</a></p>

<h3 id="DenseNet">DenseNet</h3>

<h4 id="論文-4">論文</h4>

<p><a href="https://arxiv.org/pdf/1608.06993.pdf">https://arxiv.org/pdf/1608.06993.pdf</a></p>

<h4 id="Git">Git</h4>

<p><a href="https://github.com/liuzhuang13/DenseNet">GitHub - liuzhuang13/DenseNet: Densely Connected Convolutional Networks, In CVPR 2017 (Best Paper Award).</a></p>

<h3 id="Local-Binary-Convolutional-Neural-Networks">Local Binary Convolutional Neural Networks</h3>

<p><a href="https://arxiv.org/pdf/1608.06049.pdf">https://arxiv.org/pdf/1608.06049.pdf</a></p>

<h1 id="Detection">Detection</h1>

<h3 id="全体-1">全体</h3>

<p><a href="http://tech-blog.abeja.asia/entry/object-detection-summary">Deep Learning&#x306B;&#x3088;&#x308B;&#x4E00;&#x822C;&#x7269;&#x4F53;&#x691C;&#x51FA;&#x30A2;&#x30EB;&#x30B4;&#x30EA;&#x30BA;&#x30E0;&#x306E;&#x7D39;&#x4ECB; - ABEJA Tech Blog</a></p>

<p><a href="https://www.slideshare.net/ToshinoriHanya/ohs3">Object Detection &amp; Instance Segmentation&#x306E;&#x8AD6;&#x6587;&#x7D39;&#x4ECB; | OHS&#x52C9;&#x5F37;&#x4F1A;#3</a></p>

<h3 id="R-CNN">R-CNN</h3>

<h4 id="論文-5">論文</h4>

<p><a href="https://arxiv.org/pdf/1311.2524.pdf">https://arxiv.org/pdf/1311.2524.pdf</a></p>

<h4 id="論文まとめ-4">論文まとめ</h4>

<p><a href="https://www.slideshare.net/KazukiMotohashi2/rcnn">R-CNN&#x306E;&#x539F;&#x7406;&#x3068;&#x3053;&#x3053;&#x6570;&#x5E74;&#x306E;&#x6D41;&#x308C;</a></p>

<p><a href="https://www.slideshare.net/takmin/20140131-r-cnn">20140131 R-CNN</a></p>

<h3 id="Faster-R-CNN">Faster R-CNN</h3>

<h4 id="論文-6">論文</h4>

<p><a href="https://arxiv.org/pdf/1506.01497.pdf">https://arxiv.org/pdf/1506.01497.pdf</a></p>

<h4 id="論文まとめ-5">論文まとめ</h4>

<p><a href="https://www.slideshare.net/takashiabe338/fast-rcnnfaster-rcnn">&#x8AD6;&#x6587;&#x7D39;&#x4ECB;: Fast R-CNN&amp;Faster R-CNN</a></p>

<h3 id="yolo">yolo</h3>

<p><a href="https://pjreddie.com/darknet/yolo/">YOLO: Real-Time Object Detection</a></p>

<h4 id="論文-7">論文</h4>

<p><a href="https://arxiv.org/pdf/1506.02640.pdf">https://arxiv.org/pdf/1506.02640.pdf</a></p>

<p><a href="https://arxiv.org/pdf/1612.08242.pdf">https://arxiv.org/pdf/1612.08242.pdf</a></p>

<h4 id="論文まとめ-6">論文まとめ</h4>

<p><a href="https://www.slideshare.net/ssuser07aa33/introduction-to-yolo-detection-model">Introduction to YOLO detection model</a></p>

<p><a href="https://docs.google.com/presentation/d/1kAa7NOamBt4calBU9iHgT8a86RRHz9Yz2oh4-GTdX6M/edit#slide=id.g15092aa245_0_155">YOLO CVPR 2016 - Google &#x30B9;&#x30E9;&#x30A4;&#x30C9;</a></p>

<h3 id="SSD"><a class="keyword" href="http://d.hatena.ne.jp/keyword/SSD">SSD</a></h3>

<h4 id="論文-8">論文</h4>

<p><a href="https://arxiv.org/pdf/1512.02325.pdf">https://arxiv.org/pdf/1512.02325.pdf</a></p>

<h4 id="論文まとめ-7">論文まとめ</h4>

<p><a href="https://www.slideshare.net/takanoriogata1121/ssd-single-shot-multibox-detector-eccv2016">SSD: Single Shot MultiBox Detector (ECCV2016)</a></p>

<p><a href="https://qiita.com/de0ta/items/1ae60878c0e177fc7a3a">SSD:Single Shot Multibox Detector - Qiita</a></p>

<h3 id="Mask-R-CNN">Mask R-CNN</h3>

<h4 id="論文-9">論文</h4>

<p><a href="https://arxiv.org/pdf/1703.06870.pdf">https://arxiv.org/pdf/1703.06870.pdf</a></p>

<h4 id="論文まとめ-8">論文まとめ</h4>

<p><a href="https://qiita.com/yu4u/items/5cbe9db166a5d72f9eb8">&#x6700;&#x65B0;&#x306E;&#x7269;&#x4F53;&#x691C;&#x51FA;&#x624B;&#x6CD5;Mask R-CNN&#x306E;RoI Align&#x3068;Fast(er) R-CNN&#x306E;RoI Pooling&#x306E;&#x9055;&#x3044;&#x3092;&#x6B63;&#x3057;&#x304F;&#x7406;&#x89E3;&#x3059;&#x308B; - Qiita</a></p>

<p><a href="http://createwith.ai/paper/20170323/249">&#x8F2A;&#x90ED;/&#x7269;&#x4F53;&#x62BD;&#x51FA;&#x306E;&#x65B0;&#x30B9;&#x30BF;&#x30F3;&#x30C0;&#x30FC;&#x30C9;&#x306B;&#x306A;&#x308B;&#x304B;? &ndash; Mask R-CNN</a></p>

<p><a href="https://blog.athelas.com/a-brief-history-of-cnns-in-image-segmentation-from-r-cnn-to-mask-r-cnn-34ea83205de4">A Brief History of CNNs in Image Segmentation: From R-CNN to Mask R-CNN</a></p>

<p><a href="https://lmb.informatik.uni-freiburg.de/lectures/seminar_brox/seminar_ss17/maskrcnn_slides.pdf">https://lmb.informatik.uni-freiburg.de/lectures/seminar_brox/seminar_ss17/maskrcnn_slides.pdf</a></p>

<p><a href="http://classes.engr.oregonstate.edu/eecs/spring2017/cs637/Slides/CS_637_Fast_Faster_Mask_RCNN.pdf">http://classes.engr.oregonstate.edu/eecs/spring2017/cs637/Slides/CS_637_Fast_Faster_Mask_RCNN.pdf</a></p>

<h1 id="Segmentation">Segmentation</h1>

<h3 id="全体-2">全体</h3>

<p>A Review on <a class="keyword" href="http://d.hatena.ne.jp/keyword/Deep%20Learning">Deep Learning</a> Techniques Applied to Semantic Segmentation : <a href="https://arxiv.org/pdf/1704.06857.pdf">https://arxiv.org/pdf/1704.06857.pdf</a></p>

<p><a href="http://ni4muraano.hatenablog.com/entry/2017/08/15/165213">&#x3010;&#x30C7;&#x30A3;&#x30FC;&#x30D7;&#x30E9;&#x30FC;&#x30CB;&#x30F3;&#x30B0;&#x3011; &#x30BB;&#x30DE;&#x30F3;&#x30C6;&#x30A3;&#x30C3;&#x30AF;&#x30BB;&#x30B0;&#x30E1;&#x30F3;&#x30C6;&#x30FC;&#x30B7;&#x30E7;&#x30F3;&#x624B;&#x6CD5;&#x306E;&#x307E;&#x3068;&#x3081; - &#x65C5;&#x884C;&#x597D;&#x304D;&#x306A;&#x30BD;&#x30D5;&#x30C8;&#x30A8;&#x30F3;&#x30B8;&#x30CB;&#x30A2;&#x306E;&#x5099;&#x5FD8;&#x9332;</a></p>

<h3 id="FCN">FCN</h3>

<h4 id="論文-10">論文</h4>

<p><a href="https://arxiv.org/pdf/1411.4038.pdf">https://arxiv.org/pdf/1411.4038.pdf</a></p>

<h4 id="論文まとめ-9">論文まとめ</h4>

<p><a href="http://seiya-kumada.blogspot.jp/2016/03/fully-convolutional-networks-chainer.html">memo: Fully Convolutional Networks &#x301C; Chainer&#x306B;&#x3088;&#x308B;&#x5B9F;&#x88C5; &#x301C;</a></p>

<p><a href="http://www.mathgram.xyz/entry/keras/fcn">Implementation of FCN via Keras - MATHGRAM</a></p>

<p><a href="http://dl-kento.hatenablog.com/entry/2017/04/30/%E3%83%87%E3%82%A3%E3%83%BC%E3%83%97%E3%83%A9%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0_%E3%82%BB%E3%82%B0%E3%83%A1%E3%83%B3%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E6%89%8B%E6%B3%95%E3%81%AE%E3%81%BE">&#x30C7;&#x30A3;&#x30FC;&#x30D7;&#x30E9;&#x30FC;&#x30CB;&#x30F3;&#x30B0; &#x30BB;&#x30B0;&#x30E1;&#x30F3;&#x30C6;&#x30FC;&#x30B7;&#x30E7;&#x30F3;&#x624B;&#x6CD5;&#x306E;&#x307E;&#x3068;&#x3081; - &#x524D;&#x306B;&#x9003;&#x3052;&#x308B; &#x301C;&#x5B87;&#x5B99;&#x7CFB;&#x5927;&#x5B66;&#x9662;&#x751F;&#x306E;&#x30D6;&#x30ED;&#x30B0;&#x301C;</a></p>

<p><a href="https://www.slideshare.net/mitmul/a-brief-introduction-to-recent-segmentation-methods">A brief introduction to recent segmentation methods</a></p>

<h5 id="Net-Surgery">Net Surgery</h5>

<p><a href="https://github.com/BVLC/caffe/blob/master/examples/net_surgery.ipynb">caffe/net_surgery.ipynb at master &middot; BVLC/caffe &middot; GitHub</a></p>

<h5 id="Shift-and-Stitch-trick">Shift and Stitch <a class="keyword" href="http://d.hatena.ne.jp/keyword/trick">trick</a></h5>

<p><a href="https://www.cs.virginia.edu/yanjun/paperA14/2016-MustCnn.pdf">https://www.cs.virginia.edu/yanjun/paperA14/2016-MustCnn.pdf</a></p>

<h3 id="Delated-Convolution">Delated Convolution</h3>

<h4 id="論文-11">論文</h4>

<p><a href="https://arxiv.org/pdf/1511.07122.pdf">https://arxiv.org/pdf/1511.07122.pdf</a></p>

<h4 id="論文まとめ-10">論文まとめ</h4>

<p><a href="http://joisino.hatenablog.com/entry/2017/07/13/210000">Dilated Convolution - &#xFF7C;&#xFF9E;&#xFF6E;&#xFF72;&#xFF7C;&#xFF9E;&#xFF6E;&#xFF72;&#xFF7C;&#xFF9E;&#xFF6E;&#xFF72;</a></p>

<h5 id="wave-net">wave net</h5>

<p><a href="https://arxiv.org/pdf/1609.03499.pdf">https://arxiv.org/pdf/1609.03499.pdf</a></p>

<h3 id="Instance-sensitive-FCN">Instance sensitive FCN</h3>

<h4 id="論文-12">論文</h4>

<p><a href="https://arxiv.org/pdf/1603.08678.pdf">https://arxiv.org/pdf/1603.08678.pdf</a></p>

<h4 id="論文まとめ-11">論文まとめ</h4>

<p><a href="https://www.slideshare.net/mmisono/instancesensitive-fully-convolutional-networks">&#x8AD6;&#x6587;&#x8F2A;&#x8AAD;: Instance-sensitive Fully Convolutional Networks</a></p>

<h3 id="SegNet">SegNet</h3>

<h4 id="論文-13">論文</h4>

<p><a href="https://arxiv.org/pdf/1511.00561.pdf">https://arxiv.org/pdf/1511.00561.pdf</a></p>

<h4 id="論文まとめ-12">論文まとめ</h4>

<p><a href="http://d.hatena.ne.jp/takmin/20170216/1487219151">Semantic Segmentation&#x306E;&#x30B5;&#x30FC;&#x30D9;&#x30A4; - takmin&#x306E;&#x66F8;&#x304D;&#x3063;&#x3071;&#x306A;&#x3057;&#x5099;&#x5FD8;&#x9332;</a></p>

<p><a href="https://www.youtube.com/watch?v=le1NvGzDWDk#action=share">A Brief Introduction to Recent Segmentation Methods - YouTube</a></p>

<p><a href="http://dl-kento.hatenablog.com/entry/2017/04/30/%E3%83%87%E3%82%A3%E3%83%BC%E3%83%97%E3%83%A9%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0_%E3%82%BB%E3%82%B0%E3%83%A1%E3%83%B3%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E6%89%8B%E6%B3%95%E3%81%AE%E3%81%BE">&#x30C7;&#x30A3;&#x30FC;&#x30D7;&#x30E9;&#x30FC;&#x30CB;&#x30F3;&#x30B0; &#x30BB;&#x30B0;&#x30E1;&#x30F3;&#x30C6;&#x30FC;&#x30B7;&#x30E7;&#x30F3;&#x624B;&#x6CD5;&#x306E;&#x307E;&#x3068;&#x3081; - &#x524D;&#x306B;&#x9003;&#x3052;&#x308B; &#x301C;&#x5B87;&#x5B99;&#x7CFB;&#x5927;&#x5B66;&#x9662;&#x751F;&#x306E;&#x30D6;&#x30ED;&#x30B0;&#x301C;</a></p>

<h3 id="Refine-Net">Refine Net</h3>

<h4 id="論文-14">論文</h4>

<p><a href="https://arxiv.org/pdf/1611.06612.pdf">https://arxiv.org/pdf/1611.06612.pdf</a></p>

<h3 id="Semantic-Segmentation-using-Adversarial-Networks">Semantic Segmentation using Adversarial Networks</h3>

<h4 id="論文-15">論文</h4>

<p><a href="https://arxiv.org/pdf/1611.08408.pdf">https://arxiv.org/pdf/1611.08408.pdf</a></p>

<h3 id="DeepMask">DeepMask</h3>

<h4 id="論文-16">論文</h4>

<p><a href="https://arxiv.org/pdf/1506.06204.pdf">https://arxiv.org/pdf/1506.06204.pdf</a></p>

<h3 id="SharpMask">SharpMask</h3>

<h4 id="論文-17">論文</h4>

<p><a href="https://arxiv.org/pdf/1603.08695.pdf">https://arxiv.org/pdf/1603.08695.pdf</a></p>

<h3 id="U-Net">U Net</h3>

<h4 id="論文-18">論文</h4>

<p><a href="https://lmb.informatik.uni-freiburg.de/people/ronneber/u-net/">U-Net: Convolutional Networks for Biomedical Image Segmentation</a></p>

<h3 id="Pyramid-Scene-Parsing-Network">Pyramid Scene Parsing Network</h3>

<p>イケてるらしい</p>

<p>CNNにて階層化されたマップを統合して意味情報を復元</p>

<p>セマンティックセグメンテーションにて一位＠ILSVRC2016</p>

<h4 id="論文-19">論文</h4>

<p><a href="https://arxiv.org/pdf/1612.01105.pdf">https://arxiv.org/pdf/1612.01105.pdf</a></p>

<h4 id="論文まとめ-13">論文まとめ</h4>

<p><a href="https://www.slideshare.net/mitmul/unofficial-pyramid-scene-parsing-network-cvpr-2017">[unofficial] Pyramid Scene Parsing Network (CVPR 2017)</a></p>

<h4 id="Git-1">Git</h4>

<p><a href="https://github.com/Vladkryvoruchko/PSPNet-Keras-tensorflow">GitHub - Vladkryvoruchko/PSPNet-Keras-tensorflow: original code : https://github.com/hszhao/PSPNet</a></p>

<p><a href="https://github.com/hszhao/PSPNet">GitHub - hszhao/PSPNet: Pyramid Scene Parsing Network</a></p>

<h3 id="Pohlen_Full-Resolution_Residual_Networks">Pohlen_Full-Resolution_Residual_Networks</h3>

<h4 id="論文-20">論文</h4>

<p><a href="http://openaccess.thecvf.com/content_cvpr_2017/papers/Pohlen_Full-Resolution_Residual_Networks_CVPR_2017_paper.pdf">http://openaccess.thecvf.com/content_cvpr_2017/papers/Pohlen_Full-Resolution_Residual_Networks_CVPR_2017_paper.pdf</a></p>

<h4 id="Git-2">Git</h4>

<p><a href="https://github.com/TobyPDE/FRRN">GitHub - TobyPDE/FRRN: Full Resolution Residual Networks for Semantic Image Segmentation</a></p>

<h3 id="End-to-End-Instance-Segmentation-with-Recurrent-Attention">End-to-End Instance Segmentation with Recurrent Attention</h3>

<h4 id="論文-21">論文</h4>

<p><a href="http://openaccess.thecvf.com/content_cvpr_2017/papers/Ren_End-To-End_Instance_Segmentation_CVPR_2017_paper.pdf">http://openaccess.thecvf.com/content_cvpr_2017/papers/Ren_End-To-End_Instance_Segmentation_CVPR_2017_paper.pdf</a></p>

<h3 id="Object-Region-Mining-with-Adversarial-Erasing弱教師あり学習">Object Region Mining with Adversarial Erasing（弱教師あり学習）</h3>

<h4 id="論文-22">論文</h4>

<p><a href="https://arxiv.org/pdf/1703.08448.pdf">https://arxiv.org/pdf/1703.08448.pdf</a></p>

<h3 id="Bayesian-SegNet">Bayesian SegNet</h3>

<h4 id="論文-23">論文</h4>

<p><a href="https://arxiv.org/pdf/1511.02680.pdf">https://arxiv.org/pdf/1511.02680.pdf</a></p>

<h4 id="Git-3">Git</h4>

<p><a href="https://github.com/alexgkendall/SegNet-Tutorial">GitHub - alexgkendall/SegNet-Tutorial: Files for a tutorial to train SegNet for road scenes using the CamVid dataset</a></p>

<h3 id="Semi-and-Weakly-Supervised-Semantic-Segmentation-Using-Generative-Adversarial-Network">Semi and Weakly Supervised Semantic Segmentation Using Generative Adversarial Network</h3>

<h4 id="論文-24">論文</h4>

<p><a href="https://arxiv.org/pdf/1703.09695.pdf">https://arxiv.org/pdf/1703.09695.pdf</a></p>

<h4 id="論文の参考">論文の参考</h4>

<p><a href="http://www.mi.t.u-tokyo.ac.jp/kanezaki/pdf/3D_and_weaklearning.pdf">http://www.mi.t.u-tokyo.ac.jp/kanezaki/pdf/3D_and_weaklearning.pdf</a></p>

<h3 id="Global-Average-Pooling-Layers-for-Object-Localization">Global Average Pooling Layers for Object Localization</h3>

<p>分類ラベルからsegmentationする新しいもの</p>

<h4 id="論文-25">論文</h4>

<p><a href="http://cnnlocalization.csail.mit.edu/Zhou_Learning_Deep_Features_CVPR_2016_paper.pdf">http://cnnlocalization.csail.mit.edu/Zhou_Learning_Deep_Features_CVPR_2016_paper.pdf</a></p>

<h4 id="論文まとめ-14">論文まとめ</h4>

<p><a href="https://alexisbcook.github.io/2017/global-average-pooling-layers-for-object-localization/">Global Average Pooling Layers for Object Localization</a></p>

<h1 id="比較論文">比較論文</h1>

<h4 id="論文-26">論文</h4>

<p><a href="https://arxiv.org/pdf/1605.07678.pdf">https://arxiv.org/pdf/1605.07678.pdf</a></p>

<p>Speed/accuracy trade-offs for modern convolutional object detectors : <a href="https://arxiv.org/pdf/1611.10012.pdf">https://arxiv.org/pdf/1611.10012.pdf</a></p>

<h4 id="論文まとめ-15">論文まとめ</h4>

<p><a href="http://szdr.hatenablog.com/entry/2017/03/01/000614">CNN&#x30E2;&#x30C7;&#x30EB;&#x6BD4;&#x8F03;&#x8AD6;&#x6587; &quot;An Analysis of Deep Neural Network Models for Practical Applications&quot;&#x3092;&#x8AAD;&#x3093;&#x3060; - &#x4EBA;&#x9593;&#x3060;&#x3063;&#x305F;&#x3089;&#x8003;&#x3048;&#x3066;</a></p>

<h1 id="その他の機械学習手法">その他の<a class="keyword" href="http://d.hatena.ne.jp/keyword/%B5%A1%B3%A3%B3%D8%BD%AC">機械学習</a>手法</h1>

<h3 id="CNN-SLAM">CNN-SLAM</h3>

<p><a href="http://campar.in.tum.de/pub/tateno2017cvpr/tateno2017cvpr.pdf">http://campar.in.tum.de/pub/tateno2017cvpr/tateno2017cvpr.pdf</a></p>

<p><a href="https://www.youtube.com/watch?v=z_NJxbkQnBU">CNN-SLAM: Real-time dense monocular SLAM with learned depth prediction - YouTube</a></p>

<p><a href="http://campar.in.tum.de/Chair/ProjectCNNSLAM">http://campar.in.tum.de/Chair/ProjectCNNSLAM</a></p>

<h3 id="OpenPose">OpenPose</h3>

<p><a href="https://github.com/CMU-Perceptual-Computing-Lab/openpose">GitHub - CMU-Perceptual-Computing-Lab/openpose: OpenPose: Real-Time Multi-Person Keypoint Detection Library for Body, Face, and Hands</a></p>

<h3 id="ScanNet">ScanNet</h3>

<p><a href="https://www.youtube.com/watch?v=Olx4OnoZWQQ">ScanNet: Richly-annotated 3D Reconstructions of Indoor Scenes (CVPR 2017 Spotlight) - YouTube</a></p>

<h3 id="PointNet">PointNet</h3>

<p><a href="http://stanford.edu/~rqi/pointnet/">PointNet</a></p>

<h3 id="Network-Dessecion中間層の理解">Network Dessecion（中間層の理解）</h3>

<p><a href="https://arxiv.org/pdf/1704.05796.pdf">https://arxiv.org/pdf/1704.05796.pdf</a></p>

<h3 id="Multi-Scale-Continuous-CRFs-as-Sequential-Deep-Networks-for-Monocular-Depth-Estimation">Multi-Scale Continuous CRFs as Sequential Deep Networks for Monocular Depth Estimation</h3>

<p>RGBからDepthの推定</p>

<p><a href="https://arxiv.org/pdf/1704.02157.pdf">https://arxiv.org/pdf/1704.02157.pdf</a></p>

<h3 id="Global-Hypothesis-Generation-for-6D-Object-Pose-Estimation">Global Hypothesis Generation for 6D Object Pose Estimation</h3>

<p><a href="https://arxiv.org/pdf/1612.02287.pdf">https://arxiv.org/pdf/1612.02287.pdf</a></p>

<h3 id="Cognitive-Mapping-and-Planning-for-Visual-Navigation">Cognitive Mapping and Planning for Visual Navigation</h3>

<p>ロボット視点からの画像から、<a class="keyword" href="http://d.hatena.ne.jp/keyword/%A5%DE%A5%C3%A5%D4%A5%F3%A5%B0">マッピング</a>とナビゲーションを同時に⾏い、ゴールまでの経路を推測する研究</p>

<p><a href="https://arxiv.org/pdf/1702.03920.pdf">https://arxiv.org/pdf/1702.03920.pdf</a></p>

<p><a href="https://sites.google.com/view/cognitive-mapping-and-planning/">Cognitive Mapping and Planning</a></p>

<h3 id="Kehl_Real-Time_3D_Model-Tracking">Kehl_Real-Time_3D_Model Tracking</h3>

<p>RGB-D映像による3次元追跡を，シングルコアCPUで，2msの処理速度を実現</p>

<p><a href="http://openaccess.thecvf.com/content_cvpr_2017/papers/Kehl_Real-Time_3D_Model_CVPR_2017_paper.pdf">http://openaccess.thecvf.com/content_cvpr_2017/papers/Kehl_Real-Time_3D_Model_CVPR_2017_paper.pdf</a></p>

<h3 id="Budget-Constrained-6D-Object-Pose-Estimation-via-Reinforcement-Learning">Budget-Constrained 6D Object Pose Estimation via <a class="keyword" href="http://d.hatena.ne.jp/keyword/Reinforcement%20Learning">Reinforcement Learning</a></h3>

<p><a href="http://openaccess.thecvf.com/content_cvpr_2017/papers/Krull_PoseAgent_Budget-Constrained_6D_CVPR_2017_paper.pdf">http://openaccess.thecvf.com/content_cvpr_2017/papers/Krull_PoseAgent_Budget-Constrained_6D_CVPR_2017_paper.pdf</a></p>

<h3 id="Global-hypothesis-generation-for-6D-object-pose-estimation">Global hypothesis generation for 6D object-pose estimation</h3>

<p><a href="http://openaccess.thecvf.com/content_cvpr_2017/papers/Michel_Global_Hypothesis_Generation_CVPR_2017_paper.pdf">http://openaccess.thecvf.com/content_cvpr_2017/papers/Michel_Global_Hypothesis_Generation_CVPR_2017_paper.pdf</a></p>

<h3 id="Fine-Tuning-by-Increasing-Model-Capacity">Fine-Tuning by Increasing Model Capacity</h3>

<p><a href="http://ri.cmu.edu/wp-content/uploads/2017/06/yuxiongw_cvpr17_growingcnn.pdf">http://ri.cmu.edu/wp-content/uploads/2017/06/yuxiongw_cvpr17_growingcnn.pdf</a></p>

<h3 id="A-Point-Set-Generation-Network-for-3D-Object-Reconstruction-From-a-Single-Image">A Point Set Generation Network for 3D Object Reconstruction From a Single Image</h3>

<p><a href="http://openaccess.thecvf.com/content_cvpr_2017/papers/Fan_A_Point_Set_CVPR_2017_paper.pdf">http://openaccess.thecvf.com/content_cvpr_2017/papers/Fan_A_Point_Set_CVPR_2017_paper.pdf</a></p>

<h3 id="pix2pix">pix2pix</h3>

<p><a href="https://affinelayer.com/pixsrv/">Image-to-Image Demo - Affine Layer</a></p>

<h3 id="Learning-Local-Geometric-Descriptors-from-RGBD-Reconstructions">Learning Local Geometric Descriptors from RGBD Reconstructions</h3>

<p><a href="https://arxiv.org/pdf/1603.08182.pdf">https://arxiv.org/pdf/1603.08182.pdf</a></p>

<h4 id="Git-4">Git</h4>

<p><a href="https://github.com/andyzeng/3dmatch-toolbox">GitHub - andyzeng/3dmatch-toolbox: 3DMatch - a 3D ConvNet-based local geometric descriptor for aligning 3D meshes and point clouds.</a></p>

<h3 id="Image-Caption-Generator">Image Caption Generator</h3>

<h4 id="論文まとめ-16">論文まとめ</h4>

<p><a href="https://www.slideshare.net/takmin/show-andtell-takmin">Show and tell takmin</a></p>

<h3 id="Neural-Style-Transfer">Neural Style Transfer</h3>

<h4 id="論文-27">論文</h4>

<p><a href="https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Gatys_Image_Style_Transfer_CVPR_2016_paper.pdf">https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Gatys_Image_Style_Transfer_CVPR_2016_paper.pdf</a></p>

<h4 id="論文まとめ-17">論文まとめ</h4>

<p><a href="https://elix-tech.github.io/ja/2016/08/22/art.html">Neural Style Transfer: Prisma&#x306E;&#x80CC;&#x666F;&#x6280;&#x8853;&#x3092;&#x89E3;&#x8AAC;&#x3059;&#x308B;</a></p>

<h3 id="Conditional-Random-Fields">Conditional Random Fields</h3>

<p><a href="http://d.hatena.ne.jp/echizen_tm/20111206/1323180144">CRF&#x304C;&#x3088;&#x304F;&#x308F;&#x304B;&#x3089;&#x306A;&#x304F;&#x3066;&#x304A;&#x8179;&#x304C;&#x75DB;&#x304F;&#x306A;&#x3063;&#x3066;&#x3057;&#x307E;&#x3046;&#x4EBA;&#x306E;&#x305F;&#x3081;&#x306E;30&#x5206;&#x3067;&#x308F;&#x304B;&#x308B;CRF&#x306E;&#x306F;&#x306A;&#x3057; - EchizenBlog-Zwei</a></p>

<h3 id="latent-Dirichlet-allocation">latent Dirichlet allocation</h3>

<p><a href="https://www.slideshare.net/tsubosaka/tokyotextmining">LDA&#x5165;&#x9580;</a></p>

<h3 id="スーパーピクセル">スーパー<a class="keyword" href="http://d.hatena.ne.jp/keyword/%A5%D4%A5%AF%A5%BB%A5%EB">ピクセル</a></h3>

<p><a href="https://qiita.com/aguaarbolrc/items/2acec62b315b1d8e288d">kmeans &#x3092;&#x4F7F;&#x3063;&#x305F;&#x753B;&#x50CF;&#x306E;&#x30BB;&#x30B0;&#x30E1;&#x30F3;&#x30C6;&#x30FC;&#x30B7;&#x30E7;&#x30F3; - Qiita</a></p>

<p><a href="http://www.vision.cs.chubu.ac.jp/flabresearcharchive/master/m07/paper/kida_paper.pdf">http://www.vision.cs.chubu.ac.jp/flabresearcharchive/master/m07/paper/kida_paper.pdf</a></p>

<p><a href="http://www.vision.cs.chubu.ac.jp/FLABResearchArchive/Master/M07/Abstract/kida_abst.pdf">http://www.vision.cs.chubu.ac.jp/FLABResearchArchive/Master/M07/Abstract/kida_abst.pdf</a></p>

<p><a href="http://www.nlab.ci.i.u-tokyo.ac.jp/pdf/ssii2015tamanaha.pdf">http://www.nlab.ci.i.u-tokyo.ac.jp/pdf/ssii2015tamanaha.pdf</a></p>
