import { useState } from 'react';
import './App.css'
import { Card } from './components/card/Card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/CreateModal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(prev => !prev);
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData => 
          <Card key={foodData.id}
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleModalOpen}/>}
      <button onClick={handleModalOpen}>novo</button>
    </div>
  )
}
      export default App
