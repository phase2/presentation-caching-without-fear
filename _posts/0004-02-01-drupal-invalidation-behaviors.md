---
title: "Drupal Invalidation Behaviors"
---

* Page cache clearing events
* Drupal cache modules handle them differently
* Drupal cache versus external caches
* Providers
  * DrupalDatabaseCache - default
  * MemCacheDrupal - memcache
  * Varnish -
  * DrupalFakeCache - install

<!--
Now that we briefly detoured into some mechanics of how Drupal and external caches communicate let us return to the internal Drupal page cache and talk about how it operates. Drupal internally uses a mass invalidation system to deal with the page cache and the things that trigger this mass invalidation are what I refer to as page cache clearing events.

The gotcha is that what constitutes a cache clearing event depends on what caching backend/provider you are using. It is also important to stress that just because a page has been cleared internally to the Drupal system, users being served cached pages from systems like Varnish or CDNs will not get the new version of the page until they check back when their max-age period has passed (we will talk more about handling that later).

The class names of providers we are going to talk about are
-->
