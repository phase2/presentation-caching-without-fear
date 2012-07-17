---
title: "Controlling Caching"
---

* drupal_page_is_cacheable
* DrupalFakeCache
* Expires Header
* Cache Tags

<div class="presenter-note">
* Mechanisms offering more fine grained cache control to developers
* drupal_page_is_cacheable(false) argument will also keep a page from being cached internally to Drupal, but will also keep it out of external caches as well.
* The DrupalFakeCache class can be substituted in as the cache class of choice when rendering a page that should never get cached internally to Drupal.
* Setting the expires header implicitly controls the lifetime of a page in the page cache
  * Otherwise considered infinite (technically temporary - and a cache clearing event happens)
  * Note that doing this can have ripple effects due to browser caching and webkit based browsers have the following but https://bugs.webkit.org/show_bug.cgi?id=71509
* Cache Tags - associate cache items with meta data
  * cache invalidate called on the meta data
  * node example
</div>