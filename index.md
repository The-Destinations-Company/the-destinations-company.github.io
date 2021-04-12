---
title: Home
layout: default
---
{% include message-popup.html %}

<header class="header-hero header">
    {% include navigation.html %}
    <div class="hero-content">
        <h1 class="heading-hero">The first spatial aware signage development environment</h1>
        <p class="text-subtitle">You’re working with signage and wayfinding systems? </p>
        <button class="button button-black" onclick="toggleChat()"><span>Let's Chat</span></button>
    </div>
</header>

<section class="focus grid-3 grid-3-divider section-yellow">
    <div class="content-box-small">
        <img height="100" width="100" src="assets/img/shapes/shape-1.svg" alt=""/>
        <h2 class="heading-h4">Focus 1</h2>
        <p class="">Aid designers in analyzing project sites</p>
    </div>
    <div class="content-box-small">
        <img height="100" width="100" src="assets/img/shapes/shape-2.svg" alt=""/>
        <h2 class="heading-h4">Focus 2</h2>
        <p class="">Eliminate repetitive tasks – simplify management of signage databases?</p>
    </div>
    <div class="content-box-small">
        <img height="100" width="100" src="assets/img/shapes/shape-3.svg" alt=""/>
        <h2 class="heading-h4">Focus 3</h2>
        <p class="">Use simulation to preview sign concepts before production?</p>
    </div>
</section>

<section class="vision">
    <div class="">
        <h2 class="heading-h4">Vision</h2>
        <p class="text-xlarge-sofia">Based on the three main areas of focus, we created a vision for the Destinations application.</p>
        <a class="button button-yellow" href="/concept"><span>Learn about the concept</span></a>
    </div>
</section>
<section class="features-collage section-yellow">
    <img loading="lazy" 
src="./assets/img/2907Flow16.png" srcset="assets/img/resized/2907Flow16-2160.png 2160w, assets/img/resized/2907Flow16-1440.png 1440w, assets/img/resized/2907Flow16-720.png 720w" 
alt="Route Creation and sign placement">

    <img loading="lazy" 
src="./assets/img/2907Flow06.png" srcset="assets/img/resized/2907Flow06-2160.png 2160w, assets/img/resized/2907Flow06-1440.png 1440w, assets/img/resized/2907Flow06-720.png 720w"
alt="Route Creation and sign placement">
<img loading="lazy" src="./assets/img/new_sign.png" srcset="assets/img/resized/new_sign-516.png 516w, assets/img/resized/new_sign-344.png 344w, assets/img/resized/new_sign-172.png 172w" alt="Route Creation and sign placement">

    <div>
<img loading="lazy" src="./assets/img/database.png" srcset="assets/img/resized/database-411.png 411w, assets/img/resized/database-274.png 274w, assets/img/resized/database-137.png 137w" alt="">
    </div>
    <div>
<img loading="lazy" src="./assets/img/route.png" srcset="assets/img/resized/route-411.png 411w, assets/img/resized/route-274.png 274w, assets/img/resized/route-137.png 137w" alt="">
</div>
</section>
<section class="insert-section section-white">
    <h1 class="text-xlarge-sofia">Our core features</h1>
    <a class="button button-black" href="features.html"><span>Get an overview</span></a>
</section>

<section class="feature-grid section-white grid-2 grid-2-divider">
    <div class="feature-grid-item content-box-small">
        {% include random-shapes.html%}
        <h2 class="heading-h4"><a href="/features.html#Route">Route Creation</a></h2>
        <p>Keep track of your visitors routes.</p>
    </div>
    <div class="feature-grid-item content-box-small">
        {% include random-shapes.html%}
        <p class="heading-h4"><a href="/features.html#Database">Signage Database</a></p>
        <p>It keeps track of everythig so you don’t have to.</p>
    </div>
    <div class="feature-grid-item content-box-small">
        {% include random-shapes.html%}
        <h2 class="heading-h4"><a href="/features.html#Placement">Signage placement</a></h2>
        <p>Sign placement and exploration made easy.</p>
    </div>
    <div class="feature-grid-item content-box-small">
        {% include random-shapes.html%}
        <h2 class="heading-h4"><a href="/features.html#Simulation">Simulation</a></h2>
        <p>It keeps track of everythig so you don’t have to.</p>
    </div>
</section>

<section class="insert-section section-green">
    <div>
        <h2 class="heading-h4">Next Up</h2>
        <p>This project has been chosen to be part of the goHfG founders initiative. </p>
    </div>
    <a class="button button-black" href="{% post_url 2020-10-11-gohfg %}
"><span>Read the journal entry</span></a>
</section>
