---
title: "Basic Cache Controls"
---

<img src="../images/performance-config-screen.png" align="right">

* Cache pages for anonymous users
* Minimum cache lifetime
* Expiration of cached pages

<!--
On the performance configuration screen there are a few settings that are essential for enabling page caching and controllingthe internal caching behavior of Drupal.

Cache pages for anonymous users - out of the box, Drupal will only cache pages for anonymous users and you can enable that functionality here.

Minimum cache lifetime - this sets a minimum amount of time that an object must have been cached before the cached version can be purged. There are a couple of things to note about this setting. First, it does not apply just to cached pages, this actually applies to all cached items in Drupal. Second, this does not mean that after this amount of time an item will be regenerated, it just means that after this amount of time and object is eligible to be "purged" from the internal Drupal cache. Generally we leave this one unset. (Dig up info on the form bug)

Expiration of cached pages - this one controls how long external caches (proxy servers) are advised that they may serve a page without checking back with Drupal. Again, this one does not mean that items will be regenerated after this amount of time, it just controls how often external systems check back to see if a new version of a page is available.
-->