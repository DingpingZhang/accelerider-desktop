import React, { useState, useRef, useEffect } from 'react';
import { ListBoxWrapper, Placeholder, ListBoxItemWrapper } from './list-box.style';
import PropTypes from 'prop-types';

export function ListBox({ children, selectedIndex, setSelectedIndex, itemsSource, renderItem, itemHeight }) {
  const items = itemsSource || children;

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

  const startIndex = Math.floor(scrollTop / itemHeight);
  const count = Math.ceil(containerHeight / itemHeight + 2); // 2 is scroll margin.
  const itemElements = takeArray(items, startIndex, count).map((item, i) => {
    const realIndex = startIndex + i;
    return (
      <ListBoxItemWrapper key={i} offsetTop={`${realIndex * itemHeight}px`} onClick={() => setSelectedIndex(realIndex)}>
        {renderItem(item, selectedIndex === realIndex)}
      </ListBoxItemWrapper>
    );
  });

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

function takeArray(array, start, count) {
  const result = [];

  for (let i = start; i < array.length && i < start + count; i++) {
    result.push(array[i]);
  }

  return result;
}

ListBox.propTypes = {
  itemHeight: PropTypes.number.isRequired,
  renderItem: PropTypes.func.isRequired,
  itemsSource: PropTypes.array,
  selectedIndex: PropTypes.number.isRequired,
  setSelectedIndex: PropTypes.func.isRequired
};

ListBox.defalutProps = {
  renderItem: data => data
};
