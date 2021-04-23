---
title: Home
layout: default
---
{% include message-popup.html %}

<header class="header">
    <div class="header-hero responsive-wrap">
    {% include navigation.html %}
    <div class="hero-content">
        <h1 class="heading-hero">The first spatial aware signage <br>development environment</h1>
        <p class="text-subtitle">You’re working with signage and wayfinding systems? </p>
        <button class="button button-black" onclick="toggleChat()"><span>Let's Chat</span></button>
    </div>
    </div>
</header>


<section class="section-yellow">
    <div class="responsive-wrap">
        <div class="focus grid-3 grid-3-divider">
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
        </div>
    </div>
</section>

<section class="section-light-yellow">
    <div class="responsive-wrap">

        <div class="vision">
            <h2 class="heading-h4">Vision</h2>
            <p class="text-xlarge-sofia">Based on the three main areas of focus, we created a vision for the
                Destinations application.</p>
            <a class="button button-yellow" href="/concept"><span>Learn about the concept</span></a>
        </div>
    </div>
</section>
<section class="section-yellow">
    <div class="responsive-wrap features-collage">
        <img loading="lazy"
             src="./assets/img/dest_information_routes_main.png"
             srcset="assets/img/resized/dest_information_routes_main-2160.png 2160w, assets/img/resized/dest_information_routes_main-1440.png 1440w, assets/img/resized/dest_information_routes_main-720.png 720w"
             alt="Route Creation and sign placement">
        <img loading="lazy"
             src="./assets/img/dest_visitor_routes_main.png"
             srcset="assets/img/resized/dest_visitor_routes_main-2160.png 2160w, assets/img/resized/dest_visitor_routes_main-1440.png 1440w, assets/img/resized/dest_visitor_routes_main-720.png 720w"
             alt="Route Creation and sign placement">
        <img loading="lazy" src="./assets/img/dest_create_sign_detail.png"
             srcset="assets/img/resized/dest_create_sign_detail-516.png 516w, assets/img/resized/dest_create_sign_detail-344.png 344w, assets/img/resized/dest_create_sign_detail-172.png 172w"
             alt="Route Creation and sign placement">

        <div>
            <img loading="lazy" src="./assets/img/dest_manage_sign_detail.png"
                 srcset="assets/img/resized/dest_manage_sign_detail-411.png 411w, assets/img/resized/dest_manage_sign_detail-274.png 274w, assets/img/resized/dest_manage_sign_detail-137.png 137w"
                 alt="">
        </div>
        <div>
            <img loading="lazy" src="./assets/img/dest_route_detail.png"
                 srcset="assets/img/resized/dest_route_detail-411.png 411w, assets/img/resized/dest_route_detail-274.png 274w, assets/img/resized/route-137.png 137w"
                 alt="">
        </div>
    </div>
</section>
<section class="section-white">
    <div class="responsive-wrap">
        <div class="insert-section">

        <h1 class="text-xlarge-sofia">Our core features</h1>
        <a class="button button-black" href="features.html"><span>Get an overview</span></a>
        </div>
    </div>
</section>

<section class="section-white ">
    <div class="feature-grid grid-2 grid-2-divider responsive-wrap">
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
    </div>
</section>

<section class="section-green">
    <div class="responsive-wrap">
        <div class="insert-section">
            <div>
                <h2 class="heading-h4">Next Up</h2>
                <p>This project has been chosen to be part of the goHfG founders initiative. </p>
            </div>
            <a class="button button-black" href="{% post_url 2020-10-11-gohfg %}
"><span>Read the journal entry</span></a>
        </div>
    </div>
</section>
