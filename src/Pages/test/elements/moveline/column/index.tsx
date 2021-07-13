import './index.css';

const ColumnMoveLine = () => {
  const onDragEvent = (e : React.DragEvent) => {
    const ghostEle = document.createElement('div');
    ghostEle.innerHTML = 'I am flying';
    e.dataTransfer.setDragImage(ghostEle, 0, 0);
    e.preventDefault();
  };

  return (
    <div className={'a'} draggable={true}>
      <div className={'b'}>
      </div>
      <div onDrag={onDragEvent} className={'d'} draggable={true}>
      </div>
      <div className={'c'}>
      </div>
    </div>
  );
};

export default ColumnMoveLine;
