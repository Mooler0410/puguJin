---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

Hi there!

I am an Applied Scientist at Amazon Rufus. I am interested in understanding how foundation models learn.

My research focuses on the training dynamics of large language models, particularly sparse/Mixture-of-Experts (MoE) models and long-context training. At Amazon, I have worked on the pretraining of 100B–800B ultra-sparse MoE models, including expert learning dynamics, training stability, and long-context scaling.
More recently, I have been extending this work to post-training and reinforcement learning, with a focus on SFT/RL infrastructure, data curation, and how training dynamics change beyond pretraining.

I received my Ph.D. in Computer Science from Texas A&M University, advised by Prof. Xia (Ben) Hu, and my B.E. in Computer Science from Peking University.

# Experience

<ul class="experience-list">
  <li><div><strong>B.E. in Computer Science</strong> · Peking University</div><span class="experience-date">2015–2020</span></li>
  <li><div><strong>Ph.D. in Computer Science</strong> · Texas A&amp;M University</div><span class="experience-date">2020–2025</span></li>
  <li><div><strong>Applied Scientist</strong> · Amazon Rufus</div><span class="experience-date">2025–present</span></li>
</ul>

# News

{% include news.html %}

# Selected Works

<div class="selected-works">
  <h2>Pretraining</h2>
  <ul class="works-list">
    <li>
      <p class="work-topic">Ultra-sparse MoE training</p>
      <h3>Mitigate Silent Expert Death in Ultra-Sparse MoE</h3>
      <p class="work-meta"><a href="{{ '/blog/llal/' | relative_url }}" target="_self">Blog</a></p>
      <p class="work-description">Understanding expert collapse in lower MoE layers and mitigating it with early auxiliary LM supervision (LLAL).</p>
    </li>
    <li>
      <p class="work-topic">Long-context modeling · SelfExtend</p>
      <h3>LLM Maybe LongLM: Self-Extend LLM Context Window Without Tuning</h3>
      <p class="work-meta">ICML 2024 · <strong>Spotlight</strong> · <a href="https://arxiv.org/abs/2401.01325">Paper</a></p>
      <p class="work-description">Extending LLM context windows at inference time without fine-tuning.</p>
    </li>
  </ul>
  <h2>Post-training</h2>
  <ul class="works-list">
    <li>
      <h3>Stepwise Penalization for Length-Efficient Chain-of-Thought Reasoning</h3>
      <p class="work-meta"><a href="https://arxiv.org/abs/2603.00296">Paper</a></p>
      <p class="work-description">Step-level length penalties that reduce redundant reasoning while preserving useful steps.</p>
    </li>
    <li>
      <h3>Process Reward Informed Tree Rollout for Effective Multi-Turn RL</h3>
      <p class="work-meta"><a href="https://arxiv.org/abs/2607.15610">Paper</a></p>
      <p class="work-description">Using process feedback to guide tree rollouts and explore promising intermediate states in multi-turn agent RL.</p>
    </li>
    <li>
      <h3>CoMem: Context Management with A Decoupled Long-Context Model</h3>
      <p class="work-meta"><a href="https://arxiv.org/abs/2605.30842">Paper</a></p>
      <p class="work-description">Decoupling memory management from agent reasoning so context summarization and inference can run in parallel.</p>
    </li>
  </ul>
</div>

<p class="collaboration-note">Feel free to <a href="mailto:{{ site.author.email }}" target="_self">reach out</a> for collaborations, discussions, or opportunities.</p>

<p class="homepage-updated">Last updated on September 29, 2026.</p>
