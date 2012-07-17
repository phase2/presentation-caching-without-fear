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

<div class="presenter-note">
  <ul>
    <li>Caching is pervasive in computing even when you aren't the one that's doing it.</li>
    <li>Operating systems use spare RAM for filesystem cache</li>
    <li>MySQL query cache, innodb buffer pool cache</li>
    <li>Prevent need to re-read files and recompile via bytecode caches</li>
    <li>Language caches within a processing cycle (static function variables in PHP for example)
      <ul>
        <li>Drupal expands access with drupal_static</li>
        <li>Persistent caching via cache_set and cache_get</li>
      </ul>
    </li>
    <li>Accelerators/Reverse Proxy Servers - cache results of requests so that we do not have to ask Drupal about them again
      <ul>
        <li>Boost is kind of forced into this list, between a contributed drupal cache and an accelerator</li>
      </ul>
    </li>
    <li>We use content delivery networks - accelerators and reduce the physical distance between end users and content</li>
    <li>Next slide - what we are going to focus on</li>
  </ul>
</div>