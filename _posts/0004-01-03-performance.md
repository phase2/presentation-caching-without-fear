---
title: "Basic Cache Controls"
---

<img src="images/performance-config-screen.png" align="right">

* Cache pages for anonymous users
* Minimum cache lifetime
* Expiration of cached pages

<div markdown="markdown" class="presenter-note">
* Cache pages for anonymous users
  * Must enable for page caching
  * Does not affect other caches
* Block Cache
* Minimum cache lifetime - this sets a minimum amount of time that an object must have been cached before the cached version can be purged
  * Not just for pages, for all items
  * Not regenerated after, purge eligible after
  * Generally leave at none
* Expiration of cached pages - this one controls how long external caches (proxy servers) are advised that they may serve a page without checking back with Drupal. 
  * Again, it just controls how often external systems check back to see if a new version of a page is available.
  * This brings us to how Drupal communicates with proxy servers
</div>