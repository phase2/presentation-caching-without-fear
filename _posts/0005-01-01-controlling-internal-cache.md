---
title: "Controlling Caching"
---

* DrupalFakeCache
* Expires Header
* drupal_page_is_cacheable
* Cache Tags

<!--
There are many times when the all or nothing nature of page caching and the invalidation system can be very undesirable. There are several techniques that can allow developers more fine grained control of caching.

The DrupalFakeCache class can be substituted in as the cache class of choice when rendering a page that should never get cached internally to Drupal.

Setting the expires header implicitly controls the lifetime of a page in the page cache (it is otherwise considered infinite until a cache clearing event happens). Note that doing this can have ripple effects due to browser caching and webkit based browsers have the following but https://bugs.webkit.org/show_bug.cgi?id=71509

Calling drupal_page_is_cacheable with a false argument will also keep a page from being cached internally to Drupal, but will also keep it out of external caches as well.

Cache Tags?
-->