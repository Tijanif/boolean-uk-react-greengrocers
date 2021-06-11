import StoreItem from './StoreItem';
import CartItem from './CartItem';
import { useState } from 'react';

const MainApp = ({ storeItems }) => {
  // can we select a store item?
  const [selectedStoreItem, setSelectedStoreItem] = useState([]);

  return (
    <div>
      <header id='store'>
        <h1>Greengrocers</h1>
        <ul className='item-list store--item-list'>
          {storeItems.map((item, index) => (
            <StoreItem
              selectedStoreItem={selectedStoreItem}
              setSelectedStoreItem={setSelectedStoreItem}
              item={item}
              index={index}
            />
          ))}
        </ul>
      </header>
      <main id='cart'>
        <h2>Your Cart</h2>
        <div className='cart--item-list-container'>
          <ul className='item-list cart--item-list'>
            {storeItems.map((item, index) => (
              <CartItem item={item} index={index} />
            ))}
          </ul>
        </div>
        <div className='total-section'>
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className='total-number'>£0.00</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href='https://www.flaticon.com/authors/icongeek26'
          title='Icongeek26'
        >
          Icongeek26
        </a>
        from
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};

export default MainApp;
