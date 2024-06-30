<template>
  <main>
    <div class="overlay">
      <div class="modal">
        <textarea name="note" id="note" rows="10"> </textarea>
        <button class="modal-btn">Add Note</button>
        <button class="close">close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button>+</button>
      </header>
      <div class="cards-container">
        <div class="card">
          <p class="main-tex">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            delectus.
          </p>
          <p class="date">30/10/2024</p>
        </div>
        <div class="card">
          <p class="main-tex">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            delectus.
          </p>
          <p class="date">30/10/2024</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}
.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}

header button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: white;
  color: black;
  border-radius: 100%;
  font-size: 20px;
}
.card {
  width: 250px;
  height: 250px;
  background-color: white;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-left: 20px;
}
.main-tex {
  color: black;
}
.date {
  font-size: 12px;
  color: black;
  font-weight: bold;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0, 77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  width: 1050px;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.modal-btn {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
  background-color: blueviolet;
}
.modal .close {
  background-color: red;
  margin-top: 7px;
  font-size: 20px;
  color: white;
  padding: 10px 20px;
}
</style>
