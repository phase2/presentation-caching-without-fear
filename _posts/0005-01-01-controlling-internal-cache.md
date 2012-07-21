---
title: "Controlling Caching"
---

* drupal_page_is_cacheable
* DrupalFakeCache
* Expires Header
* Cache Tags

<div markdown="markdown" class="presenter-note">
* Mechanisms offering more fine grained cache control to developers
* drupal_page_is_cacheable(false) argument will also keep a page from being cached internally to Drupal

  * Keeps it out of external caches as well.
  * With no arguments, asks if page is cacheable
* The DrupalFakeCache class 

  * Substituted in as the cache class of choice when rendering a page that should never get cached internally to Drupal.
* Setting the expires header implicitly controls the lifetime of a page in the page cache

  * Otherwise considered infinite (technically temporary - and a cache clearing event happens)
  * Note that doing this can have ripple effects due to browser caching and webkit based browsers have the following but https://bugs.webkit.org/show_bug.cgi?id=71509
  * Dries Birthday
* Cache Tags - associate cache items with meta data

  * cache invalidate called on the meta data
  * node example
</div>