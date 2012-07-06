---
title: "Why Caching Is Hard"
---

“There are only two hard problems in Computer Science: cache invalidation, naming things and off-by-one errors.” 

-- Phil Karlton

<!--
So caching is complex, and it is complex because primarily because of the coordination needed between all of the systems so that each one knows when what it has cached is no longer any good. The invalidation problem. The more resources it takes to manage your cache compared to having no caching, the less valuable it becomes.

Lets think about one of the simplest Drupal sites. A blog with a most popular posts block. Now, if you update the title of one of your posts, which pages might need to get regenerated.

Well, the post page itself, thats easy
The front page if its still on it, the paginated page it does show on if it is not.
If it is one of your popular posts, then every page that has a popular posts block on it.

So even in this very simple case a small change can lead to a lot of cache invalidation. And some of those calculations are not trivial to compute because Drupal generally lacks data about where items are displaying and the systems we use (like views, and panels, and context, and arbitrary PHP, just make that problem even more difficult.

-->