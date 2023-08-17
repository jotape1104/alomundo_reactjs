import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
const [mensagem, setMensagem] = useState(""); // Inicializa o estado
useEffect(() => { // Executa a API
fetch("http://localhost:8000/mensagem")
.then((res) => res.json())
.then((data) => setMensagem(data.mensagem));
}, []);
return ( // Página a ser exibida
<div className="App">
<h1>{mensagem}</h1>
</div>
);
}
export default App
