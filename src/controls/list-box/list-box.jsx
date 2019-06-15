import React, { useState, useRef, useEffect } from 'react';
import { ListBoxWrapper, Placeholder, ListBoxItemWrapper } from './styles';
import PropTypes from 'prop-types';

export function ListBox({ children, itemsSource, renderItem, selectedItem, itemHeight }) {
  const items = itemsSource || children;
  const itemRenderer = renderItem || (data => data);
  const initialSelectedIndex = items.indexOf(selectedItem);

  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex !== -1 ? initialSelectedIndex : 0);
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setScrollTop(container.scrollTop);
      setContainerHeight(container.offsetHeight);
    }
  }, [containerRef]);
  useEffect(() => {
    const onResize = () => setContainerHeight(containerRef.current.offsetHeight);
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const itemElements = items
    .map((item, i) => ({
      element: item,
      index: i
    }))
    .filter((_, i) => canVisibleItem(i, scrollTop, containerHeight, itemHeight))
    .map((item, i) => (
      <ListBoxItemWrapper
        key={i}
        offsetTop={`${item.index * itemHeight}px`}
        onClick={() => setSelectedIndex(item.index)}
      >
        {itemRenderer(item.element, selectedIndex === item.index)}
      </ListBoxItemWrapper>
    ));

  return (
    <ListBoxWrapper ref={containerRef} onScroll={() => setScrollTop(containerRef.current.scrollTop)}>
      {/* <Placeholder scrollHeight={`${items.length * itemHeight}px`}> */}
      <Placeholder>
        {/* HACK: Hold the height of the scroll area, and palce it on top of item elements to
         * make sure it is in the lower layer of item elements, otherwise, its hit test
         * may cover item elements.
         */}
        <div
          style={{ position: 'absolute', top: `${(items.length - 1) * itemHeight}px`, height: '1px', width: '1px' }}
        />

        {itemElements}
      </Placeholder>
    </ListBoxWrapper>
  );
}

function canVisibleItem(i, scrollTop, containerHeight, itemHeight, scrollMargion = 2) {
  const offsetTop = i * itemHeight;
  return offsetTop + itemHeight > scrollTop && offsetTop <= scrollTop + containerHeight + scrollMargion * itemHeight;
}

ListBox.propTypes = {
  itemHeight: PropTypes.number.isRequired,
  renderItem: PropTypes.func.isRequired,
  itemsSource: PropTypes.array,
  selectedItem: PropTypes.any
};

ListBox.defalutProps = {
  itemsSource: []
};
