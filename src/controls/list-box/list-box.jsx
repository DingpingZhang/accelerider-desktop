import React, { useState } from 'react';
import { ListBoxWrapper } from './styles';

export function ListBox(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { children, itemsSource, renderItem, selectedItem } = props;

  const items = itemsSource || children;
  const itemRenderer = renderItem || (data => data);
  const index = items.indexOf(selectedItem);
  if (index !== -1) setSelectedIndex(index);

  return (
    <ListBoxWrapper>
      {items.map((item, index) => (
        <div key={index} onClick={() => setSelectedIndex(index)}>
          {itemRenderer(item, selectedIndex === index)}
        </div>
      ))}
    </ListBoxWrapper>
  );
}
