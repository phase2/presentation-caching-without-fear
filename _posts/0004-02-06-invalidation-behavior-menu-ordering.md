---
title: "Drupal Invalidation Behaviors"
---

  <table>
    <tbody>
      <tr>
        <th>Cache Provider</th>
        <th><strong>Menu Ordering Adjustment</strong></th>
      </tr>
      <tr>
        <td>DB</td>
        <td>Y - will clear in min lifetime seconds</td>
      </tr>
      <tr>
        <td>Memcache</td>
        <td>Y - clears anything that was cached more than min lifetime seconds before edit<sup>1</sup></td>
      </tr>
      <tr>
        <td>Varnish</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>DrupalFakeCache</td>
        <td>&nbsp;</td>
      </tr>
    </tbody>
  </table>

<div class="presenter-note">
  Mention memcache menu cache clearing bug
</div>
