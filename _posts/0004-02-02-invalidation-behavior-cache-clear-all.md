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
* Cache Clear All
* Hit the clear cache button on the performance screen
* For the user clearing, DB is immediate (by considering anything cached before clear invalid)
  * Sets cache_flush_BIN variable which garbageCollection triggers actual flush after min lifetime
</div>
