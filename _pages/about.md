---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi there!

I am currently a 4th-year Ph.D. student in the <a href="https://engineering.tamu.edu/cse/index.html" target="_blank">Department of Computer Science and Engineering</a> at <a href="https://www.tamu.edu" target="_blank">Texas A&M University</a>. I am working at the DATA Lab under the supervision of Prof. <a href="https://cs.rice.edu/~xh37/index.html" target="_blank">Xia (Ben) Hu</a>.

My research interests lie in the general area of data mining and machine learning.



<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# News
- *2023.01*: One paper accepted by ICLR2023.
- *2022.09*: Thrilled to start my internship at Meta, work with [Qifan Wang](https://wqfcr.github.io/). 
- *2022.05*: Thrilled to start my internship at Snap Inc., work with [Neil Shah](http://nshah.net/). 
- *2022.05*: One paper accepted by ICML2022. 
- *2022.01*: One paper accepted by ICLR2022. 
- *2022.01*: One paper accepted by TheWebConf2022. 

<!-- # Selected Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)

**Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div> -->


# Publications 

<!-- - [**Preprint**] [G-Mixup: Graph Augmentation for Graph Classification](https://arxiv.org/pdf/2202.07179.pdf). **Xiaotian Han**, Zhimeng Jiang, Ninghao Liu, Xia Hu.
- [**TheWebConf2022**] [Geometric Graph Representation Learning via Maximizing Rate Reduction](https://doi.org/10.1145/3485447.3512170). **Xiaotian Han**, Zhimeng Jiang, Ninghao Liu, Qingquan Song, Jundong Li, Xia Hu. [slides](/files/WWW2022_slides.pdf)
- [**Recsys2020**] [AutoRec: An Automated Recommender System]() (Demo). Ting-Hsiang Wang, Qingquan Song, **Xiaotian Han**, Zirui Liu, Jin Haifeng, Xia Hu. [code](https://github.com/datamllab/AutoRec)
- [**AAAI2020**] [FlowScope: Spotting Money Laundering Based on Graphs](). Xiangfeng Li, Shenghua Liu, Zifeng Li, **Xiaotian Han**, Chuan Shi, Bryan Hooi, He Huang, Xueqi Cheng.
- [**World Wide Web 2020**] [Embedding geographic information for anomalous trajectory detection](). Ding Xiao, Li Song, Ruijia Wang, **Xiaotian Han**, Yanan Cai, Chuan Shi.
- [**KDD2019**] [Metapath-guided heterogeneous graph neural network for intent recommendation](). Shaohua Fan, Junxiong Zhu, **Xiaotian Han**, Chuan Shi, Linmei Hu, Biyu Ma, Yongliang Li.
- [**TKDE2019**] [Deep collaborative filtering with multi-aspect information in heterogeneous networks](). Chuan Shi, **Xiaotian Han**, Li Song, Xiao Wang, Senzhang Wang, Junping Du, Philip, S Yu.
- [**IJCAI2018**] [Aspect-Level Deep Collaborative Filtering via Heterogeneous Information Networks](https://www.ijcai.org/proceedings/2018/0471.pdf). **Xiaotian Han**, Chuan Shi, Senzhang Wang, S Yu Philip, Li Song. [code](https://github.com/ahxt/NeuACF)
- [**APWeb-WAIM2018**] [Representation learning with depth and breadth for recommendation using multi-view data](http://www.shichuan.org/doc/57.pdf). **Xiaotian Han**, Chuan Shi, Lei Zheng, S Yu Philip, Jianxin Li, Yuanfu Lu. 
- [**ADMA2018**][Anomalous Trajectory Detection Using Recurrent Neural Network](http://shichuan.org/doc/60.pdf). Li Song, Ruijia Wang, Ding Xiao, **Xiaotian Han**, Yanan Cai, Chuan Shi. (<span style="color:red">Best paper award</span>) -->
<!-- - [****][](). -->


- MLPInit: Embarrassingly Simple GNN Training Acceleration with MLP Initialization. [[PDF](https://arxiv.org/pdf/2210.00102.pdf)] 
  - **Xiaotian Han**, Tong Zhao, Yozen Liu, Xia Hu, Neil Shah
  - ICLR2023, Work done during the internship at Snap Research

- G-Mixup: Graph Augmentation for Graph Classification. [[PDF](https://arxiv.org/abs/2202.07179)] 
  - **Xiaotian Han**, Zhimeng Jiang, Ninghao Liu, Xia Hu.
  - ICML2022,  <span style="color:red">Outstanding Paper Award</span>

- Generalized Demographic Parity for Group Fairness. [[PDF](https://openreview.net/pdf?id=YigKlMJwjye)] 
  - Zhimeng Jiang, **Xiaotian Han**, Chao Fan, Fan Yang, Ali Mostafavi, Xia Hu.
  - ICLR2022 

- Geometric Graph Representation Learning via Maximizing Rate Reduction. [[PDF](https://doi.org/10.1145/3485447.3512170)] [[SLIDES](/files/WWW2022_slides.pdf)] [[CODE](https://github.com/ahxt/G2R)]
  - **Xiaotian Han**, Zhimeng Jiang, Ninghao Liu, Qingquan Song, Jundong Li, Xia Hu. 
  - TheWebConf2022

- AutoRec: An Automated Recommender System. [[PDF](https://dl.acm.org/doi/abs/10.1145/3383313.3411529)] [[CODE](https://github.com/datamllab/AutoRec)]
  - Ting-Hsiang Wang, Qingquan Song, **Xiaotian Han**, Zirui Liu, Jin Haifeng, Xia Hu. 
  - Recsys2020, Demo

- FlowScope: Spotting Money Laundering Based on Graphs. [[PDF](https://ojs.aaai.org/index.php/AAAI/article/view/5906)]
  - Xiangfeng Li, Shenghua Liu, Zifeng Li, **Xiaotian Han**, Chuan Shi, Bryan Hooi, He Huang, Xueqi Cheng.
  - AAAI2020

- Embedding Geographic Information for Anomalous Trajectory Detection. [[PDF](https://link.springer.com/article/10.1007/s11280-020-00812-z)]
  - Ding Xiao, Li Song, Ruijia Wang, **Xiaotian Han**, Yanan Cai, Chuan Shi.
  - World Wide Web 2020

- Metapath-guided Heterogeneous Graph Neural Network for Intent Recommendation. [[PDF](https://dl.acm.org/doi/abs/10.1145/3292500.3330673)] 
  - Shaohua Fan, Junxiong Zhu, **Xiaotian Han**, Chuan Shi, Linmei Hu, Biyu Ma, Yongliang Li.
  - KDD2019

- Deep Collaborative Filtering with Multi-aspect Information in Heterogeneous Networks. [[PDF](https://arxiv.org/abs/1909.06627)]
  - Chuan Shi, **Xiaotian Han**, Li Song, Xiao Wang, Senzhang Wang, Junping Du, Philip, S Yu.
  - TKDE2019

- Aspect-Level Deep Collaborative Filtering via Heterogeneous Information Networks. [[PDF](https://www.ijcai.org/proceedings/2018/0471.pdf)]  [[CODE](https://github.com/ahxt/NeuACF)]
  - **Xiaotian Han**, Chuan Shi, Senzhang Wang, S Yu Philip, Li Song. 
  - IJCAI2018

- Representation Learning with Depth and Breadth for Recommendation using Multi-view Data. [[PDF](http://www.shichuan.org/doc/57.pdf)] 
  - **Xiaotian Han**, Chuan Shi, Lei Zheng, S Yu Philip, Jianxin Li, Yuanfu Lu. 
  - APWeb-WAIM2018

- Anomalous Trajectory Detection Using Recurrent Neural Network. [[PDF](http://shichuan.org/doc/60.pdf)]
  - Li Song, Ruijia Wang, Ding Xiao, **Xiaotian Han**, Yanan Cai, Chuan Shi. 
  - ADMA2018, <span style="color:red">Best Paper Award</span>

- Do We Really Achieve Fairness with Explicit Sensitive Atrributes? 
  - Xiaotian Han, Zhimeng Jiang, Ninghao Liu, Na Zou, Qifan Wang, Xia Hu 
  - Under review, 2022

- Marginal Nodes Matter: Towards Structure Fairness in Graphs.
  - Xiaotian Han, Kaixiong Zhou, Ting-Hsiang Wang, Jundong Li, Fei Wang, Na Zou
  - Under review, 2022

- Retiring ∆DP: New Distribution-Level Metrics for Demographic Parity.
  - Xiaotian Han<sup>\*</sup>, Zhimeng Jiang<sup>\*</sup>, Hongye Jin, Zirui Liu, Na Zou, Qifan Wang, Xia Hu 
  - Under review, 2022

- Fair Graph Message Passing with Transparency.
  - Zhimeng Jiang, Xiaotian Han, Chao Fan, Zirui Liu, Na Zou, Ali Mostafavi, Xia Hu 
  - Under review, 2022

- Topology Matters in Fair Graph Learning: a Theoretical Pilot Study.
  - Zhimeng Jiang, Xiaotian Han, Chao Fan, Zirui Liu, Xiao Huang, Na Zou, Ali Mostafavi, Xia Hu 
  - Under review, 2022


# Internships

- Meta, Menlo Park, CA.  *Sept. 2022 – present*
  - Research Intern
  - Understanding graph neural networks
  - Work with: [Qifan Wang](https://wqfcr.github.io/)
- Snap Research, Seattle, WA. *Mar. 2022 - Aug. 2022*
  - Research Intern
  - Graph neural network training acceleration.
  - Work with:[Neil Shah](http://nshah.net/), [Tong Zhao](https://tzhao.io/), Yozen Liu
- Microsoft Research Asia, Beijing, China. *Mar. 2019 - May. 2019*
  - Research Intern
  - Hyperparameter Optimization and AutoML.
- Alibaba Group, Hangzhou, China. *Jun. 2018 - Sept. 2018*
  - Research Intern
  - Query recomendataion in Taobao App.


# Educations
- *Aug. 2019 - now*, Ph.D. Student, Computer Science, Texas A&M University.
- *Sept. 2016 - Jun. 2019*, Master Degree, Computer Science, Beijing Univ. of Posts and Telecommunications.
- *Sept. 2011 - Jun. 2015*, Bacheler Degree, Communication Engineering, Shandong University.


<!-- # Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->


# Awards
- *2022*, Outstanding Paper Award, ICML2022
- *2022*, Travel Grant, Department of Computer Science & Engineering, Texas A&M University
- *2022*, Travel Award, ICML2022.
- *2022*, Outstanding Reviewer Award, ICML2022.
- *2020*, Best Reviewer Award, CCF Transactions on Pervasive Computing and Interaction
- *2018*, 1st  National Graduate Scholarship, Beijing University of Posts and Telecommunications, Beijing, China.
- *2017*, 1st  Student Scholarship, Beijing University of Posts and Telecommunications, Beijing, China.


# Professional Acitivities
- Conference Reviewer: IJCAI2023, TheWebConf2023, ICDM2022, AAAI2023, NeurIPS2022, ICML2022, SIGIR2022, AAAI2022, AAAI2021, IJCAI2021
- Session Chair: ICML2022
- Volunteer: ICML2022, NAACL2022

<div class="footer" hidden="hidden">
    <div class="center">
        <a><img src="//clustrmaps.com/map_v2.png?cl=ffffff&w=a&t=m&d=91g_Uih-7fadH9madF_Vex1LQXOVlduL5aeBBSKXgXA&co=2d78ad&ct=ffffff" /></a>
    </div>
</div>


---
Last updated on Dec 11, 2022.


