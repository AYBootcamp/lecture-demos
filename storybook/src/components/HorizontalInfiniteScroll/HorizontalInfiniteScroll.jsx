import styled from "@emotion/styled";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";
import React, { ReactNode, useRef, useState } from "react";

const ScrollPanel = styled.div`
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
`;

const ScrollButton = styled(IconButton)`
  position: relative;
  left: ${(props) => (props.isLeft ? `5vw` : `90vw`)};
  top: ${(props) => `-${props.itemSize / 2}px}`};
`;

const HorizontalInfiniteScroll = ({ itemSize, children }) => {
  const containerRef = useRef(null);

  const [offset, setOffset] = useState(0);

  const handleScroll = (direction) => {
    const { scrollWidth, clientWidth } = containerRef.current;

    let newOffset;

    const displayCountFloor = Math.floor(clientWidth / itemSize);
    const displayCountCeil = Math.ceil(clientWidth / itemSize);

    if (direction === "LEFT") {
      // minus current displaying width
      newOffset =
        offset <= 0
          ? scrollWidth - displayCountFloor * itemSize
          : offset - itemSize;
    } else {
      newOffset =
        // minus current displaying width
        offset >= scrollWidth - displayCountCeil * itemSize
          ? 0
          : offset + itemSize;
    }
    setOffset(newOffset);
    containerRef.current.scrollTo({
      left: newOffset,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ width: "100vw" }}>
      <ScrollPanel ref={containerRef}>
        <Wrapper>{children}</Wrapper>
      </ScrollPanel>
      <ScrollButton
        isLeft={true}
        itemSize={itemSize}
        onClick={() => handleScroll("LEFT")}
      >
        <ArrowBack />
      </ScrollButton>
      <ScrollButton itemSize={itemSize} onClick={() => handleScroll("RIGHT")}>
        <ArrowForward />
      </ScrollButton>
    </div>
  );
};

HorizontalInfiniteScroll.propTypes = {
  itemSize: PropTypes.number,
  children: PropTypes.any,
};

export default HorizontalInfiniteScroll;
