---
title: "Cache Clearing Event: Content Edit"
---

<table>
  <tbody>
    <tr>
      <th>Cache Provider</th>
      <th>Content Editing</th>
    </tr>
    <tr>
      <td>DB</td>
      <td>Y - will clear in min lifetime seconds</td>
    </tr>
    <tr>
      <td>Memcache</td>
      <td>Y - clears anything that was cached more than min lifetime seconds before edit</td>
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
* Content editing
* Difference between memcache and database cache time of clearing
</div>
