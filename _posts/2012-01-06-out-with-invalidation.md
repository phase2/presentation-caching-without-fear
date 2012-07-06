---
title: "Down with Invalidation"
---

* Mass invalidation
* Time To Live

<!--
So, invalidation is hard, which is why caching is hard. So some common shortcuts are taken.

The first is mass invalidation, which basically means when some data changes, anything that could even remotely be affected is chucked out the window. This is the strategy Drupals page caching uses when you edit content. Since that content could appear anywhere, all pages are considered invalid (more on that later). The problem with this is that it usually invalidates a large amount of cached data needlessly.

A second strategy, and this one is typically used with accelerators is to not worry about invalidation and just increase the frequency with which you check back for fresh data. You can think of this as an eventual consistency model.

Ok, now that we know why caching is hard and which levels of caching we're going to worry about let's start talking about how to control it and make it easier. Starting with the internal Drupal caches (and primarily we're going to talk about the page cache)
-->