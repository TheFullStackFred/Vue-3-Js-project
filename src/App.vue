<template>
  <nav>
    <h1>{{ 'Vue 3 JS Project' }}</h1>
    <ul class="nav-ul">
      <li>
        <RouterLink class="routerlink" to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink class="routerlink" to="/about">About</RouterLink>
      </li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>Copyright © Fredrik Strömberg</footer>
</template>

<style>
body {
  font-family: 'Courier New', Courier, monospace;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: solid white;
  height: 20vh;
  border-bottom: none;
  margin-inline: auto;
  width: 70vw;
}

main {
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 0px auto;
  border: solid white;
  min-height: 73vh;
}

h2 {
  margin-left: 2rem;
}

ul {
  list-style-type: none;
}

.routerlink {
  color: #030e12;
}

.routerlink:hover {
  color: white;
}

.nav-ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: center;
}

footer {
  display: flex;
  justify-content: center;
  margin: auto;
  border: solid white;
  width: 70vw;
  border-top: none;
}
</style>
