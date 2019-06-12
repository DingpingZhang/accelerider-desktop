import React, { useState } from 'react';
import { ListBoxWrapper } from './styles';

export function ListBox(props) {
  const [selctedIndex, setSelectedIndex] = useState(0);

  const { children, itemsSource, dataTemplate } = props;

  const items = itemsSource || children;
  const templateProvider = dataTemplate || (data => data);

  return (
    <ListBoxWrapper>
      {items.map((item, index) => (
        <div key={index} onClick={() => setSelectedIndex(index)}>
          {templateProvider(item, selctedIndex === index)}
        </div>
      ))}
    </ListBoxWrapper>
  );
}
