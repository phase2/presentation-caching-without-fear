---
title: "Communicating with External Cache Systems"
---

* Cache-control
* Expires
* Vary
* Age
* X-Forwarded-For

<!--
Drupal communicates with external caches, and caches communicate with you, via a variety of HTTP headers.

The expiration of cached pages setting on the performance screen actually results setting the max-age portion of the Cache-Control response header. Values are in seconds.

Older caches (and browser caches - need to confirm which these still apply to) pay attention to the Expires header which in Drupal is by default set to Dries birthday. The cache control header takes precedence over the expires header for caches which understand it.

The Vary header is a way to tell external caches how they can determine if requests are identical. When it is absent, it is assumed that any request for an identical URL may be served from the cache. When present, it lists other HTTP headers that must match the original request in order for that request to be served from the cache. Generally this is set to Vary: Cookie (which is what keeps authenticated users from being served content cached for anonymous users.

X-Forwarded-For is a semi-standard header to let your origin server know which IP address the cache received the request from (otherwise in your origin server logs everything looks like it came from the proxy server IP). This is a chain of IP addressess that is space (or is it comma) separated. NOTE: Look at the D7 processing to see if handling this is built in.

Age is a header many? caches will add to let you know how old the version of the page they delivered is from their perspective (how long since they cached it in seconds).

-->