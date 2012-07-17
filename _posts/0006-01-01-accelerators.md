---
title: "Accelerators"
---

* Time to live
* PURGE
  * Expire
  * Purge
* Varnish
  * Telnet
  * Ban

<div class="presenter-note">
The mass invalidation techniques that you can use to control page caching internal to the Drupal system get more complex when you start dealing with external caching systems. Often you will not have the access, ability, or really the desire to do a mass invalidation. This is where the time to live aspect of caching comes into play along with more targeted invalidations.

The max-age portion of the Cache control header (remember the expiration of cached pages setting from the performance tab) acts as a maximum time to live. After this, external caches should request a new copy of the page.

Many proxies can be configured to accept a PURGE http request. This is how Acquia hosting works by default. A PURGE request can be issued with some special headers for authorization. The contrib modules expire and purge work together to help issue these requests for the node being edited and try to catch nodes referencing it and related menu entried depending on how you configure it.

For accelerators you host yourself, you usually have a control channel you can use. For example, if you can connect to the varnish control port with telnet you can issue commands to purge items from the cache.
</div>