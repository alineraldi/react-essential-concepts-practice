// 10. Componentes com Tabs Navegáveis: Crie uma interface de “tabs” (abas) onde cada aba exibe um conteúdo diferente ao ser clicada (por exemplo, uma aba “Sobre” e uma aba “Contato”). Use useState para controlar qual aba está ativa e renderize o conteúdo de acordo com a aba selecionada. Desafio: Adicione um efeito visual que destaque a aba ativa.

import { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState('earth');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div
          onClick={() => handleTabClick('earth')}
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            borderBottom: activeTab === 'earth' ? '2px solid blue' : 'none',
            fontWeight: activeTab === 'earth' ? 'bold' : 'normal',
            transition: 'border-bottom 0.8s ease, font-weight 0.3s ease',
        }}
        >
          home
        </div>
        <div
          onClick={() => handleTabClick('neptune')}
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            borderBottom: activeTab === 'neptune' ? '2px solid blue' : 'none',
            fontWeight: activeTab === 'neptune' ? 'bold' : 'normal',
            transition: 'border-bottom 0.8s ease, font-weight 0.3s ease',          
        }}
        >
          leave earth
        </div>
      </div>

      <div>
        {activeTab === 'earth' && (
            <div>
                <h2>Earth</h2>
                <img style={{ maxWidth: '10rem' }} src="https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png" alt="Planet Earth"/>
                <p>This is your default choice. The place you were born.</p> 
                <p>How about trying another atmosphere for a change?</p>
                </div>
        )}
        {activeTab === 'neptune' && (
            <div>
                <h2>Neptune</h2>
                <img style={{ maxWidth: '10rem' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Transparent_Neptune.png/480px-Transparent_Neptune.png" alt="Planet Neptune"/>
                <p>Damn! You went too far in your adventure and reached Neptune.</p>
                <p>It is the farthest planet from Earth in our Solar System.</p>
                <p><i>What an adventure.</i></p>
                </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;