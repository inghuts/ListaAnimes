import React from 'react';
import './App.css';
import ListaAnimes from './components/ListaAnimes';
import Modal from './components/Modal';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      animes: [],
      animeAtual: {
        key: '',
        titulo: '',
        ano: '',
        sinopse: '',
        img: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addAnime = this.addAnime.bind(this);

    this.abrirModal = this.abrirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
  }

  //função manipuladora dos campos do formulário de inserção de animes
  handleInput(e) {
    if (e.target.getAttribute('name') == 'titulo') {
      this.setState({
        animeAtual: {
          key: Date.now(),
          titulo: e.target.value,
          ano: this.state.animeAtual.ano,
          sinopse: this.state.animeAtual.sinopse,
          img: this.state.animeAtual.img
        }
      });
    } else if (e.target.getAttribute('name') == 'ano') {
      this.setState({
        animeAtual: {
          key: Date.now(),
          titulo: this.state.animeAtual.titulo,
          ano: e.target.value,
          sinopse: this.state.animeAtual.sinopse,
          img: this.state.animeAtual.img
        }
      });
    } else if (e.target.getAttribute('name') == 'sinopse') {
      this.setState({
        animeAtual: {
          key: Date.now(),
          titulo: this.state.animeAtual.titulo,
          ano: this.state.animeAtual.ano,
          sinopse: e.target.value,
          img: this.state.animeAtual.img
        }
      });
    } else {
      this.setState({
        animeAtual: {
          key: Date.now(),
          titulo: this.state.animeAtual.titulo,
          ano: this.state.animeAtual.ano,
          sinopse: this.state.animeAtual.sinopse,
          img: e.target.value
        }
      });
    }
  }

  //função para adicionar animes à lista
  addAnime(e){
    e.preventDefault();
    const novoAnime = this.state.animeAtual;
    if (this.verificaSeJaExisteAnime(novoAnime) == true) {
      document.getElementById("titulo").value = "";
      document.getElementById("ano").value = "";
      document.getElementById("sinopse").value = "";
      document.getElementById("img").value = "";
    } else if (novoAnime.titulo !== "") {
      const animes = [...this.state.animes, novoAnime];
      this.setState({
        animes: animes,
        animeAtual: {
          key: '',
          titulo: '',
          ano: '',
          sinopse: '',
          img: ''
        }
      })
    } else {
      alert("Por favor, preencha os campos do formulário!");
    }
  }

  //função para verificar se o anime que o usuário está tentando inserir 
  //já se encontra na lista de animes
  verificaSeJaExisteAnime(anime) {
    for (let i=0; i<this.state.animes.length; i++) {
      if (this.state.animes[i].titulo.includes(anime.titulo) == true) {
        alert("O anime já está na sua lista! Tente inserir outro.");
        return true;
      }
    }
  }

  //setando o estado do modal para fechado
  state = {modalAberto: false}

  //função para abrir o modal
  abrirModal() {
    this.setState({modalAberto: true});
  }

  //função para fechar o modal
  fecharModal() {
    this.setState({modalAberto: false});
  }

  render(){
    const {modalAberto} = this.state;
    return (
      <div className="container">
        <h1 className="title">Animes para assistir em 2022</h1>

        <div>
          <ListaAnimes animes = {this.state.animes}></ListaAnimes>
        </div>

        <h2 className="subtitle">Gostaria de adicionar um novo anime na lista?</h2>

        <div class="form-wrapper">
          <input type="text" id="titulo" name="titulo" placeholder="Insira o título do anime" value= {this.state.animeAtual.titulo} onChange={this.handleInput} />
          <input type="text" id="ano" name="ano" placeholder="Insira o ano de lançamento do anime" value= {this.state.animeAtual.ano} onChange={this.handleInput} />
          <textarea name="sinopse" id="sinopse" cols="33" rows="4" placeholder="Insira a sinopse do anime" value= {this.state.animeAtual.sinopse} onChange={this.handleInput} ></textarea>
          <input type="text" id="img" name="img" placeholder="Insira o link da imagem do anime" value= {this.state.animeAtual.img} onChange={this.handleInput} />
          <button onClick={this.addAnime}>Adicionar anime</button>
        </div>
        
        <button onClick={this.abrirModal}>Abrir Modal</button>
        {modalAberto && <Modal onClose={this.fecharModal} />}
      </div>
    );
   }
}
export default App;