---
title: Caching Levels
---

<div markdown="markdown" style="float: left; padding: 10px;">
* Filesystem buffer cache
* MySQL Cache
* Bytecode Cache (APC)
* PHP Language Caches (static)
* Drupal Caches
  * drupal_static
  * cache_set, cache_get
</div>

<div markdown="markdown" style="padding: 10px;">
* Accelerators
  * Boost
  * Varnish/Nginx/etc
* Content Delivery Networks
  * CloudFront
  * Akamai
</div>

<div markdown="markdown" class="presenter-note">
* Caching is pervasive
* Operating systems use spare RAM for filesystem cache

  * LinuxAteMyRam
* MySQL Caches

  * Buffer pools (table data)
  * Query cache
* Bytecode - APC, Zend, XCache

  * No need to read files off of disk again
  * No need to compile PHP to bytecode again
* Language caches intrarequest

  * Static variables in C and PHP, scope
  * Only persists during single request cycle
* Drupal

  * Drupal fixes scope with drupal_static and reference return
  * Persistent caching via cache_set and cache_get

    * More on these later
* Accelerators 

  * Page caching
  * External to Drupal
  * Boost is kind of forced into this list, between a drupal cache and an accelerator

    * Combine with rsync or fileconveyer and external serving system
* Content Delivery Networks

  * Multiple distributed accelerators as a business model
  * Reduce physical distance between user and server
* Next slide - what we are going to focus on
</div>