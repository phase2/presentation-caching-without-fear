---
title: "Cache Clearing Event: Cache Clear All"
---

  <table>
    <tbody>
      <tr>
        <th>Cache Provider</th>
        <th>Cache Clear All</th>
      </tr>
      <tr>
        <td>DB</td>
        <td>Y - immediate and again in min lifetime seconds</td>
      </tr>
      <tr>
        <td>Memcache</td>
        <td>Y - immediate by considering all previously cached items expired</td>
      </tr>
      <tr>
        <td>Varnish</td>
        <td>Defaults to Y - configurable with the 'varnish_cache_clear' variable</td>
      </tr>
      <tr>
        <td>DrupalFakeCache</td>
        <td>N</td>
      </tr>
    </tbody>
  </table>

<div class="presenter-note">
The first cache clearing event is the one that happens when you hit the clear cache button on the performance admin screen. For all of the providers this is a cache clearing event (the N in DrupalFakeCache is because nothing is actually cached when using this one so there is nothing to clear).
</div>
