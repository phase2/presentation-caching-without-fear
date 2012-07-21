---
title: "Cache Clearing Event: Cron"
---

<table>
  <tbody>
    <tr>
      <th>Cache Provider</th>
      <th>Cron</th>
    </tr>
    <tr>
      <td>DB</td>
      <td>Y - will clear in min lifetime seconds</td>
    </tr>
    <tr>
      <td>Memcache</td>
      <td>N</td>
    </tr>
    <tr>
      <td>Varnish</td>
      <td>Defaults to N - configurable with the 'varnish_flush_cron' variable</td>
    </tr>
    <tr>
      <td>DrupalFakeCache</td>
      <td>N</td>
    </tr>
  </tbody>
</table>

<div markdown="markdown" class="presenter-note">
* Cron is one of the cache clearing events where the behavior between backends differs substantially
  * Memcache uses a debug backtrace to see if cache_clear_all was called with no arguments
</div>
