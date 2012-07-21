---
title: "Drupal Invalidation Behaviors"
---

* Page cache clearing events
* Drupal cache modules handle them differently
* Drupal cache versus external caches
* Providers
  * DrupalDatabaseCache - core
  * MemCacheDrupal - memcache
  * VarnishCache - varnish module
  * DrupalFakeCache - core (install)

<div markdown="markdown" class="presenter-note">
* Back to internal cache behavior
* Drupal uses mass invalidation, what triggers it?

  * Page cache clearing events

    * Caching modules handle them differently
* Without use of other modules, remember this is just clearing the Drupal page cache

  * Working with accelerators will be covered later
* Some common providers

  * DrupalDatabaseCache
  * MemCacheDrupal

    * Drupal 7.12, Memcache module 7.x-1.0, Varnish module 7.x-1.0, PHP Memcache module 3.0.4 $Revision: 1.83.2.36 $, Memcache server 1.4.2

  * VarnishCache
  * DrupalFakeCache
</div>
