---
title: "Why Caching Is Hard"
---

“There are only two hard problems in Computer Science: cache invalidation, naming things and off-by-one errors.” 

-- Phil Karlton

<div markdown="markdown" class="presenter-note">
* Caching is complex because of invalidation

  * Simple drupal site example - blog with most popular posts block

    * title change on one page leads to regeneration of
    * page itself, front page, paginated page, every page with popular posts block if popular
* Drupal generally lacks data about where items are displaying 

  * views, and panels, and context, and arbitrary PHP make that problem even more difficult.
* Resource usage to determine invalidation must be efficient
</div>