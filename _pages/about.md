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

<span style="color:red">**I am actively seeking an internship position for 2024, available in Spring, Summer, and Fall. Please kindly [contact me](mailto:jhy0410@tamu.edu) if there is a good fit.**</span>

My research interests lie in LLMs, the general area of machine learning.



# News
- *2024.01*: Our new paper about LLMs' context window extention is now avaivale at Arxiv: [LLM Maybe LongLM: Self-Extend LLM Context Window Without Tuning](https://arxiv.org/abs/2401.01325). We propose Self-Extend to **elicit LLMs' inherent long context ability without any fine-tuning**. It significantly improve the long contextn performance of LLMs and even can beat many fine-tuning based long-context method!
- *2023.09*: One paper accepted by NeurIPS2023.
- *2023.05*: One paper accepted by TMLR, [Retiring ∆DP](https://openreview.net/forum?id=LjDFIWWVVa)!
- *2023.04*: New preprint [Survey on LLMs](https://arxiv.org/abs/2304.13712)!

<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


<!-- # News
- *2023.05*: One paper accepted by TMLR, [Retiring ∆DP](https://openreview.net/forum?id=LjDFIWWVVa)! -->
<!-- - *2023.05*: Thrilled to start my internship at Amazon. -->
<!-- - *2023.04*: New preprint [Survey on LLMs](https://arxiv.org/abs/2304.13712)! -->

<!-- # Selected Publications  -->

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='../images/500x300.png' alt="sym" width="100%"></div></div>
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
- LLM Maybe LongLM: Self-Extend LLM Context Window Without Tuning [[PDF]](https://arxiv.org/abs/2401.01325s)
  - **Hongye Jin**<sup>\*</sup>, Xiaotian Hann<sup>\*</sup>, Jingfeng Yang, Zhimeng Jiang, Zirui Liu, Chia-Yuan Chang, Huiyuan Chen, Xia Hu
  - Preprint, 2024
- Learning Alignment and Compactness in Collaborative Filtering
  - Huiyuan Chen, Vivian Lai, **Hongye Jin**, Zhimeng Jiang, Mahashweta Das, Xia Hu
  - WSDM2024
- Chasing Fairness under Distribution Shift: a Model Weight Perturbation Approach [[PDF]](https://arxiv.org/pdf/2303.03300.pdf)
  - Zhimeng Jiang<sup>\*</sup>, Xiaotian Han<sup>\*</sup>, **Hongye Jin**, Guanchu Wang, Rui Chen, Na Zou, Xia Hu.
  - NeurIPS2023

- Retiring ∆DP: New Distribution-Level Metrics for Demographic Parity. [[PDF]](https://arxiv.org/pdf/2301.13443.pdf)
  - Xiaotian Han<sup>\*</sup>, Zhimeng Jiang<sup>\*</sup>, **Hongye Jin**<sup>\*</sup>, Zirui Liu, Na Zou, Qifan Wang, Xia Hu 
  - TMLR, 2023

- Harnessing the Power of LLMs in Practice: A Survey on ChatGPT and Beyond [[PDF]](https://arxiv.org/pdf/2304.13712.pdf)  [[Github]](https://github.com/Mooler0410/LLMsPracticalGuide) 
  - Jingfeng Yang<sup>\*</sup>, **Hongye Jin**<sup>\*</sup>, Ruixiang Tang<sup>\*</sup>, Xiaotian Han<sup>\*</sup>, Qizhang Feng<sup>\*</sup>, Haoming Jiang, Bing Yin, Xia Hu
  - Preprint, 2023

- Exposing Model Theft: A Robust and Transferable Watermark for Thwarting Model Extraction Attacks 
  - Ruixiang Tang, **Hongye Jin**, Mengnan Du, Curtis Wigington, Rajiv Jain, and Xia Hu 
  - CIKM(short)

- Disentangled graph collaborative filtering [[PDF]](https://arxiv.org/pdf/2007.01764.pdf)
  - Xiang Wang, **Hongye Jin**, An Zhang, Xiangnan He, Tong Xu, Tat-Seng Chua
  - SIGIR, 2020.

- Transferring Fairness under Distribution Shift without Sensitive Information
  - **Hongye Jin**, Fan Yang, Cecilia Tilli, Saumitra Mishra, Xia Hu
  - Under Review
  
- GrowLength: Accelerating LLMs Pretraining by Progressively Growing Training Length [[PDF]](https://arxiv.org/pdf/2310.00576.pdf)
  - **Hongye Jin**<sup>\*</sup>, Xiaotian Han<sup>\*</sup>, Jingfeng Yang, Zhimeng Jiang, Chia-Yuan Chang, Xia Hu
  - Preprint, 2023

- Towards Mitigating Dimensional Collapse of Representations in Collaborative Filtering 
  - Huiyuan Chen, Vivian Lai, Zhimeng Jiang, **Hongye Jin**, Chin-Chia Michael Yeh, Yan Zheng, Xia Hu and Hao Yang
  - Under Review

- Gradient Rewiring for Editable Graph Neural Network Training
  - Zhimeng Jiang, Zirui Liu, Xiaotian Han, Qizhang Feng, **Hongye Jin**, Qiaoyu Tan, Kaixiong Zhou, Na Zou, Xia Hu
  - Under Review





# Internships
- Visa Research, Palo Alto, CA.  *Sept 2022 – Dec 2022*
  - Research Intern
  - Out-of-distribution Generalization of Graph Neural Networks
  - Work with [Huiyuan Chen](https://scholar.google.com/citations?user=3T86-rYAAAAJ&hl=en), [Hao Yang](https://scholar.google.com/citations?hl=en&user=BUBXsWgAAAAJ).

- Damo Academy, Alibaba, Beijing, China. *Dec. 2020 - Feb. 2021*
  - Research Intern
  - Weak/distant-supervised learning for NLP. 


# Educations
- *Aug. 2020 - now*, Ph.D. Student, Computer Science, Texas A&M University.
- *Sept. 2015 - July. 2020*, Bacheler Degree, Computer Science, Peking University.


<!-- # Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->


<!--
# Awards
- *2022*, Outstanding Paper Award, ICML2022
- *2022*, Travel Grant, Department of Computer Science & Engineering, Texas A&M University
- *2022*, Travel Award, ICML2022.
- *2022*, Outstanding Reviewer Award, ICML2022.
- *2020*, Best Reviewer Award, CCF Transactions on Pervasive Computing and Interaction
- *2018*, 1st  National Graduate Scholarship, Beijing University of Posts and Telecommunications, Beijing, China.
- *2017*, 1st  Student Scholarship, Beijing University of Posts and Telecommunications, Beijing, China. -->


# Professional Acitivities
- Conference Reviewer: WWW'23, KDD'23, ICDM'22, NeurIPS'23, AAAI'24
- Journal Reviewer: ACM Transactions on Intelligent Systems and Technology

<div class="footer" >
  <div class="center">
    <a href="https://clustrmaps.com/site/1bx06"  title="Visit tracker"><img src="//www.clustrmaps.com/map_v2.png?d=mNNM1sdP4CnxosU-PUV8oiDb47Rd5qpkzNpWibvHm88&cl=ffffff" /></a>
	</div>
 </div>



---
Last updated on Jan 02, 2024.


