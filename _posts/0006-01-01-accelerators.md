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
    * `ban req.url == "/news"`
    * `ban obj.X-Url == "/news"`
    * `ban obj.Content-Type ~ "image"`

<div markdown="markdown" class="presenter-note">
* Not as much access to accelerators at times so different strategy
* Eventual consistency model of time to live

  * Expiration of cached pages setting 
  * Controls TTL via max-age of cache control header
* PURGE request (Acquia, Varnish)

  * Header for authorization
  * Expire + Purge module to have Drupal issue these requests
* Telnet control port for Varnish

  * How to issue bans
</div>
