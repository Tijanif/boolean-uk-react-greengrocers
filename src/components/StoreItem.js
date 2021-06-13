const StoreItem = ({
  item,
  index,
  selectedStoreItem,
  setSelectedStoreItem,
}) => {
  return (
    <li key={index}>
      <div className='store--item-icon'>
        <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
      </div>
      <button onClick={() => updatedstoreItems(item)}>Add to cart</button>
    </li>
  );
};

export default StoreItem;
