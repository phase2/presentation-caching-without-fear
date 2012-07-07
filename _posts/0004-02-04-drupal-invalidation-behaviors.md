---
title: "Drupal Invalidation Behaviors"
---

  <table class="confluenceTable">
    <tbody>
      <tr>
        <th class="confluenceTh">Cache Provider</th>
        <th class="confluenceTh">Content Editing</th>
      </tr>
      <tr>
        <td class="confluenceTd">DB</td>
        <td class="confluenceTd">Y - will clear in min lifetime seconds</td>
      </tr>
      <tr>
        <td colspan="1" class="confluenceTd">Memcache</td>
        <td colspan="1" class="confluenceTd">Y - clears anything that was cached more than min lifetime seconds before edit</td>
      </tr>
      <tr>
        <td colspan="1" class="confluenceTd">Varnish</td>
        <td colspan="1" class="confluenceTd"><p><span>Defaults to Y - c</span>onfigurable with the 'varnish_cache_clear' variable</p></td>
      </tr>
      <tr>
        <td colspan="1" class="confluenceTd"><a href="http://drupal.org/node/797346" class="external-link" rel="nofollow">DrupalFakeCache</a></td>
        <td colspan="1" class="confluenceTd">N</td>
      </tr>
    </tbody>
  </table>

