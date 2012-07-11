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
<!--
Content editing behaves as one would expect (and here I mean editing a node) in terms of a mass invalidation strategy as the page cache is cleared. Note the subtle difference in when items clear, for memcache it is immediate, for DB it is in min lifetime seconds but if you use a zero value for this then they are identical.
-->
