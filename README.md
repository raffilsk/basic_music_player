# Basic Musical Player

Este Player é um prototipo básico para testas as funções de audio disponiveis no HTML5.

Os códigos estão bem simples e intuitivos, é uma base para teste ou começar a desenvolver um player mais robusto.


### Techs

- Html
- Css
- JavaScrip

#### HTML
```
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="player">
    <h4><i class="material-icons">equalizer</i>MPlayer</h4>
    <div class="card">
      <div class="card-image"></div>
      <div class="card-content">
        <h5>Title</h5>
        <p class="artist">Artist</p>
        <audio controls></audio>
      </div>
    </div>
  </div>
  <script src="index.js"></script>  
</body>
</html>
```

#### CSS
```
@import "https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css";

body {
height: 100vh;
background-color: #666;
display: flex;
align-items: center;
justify-content: center;
}
#player {
  background-color: rgba(0, 0 , 0, 0.3);
  width: 90%;
  max-width: 400px;
  color: white;
  box-shadow: 0px 3px 3px 0px rgba(0, 100, 200, 0.3);
}
.card{
  box-shadow: none;
  margin: 0;
  background-color: rgba(0, 0 , 0, 0.1);
}
h4 {
  color: aqua;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.card-image {
  background: url("https://placehold.it/200") no-repeat center center / cover;
  height: 200px;
}
audio {
  width: 100%;
  margin-top: 20px;
}
```

#### JavaScript
```
document.querySelector(".items")
.addEventListener("wheel", event =>{
  if(event.deltaY > 0) {
    event.target.scrollBy(300, 0)
  }else{
    event.target.scrollBy(-300, 0)
  }
})
```


