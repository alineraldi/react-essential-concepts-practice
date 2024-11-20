// 8. Galeria de Imagens com Visualização Detalhada: Crie uma galeria simples com uma lista de imagens. Quando o usuário clica em uma imagem, exiba-a em uma visualização ampliada em um modal. Use useState para armazenar a imagem selecionada e renderize o modal condicionalmente. Desafio: adicione um botão de “Fechar” no modal e uma funcionalidade de navegação entre as imagens.

import { useState, useEffect } from "react";

function ImageGallery() {
  // Estado para armazenar as imagens
  const [images, setImages] = useState([]);
  // Estado para armazenar o índice da imagem selecionada (null se nenhuma imagem for selecionada)
  const [selectedImage, setSelectedImage] = useState(null);


 // useEffect que carrega as imagens assim que o componente é montado, e dados das imagens, que normalmente viriam de uma API, mas quis imagens personalizadas
  useEffect(() => {    
    const fetchImages = async () => {
      const data = [
        {
          id: 1,
          thumbnailUrl: 'https://images.unsplash.com/photo-1579762715459-5a068c289fda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlyZHN8ZW58MHx8MHx8fDA%3D',
          url: 'https://images.unsplash.com/photo-1579762715459-5a068c289fda?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Boston Public Library'
        },
        {
          id: 2,
          thumbnailUrl: 'https://images.unsplash.com/photo-1579762714453-51d9913984e2?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          url: 'https://images.unsplash.com/photo-1579762714453-51d9913984e2?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Boston Public Library'
        },
        {
            id: 3,
            thumbnailUrl: 'https://images.unsplash.com/photo-1579273168832-1c6639363dad?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            url: 'https://images.unsplash.com/photo-1579273168832-1c6639363dad?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'McGill Library'
        },
        {
            id: 4,
            thumbnailUrl: 'https://images.unsplash.com/photo-1580192985029-9b0e4679a180?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            url: 'https://images.unsplash.com/photo-1580192985029-9b0e4679a180?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Museums Victoria'
        },
        {
          id: 5,
          thumbnailUrl: 'https://plus.unsplash.com/premium_photo-1667238774363-631bb654e185?q=80&w=409&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          url: 'https://plus.unsplash.com/premium_photo-1667238774363-631bb654e185?q=80&w=409&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Penguin'
        },
        {
          id: 6,
          thumbnailUrl: 'https://images.unsplash.com/photo-1578763460789-324a7fcc0ee2?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          url: 'https://images.unsplash.com/photo-1578763460789-324a7fcc0ee2?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'McGill Library'
        },
        {
            id: 7,
            thumbnailUrl: 'https://images.unsplash.com/photo-1708765972446-f07eb5ccfc67?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            url: 'https://images.unsplash.com/photo-1708765972446-f07eb5ccfc67?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Museum of Australia'
        },
        {
            id: 8,
            thumbnailUrl: 'https://images.unsplash.com/photo-1708766056938-2d7c37cea5aa?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            url: 'https://images.unsplash.com/photo-1708766056938-2d7c37cea5aa?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'National Library of Australia'
        },
        {
          id: 9,
          thumbnailUrl: 'https://images.unsplash.com/photo-1709232584134-d259fbf93522?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          url: 'https://images.unsplash.com/photo-1709232584134-d259fbf93522?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Boston Public Library'
      },
      {
          id: 10,
          thumbnailUrl: 'https://images.unsplash.com/photo-1710432157365-da2dc13deac3?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          url: 'https://images.unsplash.com/photo-1710432157365-da2dc13deac3?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Boston Public Library'
      },        

      ];
      // Atualiza o estado com as imagens
      setImages(data);
    };
// [] significa que o efeito será executado uma vez, logo após o componente ser montado
    fetchImages();
  }, []);

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showPrevImage = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }

  const showNextImage = () => {
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }


  return (
    <div>
      <h1 style={{ fontFamily: 'serif' }}>The Bird Gallery 🦃</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: 'center' }}>
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.thumbnailUrl}
            alt={image.title}
            style={{ cursor: "pointer", width: "100px", height: "100px", objectFit: "cover" }}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {selectedImage !== null && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <img
            src={images[selectedImage].url}
            alt={images[selectedImage].title}
            style={{ maxWidth: "80%", maxHeight: "60%" }}
          />
          <label for="cuteness" style={{ marginTop: '1rem' }}>Is it a cute picture? </label>
          <select id="cuteness" style={{ padding: '1.5rem', marginTop: '1rem', width: '30%', fontSize: '1.5rem', fontFamily: 'Orbitron'}}>
            <option> </option>
            <option>Yes</option>
            <option>Yes</option>
          </select>
          <p><button style = {{ marginRight: '1rem' }} onClick={showPrevImage}>←</button>
          <button onClick={showNextImage}>→</button></p>
          <button
            onClick={closeModal}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "white",
              color: "black",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
