<script>
  import {
    init,
    getLocaleFromNavigator,
    register,
    t,
    locale,
  } from "svelte-intl-precompile";
  register("en", () => import("$locales/en.js"));
  register("de", () => import("$locales/de.js"));

  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator(),
  });

  function setLocale(e) {
    locale.set(e.currentTarget.value);
  }
</script>

<main>
  <div>
    <select on:change={setLocale}>
      <option>en</option>
      <option>de</option>
    </select>
  </div>
  <p>
    {$t("some.id", { values: { x: "YES", y: "NO" } })}
  </p>
  <p>
    {$t("some.other.id")}
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
