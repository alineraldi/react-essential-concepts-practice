import { useState } from "react";

// Função principal do componente Tabs
function Tabs() {
  // Estado que guarda qual aba está ativa. O valor inicial é 'earth'
  const [activeTab, setActiveTab] = useState('earth');

  // Função chamada quando uma aba é clicada. Ela atualiza o estado activeTab com o nome da aba clicada.
  const handleTabClick = (tab) => {
    setActiveTab(tab); // Atualiza o estado para a aba clicada
  };

  return (
    <div>
      {/* Container das abas, com estilo para exibir em linha (flexbox) */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        {/* Aba "home" */}
        <div
          onClick={() => handleTabClick('earth')} // Chama handleTabClick ao clicar na aba
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            // Aplica uma borda azul embaixo da aba ativa e altera o peso da fonte
            borderBottom: activeTab === 'earth' ? '2px solid blue' : 'none',
            fontWeight: activeTab === 'earth' ? 'bold' : 'normal',
            // Transição suave para a borda e peso da fonte
            transition: 'border-bottom 0.8s ease, font-weight 0.3s ease',
          }}
        >
          home
        </div>

        {/* Aba "leave earth" */}
        <div
          onClick={() => handleTabClick('neptune')} // Chama handleTabClick ao clicar na aba
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            // Aplica uma borda azul embaixo da aba ativa e altera o peso da fonte
            borderBottom: activeTab === 'neptune' ? '2px solid blue' : 'none',
            fontWeight: activeTab === 'neptune' ? 'bold' : 'normal',
            // Transição suave para a borda e peso da fonte
            transition: 'border-bottom 0.8s ease, font-weight 0.3s ease',          
          }}
        >
          leave earth
        </div>
      </div>

      {/* Exibição do conteúdo dependendo da aba ativa */}
      <div>
        {/* Se a aba ativa for 'earth', exibe a informação sobre a Terra */}
        {activeTab === 'earth' && (
            <div>
                <h2>Earth</h2>
                {/* Imagem da Terra */}
                <img style={{ maxWidth: '10rem' }} src="https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png" alt="Planet Earth"/>
                <p>Safe at home. This is your default choice. The place you were born.</p> 
                <p>How about trying another atmosphere for a change?</p>
            </div>
        )}
        {/* Se a aba ativa for 'neptune', exibe a informação sobre Netuno */}
        {activeTab === 'neptune' && (
            <div>
                  <h2>Wow!</h2>
              <div style={{ fontFamily:'Orbitron'}}>
                  {/* Imagem de Netuno */}
                  <img style={{ maxWidth: '10rem' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Transparent_Neptune.png/480px-Transparent_Neptune.png" alt="Planet Neptune"/>
                  {/* Descrição da experiência em Netuno */}
                  <h4 style = {{textAlign: "left" }}>
                      You went too far in your adventure and reached Neptune. <br/> 
                      It is the farthest planet from Earth in our Solar System. <br /> 
                      ... <br /> 
                      You land on Neptune's icy surface, hearing the crunch of your boots in the thick, frozen ground. <br /><br />
                      The air smells sharp, like ammonia and methane, making each breath feel cold. <br /><br />
                      Above you, <br />the sky is a mix of deep blues and greens, with big storms swirling in the distance and occasional flashes of lightning. <br /> <br />
                      You feel the weight of the planet’s thick atmosphere pressing against you, <br /><br />
                      a reminder of how far you are from Earth. <br /> Should you go back?
                  </h4>
              </div>

            </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
