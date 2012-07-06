---
title: Caching Levels
---

* Filesystem buffer cache
* MySQL Cache
* Bytecode Cache (APC)
* PHP Language Caches (static)
* Drupal Caches
  * drupal_static
  * cache_set, cache_get
* Accelerators
  * Boost
  * Varnish/Nginx/etc
* Content Delivery Networks
  * CloudFront
  * Akamai

<!--
Caching is pervasive in computing even when you aren't the one that's doing it.
Many operating systems will use spare ram to cache files off of disk.
MySQL will cache the results of queries, data read out of tables (need to get the config item that controls this)
Since PHP is an interpreted language (and reads a lot of files off the filesystem), we often use bytecode caches like APC to prevent the need for the interpreter to recompile scripts
The languages we use often offer some facility for caching data themselves within a processing cycle (static function variables in PHP for example)
Our framework expands on these to provide a different level of access with drupal_static and also allows for more persistent caching via cache_set and cache_get
We use accelerators (or reverse proxy servers) to cache the results of requests so that we do not have to ask Drupal about them again (and boost is kind of forced into this list, it sits somewhere between a contributed drupal cache and an accelerator)
We use content delivery networks to not only perform the same function as accelerators but to also reduce the physical distance between end users and the machines returning them content.

So you can see, caching is pervasive, but we are going to focus on a few items from the above list today
-->