import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { getMensProducts } from "../Redux/Product/Product.action";

const Pagination = ({
  setCurrentPage,
  handlePage,
  currentPage,
  totalPages,
}) => {
  

  totalPages = Math.ceil(+totalPages / 10);

  let buttonArr = [];
  for (let i = 0; i < +totalPages; i++) {
    buttonArr.push(i + 1);
  }

  const handlePageChange = (page) => {
    handlePage(page);
  };

  console.log(currentPage ,typeof totalPages)
  return (
    <div>
      Pagination
      <Box mb={"1rem"}>
        <Button w={"1rem"} fontSize={{sm:"0.7rem"}}
          isDisabled={currentPage === 1}
          onClick={() => handlePageChange(-1)}
        >
          Prev
        </Button>
        {buttonArr.map((btn, i) => (
          <Button display={{base:"none",md:"inline-block"}} w={"1rem"} fontSize={{sm:"0.7rem" }} onClick={() => setCurrentPage(btn)} m={"0 0.2rem"} key={i}>
            {btn}
          </Button>
        ))}
        <Button display={{md:"none",base:"inline-block"}} isDisabled>{currentPage}</Button>
        <Button  w={"1rem"} fontSize={{sm:"0.7rem"}} isDisabled={currentPage === totalPages } onClick={() => handlePageChange(1)}>
          Next
        </Button>
      </Box>
    </div>
  );
};

export default Pagination;
