import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import styles from './Player.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Player() {
  const [video, setVideo] =  useState();
  const parametros = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/jenifercsg/cinetag-api/videos?id=${parametros.id}`)
    .then(resposta => resposta.json())
    .then(dados => {
      setVideo(...dados)
    })
  }, [parametros.id])

  if (!video) {
    return (
      <>
        <Banner imagem="play" />
        <Titulo>
          <h1>Vídeo não encontrado 😔</h1>
        </Titulo>
        <section className={styles.container}>
          <p>O conteúdo que você tentou acessar não existe. Verifique o link ou volte para a página inicial.</p>
        </section>
      </>
    );
  }


  return (
    <>
      <Banner imagem="play" />
      <Titulo>
        <h1>{video.titulo}</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe 
        width="560" 
        height="315" 
        src={video.link}
        title={video.titulo}
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>
    </>
  );
}

export default Player;
