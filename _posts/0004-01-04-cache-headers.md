---
title: "Communicating with External Cache Systems"
---

* Cache-control
* Expires
* Vary
* Age
* X-Forwarded-For

<div markdown="markdown" class="presenter-note">
  * HTTP Headers in request and response
  * Expiration of cached pages setting is max-age in Cache-Control, value in seconde
    * Request and response Cache-control: max-age=0 from client to ask for recheck
  * Expires header
    * Dries birthday
    * Cache control precedence 
  * The Vary header is a way to tell external caches how they can determine if requests are identical.
    * When it is absent, URL match
    * When present, it lists other HTTP headers that must match the original request.
      * Generally this is set to Vary: Cookie,Accept-Encoding
  * Age
    * Response header, how old the version of the page is in seconds
  * X-Forwarded-For
    * Configure Drupal to use the right IP
      * Conf variables reverse_proxy, reverse_proxy_addresses
      * reverse_proxy_header if accelerator uses something else
</div>