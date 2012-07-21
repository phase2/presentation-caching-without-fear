---
title: "Drupal Invalidation Behaviors: Menu Item Edit"
---

<table>
  <tbody>
    <tr>
      <th>Cache Provider</th>
      <th>Menu Item Edit</th>
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

<div markdown="markdown" class="presenter-note">
Memcache will clear the page cache but we have seen some issues with it not clearing the menu item cache so when the pages regenerate they do so incorrectly.
</div>
