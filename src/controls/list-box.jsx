import React, { useState, useRef, useEffect } from 'react';
import { ListBoxWrapper, Placeholder, ListBoxItemWrapper } from './list-box.style';
import { throttle } from '../helpers';
import PropTypes from 'prop-types';

export function ListBox({
  children,
  scrollTop,
  setScrollTop,
  selectedIndex,
  setSelectedIndex,
  itemsSource,
  renderItem,
  itemHeight,
  extraItemCount
}) {
  const [innerSelectedIndex, setInnerSelectedIndex] = useState(0);
  const [innerScrollTop, setInnerScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const containerRef = useRef(null);


  [selectedIndex, setSelectedIndex] = [selectedIndex || innerSelectedIndex, setSelectedIndex || setInnerSelectedIndex];
  [scrollTop, setScrollTop] = [scrollTop || innerScrollTop, setScrollTop || setInnerScrollTop];

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        top: scrollTop
      });
      setContainerHeight(container.offsetHeight);
    }
  }, [containerRef, scrollTop]);
  useEffect(() => {
    const onResize = () => setContainerHeight(containerRef.current.offsetHeight);
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const items = itemsSource || children;

  const { startIndex, count } = getItemsRange(getLength(items), extraItemCount, scrollTop, itemHeight, containerHeight);

  const itemElements = items.slice(startIndex, count).map((item, i) => {
    const realIndex = startIndex + i;
    return (
      <ListBoxItemWrapper key={i} offsetTop={`${realIndex * itemHeight}px`} onClick={() => setSelectedIndex(realIndex)}>
        {renderItem(item, selectedIndex === realIndex)}
      </ListBoxItemWrapper>
    );
  });

  return (
    // TODO: apply throttle function to onScroll handler.
    <ListBoxWrapper ref={containerRef} onScroll={throttle(() => setScrollTop(containerRef.current.scrollTop), 200)}>
      {/* <Placeholder scrollHeight={`${items.length * itemHeight}px`}> */}
      <Placeholder>
        {/* HACK: Hold the height of the scroll area, and palce it on top of item elements to
         * make sure it is in the lower layer of item elements, otherwise, its hit test
         * may cover item elements.
         */}
        <div
          style={{ position: 'absolute', top: `${(getLength(items) - 1) * itemHeight}px`, height: '1px', width: '1px' }}
        />

        {itemElements}
      </Placeholder>
    </ListBoxWrapper>
  );
}

function getItemsRange(itemsCount, extraItemCount, scrollTop, itemHeight, containerHeight) {
  let startIndex = Math.floor(scrollTop / itemHeight);
  let count = Math.ceil(containerHeight / itemHeight);
  extraItemCount = Math.ceil(extraItemCount);
  count = Math.min(startIndex + count + extraItemCount, itemsCount);
  startIndex = Math.max(startIndex - extraItemCount, 0);
  return { startIndex, count };
}

function getLength(list) {
  return list.length || list.size;
}

ListBox.propTypes = {
  itemHeight: PropTypes.number.isRequired,
  renderItem: PropTypes.func.isRequired,
  scrollTop: PropTypes.number,
  setScrollTop: PropTypes.func,
  selectedIndex: PropTypes.number,
  setSelectedIndex: PropTypes.func,
  itemsSource: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  extraItemCount: PropTypes.number
};

ListBox.defaultProps = {
  renderItem: data => data,
  extraItemCount: 10
};
